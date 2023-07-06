import React, { useEffect, useState } from "react";
import "./NavBar.css";
const NavBar = () => {
  const [show,setShow] = useState(false)
  
  const handleTransition = () => { 
    if(window.scrollY > 100){
      setShow(true)
    }else{
      setShow(false)
    }
   }
  useEffect(()=>{
    window.addEventListener("scroll",handleTransition)
    return ()=>{window.removeEventListener("scroll",handleTransition)}
  },[])

  return (
    <div className={`navbar ${show && 'navbar_black'}`}>
      <div className="nav_contents">
        <img
          className="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="logo"
        />
        <img
          className="avatar"
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default NavBar;
