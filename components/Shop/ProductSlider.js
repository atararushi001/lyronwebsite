import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";

const ProductSlider = ({ images }) => {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="products-details-image"
      >
        {images &&
          images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="single-image-box">
                <Image src={img.img} alt="img" width={262} height={320} />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default ProductSlider;
