import React from "react";
import "./testemunhos.css"
import { Data } from "./Data";

const Testemunhos = () => {
     return(
          <section className="testemunho container section">
                <h2 className="section_title">Meus Clientes</h2>
               <span className="section_subtitle">Testemunho</span>

               <div className="testemunho_container">
                    {Data.map(({id, image, title, description }) => {
                         return(
                              <div className="testemunbo_card" key={id}>
                                   <img src="{image}" alt="" className="testemunho_img" />

                                   <h3 className="testemunho_name">{title}</h3>
                                   <p className="testemunho_description">{description}</p>

                              </div>
                         )
                    })}
               </div>
          </section>
     )
}

export default Testemunhos;