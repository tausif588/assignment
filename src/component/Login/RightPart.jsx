import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {signupuser} from "../../Redux/signupSlice";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../Redux/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const getValue=()=>{
  let data=JSON.parse(localStorage.getItem("user-details")) ;
  if (data){
    return data
  }
  else{
    return []
  }
}

function RightPart() {
  const[condition,setCondition]=useState(false)
  const notify = (data) => toast[`${data.color}`](`${data.message}`);
  const Dispatch = useDispatch();
  const userData = useSelector((state)=> state.signupSlice);
  const nevigate=useNavigate()
  const[check,setCheck]=useState(getValue());
  const [move, seMove]  = useState(1)
 const[show1,setShow1]=useState(false);
 const[show2,setShow2]=useState(false)
 const[show3,setShow3]=useState(false)

  // ================Registeration==============
  const[rinput,setRinput]=useState({
    email:"",
    password:"",
    cpassword:""
  })
  const rHandler=(e)=>{
    setRinput({...rinput,[e.target.name]:e.target.value})
  }
  const Registeration=(e)=>{
    if(rinput.password==rinput.cpassword){
      Dispatch(signupuser({useremail:rinput.email, pass:rinput.password}))
      notify({message:"Registration Successful",color:"success"});
      setCondition((pre)=>!pre)
      rinput.email="";
      rinput.password="";
      rinput.cpassword="";
      setTimeout(()=>{
        seMove(2);
      },2000)
    }
    else{
      notify({message:"Password mismatch",color:"error"})
     
    }
 
  }

  // ==================Login===============
  
  const[linput,setLinput]=useState({
    email:"",
    password:"",
  })
  const lHandler=(e)=>{
    setLinput({...linput,[e.target.name]:e.target.value})
  }
  console.log(linput)
 const Login=(e)=>{
  let registredUser = userData.map(itm => itm)
  let userEmail = linput.email; 
  let userPassword = linput.password;
  let Useravil = registredUser.filter((itm)=> itm.useremail == userEmail && itm.pass==userPassword);
  // console.log(registredUser);
  if(Useravil != ''){
    Dispatch(LoginUser())
    localStorage.setItem("isAuth",true);
    notify({message:"Login Successful",color:"success"})
    setCondition((pre)=>!pre)
    setTimeout(()=>{
      nevigate("/")
    },2000)
  }
  else{
    notify({message:"Wrong Credential",color:"error"});
    setCondition((pre)=>!pre)
    linput.email="";
    linput.password="";
  }
  e.preventDefault();
  
 }
useEffect(()=>{
  setCondition((pre)=>!pre)
},[condition])
  return (
    <div className="lw__right__part">
      <div className="join__part">
        <a className="active" onClick={()=> seMove(1)}>
          Join PANDA
        </a>
        <span>Or</span>
        <a  onClick={()=> seMove(2)}>Sign In</a>
        <span className={`join__part__line item-${move}`}></span>
      </div>

      {
        move ==1 && <>
           <div className="form__part">
        <form  className="w-100">
          <div className="form__part__inner">
            <div className="img_part">
              <img src="./img/star.png" alt="" />
            </div>
            <div className="heading">
              <h3>Create your free account </h3>
              <h5>
                Takes less than <span>5 minutes</span>...
              </h5>
            </div>
            <div className="form-input mb-4">
              <input type="email" placeholder="klincik7@gmail.com" name="email" onChange={(e)=>rHandler(e)} />
              <label>This email address already exists. Sign in</label>
            </div>
            <div className="form-input mb-4">
              <input type={show1?"text":"password"} placeholder="***************" name="password" onChange={(e)=>rHandler(e)} />
              <label onClick={()=>setShow1((pre)=>!pre)} className="show__pass">{show1?"hide":"show"}</label>
            </div>
            <div className="form-input mb-4">
              <input type={show2?"text":"password"} placeholder="***************" name="cpassword" onChange={(e)=>rHandler(e)} />
              <label onClick={()=>setShow2((pre)=>!pre)} className="show__pass">{show2?"hide":"show"}</label>
            </div>
          </div>
          <div className="form__part__outer">
            <div className="check__box">
            <input  type="checkbox" value="yes" />
             <span>I’m an Expert</span>
            </div>
            <div className="check__box mt-3">
            <label>
                 <img src="/img/star.png" alt="" />
            </label>
             <span>I’m an Organization in Africa</span>
            </div>
             <div className="form__btn d-flex justify-content-center">
              <div class="mh__cta"><a onClick={Registeration}  class="btn btn-default">JOIN PANDA</a>
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
              </div>
            </div>
            <div className="terms__content">
              <p>By clicking on "Create an account", you agree to our terms of use and privacy policy.</p>
            </div>
          </div>
        </form>
      </div>
     
        </>
      }
      {
        move ==2 && <>
         <div className="form__part">
        <form className="w-100">
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
          <div className="form__part__inner">
            <div className="img_part">
              <img src="./img/star.png" alt="" />
            </div>
            <div className="heading">
              <h3>Sign in</h3>
            </div>
            <div className="form-input mb-4">
              <input type="email" value={linput.email} placeholder="klincik7@gmail.com" name="email" onChange={(e)=>lHandler(e)}/>
              <label>This email address already exists. Sign in</label>
            </div>
            <div className="form-input sign__in mb-4">
              <input type={show3?"text":"password"} value={linput.password} placeholder="***************" name="password" onChange={(e)=>lHandler(e)}/>
              <label onClick={()=>setShow3((pre)=>!pre)} className="show__pass">{show3?"hide":"show"}</label>
              <label>Wrong password, please try again.</label>
            </div>
            <div className="form-input mb-4">
                 <a className="forget__pass">Forget Password</a>
            </div>
          </div>
          <div className="form__part__outer mt-0">
             <div className="form__btn d-flex justify-content-center pb-0">
              <div class="mh__cta"><a onClick={Login} class="btn btn-default">JOIN PANDA</a>
              </div>
            </div>
          </div>
        </form>
      </div>
        </>
      }
 
    </div>
  );
}

export default RightPart;
