// import react, { createFactory } from 'react';
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
function Navbar() {
    return ( 
      //   <div className=" page  ">
      //       <div className='header'>
      //       <div>
      //     <h1 className=" title  ">Meklit</h1>
      //   </div>
         
      //   <div className="nav  ">
      //   {/* <Link to="/Homee">
      //     Home
      //   </Link> 
      //  <Link to="/" >
      //     About
      //   </Link>
      //   <Link to="/" >
      //     Services 
      //   </Link>
      //   <Link to="/" >
      //     Portfolio
      //   </Link>
      //   <Link to="/" >
      //     Services
      //   </Link>
      //     
      //     <ul className="flex flex-row space-between">
      //       <li className="px-5">Home</li>
      //       <li className="px-5">About</li>
      //       <li className="px-5">Services</li>
      //       <li className="px-5">Portfolio</li>
      //       <button className=" b2bg-blue borde">Contact Me</button>
      //     </ul>
      //   </div>
      //       </div>
       
        
      // </div>
      <div>
  
  <nav class="bg-transparent w-auto ">

      <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
      
          <div class="flex flex-row nav">
            
          <h1 className="text-3xl text-white text-left relative  basis-1/2">Meklit </h1>
              <ul class="flex flex-row mt-0 mr-6 space-x-8 text-lg font-medium text-right  basis-1/2">
            
                  <li>
                      <a href="#"  aria-current="page">Home</a>
                  </li>
                  <li>
                      <a href="#about">About</a>
                  </li>
                  <li>
                      <a href="#skill" >Skill </a>
                  </li>
                  <li>
                      <a href="#service" >Service </a>
                  </li>
                  <li>
                      <a href="#portfolio" >Portfolio</a>
                  </li>
    
                <a href="#con"><button className=" b2 bg-blue borde">Contact Me</button></a>  
                  <BsList size={32} className="md:hidden" />
              </ul>
          </div>
      </div>
  </nav>
             
      </div>
      

    );
}

export default Navbar;