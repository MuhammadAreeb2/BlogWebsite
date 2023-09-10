'use client'
import React, { useState } from "react";
import { Menu, X, Eye, Mail, Database, PenTool, FileText } from "react-feather";
import './navbar.css'
import Link from "next/link";
import RestrauntPage from "../../blogspost/blogs";

function Navbar() {
    const [windowOpen, setWindowOpen] = useState(false);
    const openClose = () => {
        setWindowOpen(!windowOpen);
    };

    const toggleTextVisibility = () => {
        setTimeout(() => {
            const textElements = document.querySelectorAll(".navbar__item-text");
            textElements.forEach((element) => {
                element.classList.toggle("active");
            });
        }, 400); // Adjust the delay as needed

        openClose();
    };

    return (
        <>
            <div className="flex">
                <div>
                    <nav className={`navbar-menu ${windowOpen ? "w-52" : "w-20"}`}>
                        <div className={`burger ${windowOpen ? "active" : ""}`} onClick={toggleTextVisibility}>
                            <div className="menu-icon">
                                {windowOpen ? <X className="x-icon" /> : <Menu className="menu" />}
                            </div>
                        </div>
                        <ul className="navbar__list">
                            <li
                                className={`navbar__li-box ${windowOpen ? "active" : ""}`}
                                style={{ display: "flex", alignItems: "center", paddingLeft: windowOpen ? 27 : 17 }}
                            >
                                {windowOpen ? (
                                    <span style={{ display: "flex", alignItems: "center" }}>
                                        <Link href="/component/blogspost">
                                            <div className="flex justify-center"> <div>     <FileText /> </div>
                                                <div> <span className="navbar__item-text mx-4">All Blog Post</span>
                                                </div>
                                            </div>
                                        </Link>
                                    </span>
                                ) : (
                                    <FileText />
                                )}
                            </li>
                            <li
                                className={`navbar__li-box ${windowOpen ? "active" : ""}`}
                                style={{ display: "flex", alignItems: "center", paddingLeft: windowOpen ? 27 : 17 }}
                            >
                                {windowOpen ? (
                                    <span style={{ display: "flex", alignItems: "center" }}>
                                        <Link href="/component/blogspost/addblog">
                                            <div className="flex justify-center"> <div>
                                                <PenTool /></div>
                                                <div> <span className="navbar__item-text mx-4">Write Blog</span></div>
                                            </div>
                                        </Link>
                                    </span>
                                ) : (
                                    <PenTool />
                                )}
                            </li>
                            <li
                                className={`navbar__li-box ${windowOpen ? "active" : ""}`}
                                style={{ display: "flex", alignItems: "center", paddingLeft: windowOpen ? 27 : 17 }}
                            >
                                {windowOpen ? (
                                    <span style={{ display: "flex", alignItems: "center" }}>
                                        <Link href="/component/profileveiw">
                                            <div className="flex justify-center"> <div><Eye /></div>
                                                <div>    <span className="navbar__item-text mx-4 my-4">My Profile</span></div>
                                            </div>
                                        </Link>
                                    </span>
                                ) : (
                                    <Eye />
                                )}
                            </li>
                        </ul>
                    </nav>
                </div>


            </div>
        </>
    );
}

export default Navbar;
