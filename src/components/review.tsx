"use client";

import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../css/review.css";


const reviews = [
  {
    image: 'https://i.pinimg.com/564x/c7/98/43/c798437571ab83eb56ef38a9fd2fdb07.jpg',
    title: 'Feeling at Home!',
    feedback: 'Our new home is perfect! It’s more than just a house; it feels like family already.',
    name: 'The Johnsons',
  },
  {
    image: 'https://i.pinimg.com/236x/c4/a2/86/c4a2865512fd9d4730ff780771de29d0.jpg',
    title: 'A Dream Come True!',
    feedback: 'Moving here felt like a fresh start. Thank you for making this process so easy!',
    name: 'Emily & David',
  },
  {
    image: 'https://i.pinimg.com/564x/e6/93/b4/e693b487f08af8ac715ee331261e0cc3.jpg',
    title: 'Grateful and Happy!',
    feedback: 'The kids love their new rooms! It’s amazing how quickly it feels like home.',
    name: 'The Williams Family',
  },
  {
    image: 'https://i.pinimg.com/564x/9f/70/62/9f70621450e0736e95ad42fcb3364884.jpg',
    title: 'New Beginnings!',
    feedback: 'From day one, this place felt right. Thanks for guiding us here!',
    name: 'Sarah & Mike',
  },
  {
    image: 'https://i.pinimg.com/236x/8b/18/a6/8b18a68dfd148e5186912f8d19007316.jpg', // New image URL
    title: 'Simply Amazing!',
    feedback: 'We had a fantastic experience! Everything was handled professionally and with care.',
    name: 'The Smith Family',
  },
];


const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true, 
  responsive: [
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function SliderComponent() {
  return (
    <div id="review" className="review-container">
      <h2 className="review-title1">What Our Clients Say</h2>
      <div className="review-slider">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <Image
                src={review.image}
                width={100}
                height={100}
                className="review-image"
                alt={review.name}
              />
              <div className="review-feedback">
                <h4 className="review-name">{review.name}</h4>
                <p className="review-title">{review.title}</p> {/* This class should have its own styles */}
                <p className="review-text">{review.feedback}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

