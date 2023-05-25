import { FC, ReactNode } from "react";
import Footer from "./Footer";
import NavBarTablets from "./NavBarTablets";
import SideMenu from "./SideMenu";
interface Props {
    children: ReactNode;
}
const Layout: FC<Props> = ({ children }: Props) => {
    return (
        <main className="App container">
            <NavBarTablets />
            <div className="columns is-desktop is-marginless">
                <div className="column is-narrow side-menu-col">
                    <SideMenu />
                </div>
                <div className="column">{children}</div>
            </div>
            <Footer />
        </main>
    );
};

export default Layout;
