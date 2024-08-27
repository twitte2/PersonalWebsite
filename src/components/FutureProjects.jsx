import Section from "./Section";
import Heading from "./Heading";
import { check, stayTuned } from "../assets";
import { SectionLine } from "./design/Divider";

const FutureProjects = () => {
  return (
    <Section className="overflow-hidden" id="future-projects">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Future Projects" />
        <div className="flex flex-wrap gap-10 mb-10">
          <div className="container p-.5 bg-no-repeat bg-[length:100%_100%] ">
            <div className="w-[19rem] max-lg:w-full h-full px-14 bg-n-8 border border-x-color-1 border-y-color-5 rounded-[2rem] lg:w-auto py-12">
              <div className="relative">
                <p className="body-2 min-h-[4rem] mb-3 text-center">
                  I plan to add more projects that I complete in the future
                  here, so stay tuned if you are interested!
                </p>

                <div>
                  <img src={stayTuned} className="container" alt="stayTuned" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionLine />
    </Section>
  );
};

export default FutureProjects;
