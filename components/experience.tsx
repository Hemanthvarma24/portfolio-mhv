// @flow strict

import { experiences } from "@/utils/data/experience"
import Image from "next/image"
import { BsPersonWorkspace } from "react-icons/bs"
import experience from "@/app/assets/lottie/code.json"
import AnimationLottie from "@/components/helper/animation-lottie"
import GlowCard from "@/components/helper/glow-card"
import section from "@/app/assets/svg/hero.svg"

function Experience() {
  return (
    <div id="experience" className="relative z-50 pb-28">
      <Image
        src={section || "/placeholder.svg"}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">Experiences</span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pb-8 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8">
          <div className="flex justify-center items-start">
            <div className="w-full h-[10px]">
              <AnimationLottie animationPath={experience} width={undefined} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-4">
              {experiences.map((experience) => (
                <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
                  <div className="p-3 relative">
                    <Image
                      src={section || "/placeholder.svg"}
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">{experience.duration}</p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">{experience.title}</p>
                        <p className="text-sm sm:text-base">{experience.company}</p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience

