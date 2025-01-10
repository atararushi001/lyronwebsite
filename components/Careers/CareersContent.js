import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const CareersContent = () => {
  // Google form URL
  const googleFormUrl = "YOUR_GOOGLE_FORM_URL";

  return (
    <>
      <div className="careers-area ptb-80 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Build Your Career With Us</h2>
            <div className="bar"></div>
            <p>
              Join our team of innovators and problem solvers. We're always looking 
              for talented individuals who are passionate about technology.
            </p>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <Icon.Users />
                </div>
                <h3>Collaborative Environment</h3>
                <p>
                  Work with talented individuals who are passionate about creating 
                  innovative solutions and pushing technological boundaries.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <Icon.TrendingUp />
                </div>
                <h3>Growth Opportunities</h3>
                <p>
                  Continuous learning and development opportunities to help you 
                  grow both professionally and personally.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-services-box">
                <div className="icon">
                  <Icon.Heart />
                </div>
                <h3>Great Benefits</h3>
                <p>
                  Competitive compensation, flexible work arrangements, and a 
                  comprehensive benefits package for your wellbeing.
                </p>
              </div>
            </div>
          </div>

          <div className="about-area ptb-80">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12">
                  <div className="about-content">
                    <h2>Why Work With Us?</h2>
                    <p>
                      We believe in fostering a culture of innovation, collaboration, 
                      and continuous learning. Our team members are empowered to 
                      take ownership of their work and make a real impact.
                    </p>
                    <ul className="features-list">
                      <li><Icon.Check /> Flexible work environment</li>
                      <li><Icon.Check /> Professional development opportunities</li>
                      <li><Icon.Check /> Innovative projects</li>
                      <li><Icon.Check /> Competitive compensation</li>
                      <li><Icon.Check /> Health and wellness benefits</li>
                      <li><Icon.Check /> Team building activities</li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-6 col-md-12">
                  <div className="career-apply-box">
                    <h3>Ready to Join Us?</h3>
                    <p>
                      We're always looking for talented individuals to join our team. 
                      Submit your application and let's start a conversation.
                    </p>
                    <a 
                      href={googleFormUrl}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="btn btn-primary"
                    >
                      Apply Now <Icon.ArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersContent;