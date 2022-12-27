import React from "react";
import { useState } from "react";
import "./qualification.css"

const Qualification = () => {

     const [toggleState, setToggleState] = useState(0);


     const toggleTab = (index) => {
          setToggleState(index);
     }

     return(
          <section className="qualification section">
               <h2 className="section_title">Qualificações</h2>
               <span className="section_subtitle">Minha Mini Jornada Pessoal</span>

               <div className="qualification_container container">
                    <div className="qualification_tabs">
                         <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(1)}>
                              <i class="uil uil-graduation-cap qualification_icon"></i> Formação
                         </div>

                         <div className={toggleState === 2 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(2)}>
                              <i className="uil uil-briefcase-alt qualification_icon"></i> Experiencia
                         </div>
                    </div>

                    <div className="qualification_sections">
                         <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                              <div className="qualification_data">
                                   <div>
                                        <h3 className="qualification_title">Eletromecanica</h3>
                                        <span className="qualification_subtitle">Angola - Instituto</span>
                                        <div className="qualification_calender">
                                             <i className="uil uil-calendar-alt"></i> 2015 - 2019
                                        </div>
                                   </div>

                                   <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                   </div>
                              </div>

                              <div className="qualification_data">
                                   <div></div>

                                   <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                   </div>

                                   <div>
                                        <h3 className="qualification_title">Desenvolvimento Web</h3>
                                        <span className="qualification_subtitle">Brasil - Instituto</span>
                                        <div className="qualification_calender">
                                             <i className="uil uil-calendar-alt"></i> 2020 - Presente
                                        </div>
                                   </div>

                                   
                              </div>

                              <div className="qualification_data">
                                   <div>
                                        <h3 className="qualification_title">Engenharia Eletrica</h3>
                                        <span className="qualification_subtitle">Brasil - Universidade</span>
                                        <div className="qualification_calender">
                                             <i className="uil uil-calendar-alt"></i> 2020 - Presente
                                        </div>
                                   </div>

                                   <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                   </div>
                              </div>

                              <div className="qualification_data">
                                   <div></div>

                                   <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                   </div>

                                   <div>
                                        <h3 className="qualification_title">Ux/ Ui</h3>
                                        <span className="qualification_subtitle">Brasil - Instituto</span>
                                        <div className="qualification_calender">
                                             <i className="uil uil-calendar-alt"></i> 2022 - Presente
                                        </div>
                                   </div>

                                   
                              </div>
                         </div>

                         <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                              <div className="qualification_data">
                                   <div>
                                        <h3 className="qualification_title">Produto Designer</h3>
                                        <span className="qualification_subtitle">Angola </span>
                                        <div className="qualification_calender">
                                             <i className="uil uil-calendar-alt"></i> 2018 - 2021
                                        </div>
                                   </div>

                                   <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                   </div>
                              </div>

                              <div className="qualification_data">
                                   <div></div>

                                   <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                   </div>

                                   <div>
                                        <h3 className="qualification_title">Gerenciador de Banco de Dados</h3>
                                        <span className="qualification_subtitle">ENG DTP & Multimídia - Brasil </span>
                                        <div className="qualification_calender">
                                             <i className="uil uil-calendar-alt"></i> 2021 - 2022
                                        </div>
                                   </div>

                                   
                              </div>

                              <div className="qualification_data">
                                   <div>
                                        <h3 className="qualification_title">Web Designer</h3>
                                        <span className="qualification_subtitle">Figma- Brasil </span>
                                        <div className="qualification_calender">
                                             <i className="uil uil-calendar-alt"></i> 2021 - Presente
                                        </div>
                                   </div>

                                   <div>
                                        <span className="qualification_rounder"></span>
                                        <span className="qualification_line"></span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Qualification