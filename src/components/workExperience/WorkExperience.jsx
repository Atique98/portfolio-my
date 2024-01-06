// import React, { useRef } from "react";
// import "./WorkExperience.css";
// import ExperienceCard from "./experienceCard/ExperienceCard";
// import { WORK_EXPERIENCE } from "../../utils/data";
// import Slider from "react-slick/lib/slider";

// const WorkExperience = () => {
//   const sliderRef = useRef();

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 769,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <section className="experience-container">
//         <h5>Work Experience</h5>
//         <div className="experience-content">
//           <div className="arrow-right">
//             <span className="material-symbols-outlined">chevron_right</span>
//           </div>

//           <div className="arrow-left">
//             <span className="material-symbols-outlined">chevron_left</span>
//           </div>

//           <Slider ref={sliderRef} {...settings}>
//             {WORK_EXPERIENCE.map((item) => (
//               <ExperienceCard key={item.title} details={item} />
//             ))}
//           </Slider>
//         </div>
//       </section>
//     </>
//   );
// };

// export default WorkExperience;

import React, { useRef } from "react";
import "./WorkExperience.css";
import ExperienceCard from "./experienceCard/ExperienceCard";
import { WORK_EXPERIENCE } from "../../utils/data";
import Slider from "react-slick/lib/slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const WorkExperience = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight =() =>{
    sliderRef.current.slickNext();
  };

  const slideLeft = () =>{
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <section className="experience-container">
        <h5>Work Experience</h5>
        <div className="experience-content">
          <div className="arrow-right" onClick={slideRight}>
            
            <FontAwesomeIcon className="span" icon={  faChevronRight} />
          </div>

          <div className="arrow-left" onClick={slideLeft}>
            <FontAwesomeIcon className="span" icon={faChevronLeft}  />
          </div>

          <Slider ref={sliderRef} {...settings}>
            {WORK_EXPERIENCE.map((item) => (
              <ExperienceCard key={item.title} details={item} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
