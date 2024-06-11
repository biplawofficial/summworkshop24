import React from "react";
import './navbar1.css'
import facebook from '../images/fb.png'
import twitter from '../images/twitter.png'
import instagram from '../images/insta.png'
import linkedin from '../images/linkedin.png'
import login from '../images/login.png'

const Navbar1=()=>{
    return(
        <div className='navbar1'>
            <div className="n11">
                <div className="hnav1"><img className="himg" src={facebook} alt="" /></div>
                <div className="hnav1"><img className="himg" src={linkedin} alt="" /></div>
                <div className="hnav1"><img className="himg" src={twitter} alt="" /></div>
                <div className="hnav1"><img className="himg" src={instagram} alt="" /></div>
            </div>
            <div className="n12">
                <div className="hnav2"><img className="himg"  src={login} alt="" /></div>
            </div>
        </div>
    ) 
    
}
export default Navbar1