import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface CarouselIProps {
  alt: string;
  images: string[];
}

export const CarouselItem = ({ images, alt }: CarouselIProps) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      infiniteLoop
      autoPlay
      interval={4000}
    >
      {images.map((item, index) => (
        <div key={index}>
          <img
            src={item}
            alt={alt}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      ))}
    </Carousel>
  );
};
