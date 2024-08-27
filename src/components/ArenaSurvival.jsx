import Section from "./Section";
import Heading from "./Heading";
import { ASGif } from "../assets";
import Button from "./Button";
import { check } from "../assets";
import { SectionLine } from "./design/Divider";

const ArenaSurvival = () => {
  return (
    <Section className="overflow-hidden" id="arena-survival">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Arena Survival - The Game"
        />
        <div className="flex flex-wrap gap-10 mb-10">
          <div className="relative p-.5 bg-no-repeat bg-[length:100%_100%] ">
            <div className="w-[19rem] max-lg:w-full h-full px-14 bg-n-8 border border-x-color-1 border-y-color-5 rounded-[2rem] lg:w-auto py-12">
              <div className="relative">
                <div className="w-full m-auto relative group">
                  <div className="w-full h-full rounded2xl">
                    <img src={ASGif} alt="ASGif" />
                  </div>
                </div>

                <div className="min-h-[3rem]"></div>

                <Button
                  className="w-full mb-6"
                  href="https://github.com/twitte2/ArenaSurvival"
                >
                  See code on Github
                </Button>

                <ul>
                  <li className="flex items-start py-5 border-5 border-n-6">
                    <img src={check} width={24} height={24} alt="Check" />
                    <p className="body-2 ml-4">
                      This game is my first dive into game development and was
                      built entirely in Godot
                    </p>
                  </li>
                  <li className="flex items-start py-5 border-5 border-n-6">
                    <img src={check} width={24} height={24} alt="Check" />
                    <p className="body-2 ml-4">
                      It includes many feautures expected in a full fledged
                      game, including movement, enemies, enemy AI, health,
                      experience, leveling up, upgrades, additional weapons,
                      victory and defeat screens, an options page, custom
                      animations for all of the above and more! Also it includes
                      sound effects and background music that are not displayed
                      in the above gif, you'll just have to play for yourself to
                      hear it!
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

export default ArenaSurvival;
