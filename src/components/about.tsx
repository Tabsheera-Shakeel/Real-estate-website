import "../css/about.css";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div id="about" className="about-container">
      <div className="about-content">
        {/* Team Photo */}
        <div className="t-photo">
          <Image
            src="https://i.pinimg.com/564x/d4/19/c4/d419c425e7ad8f24fd963ec5142bb680.jpg"
            alt="Team Photo"
            width={280}
            height={180}
            objectFit="cover"
          />
        </div>

        {/* About Text */}
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            [At <b>[Your Company Name]</b>, we offer expert real estate solutions
            to match your needs. From buying and selling to investments, we’re
            here to provide a seamless experience.
          </p>
          <p>
            With a team of seasoned professionals and a collection of premium
            properties, we focus on delivering transparent, tailored services.
          </p>
          <p>Your perfect space is just the beginning—unlock new opportunities with us.</p>

          {/* Call to Action */}
          <Link href="#explore">
            <button className="cta-button">Explore Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
