import React from "react";
import { Link } from "react-router-dom";
const Explore = () => {
  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Explore more <span className="purple">books</span>
          </h2>
          <Link to="/books">
            <button className="btn">explore books</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explore;
