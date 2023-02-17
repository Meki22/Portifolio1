import {FcDownload} from 'react-icons/fc';
import './About.css';
function About() {
    return ( 
      <div className="ab h-screen " id="about">
        <div className='abb'>
        <h2 className="ab-t mr-10">About Me</h2>
       
        </div>
          
          <div className="ab-con">
            <div className="ab-me ml-10">
       <div className=" ab-img ml-10 bg-[url('C:\Users\stranger\porti\src\image\me3.jpg')] "></div>
      </div>
        
      <div className="ab_cont flex flex-col item-center  mt-5">
          <p className=" flex justify-center text-center mr-10">
          Ulamco laboris nisi ut aliquip ex ea commodo consequat. ABOUT CHRITYmany variations of passages which don't look even slightly believable. If you many variations of passages of Lorem </p>
          <p className='mr-10'>of Lorem Ipsum available, but the njected humour, or randomised words which don't look even slightly believable. If youmany variations of passages of Lorem Ipsum available, 
            </p> 
          {/* <div className='flex justify-center'><button className="ab-b  ">Download CV < FcDownload className=" ic w-5 h-5 ml-7"/></button></div> */}
          <div className="exp flex justify-center ">
            <div className="ach">
                <div className="cir mr-5 justify-center ">
                  <p className='tt'>3+</p></div>
                  <div className="cir-tt">
                  <span>Years</span>
                  <span className='last'>Experience</span>
                  </div>
            </div>
            <div className="ach">
                <div className="cir ">
                <p className='tt'>3+</p></div>
                  <div className="cir-tt">
                  <span >Completed</span>
                  <span className='last'>Projects</span>
                  </div>
                  </div>

                  <div className="ach">
                <div className="cir">
                <p className='tt'>3+</p></div>
                  <div className="cir-tt">
                  <span>Company</span>
                  <span className='last'>Work</span>
                  </div>
                  </div>
        </div>
          </div>
      </div>
      </div> 



     );
}

export default About;