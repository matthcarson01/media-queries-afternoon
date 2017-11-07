import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar'

export default function Header() {
    return (
        <header>
            <div className = "Container">
                <div className="CompanyLogo">
                    Startup Bootstrap
                </div>
                <Navbar />
            </div>
        </header>
    )
}