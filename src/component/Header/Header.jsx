import React, { useEffect, useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Header() {
    const notify = (data) => toast[`${data.color}`](`${data.message}`);
    const nevigate=useNavigate()
    const [fixed, setFixed] = useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if (window.pageYOffset > 1) {
                setFixed(true)
            } else {
                setFixed(false)
            }
        })
    },[])

    // =====================Logout===================

   const Logout=(e)=>{
    e.preventDefault();
    localStorage.removeItem("isAuth");
    notify({message:"Logout Successful",color:"error"})
    setTimeout(()=>{
        nevigate("/login")
    },2000)
   }

  return (
    <header id="header" className={fixed ? "header__fixed": ""}>
        <div className="navbar-expand-lg">
            <div className="header__upper">
            <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header__upper__content">
                                <div className="huc__left">
                                    <a href="#!" className='hucl__link'>EN</a>
                                    -
                                    <a href="#!" className='hucl__link'>FR</a>
                                </div>
                                <div className="huc__logo">
                                    <a href="#" className='huc__logo__link'>
                                        <img className='d-none d-lg-block' src="img/logo.png" alt="" />
                                        <img className='d-lg-none' src="img/logo-mobile.png" alt="" />
                                    </a>
                                </div>
                                <div className="huc__right">
                                    <div className="hucr__actions d-none d-lg-block">
                                        <a role='button' href="#" className='hucr__action'>Créer un compte</a>
                                        <a role='button' onClick={Logout} className='hucr__action'>Logout</a>
                                    </div>
                                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#headerMenuContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <img src="/img/menu-icon.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__lower">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div class="collapse navbar-collapse" id="headerMenuContent">
                                <div className="navbar__inside w-100">
                                    <div className="navbar__indside__scroll">
                                        <div className="navbar__indside__inn">
                                            <div className="hucr__actions d-lg-none">
                                                <a href="#" className='hucr__action'>Créer un compte</a>
                                                <a role='button' onClick={Logout} className='hucr__action'>Logout</a>
                                                <div className="hucr__actions__img">
                                                    <img src="img/star-red.png" alt="" />
                                                </div>
                                            </div>
                                            <ul class="navbar-nav justify-content-center">
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#"> missions de pANDA</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">Fonctionnalités</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">experts</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">Organisations en Afrique</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">Offres d'emploi</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">Evénements à venir</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#"> Témoignages</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="#">Fondateurs</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header