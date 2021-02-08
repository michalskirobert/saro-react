import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { BiMap } from "react-icons/bi";

const index = () => {
  return (
    <section className="section contact-page">

      <h1>Contact</h1>

      <div className="contact-page-content">
      <form>
        <div className="form-control">
          <label htmlFor="name">Full Name</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label htmlFor="email">E-mail</label>
          <input type="email" />
        </div>
        <div className="form-control" id="message-input">
          <input type="text" placeholder="Message" />
        </div>
        <button className="btn send">Send</button>
      </form>

      <div className="contact-page-text">
      <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum, 
      felis id dapibus tincidunt, quam nisl rhoncus mi, ut lacinia ante nisi eu elit.
      Duis nec semper lorem, vel volutpat turpis. Integer porttitor aliquam iaculis. 
      Proin id posuere orci. Donec auctor mollis lectus, in pellentesque magna tempor vitae. 
      Nullam vulputate est ac mauris interdum euismod. Donec pharetra nulla a libero 
      consectetur, nec euismod tellus semper. Mauris sit amet arcu vel dui rutrum tempor 
      ut vel lorem. In tempus enim diam, id pulvinar est scelerisque sed. In quis ex metus. 
      Vivamus mi sem, euismod non laoreet ac, varius vel lacus. Nam vitae euismod tellus. 
      Morbi ut enim pretium, eleifend velit sed, suscipit nunc. Phasellus sapien leo, vehicula 
      eget volutpat eu, convallis et leo. Curabitur est turpis, placerat posuere tristique s
      it amet, venenatis placerat purus.</p>

      <div className="contact-page-text-icons">
      
      
      <BiMap className="contact-page-text-icon" />
      <span>Warsaw, Poland</span>
      <FaRegEnvelope className="contact-page-text-icon"/>
      <span>contact@saro.website</span>
      </div>
      
      </div>

      </div>

      
    </section>

  );
};

export default index;
