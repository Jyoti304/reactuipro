import React from 'react';
import logo from './Images/logo.png';


const Header = () => {
    return(
    <>

     <div className="header">
      <img src={logo} alt=""/>
      <h1>My Sweet Site</h1>
     </div>


    </>
    );
}
export default Header;