import twitter from "../assets/social-twitter.svg"
import facebook from "../assets/social-facebook.svg"
import instagram from "../assets/social-instagram.svg"
import github from "../assets/social-github.svg"

export default function Footer() {
    return (
        <div className="footer">
            <div className="socials">
                <a href="x.com"><img src={twitter} /></a>
                <a href="facebook.com"><img src={facebook} /></a>
                <a href="instagram.com"><img src={instagram} /></a>
                <a href="github.com"><img src={github} /></a>
            </div>
        </div>
    )
}