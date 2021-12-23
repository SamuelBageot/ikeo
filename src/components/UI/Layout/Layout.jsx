import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main style={{ minHeight: "calc(100vh - var(--navbar-height) - var(--footer-height))" }}>{children}</main>
            <Footer />
        </>
    )
};

export default Layout;