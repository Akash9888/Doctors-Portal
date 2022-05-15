import footer from "../assets/images/footer.png";

const Footer = () => {
    return (
        <footer>
            <div class="footer p-10  " style={{ background: `url(${footer})` }}>
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Emergency Checkup</a>
                    <a class="link link-hover">Monthly Checkup</a>
                    <a class="link link-hover">Weekly Checkup</a>
                    <a class="link link-hover">deleniti Checkup</a>
                </div>
                <div>
                    <span class="footer-title">Our Health</span>
                    <a class="link link-hover">Cavity Filling</a>
                    <a class="link link-hover">Teath Whitening</a>
                    <a class="link link-hover">Fluoride Treatment</a>
                </div>
                <div>
                    <span class="footer-title">Our Address</span>
                    <p class="">New York - 101010 Hudson</p>
                </div>
            </div>
            <div className="text-center">
                <p>Copyright © 2022 - All right reserved by Doctors Portal</p>
            </div>
        </footer>
    );
};

export default Footer;
