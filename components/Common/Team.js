import React from "react";
import * as Icon from "react-feather";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import teamImg1 from "/public/images/team-image/team1.jpg";
import teamImg2 from "/public/images/team-image/team2.jpg";
import teamImg3 from "/public/images/team-image/team3.jpg";
import teamImg4 from "/public/images/team-image/team4.jpg";
import teamImg5 from "/public/images/team-image/team5.jpg";

const Team = () => {
  const teamMembers = [
    { name: "Shah Preksha", title: "Founder & CEO", image: teamImg4 },
    { name: "Darshan Desai", title: "Co-founder", image: teamImg5 },
    { name: "Ghanshyam Desai", title: "Director", image: teamImg1 },
    { name: "Vrushil Prajapati", title: "Business Development Manager", image: teamImg2 },
    { name: "Jay Miyani", title: "Team Lead (Full Stack Development)", image: teamImg3 },
    { name: "Mayur Chitaliya", title: "Web Developer", image: teamImg4 },
    { name: "Jainam Panara", title: "AWS Trainer", image: teamImg5 },
    { name: "Karan Joshi", title: "E-commerce Consultant", image: teamImg1 },
    { name: "Vidhi Patel", title: "Marketing Head", image: teamImg2 },
  ];

  return (
    <div className="team-area ptb-80 bg-f9f6f6">
      <div className="container">
        <div className="section-title">
          <h2>Our Awesome Team</h2>
          <div className="bar"></div>
        </div>
      </div>

      <Swiper
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 6000,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
          1500: { slidesPerView: 5 },
        }}
        modules={[Pagination, Autoplay]}
        className="team-slider"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="single-team">
              <div className="team-image">
                <Image src={member.image} alt={member.name} width={125} height={125} />
              </div>
              <div className="team-content">
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span>{member.title}</span>
                </div>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <Icon.Facebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.twitter.com/" target="_blank">
                      <Icon.Twitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank">
                      <Icon.Linkedin />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.gitlab.com/" target="_blank">
                      <Icon.Gitlab />
                    </a>
                  </li>
                </ul>
                <p>Risus commodo viverra maecenas accumsan lacus vel facilisis quis ipsum.</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
