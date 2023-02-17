import { SlSocialInstagram, SlSocialLinkedin,SlSocialGithub } from "react-icons/sl";
import "./Contact.css";

function Contact() {
    return ( 
        <div class="con flex bg-slate-500 " id="con">
        
          

        
      <div className="f-content">
        <span>Zainkeepscode@gmail.com</span>
        <div className="f-icons">
          <SlSocialGithub color="white" size={"3rem"} />
          <SlSocialInstagram color="white" size={"3rem"} />
          <SlSocialLinkedin color="white" size={"3rem"} />
        </div>
      </div>
</div>



     );
}

export default Contact;