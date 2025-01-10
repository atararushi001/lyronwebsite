import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "react-feather";

import logo from "/public/images/logo-w.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area bg-f7fafd">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <Image src={logo} alt="logo" width={110} height={36} />
                  </Link>
                </div>
                <p>
                  Your Vision, Our Expertise ,At Lyrcon Solutions, we bring your
                  ideas to life with our expert team. Our dedicated
                  professionals turn your vision into reality, delivering
                  innovative solutions and exceptional results. Partner with us
                  for top-tier quality,"
                </p>
              </div>
            </div>

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="200"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget ps-5">
                <h3>Company</h3>

                <ul className="list">
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/services">Projects</Link>
                  </li>
                  <li>
                    <Link href="/features">Contact Us</Link>
                  </li>
                  {/* <li>
                    <Link href="/pricing">Our Pricing</Link>
                  </li>
                  <li>
                    <Link href="/blog">Latest News</Link>
                  </li> */}
                </ul>
              </div>
            </div>

            {/* <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <h3>Support</h3>

                <ul className="list">
                  <li>
                    <Link href="/faq">FAQ's</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="/team">Team</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div> */}

            <div
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-delay="400"
              data-aos-duration="500"
              data-aos-once="true"
            >
              <div className="single-footer-widget">
                <h3>Address</h3>

                <ul className="footer-contact-info">
                  <li>
                    <Icon.MapPin />3 Jay maharaj complex, Dumral Bazar,
                    Junaraopura, Nadiad, Gujarat-387001
                  </li>

                  <li>
                    <Icon.Mail />
                    Email:{" "}
                    <a href="mailto:contact@lyrcon.com">contact@lyrcon.com</a>
                  </li>

                  <li>
                    <Icon.PhoneCall />
                    Phone: <a href="tel:+919998385011">+91 9998385011</a>
                  </li>
                </ul>

                <ul className="social-links">
                    {/* <li>
                      <a
                        href="https://www.facebook.com/"
                        className="facebook"
                        target="_blank"
                      >
                        <Icon.Facebook />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.twitter.com/"
                        className="twitter"
                        target="_blank"
                      >
                        <Icon.Twitter />
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.instagramcom/"
                        className="instagram"
                        target="_blank"
                      >
                        <Icon.Instagram />
                      </a>
                    </li> */}

                  <li>
                    <a
                      href="https://www.linkedin.com/company/lyrcon-solutions/"
                      className="linkedin"
                      target="_blank"
                    >
                      <Icon.Linkedin />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="copyright-area">
                <p>
                Copyright &copy; {currentYear}  Lyrcon Solutions
           
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          src="/images/map.png"
          className="map"
          alt="map"
          width={910}
          height={443}
        />

        {/* Shape Images */}
        <div className="shape1">
          <Image
            src="/images/shape1.png"
            alt="shape"
            width={202}
            height={202}
          />
        </div>

        <div className="shape8 rotateme">
          <Image src="/images/shape2.svg" alt="shape" width={22} height={22} />
        </div>
      </footer>
    </>
  );
};

export default Footer;
