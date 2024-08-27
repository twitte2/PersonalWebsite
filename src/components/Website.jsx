import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { check } from "../assets";
import { SectionLine } from "./design/Divider";

const Website = () => {
  return (
    <Section className="overflow-hidden" id="personal-website">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Personal Website"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          <div className="relative p-.5 bg-no-repeat bg-[length:100%_100%] ">
            <div className="w-[19rem] max-lg:w-full h-full px-14 bg-n-8 border border-x-color-1 border-y-color-5 rounded-[2rem] lg:w-auto py-12">
              <div className="relative">
                <p className="body-2 min-h-[4rem] mb-3 text-center">
                  This website itself was a fun project with the end goal of not
                  only displaying some of my other works, but learning something
                  new along the way. There are many small and unneccesary visual
                  features I spend too much time implementing correctly but I
                  wanted to challenge myself to learn and make something I had
                  never done before!
                </p>

                <Button
                  className="w-full mb-6 mt-6"
                  href="https://github.com/twitte2/PersonalWebsite"
                >
                  See code on Github
                </Button>

                <ul>
                  <li className="flex items-start py-5 border-5 border-n-6">
                    <img src={check} width={24} height={24} alt="Check" />
                    <p className="body-2 ml-4">
                      The website was built using React and served as a project
                      to sharpen up my skills and to learn and work with some
                      new tools, specifically Next.js and Tailwind CSS.
                    </p>
                  </li>
                  <li className="flex items-start py-5 border-5 border-n-6">
                    <img src={check} width={24} height={24} alt="Check" />
                    <p className="body-2 ml-4">
                      {" "}
                      The website also includes full mobile support, so please
                      check it out on your phone as well if you are viewing on
                      desktop!
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

export default Website;
