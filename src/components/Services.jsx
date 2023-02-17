import { FaReact,FaDatabase  } from "react-icons/fa";
import { IoLogoJavascript  } from "react-icons/io";
import { SiCanva  } from "react-icons/si";
function Services() {
    return ( 
        <div >
          {/* <iframe className="w-auto h-screen bg-no-repeat bg-top bg-cover relative flex overflow-hidden" src="\image\bg-vid.mp4"></iframe> */}
            <div className="service h-full left-0" id="service">
              <h2 className="ser-t">Services</h2>
              <span className="ser-st">What Can I Do For You?</span>
              <p className="des">
          Ulamco laboris nisi ut aliquip ex ea commodo consequat. 
                 <br/>Et consectetur ducimus vero placeat<br/></p>
            <div className="ser-con">
            <div className="ser-con-f"> 
            <div className="ic">   <FaReact/></div>
            <div className="ser-tt">
              <h1>Front end developer  </h1>
             <p>  Ulamco laboris nisi </p>
             </div>
             <button className="ser-b">learn more</button>

             </div>      
             <div className="ser-con-s"> 
             <div className="ic"> <FaDatabase /></div>
             <div className="ser-tt">
              <h1>Front end developer  </h1>
             <p>  Ulamco laboris nisi </p>
             </div>
             <button className="ser-b">learn more</button>

             </div>
             <div className="ser-con-t"> 
             <div className="ic"> <IoLogoJavascript /></div>
             <div className="ser-tt">
              <h1>Front end developer  </h1>
             <p>  Ulamco laboris nisi</p>
             
             </div>
             <button className="ser-b">learn more</button>
             
            </div>
            <div className="ser-con-fo"> 
            <div className="ic"><SiCanva /></div>
            <div className="ser-tt">
              <h1>Front end developer  </h1>
             <p>  Ulamco laboris nisi ut aliquip </p>
             </div>
             <button className="ser-b">learn more</button>
            </div>
            
            </div>
        </div>
        </div>
        
     );
}

export default Services ;