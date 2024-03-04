import React, { useEffect } from 'react'
import './Expert.css'

function ExpertRevers() {
  
   useEffect(()=>{
    var swiper = new Swiper(".expert__slider", {
        effect: 'fade',
        fadeEffect: { crossFade: true },
        autoplay: {
            delay: 2100,
         },
        speed: 500,
        pagination: {
            el: ".expert__pagination"
        },
      });
   },[])

  return (
    <div className="section-padding expert__container overflow-hidden pt-0">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="expert__wrapper">
                    <div className="expert__right reverse">
                            <div className="expert__slider">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide">
                                        <div className="expert__quote__msg">
                                            <blockquote>“ Mon rêve était d’aller vivre en Afrique. j'ai postulé à une offre d'emploi pour le poste de web developer publiée sur PANDA et le mois suivant je commençais à travailler à Dakar! ”</blockquote>
                                            <div className="expert__quote__by reverse">Omar Ndiaye</div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div className="expert__quote__msg">
                                            <blockquote>“raza Mon rêve était d’aller vivre en Afrique. j'ai postulé à une offre d'emploi pour le poste de web developer publiée sur PANDA et le mois suivant je commençais à travailler à Dakar! ”</blockquote>
                                            <div className="expert__quote__by reverse">Omar Ndiaye</div>
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div className="expert__quote__msg">
                                            <blockquote>“fahim Mon rêve était d’aller vivre en Afrique. j'ai postulé à une offre d'emploi pour le poste de web developer publiée sur PANDA et le mois suivant je commençais à travailler à Dakar! ”</blockquote>
                                            <div className="expert__quote__by reverse">Omar Ndiaye</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="expert__right__imgs d-flex">
                                <div className="expert__right__img">
                                    <img src="/img/expert1/3.png" alt="" />
                                </div>
                                <div className="expert__right__img">
                                    <img src="/img/expert1/2.png" alt="" />
                                </div>
                                <div className="expert__right__img">
                                    <img src="/img/expert1/1.png" alt="" />
                                </div>
                            </div>
                            <div className="mh__cta d-md-none">
                                <a href='#!' className="btn btn-default">Voir tout</a>
                            </div>
                        </div>
                        <div className="expert__left">
                            <div class="swiper-pagination expert__pagination"></div>
                            <div className="main__heading d-none d-md-flex">
                                <h3>Découvrez les experts</h3>
                                <p>Connectez-vous avec des organisations africaines, postulez au job de vos rêves en Afrique ou partagez votre expertise même à distance!   </p>
                                <div className="mh__cta ">
                                    <a href='#!' className="btn btn-default">Voir tout</a>
                                </div>
                             </div>
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ExpertRevers