import React from "react";
import Slider from "react-slick";
import * as Icon from "react-feather";
import Image from "next/image";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="next-arrow slick-arrow" onClick={onClick}>
      <Icon.ArrowRight />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button className="prev-arrow slick-arrow" onClick={onClick}>
      <Icon.ArrowLeft />
    </button>
  );
};

class Feedback extends React.Component {
  state = {
    imagesSlider: null,
    thumbnailsSlider: null,
    oldSlide: 0,
    activeSlide: 0,
    activeSlide2: 0,
  };

  componentDidMount() {
    this.setState({
      imagesSlider: this.slider1,
      thumbnailsSlider: this.slider2,
    });
  }

  renderSliderFullContent = () => {
    return DEFAULT_PROPS.map(({ name, profession, content }) => {
      return (
        <div key={name}>
          <div className="item">
            <div className="single-feedback">
              <h3>{name}</h3>
              <span>{profession}</span>
              <p>{content}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  renderSliderImages = () => {
    return DEFAULT_PROPS.map(({ name }) => {
      return (
        <div key={name}>
          <div className="item">
            {/* <div className="img-fill">
              {name}
            </div> */}
          </div>
        </div>
      );
    });
  };

  render() {
    const sliderSettings1 = {
      speed: 100,
      slidesToShow: 1,
      slidesToScroll: 1,
      cssEase: "linear",
      fade: true,
      autoplay: true,
      draggable: true,
      asNavFor: this.state.thumbnailsSlider,
      draggable: false,
      arrows: false,
      nextArrow: false,
      prevArrow: false,
    };

    const sliderSettings2 = {
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 1,
      cssEase: "linear",
      autoplay: true,
      centerMode: true,
      draggable: false,
      focusOnSelect: true,
      asNavFor: this.state.imagesSlider,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      beforeChange: (current, next) =>
        this.setState({ oldSlide: current, activeSlide: next }),
      afterChange: (current) => this.setState({ activeSlide2: current }),
    };

    return (
      <>
        <section className="feedback-area ptb-80 bg-f7fafd">
          <div className="container">
            <div className="section-title">
              <h2>What Users Are Saying</h2>
              <div className="bar"></div>
              <p>
                Hear what our clients have to say about their experience with our exceptional services.
              </p>
            </div>

            <div className="feedback-slides">
              <div className="client-feedback">
                <div>
                  <Slider
                    ref={(slider) => (this.slider1 = slider)}
                    {...sliderSettings1}
                  >
                    {this.renderSliderFullContent()}
                  </Slider>
                </div>
              </div>

              <div className="client-thumbnails">
                <div>
                  <Slider
                    ref={(slider) => (this.slider2 = slider)}
                    {...sliderSettings2}
                  >
                    {this.renderSliderImages()}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const DEFAULT_PROPS = [
  {
    name: "Sophia Carter",
    profession: "Tech Entrepreneur",
    content:
      "Working with this company was an absolute pleasure. Their professionalism and expertise are unmatched. They transformed our vision into a seamless product. Highly recommend!",
  },
  {
    name: "Liam Smith",
    profession: "Product Manager",
    content:
      "The team went above and beyond to ensure our project was a success. Their dedication and attention to detail are commendable.",
  },
  {
    name: "Olivia Brown",
    profession: "UI/UX Designer",
    content:
      "Their innovative approach and user-centric design principles have left me thoroughly impressed. A great team to work with!",
  },
  {
    name: "Noah Wilson",
    profession: "Software Engineer",
    content:
      "Excellent communication and timely delivery. Their technical expertise is evident in the quality of their work.",
  },
];

export default Feedback;