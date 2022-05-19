import footer from "../assets/images/footer.png";

const Footer = () => {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: "cover",
            }}>
            <div className="footer p-10  ">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">deleniti Checkup</a>
                </div>
                <div>
                    <span className="footer-title">Our Health</span>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>
                    <a className="link link-hover">Fluoride Treatment</a>
                </div>
                <div>
                    <span className="footer-title">Our Address</span>
                    <p className="">New York - 101010 Hudson</p>
                </div>
            </div>
            <div className="text-center">
                <p>Copyright © 2022 - All right reserved by Doctors Portal</p>
            </div>
        </footer>
    );
};

export default Footer;
