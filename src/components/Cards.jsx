import react from 'react';


const Cards =({icon,head,detail})=> {
    return (  
  <div className="cards">
   <span>{icon}</span>
   <span>{head}</span>
   <span>{detail}</span>
   <button className='b2'>Learn More</button>
  </div>
    )
}

export default Cards;
