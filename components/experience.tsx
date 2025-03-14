"use client"

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from "@/app/assets/lottie/code.json";
import AnimationLottie from "@/components/helper/animation-lottie";
import GlowCard from "@/components/helper/glow-card";
import section from "@/app/assets/svg/hero.svg";

function Experience() {
  return (
    <div id="experience" className="relative z-50 pb-16 px-4 sm:px-6 md:px-10 lg:px-16">
      <Image
        src={section || "/placeholder.svg"}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 w-full"
      />

      <div className="flex justify-center my-5 lg:py-6">
        <div className="flex items-center w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
          <span className="flex-grow h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] text-white px-4 py-2 text-sm sm:text-lg rounded-md mx-2">Experiences</span>
          <span className="flex-grow h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6">
        <div className="flex justify-center items-center w-full">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <AnimationLottie animationPath={experience} width={undefined} />
          </div>
        </div>

        <div>
          <div className="flex flex-col gap-4">
            {experiences.map((experience) => (
              <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                <div className="p-4 relative">
                  <Image
                    src={section || "/placeholder.svg"}
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80 w-full"
                  />
                  <div className="flex justify-center mb-2">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">{experience.duration}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-x-6 px-3 py-4">
                    <div className="text-violet-500 transition-all duration-300 hover:scale-125 mb-3 sm:mb-0">
                      <BsPersonWorkspace size={32} />
                    </div>
                    <div className="text-center sm:text-left">
                      <p className="text-sm sm:text-lg font-medium uppercase mb-1">{experience.title}</p>
                      <p className="text-xs sm:text-base">{experience.company}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
