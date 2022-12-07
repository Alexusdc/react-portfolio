import React from "react";
import { capitalizeFirstLetter } from '../utils/helpers';
import photo from "../assets/images/horiseon.png";
import photo2 from '../assets/images/plant-scape.png';
import photo3 from '../assets/images/calendar-method.png';
import photo4 from '../assets/images/smart-homie.png';


function Project(props) {
  const currentCategory = {
    name: "Projects",
  };
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div>
        <img 
            src={photo}
            alt="Horiseon"
            className="img-thumbnail mx-1" />

        <img
            src={photo2}
            alt='Plant-scape'
            className="img-thumbnail mx-1" />

        <img
            src={photo3}
            alt="calendar-method"
            className="img-thumbnail mx-1" />

        <img
            src={photo4}
            alt="smart homie"
            classname="img-thumbnail mx-1" />
      </div>
    </section>
  );
}
export default Project;