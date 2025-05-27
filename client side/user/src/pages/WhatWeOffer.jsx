import React, { useState } from 'react';
import './WhatWeOffer.css';
import OfferCard from './OfferCard';

const WhatWeOffer = () => {
  const [searchDept, setSearchDept] = useState('');

  const events = [
    {
      title: "Qawali Night",
      image: "C:\\Users\\Administrator\\Desktop\\flutter projects\\task\\our-clients\\public\\image\\th (4).jpg",
      department: "SE",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    },
    {
      title: "Summer Fiesta",
      image: "C:\\Users\\Administrator\\Desktop\\flutter projects\\task\\our-clients\\public\\image\\what-is-video-game-designing.jpg",
      department: "CS",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    },
    {
      title: "Annual Dinner",
      image: "C:\\Users\\Administrator\\Desktop\\flutter projects\\task\\our-clients\\public\\image\\th.jpg",
      department: "IT",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    }
  ];

  const filteredEvents = events.filter(event =>
    event.department.toLowerCase().includes(searchDept.toLowerCase())
  );

  return (
    <section className="what-we-offer">
      <h2>
        <span>UPCOMING  </span><span className="highlight">EVENTS</span>
      </h2>
      <input
        type="text"
        placeholder="Search by department"
        value={searchDept}
        onChange={(e) => setSearchDept(e.target.value)}
        className="department-search-input"
      />
      <div className="offer-cards">
        {filteredEvents.map((event, index) => (
          <OfferCard
            key={index}
            title={event.title}
            image={event.image}
            description={event.description}
          />
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
