import {useMemo} from 'react';
import VideoBG from './components/VideoBG';
import Slider from './components/Slider';
import About from './components/About';
import Pro from './components/Pro';
import TimeLine from './components/TimeLine';
import Faq from './components/Faq';

import { clusterApiUrl } from '@solana/web3.js';

import { 
  ConnectionProvider, 
  WalletProvider,
} from "@solana/wallet-adapter-react/lib/index.js";

import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getLedgerWallet,
  getSolletWallet,
  getSolletExtensionWallet
} from '@solana/wallet-adapter-wallets';

import { 
  WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base/lib/adapter';

function App() {
  const network = clusterApiUrl('devnet');
  const wallets = useMemo(() => [
    getPhantomWallet(),
    getSolletWallet({network}),
    getSolflareWallet(),
    getSolletExtensionWallet({network}),
    getLedgerWallet(),
    getSlopeWallet(),
  ], [network]);

  return (
    <div>
      <ConnectionProvider endpoint={network}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider >
            <VideoBG />
            <Slider />
            <div className="content-wrapper">
              <About />
              <Pro />
              <TimeLine />
              <Faq />
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App;