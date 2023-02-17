import Cards from "./Cards";
import {AiFillCheckCircle} from 'react-icons/ai';

import {GrReactjs} from 'react-icons/gr';
import {IoLogoDesignernews} from 'react-icons/io';
function Services() {
    return ( 

       
            <div className="skill" id="skill">
              <h2 className="sk-t">Skill</h2>
              <span className="sk-st">My Techincal Level</span>
              <div className="sk-con">
              <div className="sk-con-l">
              <div className="sk-con-ll">
        <div><h2 className="con-tt">Frontend </h2></div>
                <AiFillCheckCircle/>
                <p>HTML</p>
                <span>Advanced</span>

                <AiFillCheckCircle/>
                <p>CSS</p>
                <span>Intermediate</span>

                <AiFillCheckCircle/>
                <p>Javascript</p>
                <span>Advanced</span>
                </div>
                <div className="sk-con-lr">
                <AiFillCheckCircle/>
                <p>Bootstrap</p>
                <span>Advanced</span>

                <AiFillCheckCircle/>
                <p>Git</p>
                <span>Intermediate</span>

                <AiFillCheckCircle/>
                <p>React</p>
                <span>Advanced</span>
                </div>
                </div>

                <div className="sk-con-r">

                <div className="sk-con-rl">
                <h2 className="con-tt">Backend</h2>
                <AiFillCheckCircle/>
                <p>PHP</p>
                <span>Advanced</span>

                <AiFillCheckCircle/>
                <p>NODE</p>
                <span>Intermediate</span>

                <AiFillCheckCircle/>
                <p>SQL</p>
                <span>Advanced</span>
                 </div>
                 <div className="sk-con-rr">
                <AiFillCheckCircle/>
                <p>C#</p>
                <span>Advanced</span>

                <AiFillCheckCircle/>
                <p>OOP</p>
                <span>Intermediate</span>

                <AiFillCheckCircle/>
                <p>React</p>
                <span>Advanced</span>
                </div>

                </div>
                </div>
              </div>
            
            
     );
}

export default Services;