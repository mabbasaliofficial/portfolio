import React from 'react';
import Banner from '../Components/Banner';
import Contact from '../Components/Contact';
import Navbar from '../Components/Navbar';
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;