import React from "react";
import ContactForm from "./ContactForm";
import HomeAppoinment from "./HomeAppoinment";
import HomeBanner from "./HomeBanner";
import HomeBannerBottom from "./HomeBannerBottom";
import Info from "./Info";
import Services from "./Services";
import Testomonial from "./Testomonial";

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <Info />
            <Services />
            <HomeBannerBottom />
            <HomeAppoinment />
            <Testomonial />
            <ContactForm />
        </div>
    );
};

export default Home;
