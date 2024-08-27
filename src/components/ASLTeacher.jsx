import Section from "./Section";
import Heading from "./Heading";
import { aslex1, aslex2, aslex3, aslex4 } from "../assets";
import Button from "./Button";
import { check } from "../assets";
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { SectionLine } from "./design/Divider";

const ASLTeacher = () => {
  const images = [aslex1, aslex2, aslex3, aslex4];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <Section className="overflow-hidden" id="asl-smart-tutor">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="ASL Smart Tutor" />
        <div className="flex flex-wrap gap-10 mb-10">
          <div className="relative p-.5 bg-no-repeat bg-[length:100%_100%] ">
            <div className="w-[19rem] max-lg:w-full h-full px-14 bg-n-8 border border-x-color-1 border-y-color-5 rounded-[2rem] lg:w-auto py-12">
              <div className="relative">
                <div className="w-full m-auto relative group">
                  <div className="w-full h-full rounded2xl">
                    <img src={images[currentIndex]} alt="slideshowImage" />
                  </div>
                  <div className="md:hidden group-hover:block absolute  -translate-x-0 md:translate-y-[-550%] left-5 md:text-5xl text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={prevSlide} />
                  </div>
                  <div className="md:hidden group-hover:block absolute -translate-x-0 md:translate-y-[-550%] right-5 md:text-5xl text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={nextSlide} />
                  </div>
                  <div className="flex top-4 justify-center py-2">
                    {images.map((slide, slideIndex) => (
                      <div
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className="text-2xl cursor-pointer"
                      >
                        <RxDotFilled />
                      </div>
                    ))}
                  </div>
                </div>

                <p className="body-2 min-h-[4rem] mb-3 text-center">
                  Above here is the ASL (American Sign Language) Smart Tutor,
                  which utilizes the user's camera to help them to learn and
                  practice the ASL alphabet! The user can select any letter, and
                  see what the correct answer is supposed to look like. Upon
                  submission, it will tell them the letter that is recognized.
                  The user can practice creating the hand signs correctly until
                  the application recognizes them as correct! Once they have
                  learned how to sign them, they can remove the guidance and
                  practice the signs from memory. A great tool to begin learning
                  sign language!
                </p>

                <Button
                  className="w-full mb-6"
                  href="https://github.com/twitte2/ASLSmartTutor"
                >
                  See code on Github
                </Button>

                <ul>
                  <li className="flex items-start py-5 border-5 border-n-6">
                    <img src={check} width={24} height={24} alt="Check" />
                    <p className="body-2 ml-4">
                      The application works by taking the slice of the video
                      where the user's hand is, and through the use of machine
                      learning and image recogniztion, it can determine the
                      closest possible letter.
                    </p>
                  </li>
                  <li className="flex items-start py-5 border-5 border-n-6">
                    <img src={check} width={24} height={24} alt="Check" />
                    <p className="body-2 ml-4">
                      The algorithm is built in Python. It primarily uses OpenCV
                      and TensorFlow. OpenCV is a library for computer vision,
                      which deals with the analyzing and understand of images.
                      Tensor flow is a machine learning library. It was
                      invaluable for the training of the model to properly read
                      the input data.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionLine />
    </Section>
  );
};

export default ASLTeacher;
