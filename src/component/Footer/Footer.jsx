import React from 'react'
import "./Footer.css"
function Footer() {
  return (
  <div className="section-padding footer pb-0 pt-0">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="footer__top">
                    <div className="footer__heading">
                        <h3>Rejoignez notre communauté et aidez-nous à construire la première plateforme de networking en ligne à destination du marché africain!</h3>
                    </div>
                    <div className="ft_button">
                        <a className="btn btn-default">Se connecter</a>
                        <a className="btn btn-default">Créer un compte</a>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="fb__child">
                        <div className="fb__child_heading">
                            <h3>Page d'accueil</h3>
                        </div>
                        <ul className='fb__child__list'>
                            <li>Missions de PANDA</li>
                            <li>Fonctionnalités</li>
                            <li>Découvrez les experts</li>
                            <li>Découvrez les organisations en Afrique</li>
                            <li>Offres d'emploi</li>
                            <li>Evénements à venir</li>
                            <li>Témoignages</li>
                            <li>Les fondateurs</li>
                        </ul>
                    </div>
                    <div className="fb__child">
                        <div className="fb__child_heading">
                            <h3>pour les EXPERTS</h3>
                        </div>
                        <ul className='fb__child__list'>
                            <li>Découvrez les organisations en Afrique</li>
                            <li>Offres d'emploi</li>
                            <li>Travel Map</li>
                            <li>Evénements à venir</li>
                        </ul>
                    </div>
                    <div className="fb__child">
                        <div className="fb__child_heading">
                            <h3>pour les organisations en Afrique</h3>
                        </div>
                        <ul className='fb__child__list'>
                            <li>Découvrez les experts</li>
                            <li>Travel Map</li>
                            <li>Evénements à venir</li>
                        </ul>
                    </div>
                    <div className="fb__child">
                    <div className="fb__child_heading">
                            <h3>Contact </h3>
                        </div>
                        <ul className='fb__child__list'>
                            <li>Nous contacter</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__last__bottom">
                    <div className="flb__left">
                        <img src="/img/footer-logo.png" alt="" />
                    </div>
                    <div className="flb__center">
                    © 2022 Tous droits réservés
                    </div>
                    <div className="flb__right">
                        <ul className="social__icons">
                            <li><img src="/img/Facebook Icon.png" alt="" /></li>
                            <li><img src="/img/Linkedin Icon.png" alt="" /></li>
                            <li><img src="/img/Twitter Icon.png" alt="" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Footer