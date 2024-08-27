import Section from "./Section";
import React from "react";
import { curve, tannerFace } from "../assets";
import { BackgroundCircles, Gradient } from "./design/Hero";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div
          className="relative z-1 max-w-[62] mx-auto text-center 
        mb-[4rem] mb:mb-20 lg:mb:[6rem]"
        >
          <h1 className="h1 mb-6">
            {" "}
            <span className="inline-block relative">
              Tanner Witte - Developer{" "}
              <img
                src={curve}
                className="absolute top-full left-0
                w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            <br />
            Successful graduate with a bachelors in Computer Science and a
            passion for software engineering and development. Seeking a
            fulfilling and engaging employment experience to continually
            challenge my intellect, expertise, and to expand my knowledge and
            skill set in the field
          </p>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 roudned-[1rem]">
              <div className="h-[.4rem] bg-n-5 rounded-t-[0.9rem]" />

              <div
                className="aspect-[33/40] rounded-b-[0.9] overflow-hidden 
              md:aspect[688/490] lg:aspect-[1024/590]"
              >
                <img
                  src={tannerFace}
                  className="w-full scale-[1.2] -translate-y-[10%] lg:scale-[1]
                  lg:-translate-y-[37%]"
                  width={1024}
                  height={490}
                  alt="face"
                />
              </div>
            </div>

            <Gradient />
          </div>
          <BackgroundCircles />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
