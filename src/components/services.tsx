import "../css/services.css";
import { FaHome, FaBuilding, FaChartLine, FaHandshake } from "react-icons/fa"; // Icons from react-icons

function Services() {
  const services = [
    {
      icon: <FaHome />,
      title: "Residential Properties",
      description: "Explore a variety of homes and apartments that suit your lifestyle and budget.",
    },
    {
      icon: <FaBuilding />,
      title: "Commercial Spaces",
      description: "Find the perfect office space, retail store, or warehouse for your business.",
    },
    {
      icon: <FaChartLine />,
      title: "Investment Consulting",
      description: "Get expert advice on real estate investments and unlock profitable opportunities.",
    },
    {
      icon: <FaHandshake />,
      title: "Property Management",
      description: "Let us take care of your properties with professional management services.",
    },
  ];

  return (
    <div id="service" className="services-container">
      <div className="services-header">
        <h1>Our Services</h1>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
