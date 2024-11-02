"use client";

import Link from "next/link";
import "../css/header.css";
import Image from "next/image";
import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <nav className={menuOpen ? 'active' : ''}>
                <div className="logo">
                    <Image
                        src="/images.png"
                        alt="logo"
                        width={40}
                        height={45}
                        objectFit="cover"
                    />
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <ul className={menuOpen ? "show" : ""}>
                    <li><Link href="#Home">Home</Link></li>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#service">Our service</Link></li>
                    <li><Link href="#review">Review</Link></li>
                    <li><Link href="#contact">Contact</Link></li>
                </ul>
            </nav>
            <div
                className="bg-pic"
                style={{
                    backgroundImage: "url('/8d78e9c5f3e153f82e78ef62f6bedb83.jpg')",
                }}
            >
                <div className="overlay-text">
                    <h2>Find Your Dream Home with Us</h2>
                    <p>Discover exceptional properties tailored to your lifestyle. Your perfect home awaits!</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
