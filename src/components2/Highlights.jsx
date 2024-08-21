
import React from 'react';
import Highlight from './ui/Highlight'; // Adjust the import path if needed
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon 
import { faBolt, faBookOpen, faTags } from "@fortawesome/free-solid-svg-icons";

const Highlights = () => {
  console.log(FontAwesomeIcon );
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            why choose <span className="purple">library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
               icon={<FontAwesomeIcon  icon={faBolt} />} 
              title="easy and quickly"
              para="Get access to the book you purchased online instantly."
            />
            <Highlight
               icon={<FontAwesomeIcon  icon={faBookOpen} />}
              title="10,000+ books"
              para="Library has books in all your favorite categories."
            />
            <Highlight
               icon={<FontAwesomeIcon  icon={faTags}/>}
              title="affordable"
              para="Get your hands on popular books for as little as $10."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
