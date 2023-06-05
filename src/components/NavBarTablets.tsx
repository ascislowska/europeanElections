import { useState } from "react";
import { navLinks } from "../consts/nav-links";
const NavBarTablets = () => {
    const [activeLink, setActiveLink] = useState("Home");

    return (
        <nav
            className="navbar is-fixed-top"
            role="navigation"
            aria-label="main navigation"
        >
            <div className="navbar-menu is-flex-mobile is-justify-content-flex-end">
                {navLinks.map((item) => {
                    //links without submenu
                    if (item.link) {
                        return (
                            <a
                                key={item.link}
                                href={item.link}
                                className={
                                    activeLink === item.name
                                        ? "navbar-item is-active "
                                        : "navbar-item"
                                }
                                onClick={() => setActiveLink(item.name)}
                            >
                                {item.name}
                            </a>
                        );
                    } else if (item.links) {
                        //links with submenu
                        return (
                            <div
                                className="navbar-item has-dropdown is-hoverable"
                                key={item.link}
                            >
                                <a className="navbar-link">{item.name}</a>
                                <div className="navbar-dropdown">
                                    {item.links.map((link) => {
                                        return (
                                            <a
                                                key={link.link}
                                                href={link.link}
                                                className={
                                                    activeLink === link.name
                                                        ? "navbar-item is-active"
                                                        : "navbar-item"
                                                }
                                                onClick={() =>
                                                    setActiveLink(link.name)
                                                }
                                            >
                                                {link.name}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    }
                })}
            </div>
        </nav>
    );
};

export default NavBarTablets;
