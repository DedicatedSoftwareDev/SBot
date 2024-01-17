import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { 
    WalletModalButton,
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui"
import { 
    getParsedNftAccountsByOwner
} from "@nfteyez/sol-rayz";
import '@solana/wallet-adapter-react-ui/styles.css'
import mainBG1 from '../../img/bg/main-bg-1.jpg'
import {useWallet, useConnection } from '@solana/wallet-adapter-react'
import onMintNFT from "../../utils/nft"

function Slider() {
    const wallet = useWallet();
    const connection = useConnection();
    
    const mint = async () => {
        let count = 0;
        const nfts = await getParsedNftAccountsByOwner({
            publicAddress: wallet.publicKey,
            connection: connection.connection,
            serialization: true
        });
        for (let i = 0; i < nfts.length ; i++) {
            if (nfts[i].data.symbol === `S'BOT`) {
                count ++;
            }
        }
        if (count >= 10) {
            toast.error("You have already minted 10 nfts.");
            return
        }
        onMintNFT(connection.connection, wallet);
    }
  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="logo-wrapper valign">
                <div className="logo">
                    <a href="index.html">
                        {/* <img src={logo} className="logo-img" alt="QTees-logo" /> */}
                        <h3 className="section-title">SOLANA BEACH BOTS</h3>
                        {/* <h2>S'BOTS</h2> */}
                    </a>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li>
                        <div className="butn-light"><a href="https://twitter.com/SolanaBeachBots" target="_blank"><span>Twitter</span></a></div>
                    </li>
                    <li className="">
                        <div className="butn-light"><a href="https://discord.gg/SvVMAQRFVf" target="_blank"><span>Discord</span></a></div>
                    </li>
                    <li>
                        <div className="btn_wallt">
                            <WalletMultiButton className='btn_wallet' />
                        </div>
                    </li>
                    <li>
                        <div className="butn-light mt-30 mb-30"><a href="#" onClick={() => wallet.connected ? mint() : toast.error("Please connect wallet first!")}><span>Mint</span></a></div>
                    </li>
                </ul>
            </div>
            <div className='mobileMenu'>
                <div className="btn_wallt">
                    <WalletMultiButton className='btn_wallett' />
                </div>
                <div className="butn-light mt-30 mb-30"><a href="#" onClick={() => wallet.connected ? mint() : toast.error("Please connect wallet first!")}><span>Mint</span></a></div>
            </div>
        </nav>
        <header className="header slider-fade">
            <div className="">
                <div className="text-right item bg-img" data-background={mainBG1}>
                    {/* <div className="v-middle caption mt-30" style={{top: '40%'}}>
                        <div className="" style={{right: '10%', position: 'relative'}}>
                            <div className="row">
                                <div className="col-md-7 offset-md-5">
                                    
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* <div className="text-right item bg-img" data-background={mainBG2}>
                    <div className="v-middle caption mt-30" style={{top: '40%'}}>
                        <div className="" style={{right: '10%', position: 'relative'}}>
                            <div className="row">
                                <div className="col-md-7 offset-md-5">
                                    <h1>Innovate NFT's</h1>
                                    <div className="butn-light mt-30 mb-30"><a href="#" onClick={() => wallet.connected ? mint() : toast.info("Plesase connect wallet first!")}><span>Mint</span></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            <div className="hero-corner"></div>
            <div className="hero-corner3"></div>
            <div className="hero-corner4"></div>

            <div className="d-md-none d-flex mt-5">
                <div className="m-auto text-center test">
                    <div className="d-inline-block">
                        <div className="butn-light"><a href="https://discord.gg/SvVMAQRFVf" target="_blank"><span>Discord</span></a></div>
                    </div>
                    <div className="d-inline-block">
                        <div className="butn-light"><a href="https://twitter.com/SolanaBeachBots" target="_blank"><span>Twitter</span></a></div>
                    </div>
                    <div className="d-inline-block">
                        <div className="btn_wallt">
                            {/* <a>
                                <span>
                                    <WalletMultiButton className='btn_wallet' />
                                </span>
                            </a> */}
                            <WalletMultiButton className='btn_wallet' />
                        </div>
                    </div>
                    <div className="d-inline-block">
                        <div className="butn-light mt-30 mb-30"><a href="#" onClick={() => wallet.connected ? mint() : toast.error("Please connect wallet first!")}><span>Mint</span></a></div>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Slider