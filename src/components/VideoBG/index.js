import backImg from '../../img/bg/sbb-main-bkg.jpg'

function VideoBG() {
  return (
    <div className="video-bg">
        {/* <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video> */}
        <img src={backImg} alt="no back" style={{height: "100%"}} />
    </div>
  )
}

export default VideoBG