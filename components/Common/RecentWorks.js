import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import worksImg1 from "/public/images/works-image/Vianne Website.png";
import worksImg2 from "/public/images/works-image/smilling rocks website.png";
import worksImg3 from "/public/images/works-image/Salone Web site.png";
import worksImg4 from "/public/images/works-image/Gujarat State Kabbadi Registration Portal.png";
import worksImg5 from "/public/images/works-image/works-image5.jpg";

// Shape Images
import shape2 from "/public/images/shape2.svg";
import shape4 from "/public/images/shape4.svg";

const allWorks = [
  {
    image: worksImg1,
    title: "Vianne Website",
    description:
      "Discover the beauty of craftsmanship and the allure of elegance with Vianne Jewels. We offer a curated selection of fine jewelry that captures the essence of sophistication and style.",
    link: "https://www.viannejewels.com/",
  },
  {
    image: worksImg2,
    title: "Smiling Rocks Website",
    description:
      "Welcome to Smiling Rocks, where luxury meets sustainability and social responsibility. We create exquisite lab-grown diamond jewelry that makes a positive impact on the world.",
    link: "https://smilingrocks.com/",
  },
  {
    image: worksImg3,
    title: "Salone Website",
    description:
      "Welcome to Xpert Salon Professional, the ultimate destination for premium salon services tailored to meet your unique beauty needs, including chic haircuts and rejuvenating facials.",
    link: "https://xpertprofessionalstage.dev.radixweb.net/salon",
  },
  {
    image: worksImg4,
    title: "Gujarat State Kabaddi Registration Portal",
    description:
      "The Gujarat State Kabaddi Association website promotes the sport in Gujarat with comprehensive information, including its rules, historical background, and significance.",
    link: "https://gujaratstatekabaddi.com/",
  },
 
];

const RecentWorks = () => {
  return (
    <>
      <div className="works-area pt-80 pb-50 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Our Recent Works</h2>
            <div className="bar"></div>
          </div>
        </div>

        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 6000,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="works-slides"
        >
          {allWorks.map((work, index) => (
            <SwiperSlide key={index}>
              <div className="single-works">
                <Image src={work.image} alt="image" width={640} height={450} />

                <Link href={work.link} className="icon">
                  <Icon.Settings />
                </Link>

                <div className="works-content">
                  <h3>
                    <Link href={work.link}>{work.title}</Link>
                  </h3>
                  <p>{work.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Shape Images */}
        <div className="shape8 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape2 rotateme">
          <Image src={shape2} alt="shape" width={22} height={22} />
        </div>
        <div className="shape7">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
        <div className="shape4">
          <Image src={shape4} alt="shape" width={21} height={20} />
        </div>
      </div>
    </>
  );
};

export default RecentWorks;
