import React from 'react'
import "./HomeBanner.css"
function HomeBanner() {
  return (
    <div className="section-padding home__banner pb-0 pt-0">
         <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="main__heading">
                        <h3>Nous réunissons experts du monde entier et organisations en Afrique</h3>
                    </div>
                    <div className="hbip__center__mobile d-block d-md-none">
                    <div className="hbip__center">
                            <div className="hbip__img__part">
                                <img src="/img/banner.png" />
                            </div>
                        </div>
                    </div>
                    <div className="hb__img__part">
                        <div className="hbip__left">
                            <div className="heading">
                                <h3>Organisations en Afrique</h3>
                            </div>
                            <div className="content">
                                <p>Vous êtes une entreprise privée ou publique basée en Afrique et vous avez du mal à recruter des profils expérimentés? Vous êtes une start-up africaine et vous souhaitez faire appel aux services d'un prestataire externe? Vous recherchez une expertise spécifique pour réaliser un futur projet?</p>
                                <p>Grâce à son réseau, PANDA vous aide à trouver les experts dont vous avez besoin!</p>
                            </div>
                        </div>
                        <div className="hbip__center d-none d-md-block">
                            <div className="hbip__img__part">
                                <img src="/img/banner.png" />
                            </div>
                        </div>
                        <div className="hbip__right">
                        <div className="heading">
                                <h3>Experts </h3>
                            </div>
                            <div className="content">
                               <p>Vous êtes un professionnel expérimenté et vous planifiez de partir travailler en Afrique? Vous vous rendez souvent sur le continent africain pour des raisons professionnelles et vous souhaitez étendre votre réseau? Vous souhaitez partager votre expertise avec des organisations africaines sans vous déplacer?</p>
                               <p>PANDA est la plateforme de networking des experts pour la réalisation de leurs projets professionnels sur le continent africain! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    </div>
  )
}

export default HomeBanner