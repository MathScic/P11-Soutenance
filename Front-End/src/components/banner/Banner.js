import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="picture">
      <section className="content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="sous-titre">No fees.</p>
        <p className="sous-titre">No minimum deposit.</p>
        <p className="sous-titre">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
};

export default Banner;
