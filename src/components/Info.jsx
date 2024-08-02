import cat from '../assets/cat.jpg'
import mail from '../assets/mail.svg'
import linkedin from '../assets/linkedin.svg'

export default function Info() {
    return (
        <>
            <img src={cat} className="portrait" />
            <h2 className="title">Sviatoslav Zubar</h2>
            <p className="subtitle">Frontend Developer</p>
            <p className="website">example.org</p>
            <div className="buttons">
                <a href="mailto:email@example.org">
                    <button type="button" className="button email-button">
                        <img src={mail} className="icon" />
                        <span>Email</span>
                    </button>
                </a>
                <a href="https://linkedin.com">
                    <button type="button" className="button linkedin-button">
                        <img src={linkedin} className="icon" />
                        <span>LinkedIn</span>
                    </button>
                </a>
            </div>
        </>
    )
}