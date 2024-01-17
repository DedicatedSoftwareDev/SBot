import jp from '../../img/Jp.png'
import jonathan from '../../img/Jonathan.png'
import paulina from '../../img/Paulina.png'
import savana from '../../img/Savana.png'
import sophia from '../../img/Sophia.png'
import chris from '../../img/Chris.png'

function Pro() {
  return (
    <section className="about section-padding">
        <div className="container">
            <h2 className="section-title"> Meet Our <span>S'BOTS</span> Team</h2>
            <p style={{position: 'relative'}}>
                Solana Beach Bots were created in Solana Beach by a few techies who wanted to create something cool. 
            </p>
            <div className="row">
                <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                    <div className="about-img">
                        <div className="img"> <img src={jp} className="img-fluid" alt="" /> </div>
                        <div className="about-img-3 about-buro2"><span className='teamname'>JP: </span>BINGE WATCHES FRESH-PRINCE OF BEL-AIR</div>
                    </div>
                </div>
                <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                    <div className="about-img">
                        <div className="img"> <img src={jonathan} className="img-fluid" alt="" /> </div>
                        <div className="about-img-3 about-buro2"><span className='teamname'>JONATHAN: </span>If it's not fuschia I don't want it</div>
                    </div>
                </div>
                <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                    <div className="about-img">
                        <div className="img"> <img src={savana} className="img-fluid" alt="" /> </div>
                        <div className="about-img-3 about-buro2"><span className='teamname'>Savana: </span>Purrfessional multitasker</div>
                    </div>
                </div>
                <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                    <div className="about-img">
                        <div className="img"> <img src={paulina} className="img-fluid" alt="" /> </div>
                        <div className="about-img-3 about-buro2"><span className='teamname'>Paulina: </span>LOL addict</div>
                    </div>
                </div>
                <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                    <div className="about-img">
                        <div className="img"> <img src={chris} className="img-fluid" alt="" /> </div>
                        <div className="about-img-3 about-buro2"><span className='teamname'>Chris: </span>strong coffee and movies</div>
                    </div>
                </div>
                <div className="col-md-4 animate-box" data-animate-effect="fadeInUp">
                    <div className="about-img">
                        <div className="img"> <img src={sophia} className="img-fluid" alt="" /> </div>
                        <div className="about-img-3 about-buro2"><span className='teamname'>Sophia: </span>Eats pickles in free time</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Pro