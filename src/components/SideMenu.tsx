import { useState } from "react";
import { navLinks } from "../consts/nav-links";

const SideMenu = () => {
    const [activeLink, setActiveLink] = useState("Home");

    return (
        <aside className="menu side-menu is-fixed-top">
            <div className="section side-menu-section">
                {navLinks.map((item) => {
                    if (item.link) {
                        return (
                            <ul key={item.link} className="menu-list">
                                <li>
                                    <a
                                        href={item.link}
                                        className={
                                            activeLink === item.name
                                                ? "is-active"
                                                : ""
                                        }
                                        onClick={() => setActiveLink(item.name)}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            </ul>
                        );
                    } else if (item.links) {
                        return (
                            <>
                                <p
                                    className="menu-label"
                                    key={item.link + "-label"}
                                >
                                    {item.name}
                                </p>
                                <ul className="menu-list" key={item.link}>
                                    {item.links.map((link) => {
                                        return (
                                            <li key={link.link}>
                                                <a
                                                    href={link.link}
                                                    className={
                                                        activeLink === link.name
                                                            ? "is-active"
                                                            : ""
                                                    }
                                                    onClick={() =>
                                                        setActiveLink(link.name)
                                                    }
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </>
                        );
                    }
                })}
            </div>
        </aside>
    );
};

export default SideMenu;
