import React from "react";
import * as Icon from "react-feather";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area ptb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.Mail />
                </div>
                <h3>Mail Here</h3>
                <p>
                  <a href="mailto:contact@lyrcon.com">contact@lyrcon.com</a>
                </p>
                {/* <p>
                  <a href="mailto:info@startp.com">info@startp.com</a>
                </p> */}
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.MapPin />
                </div>
                <h3>Visit Here</h3>
                <p>
                  3 Jay maharaj complex, Dumral Bazar, Junaraopura, Nadiad,
                  Gujarat-387002
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="contact-info-box">
                <div className="icon">
                  <Icon.Phone />
                </div>
                <h3>Call Here</h3>
                <p>
                  <a href="tel:+919879058010">+91 9879058010</a>
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
