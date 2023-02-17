import portfolio2 from '../image/portfolio2.jpg'
import portfolio3 from '../image/portfolio3.jpg'
import portfolio6 from '../image/portfolio6.jpg'
import './Portfolio.css'
const Portfolio =()=> {
    return (
       <div id="portfolio" className='w-auto h-screen px-10'>
        <h2 className='por-t '>Portfolio</h2>
        <h5 className='por-st'>My Recent Work</h5>
        
        <div className="por-con ">
          <div className="por-item ">
            <div className="por-item-img">
              <img src={portfolio2}/>
            </div>
            <h3 className='por-m'>Graphic design  <br/>
            If you have a project <br/>and want to host it <br/>for free without buying a domain,
            </h3>
            <div className="por-btn">
            
            <div  className="btn"><a href="\image\portfolio6.jpg" target='_blank'>Live Demo</a></div>
            </div>
             
            
          </div>
          <div className="por-item">
            <div className="por-item-img">
            <img src={portfolio3}/>
            </div>
            <h3 className='por-m'>Front End <br/>
            If you have a project <br/>and want to host it <br/>for free without buying a domain,
            </h3>
             
            <div  className="btn"><a href="\image\portfolio6.jpg" target='_blank'>Live Demo</a></div>
            
          </div>
          <div className="por-item">
            <div className="por-item-img">
            <img src={portfolio6}/>
            </div>
            <h3 className='por-m'> Front End <br/>
            If you have a project and want <br/>to host it <br/>for free without buying a domain,
            </h3>
             <div  className="btn"><a href="\image\portfolio6.jpg" target='_blank'>Live Demo</a></div>
              
            
          </div>
        </div>
       </div> 
      );
}

export default Portfolio;