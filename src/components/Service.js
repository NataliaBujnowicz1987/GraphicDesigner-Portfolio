import React from 'react';

import '../styles/Service.css';

const Service = () => {
    return (
        <>
            <h2 className="section__title section__title--services">What I do?</h2>
            <div className="services">

                <div className="service">
                    <h3>Graphic Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
                </div>

                <div className="service">
                    <h3>Illustrations</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
                </div>

                <div className="service">
                    <h3>Branding</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
                </div>

            </div>
            <a href="#work" className="btn">See My Work</a>
        </>
    )
}

export default Service;