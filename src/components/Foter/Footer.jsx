import "./Footer.css"
import { TiSocialTwitter } from "react-icons/ti"
import { TiSocialYoutube } from "react-icons/ti"
import { AiFillTikTok } from "react-icons/ai"
function Footer() {
  return (
    <>
      <footer>
        <p className="footer-text">Napravio Jakub Ahmetovic</p>
        <div className="fcla">
          <TiSocialTwitter />
          <TiSocialYoutube />
          <AiFillTikTok />
        </div>
      </footer>
    </>
  )
}
export default Footer
