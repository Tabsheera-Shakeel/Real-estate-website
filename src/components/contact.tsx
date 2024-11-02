import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import '../css/contact.css'; 

export default function Contact() {
  return (
    <div id='contact' className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <Image
          src="https://i.pinimg.com/564x/f6/15/3d/f6153db3e99e0f7f13407ee45dae40d1.jpg" 
          alt="Contact Us"
          width={300}
          height={200}
          className="contact-image"
        />
        
        <div className="contact-info">
          <div className="info-details">
            <FontAwesomeIcon icon={faEnvelope} size="lg" />
            <span>Email: info@example.com</span>
          </div>
          <div className="info-details">
            <FontAwesomeIcon icon={faPhone} size="lg" />
            <span>Phone: (123) 456-7890</span>
          </div>
          <div className="info-details">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
            <span>Address: 123 Main St, Anytown, USA</span>
          </div>
        </div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows={5} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
