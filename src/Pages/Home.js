import React from 'react';
import About from '../Components/About';
import Banner from '../Components/Banner';
import Blogs from '../Components/Blogs';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import Projects from '../Components/Projects';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <About/>
            <Projects/>
            <Blogs/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;