import Wrapper from "../UI/Wrapper"
import CallBack from "../UI/CallBack"

export default function Footer() {
  return (
    <footer className="footer">
        <Wrapper>
            <div className="footer__cont">
                <div className="footer__contacts">
                    <a className="footer__logo" href="/">
                        <img className="footer__logo-icon" src="img/Header/logo.svg" alt="LEDSPECTRUM" />
                    </a>
                    <img className="footer__labeles" src="img/Footer/labeles_img.svg" alt="Labeles" />
                    <CallBack/>
                </div>
                <div className="footer__rights">
                    <p className="footer__copyrights">© Все права защищены. 2024</p>
                    <p className="footer__author">
                        <span>Дизайн и разработка: </span>
                        <a className="footer__author-link" href="https://just-site.ru" rel="noreferrer" target="_blank">Just-site.ru</a>
                    </p>
                </div>
            </div>
        </Wrapper>
    </footer>
  )
}
