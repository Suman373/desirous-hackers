import React from "react";
import '../styles/Banner.css';
import travelbanner from '../assets/travelbanner.png';

import { useNavigate } from "react-router-dom";


const Banner = () => {

        const navigate = useNavigate();
    
    const handleGetstarted=(e)=>{
        e.preventDefault();
        navigate('/user');

import {AiOutlineArrowRight} from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

const Banner=()=>{
    // navigator
    const navigate = useNavigate();

    const handleRedirect=(e)=>{
        navigate('/register');

    }

    return(
        <>
        <div className="banner-container">

            <div className="title-container">
                    <h1>Travel Companion</h1>

                    <h5>A new journey awaits !</h5>
                    <button onClick={(e)=>handleGetstarted(e)}>Get started</button>

                    <h5>It's a big world out there, Go explore .</h5>
                    <button 
                    onClick={(e=> handleRedirect(e))}>
                        Get started <AiOutlineArrowRight></AiOutlineArrowRight>
                    </button>

            </div>
            <div className="image-container">
                    <img src={`${travelbanner}`}
                    alt="banner"
                    className="home-banner-image"/>
            </div>

        </div>
        </>
    );
}

export default Banner;