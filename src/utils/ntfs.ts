import { 
  SystemProgram, 
  TransactionInstruction, 
  Connection, 
  PublicKey, 
  SYSVAR_RENT_PUBKEY
} from '@solana/web3.js'
import BN from "bn.js"
import { deserialize, serialize } from 'borsh'
import {
  update_authority_key,
  fee_receiver_key1,
  programId,
  NFTINTERFACEPREFIX,
  TOKENPREFIX,
} from './constant'

class MintArgs {
  instruction = new BN(2)
  price
  new_token_id
  constructor(args: {
    price: number,
    new_token_id: number,
  }) {
    this.price = new BN(args.price * (10 ** 9))
    this.new_token_id = args.new_token_id    
  }
}

class MythicMintArgs {
  instruction = new BN(3)
  constructor() {
  }
}

class NFTInterface {
  max_supply
  total_supply 
  total_mythic_supply
  update_authority_key
  constructor(args: {
    max_supply: number,
    total_supply: number,
    total_mythic_supply: number,
    update_authority_key: number,
    fee_receiver_key: number,
  }) {
      this.max_supply = args.max_supply
      this.total_supply = args.total_supply
      this.total_mythic_supply = args.total_mythic_supply
      this.update_authority_key = args.update_authority_key
  }
}

const NFT_INTERFACE_SCHEMA = new Map<any, any>([
  [
    MintArgs,
    {
      kind: 'struct',
      fields: [
        ['instruction', 'u8'],
        ['price', 'u64'],
        ['new_token_id', 'u16']
      ],
    },
  ],
  [
    MythicMintArgs,
    {
      kind: 'struct',
      fields: [
        ['instruction', 'u8'],
      ],
    },
  ],
  [
    NFTInterface,
    {
      kind:'struct',
      fields: [
        ['max_supply', 'u16'],
        ['total_supply', 'u16'],
        ['total_mythic_supply', 'u8'],
        ['update_authority_key', 'u256'],
      ]
    }
  ],
])

export const mintNFTS = async(
  wallet: any,
  price: number,
  new_token_id: number,
) => {

  const nft_interface_account_key = await PublicKey.findProgramAddress(
      [
          Buffer.from(NFTINTERFACEPREFIX),
          programId.toBuffer(),
          update_authority_key.toBuffer(),
      ],
      programId
  )

  const new_token_id_account = await PublicKey.findProgramAddress(
    [
        Buffer.from(TOKENPREFIX),
        programId.toBuffer(),
        update_authority_key.toBuffer(),
        Buffer.from(new_token_id.toString()),
    ],
    programId
  )

  const mvalue = new MintArgs({price, new_token_id})
  const mtxnData = Buffer.from(serialize(NFT_INTERFACE_SCHEMA, mvalue))

  const minstruction = new TransactionInstruction({
      keys: [
          {pubkey:new_token_id_account[0], isSigner: false, isWritable: true},
          {pubkey:nft_interface_account_key[0], isSigner: false, isWritable: true},
          {pubkey:update_authority_key, isSigner: false, isWritable: false},
          {pubkey:fee_receiver_key1, isSigner: false, isWritable: true},
          {pubkey:wallet.publicKey, isSigner: true, isWritable: true},
          {pubkey:SYSVAR_RENT_PUBKEY, isSigner: false, isWritable: false},
          {pubkey:SystemProgram.programId, isSigner: false, isWritable: false},
      ],
      programId: programId,
      data: mtxnData,
  })
  return minstruction
}

export const mythicMintNFTS = async(
  wallet: any,
) => {

  const nft_interface_account_key = await PublicKey.findProgramAddress(
      [
          Buffer.from(NFTINTERFACEPREFIX),
          programId.toBuffer(),
          update_authority_key.toBuffer(),
      ],
      programId
  )

  const mvalue = new MythicMintArgs()
  const mtxnData = Buffer.from(serialize(NFT_INTERFACE_SCHEMA, mvalue))

  const minstruction = new TransactionInstruction({
      keys: [
          {pubkey:nft_interface_account_key[0], isSigner: false, isWritable: true},
          {pubkey:update_authority_key, isSigner: false, isWritable: false},
      ],
      programId: programId,
      data: mtxnData,
  })
  return minstruction
}

export const getNFTS = async(
  conn: Connection,
) => {
  const nft_interface_account_key = await PublicKey.findProgramAddress(
    [
        Buffer.from(NFTINTERFACEPREFIX),
        programId.toBuffer(),
        update_authority_key.toBuffer(),
    ],
    programId
  )
  const accountInfo = await conn.getAccountInfo(nft_interface_account_key[0])
  if (accountInfo === null) {
    throw 'Error: cannot find the account'
  }
  const ni = deserialize(
      NFT_INTERFACE_SCHEMA,
      NFTInterface,
      accountInfo.data,
  )
  return ni
} 


export const getTOKEN = async(
  conn: Connection,
  new_token_id: number,
) => {
  const new_token_id_account = await PublicKey.findProgramAddress(
    [
        Buffer.from(TOKENPREFIX),
        programId.toBuffer(),
        update_authority_key.toBuffer(),
        Buffer.from(new_token_id.toString()),
    ],
    programId
  )
  const accountInfo = await conn.getAccountInfo(new_token_id_account[0])
  if (accountInfo === null) {
    return true
  }
  return false
} 

export const getNFTSForOwner = async(
  conn: Connection,
  wallet: any
) => {
  const nft_interface_account_key = await PublicKey.findProgramAddress(
    [
        Buffer.from(NFTINTERFACEPREFIX),
        programId.toBuffer(),
        wallet.publicKey.toBuffer(),
    ],
    programId
  )
  const accountInfo = await conn.getAccountInfo(nft_interface_account_key[0])
  if (accountInfo === null) {
    throw 'Error: cannot find the account'
  }
  const ni = deserialize(
      NFT_INTERFACE_SCHEMA,
      NFTInterface,
      accountInfo.data,
  )
  return ni
} 

export const getBalanceOf = async( 
  conn: Connection,
  wallet: PublicKey,
) => {
  const balanceinfo = await conn.getBalance(wallet)
  return balanceinfo
} 