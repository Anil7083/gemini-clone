import React from "react";
import './landing.css'
import { Link } from "react-router-dom";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebase";
import { assets } from "../assets/assets";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const LandingPage = () => {
    const signupwithGoogle = () => {
        signInWithPopup(auth, googleProvider)
    }

    return (
        <div className="main1">
            <div className="nav1">
                <Link className="logo1">Gemini</Link>

                <nav className="navbar1">
                    <Link className="faq1">FAQ</Link>
                    <button className="btn1" onClick={signupwithGoogle}>Sign in<img className="google" src={assets.google} alt=""/></button>
                </nav>
            </div>
            <div className="cont1">
                <h1 className="h1">Gemini</h1>
                <p id="p1">Supercharge your creativity and productivity</p>
                <p id="p2">Chat to start writing, planning, learning and more with Google AI</p>
                <button id="btn2" className="btn1" onClick={signupwithGoogle}>Sign in<img className="google" src={assets.google} alt=""/></button>
                <div className="img">
                    <img src={assets.image1} alt="" />
                </div>
            </div>
        </div>

    )
}

export default LandingPage;