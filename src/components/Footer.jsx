import twitter from "../assets/social-twitter.svg"
import facebook from "../assets/social-facebook.svg"
import instagram from "../assets/social-instagram.svg"
import github from "../assets/social-github.svg"

export default function Footer() {
    return (
        <div className="footer">
            <div className="socials">
                <img src={twitter} />
                <img src={facebook} />
                <img src={instagram} />
                <img src={github} />
            </div>
        </div>
    )
}