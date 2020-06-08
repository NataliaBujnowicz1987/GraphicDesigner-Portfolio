import React from 'react';
import img from '../img/img.jpg';
import '../styles/About.css';

const About = () => {
    return (
        <>
            <h2 clsssName="section__title section__title--about">Who I am?</h2>
            <p className="section__subtitle section__subtitle--about">Graphic Designer based Zermatt, Switzerland</p>
            <div className="about-me__body">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.</p>
            </div>

            <img src={img} alt="" className="about-me__img" />
        </>

    )
}

export default About; 