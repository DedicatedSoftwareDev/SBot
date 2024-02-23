import {
  Keypair,
  Connection,
  TransactionInstruction,
  PublicKey,
} from '@solana/web3.js';
import BN from 'bn.js'

import {
  createMetadata,
  createMasterEdition,
  Creator,
  Data,
} from './mx/metadata'

import {
  createMint,
  createAssociatedTokenAccountInstruction
} from './mx/account'

import {
  programIds,
  findProgramAddress,
} from './mx/utils'

import {
  sendTransactionWithRetry,
} from './mx/contexts/connection'

import { MintLayout, Token } from '@solana/spl-token';

import {
  mintNFTS,
  getNFTS,
  getTOKEN,
  mythicMintNFTS
} from './ntfs'
import { toast } from 'react-toastify'
import bs58 from 'bs58'

const creator_account = Keypair.fromSecretKey(bs58.decode('224128Zpov8A1AVMGC3Ys46oZEerngk24PQCpbkyBdnSS3jBS1jtbQPMJzwY3bdqyYVegYHF9eK9Vqa4vp78epY4'))
let creator1_pub = new PublicKey('YypFtbk75bFwHkSRZfsT8VDccLENme1yVuyKMC7fUrG')
export default async function mintNFT (
  connection: Connection,
  wallet: any,
){
  const ni = await getNFTS(connection)
  const tokenId = ni.total_supply
  const max_supply = ni.max_supply
  
  if( tokenId === max_supply) return "Can not mint.";
  let new_token_id = Math.floor(Math.random() * max_supply) + 1
  console.log(new_token_id)
  while (!await getTOKEN(connection, new_token_id)) {
    new_token_id = Math.floor(Math.random() * max_supply) + 1
    console.log(new_token_id)
  }
  console.log(new_token_id)
  
  let price = 0.2;
  let balance = await connection.getBalance(wallet.publicKey);
  if (balance < 0.218) {
    toast.error("Low balance");
    return;
  }
  // if(wallet.publicKey.toBase58() === fee_receiver_key1.toBase58() || wallet.publicKey.toBase58() === fee_receiver_key2.toBase58())
  //   price = 0
  const TOKEN_PROGRAM_ID = programIds().token

  const payerPublicKey = wallet.publicKey;
  const instructions: TransactionInstruction[] = [];
  const signers: Keypair[] = [creator_account];
  const mintRent = await connection.getMinimumBalanceForRentExemption(
    MintLayout.span,
  );
  // This is only temporarily owned by wallet...transferred to program by createMasterEdition below
  const mintKey = createMint(
    instructions,
    payerPublicKey!,
    mintRent,
    0,
    // Some weird bug with phantom where it's public key doesnt mesh with data encode wellff
    payerPublicKey!,
    payerPublicKey!,
    signers,
  );

  let creator0 = new Creator({address: creator_account.publicKey.toBase58(), verified: true, share: 0})
  let creator1 = new Creator({address: creator1_pub.toBase58(), verified: false, share: 100})

  const recipientKey: any = (
    await findProgramAddress(
      [
        payerPublicKey!.toBuffer(),
        programIds().token.toBuffer(),
        mintKey.toBuffer(),
      ],
      programIds().associatedToken,
    )
  )[0];

  createAssociatedTokenAccountInstruction(
    instructions,
    recipientKey,
    payerPublicKey!,
    payerPublicKey!,
    mintKey,
  );
  const metadataAccount = await createMetadata(
    new Data({
      symbol: `S'BOT`,
      name: `Solana Beach Bot #${new_token_id}` ,
      uri: `https://solanabeachbot.mypinata.cloud/ipfs/QmfP18HJtDs8PkGe41gAPzvnDLFmpGQdgDtzw3GH94UXSZ/${new_token_id}.json`, // size of url for arweave
      sellerFeeBasisPoints: 350,
      creators: [
        creator0,
        creator1,
      ],
    }),
    creator_account.publicKey!.toString(),
    mintKey!.toString(),
    payerPublicKey!.toString(),
    instructions,
    payerPublicKey!.toString(),
  );
  instructions.push(
    Token.createMintToInstruction(
      TOKEN_PROGRAM_ID,
      mintKey,
      recipientKey,
      payerPublicKey,
      [],
      1,
    ),
    
  )
  await createMasterEdition(
    new BN(0),
    mintKey.toBase58(),
    creator_account.publicKey.toBase58(),
    payerPublicKey,
    payerPublicKey,
    instructions,
  );
  const mintnftinterfaceInstruction = await mintNFTS(wallet, price, new_token_id)
  instructions.push(mintnftinterfaceInstruction)
  
  try {
    const { txid } = await sendTransactionWithRetry(
      connection,
      wallet,
      instructions,
      [...signers]
    );
    await connection.confirmTransaction(txid, 'max');
    await connection.getParsedConfirmedTransaction(txid, 'confirmed');
  } catch (error) {
    // ignore
    toast.error("User rejected the request!")
  }

  return ("true")
}

export async function mythicMintNFT (
  connection: Connection,
  wallet: any,
){
  const ni = await getNFTS(connection)
  const tokenId = ni.total_mythic_supply
  console.log(tokenId)
  let new_token_id = ""
  if( tokenId == 18) return "Can not mint.";
  if(tokenId < 4)
    new_token_id = `dev${tokenId + 1}`
  else new_token_id = `mythic${tokenId -3}`
  const TOKEN_PROGRAM_ID = programIds().token

  const payerPublicKey = wallet.publicKey;
  const instructions: TransactionInstruction[] = [];
  const signers: Keypair[] = [creator_account];
  const mintRent = await connection.getMinimumBalanceForRentExemption(
    MintLayout.span,
  );
  // This is only temporarily owned by wallet...transferred to program by createMasterEdition below
  const mintKey = createMint(
    instructions,
    payerPublicKey!,
    mintRent,
    0,
    // Some weird bug with phantom where it's public key doesnt mesh with data encode wellff
    payerPublicKey!,
    payerPublicKey!,
    signers,
  );

  let creator0 = new Creator({address: creator_account.publicKey.toBase58(), verified: true, share: 0})
  let creator1 = new Creator({address: creator1_pub.toBase58(), verified: false, share: 100})

  const recipientKey: any = (
    await findProgramAddress(
      [
        payerPublicKey!.toBuffer(),
        programIds().token.toBuffer(),
        mintKey.toBuffer(),
      ],
      programIds().associatedToken,
    )
  )[0];

  createAssociatedTokenAccountInstruction(
    instructions,
    recipientKey,
    payerPublicKey!,
    payerPublicKey!,
    mintKey,
  );
  const metadataAccount = await createMetadata(
    new Data({
      symbol: "SANYA",
      name: `Sanya #${new_token_id}` ,
      uri: `https://sanya.mypinata.cloud/ipfs/QmaWThHbeF2fG3Sp2h8AadT2hYDyNhwJJNxH5hfQvr8as2/${new_token_id}.json`, // size of url for arweave
      sellerFeeBasisPoints: 350,
      creators: [
        creator0,
        creator1,
      ],
    }),
    creator_account.publicKey!.toString(),
    mintKey!.toString(),
    payerPublicKey!.toString(),
    instructions,
    payerPublicKey!.toString(),
  );
  instructions.push(
    Token.createMintToInstruction(
      TOKEN_PROGRAM_ID,
      mintKey,
      recipientKey,
      payerPublicKey,
      [],
      1,
    ),
    
  )
  await createMasterEdition(
    new BN(0),
    mintKey.toBase58(),
    creator_account.publicKey.toBase58(),
    payerPublicKey,
    payerPublicKey,
    instructions,
  );
  const mintnftinterfaceInstruction = await mythicMintNFTS(wallet)
  instructions.push(mintnftinterfaceInstruction)
  const { txid } = await sendTransactionWithRetry(
    connection,
    wallet,
    instructions,
    [...signers]
  );



  try {
    await connection.confirmTransaction(txid, 'max');
  } catch {
    // ignore
  }

  await connection.getParsedConfirmedTransaction(txid, 'confirmed');
  return ("true")
}