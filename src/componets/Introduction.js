import React from "react";
import './introduction.css';

const Introduction = () => (
    <section id="introduction">
        <h2>Introduction</h2>
        {/* #Import a Portolio Image */}
        <img src={`${process.env.PUBLIC_URL}/selfie.jpeg`} alt="selfie" className="profile-image" />
        {/* #Summary of myself */}
        <p> Hi! My name is Hailey Verdone. I am a Senior at Cal State Fullerton majoring in Computer Science. I will be planning to graduate in December of 2024. Currently Interested in Internships!</p>
    </section>
);

export default Introduction;
