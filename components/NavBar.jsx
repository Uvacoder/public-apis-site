/* eslint-disable @next/next/no-html-link-for-pages */
import Image from 'next/image'
import Link from 'next/link'
//import Logo from "../public/icon.png"
import Logo from "../public/icon-full.svg"
import style from "../styles/NavBar.module.scss"

function NavBar() {
    return (
        <nav className={style.navBar}>
            <a href="/">
                <div className={style.logo}>
                    {/* <h2>
                        Public
                    </h2>
                    <Image src={Logo} alt="Logo of APIs" width="75" height="75"/> */}
                    <Image priority={true} src={Logo} layout="fixed" alt="Logo of APIs" width="180" height="75"/>
                </div>
            </a>
            <ul className={style.navButtons}>
                <li>
                        <a>Category</a>
                </li>
                <li>
                    <Link href="https://github.com/krishna8421/public-apis-site">
                        <a>Github</a>
                    </Link>
                </li>

                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>  
        </nav>  
    )
}

export default NavBar
