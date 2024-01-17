import {useState} from 'react'
function Faq() {
    const [faqState, setFaqState] = useState(1)
  return (
    <section className="pb-90">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="section-title"><span>Faqs</span></h2>
                </div>
                <div className="col-md-12">
                    <ul className="accordion-box clearfix">
                        <li className="accordion block active-block">
                            <div className={faqState === 1 ? "acc-btn active" : "acc-btn"} onClick={() => setFaqState(1)}>Solana Beach Bots Forever</div>
                            <div className={faqState ===1 ? "acc-content current" : "acc-content"}>
                                <div className="content">
                                    <div className="text">
                                        <p className="pt-2 pb-0 mb-0">Our Beach Bots will be stored on IPFS, a decentralized data storage that backs data with sustainable and perpetual endowments, allowing holders to truly store data forever.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className={faqState === 2 ? "acc-btn active" : "acc-btn"} onClick={() => setFaqState(2)}>Blockchain & Limits</div>
                            <div className={faqState ===2 ? "acc-content current" : "acc-content"}>
                                <div className="content">
                                    <div className="text">
                                        <p className="pt-2 pb-0 mb-0">The Beach Bots are built on the Solana Blockchain. There is no limit on how many NFTs you can mint. Plus the game benefits will be shared proportionally. Take as many as you can!</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className={faqState === 3 ? "acc-btn active" : "acc-btn"} onClick={() => setFaqState(3)}>What Do I Get?</div>
                            <div className={faqState ===3 ? "acc-content current" : "acc-content"}>
                                <div className="content">
                                    <div className="text">
                                        <p className="pt-2 pb-0 mb-0">By minting a piece you will get a fully playable bot in a battle royale game. Monthly benefits for holders according to the number of pieces they own. Check Phase 4 at the Roadmap Section. </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className={faqState === 4 ? "acc-btn active" : "acc-btn"} onClick={() => setFaqState(4)}>Solana Beach Bots Launch Details</div>
                            <div className={faqState ===4 ? "acc-content current" : "acc-content"}>
                                <div className="content">
                                    <div className="text">
                                        <p className="pt-2 pb-0 mb-0"> Pre-sale launch (for whitelisted) on February 15 at 5pm PST for 0.15 SOL with a supply of 3,889 NFTS. Public launch on February 16 at 5pm PST for 0.25 SOL with a supply of 3,888 NFTs.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className={faqState === 5 ? "acc-btn active" : "acc-btn"} onClick={() => setFaqState(5)}>Hold To Earn</div>
                            <div className={faqState ===5 ? "acc-content current" : "acc-content"}>
                                <div className="content">
                                    <div className="text">
                                        <p className="pt-2 pb-0 mb-0">You will earn by simply holding. The game will be open to play for all people and will generate incomes by in-app purchases and season passes. Every month we will take the game benefits and airdrop corresponding portions to each holder wallet.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="accordion block">
                            <div className={faqState === 6 ? "acc-btn active" : "acc-btn"} onClick={() => setFaqState(6)}>Mint & Marketplaces</div>
                            <div className={faqState ===6 ? "acc-content current" : "acc-content"}>
                                <div className="content">
                                    <div className="text">
                                        <p className="pt-2 pb-0 mb-0">The pre-sale mint will be 15 February 5pm PST for whitelisted members. The whitelist will allow users to access to 3889 pieces at reduced cost. After that, the public mint will be 16 February 5pm PST. After mint, the collection will be available at https://solanart.io</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Faq