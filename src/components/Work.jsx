import { FaReact,FaDatabase  } from "react-icons/fa";
import { IoLogoJavascript  } from "react-icons/io";
import { SiCanva  } from "react-icons/si";
import './Work.css';

function Work() {
    return (  
        <div className="work bg-black">
            <div className="awesome">
             <span className="ss">My Services </span>
             <span className="t">Ulamco laboris nisi ut aliquip ex ea commodo consequat. 
                <br/>Et consectetur ducimus vero placeat</span>
                <button className="b">Download CV</button>
            </div>
        <div className="m-right">
            <div className="m-main">
        <div className="m-sec">
            <FaDatabase/>
            </div>
            <div className="m-sec">
            <FaReact/>
            </div>
            <div className="m-sec">
            <IoLogoJavascript/>
            </div>
            <div className="m-sec">
            <SiCanva/>
            </div>
            </div>
        </div>
        </div>

        
    );
}

export default Work;