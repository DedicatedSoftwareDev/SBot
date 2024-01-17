import qt1 from '../../img/solbot-about.png'

function About() {
  return (
    <section className="about section-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-6 mb-30 animate-box" data-animate-effect="fadeInUp">
                    <h2 className="section-title">About <span>S'BOTS</span></h2>
                    <p>
                        The creators of one of the largest crypto currencies on the planet, Solana (SOL) are from Solana Beach, California. Solana Beach Bot is a tribute to the town where SOL started. Solana Beach is also where our offices are and where the creator of Solana Beach Bots has lived for the last 20 years. The Solana Beach Bots encompass what it means to live in Solana Beach: chill, free-spirited, and most of all, FUN!
                    </p>
                </div>
                <div className="col-md-6 animate-box" data-animate-effect="fadeInUp">
                    <div className="about-img">
                        <div className="img"> <img src={qt1} className="img-fluid" alt="" /> </div>
                        <div className="about-img-2 about-buro3">S'BOTS</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About