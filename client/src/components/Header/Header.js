import './Header.scss'
import Logo from "../../Assets/Logo/BrainFlix-logo.svg"
import Search from "../../Assets/Icons/search.svg"
import Upload from "../../Assets/Icons/upload.svg"
import { Link } from 'react-router-dom'


function Header({ defaultPrevent }) {
    return (
        <header className="header">
            <Link to="/"><img className="header__logo" src={Logo} alt="brainflix logo"/></Link>
            <form className="header__form" onSubmit={defaultPrevent}>
                <div className="header__searchWrapper">
                    <input className="header__search" type="search" placeholder="Search"></input>
                    <img className="header__searchImg" src={Search} alt="brainflix seaerch icon"/>
                </div>
                <div className="header__form-bottom">
                    <Link to="/upload" className="header__button" type="submit" >
                        <img className="header__uploadImg" src={Upload} alt="brainflix seaerch icon"/>
                        UPLOAD
                    </Link>
                    <div className="header__mohan"></div>
                </div>
            </form>
        </header>
    )
}
export default Header