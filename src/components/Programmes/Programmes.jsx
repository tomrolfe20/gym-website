import React from "react";
import "./Programmes.css";
import { programmesData } from "../../data/programmesData.js";
import RightArrow from '../../assets/rightArrow.png'

const Programmes = () => {
  return (
    <div className='programmes' id='Programmes'>
      {/* Header */}
      <div className='programmes-header'>
        <span className='stroke-text'>Explore our</span>
        <span>Programmes</span>
        <span className='stroke-text'>To shape you</span>
      </div>

      <div className='programme-categories'>
        {programmesData.map((programme) => (
          <div className='category'>
            {programme.image}
            <span>{programme.heading}</span>
            <span>{programme.details}</span>
            <div className='join-now'>
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programmes;
