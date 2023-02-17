// import Home from './Home';
import TypeWriterEffect from 'react-typewriter-effect';
import Navbar from './Navbar';
import { SlSocialInstagram, SlSocialLinkedin,SlSocialGithub } from "react-icons/sl";


function Homee() {
    return ( 
      <div className=" bg-[url('C:\Users\stranger\porti\src\image\me.jpg')] w-auto h-screen bg-no-repeat bg-top bg-cover relative flex overflow-hidden">
       <div className=" bg-black h-full w-full  bg-opacity-70 ">
      <div className='hp'>
          <Navbar/>
       
        <div className='my-int'>
     <TypeWriterEffect
        textStyle={{
          fontFamily: 'Red Hat Display',
          color: '#ffff',
          fontWeight: 500,
          fontSize: '4.5em',
        }}
        startDelay={2000}
        cursorColor="#3F3D56"
        multiText={[
        
          "Hi I am Meklit",
          "Software Developer,",
          "Graphic Designer ",
          "Freelancer"]}
        multiTextDelay={1000}
        typeSpeed={20}
        multiTextLoop
      />
     </div>
       <div className='social'>
     <div className='ins'><SlSocialInstagram/></div>  
     <div className='lin'><SlSocialLinkedin/></div>  
     <div className='git'>< SlSocialGithub/></div>  
  

       
       
       </div>
      </div>  
   
      
      </div>
      </div>
      
    
     );
}

export default Homee;

