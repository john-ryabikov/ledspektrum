import CallBack from "../UI/CallBack"
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Header() {
  return (
    <header className="header">
        <div className="header__cont">
            <a className="header__logo" href="/">
                <img className="header__logo-icon" src="img/Header/logo.svg" alt="LEDSPECTRUM" />
            </a>
            <nav className="header__nav">
                <AnchorLink className="header__nav-link" href="#products">О продукции</AnchorLink>
                <AnchorLink className="header__nav-link" href="#tech">Тех. описание</AnchorLink>
                <AnchorLink className="header__nav-link" href="#content">Галерея</AnchorLink>
                <AnchorLink className="header__nav-link" href="#install">Установка</AnchorLink>
                <AnchorLink className="header__nav-link" href="#cash">Оплата и доставка</AnchorLink>
            </nav>
            <CallBack/>
        </div>
    </header>
  )
}
