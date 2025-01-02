import React from "react";
import Image from "next/image";

import aboutImg from "/public/images/about-one.png";

const AboutUsContent1 = () => {
  return (
    <>
      <div className="about-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src={aboutImg}
                  alt="image"
                  width={685}
                  height={494}
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="section-title">
                  <h2>About Us</h2>
                  <div className="bar"></div>
                  <p>
                  Hello! we are lyrcon team , a passionate and highly skilled Software engineers with over 4 years of experience in creating visually websites and mobile apps.

                  </p>
                </div>

                <p>
                Our expertise lies in web development,app development,server managment,cloud, and I have a proven track record of delivering high-quality work that exceeds client expectations.
                </p>

                <p>
                We have a deep understanding of the latest web technologies and trends, and our work is of the highest quality, whether we are building a new website or improving an existing one.
                </p>

                <p>
                We are committed to creating the best possible user experience for your website or app, and we take pride in delivering projects on time and within budget.
                </p>

               
              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our History</h3>
                  <p>
              
                  We have been in the software industry for over 4 years, and in that time we have worked with clients from a wide range of industries, including healthcare, finance, and e-commerce.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Our Mission</h3>
                  <p>
                  Our mission is to help businesses succeed by providing them with the best possible software solutions. We are committed to delivering high-quality work that exceeds client expectations.
                
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Who We Are</h3>
                  <p>
                  We are a team of passionate and highly skilled software
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent1;
