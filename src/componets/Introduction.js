import React from "react";
import './introduction.css';

const Introduction = () => (
    <section id="introduction">
        <h2>Introduction</h2>
        <img src={'${process.env.PUBLIC_URL}/selfie.jpeg'} alt="Selfie" className="profile-image" />
        <p> Hi! My name is Hailey Verdone. I am a Senior at Cal State fullerton majoring in Computer Science.</p>
    </section>
);

export default Introduction;