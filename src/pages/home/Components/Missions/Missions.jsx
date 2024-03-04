import React from 'react'
import "./Mission.css"
function Missions() {
  return (
   <div className="section-padding mission__sections">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
               <div className="main__heading">
                <h3>Missions de PANDA</h3>
               </div>
               <ul className="card__list">
                <li>
                    <span>01</span>
                    <div className="list__heading">
                        <h3>Networking</h3>
                        <p>Faciliter la mise en réseau “networking” entre les organisations situées en Afrique et les experts et entrepreneurs africains et internationaux.</p>
                    </div>
                </li>
                <li>
                    <span>02</span>
                    <div className="list__heading">
                        <h3>Partage</h3>
                        <p>Promouvoir le partage de connaissances et d’expertises. </p>
                    </div>
                </li>
                <li>
                    <span>03</span>
                    <div className="list__heading">
                        <h3>Recrutement</h3>
                        <p>Augmenter la visibilité des offres d’emploi en Afrique et faciliter le recrutement de professionnels  qualifiés.</p>
                    </div>
                </li>
                <li>
                    <span>04</span>
                    <div className="list__heading">
                        <h3>Collaborations</h3>
                        <p> Créer des opportunités de collaborations en Afrique.</p>
                    </div>
                </li>
                <li>
                    <span>05</span>
                    <div className="list__heading">
                        <h3>Evénements</h3>
                        <p>Augmenter la visibilité des évenements autour du “Business in Africa”.</p>
                    </div>
                </li>
               </ul>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Missions