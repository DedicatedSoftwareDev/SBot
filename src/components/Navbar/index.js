function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="logo-wrapper valign">
            <div className="logo">
                <a href="index.html">
                    <h2>123</h2>
                </a>
            </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
                <li className="">
                    <div className="butn-light"><a href="https://discord.gg/SvVMAQRFVf" target="_blank"><span>Discord</span></a></div>
                </li>
                <li>
                    <div className="butn-light"><a href="https://twitter.com/SolanaBeachBots" target="_blank"><span>Twitter</span></a></div>
                </li>
            </ul>
        </div>
        <div className="butn-lightt">
            <a id="walletButton">
                <span>
                  "Connect Walle"
                </span>
            </a>
        </div>
    </nav>
  )
}

export default Navbar