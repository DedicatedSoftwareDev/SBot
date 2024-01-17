import {useEffect} from 'react'

function ComingSoon() {
  useEffect(() => {
    const interval = setInterval(() => {
      countdown()
    }, 1000)
    return () => clearInterval(interval);
  })

  const countdown = () => {
    var now = new Date();
    var eventDate = new Date(2021, 11, 10);
    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currentTiime;
    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);
    h %= 24;
    m %= 60;
    s %= 60;
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
  }
  return (
    <section className="comming section-padding" id="mint">
        <div className="v-middle">
            <div className="container">
                <div className="row text-center mb-45">
                    <div className="col-md-12">
                        <h2>Coming Soon!</h2>
                    </div>
                </div>
                <div className="row text-center mb-45">
                    <div className="col-6 offset-md-2 col-md-2">
                        <div className="item">
                            <div className="down">
                                <h3 id="days">00</h3>
                            </div>
                            <div className="item-info">
                                <h6>Days</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <div className="item">
                            <div className="down">
                                <h3 id="hours">00</h3>
                            </div>
                            <div className="item-info">
                                <h6>Hours</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <div className="item">
                            <div className="down">
                                <h3 id="minutes">00</h3>
                            </div>
                            <div className="item-info">
                                <h6>Minutes</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-2">
                        <div className="item">
                            <div className="down">
                                <h3 id="seconds">00</h3>
                            </div>
                            <div className="item-info">
                                <h6>Seconds</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ComingSoon