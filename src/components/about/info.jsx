import React from "react";
import "./about.css"

const Info = () => {
     return(
          <div className="about_info grid">
               <div className="about_box">
               <i class='bx bx-award about_icon'></i>

                    <h3 className="about_title">Experiencia</h3>
                    <span className="about_subtitle">1 Ano</span>
               </div>
               
               <div className="about_box">
               <i class='bx bx-briefcase-alt about_icon'></i>

                    <h3 className="about_title">Areas</h3>
                    <span className="about_subtitle">Front, Back, Infra, Agil, BD</span>
               </div>

               <div className="about_box">
               <i class='bx bx-support about_icon' ></i>

                    <h3 className="about_title">Suporte</h3>
                    <span className="about_subtitle">Online 24/7</span>
               </div>
          </div>
     )
}

export default Info