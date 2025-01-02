import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const OurFeatures = () => {
  return (
    <>
      <div className="features-area pt-80 pb-50 bg-f7fafd">
        <div className="container">
          <div className="section-title">
            <h2>Our Features</h2>
            <div className="bar"></div>
            <p>
              Discover the unique features that make our platform stand out. We provide innovative solutions to enhance your experience.
            </p>
          </div>

          <div className="row">
            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon">
                  <Icon.Settings />
                </div>
                <h3>
                  <Link href="/features/feature-details/">Incredible Infrastructure</Link>
                </h3>
                <p>
                  Our robust infrastructure ensures high availability and reliability for all your applications and services.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>
                  <Link href="/features/feature-details/">Email Notifications</Link>
                </h3>
                <p>
                  Stay informed with real-time email notifications for important updates and activities.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon bg-c679e3">
                  <Icon.Grid />
                </div>
                <h3>
                  <Link href="/features/feature-details/">Simple Dashboard</Link>
                </h3>
                <p>
                  Our user-friendly dashboard provides a comprehensive overview of your data and activities.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon bg-c679e3">
                  <Icon.Info />
                </div>
                <h3>
                  <Link href="/features/feature-details/">Information Retrieval</Link>
                </h3>
                <p>
                  Quickly retrieve and access information with our efficient search and indexing features.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Box />
                </div>
                <h3>
                  <Link href="/features/feature-details/">Drag & Drop Functionality</Link>
                </h3>
                <p>
                  Easily manage your files and data with our intuitive drag and drop functionality.
                </p>
              </div>
            </div>

            <div
              className="col-lg-6 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-features">
                <div className="icon bg-eb6b3d">
                  <Icon.Bell />
                </div>
                <h3>
                  <Link href="/features/feature-details/">Deadline Reminders</Link>
                </h3>
                <p>
                  Never miss a deadline with our automated reminders and alerts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurFeatures;