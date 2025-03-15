import { educations } from "@/utils/data/education";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from '@/app/assets/lottie/study.json';
import AnimationLottie from "@/components/helper/animation-lottie";
import section from "@/app/assets/svg/hero.svg";
import blur from "@/app/assets/svg/blur-23.svg";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-10 md:my-16 border-[#25213b] px-4 md:px-8">
      <Image
        src={section}
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10 w-full object-cover"
      />
      
      <div className="flex justify-center my-6 md:my-10">
        <div className="flex items-center">
          <span className="w-12 md:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white px-4 py-2 text-lg md:text-xl rounded-md">
            Education
          </span>
          <span className="w-12 md:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
          {/* Animation Section */}
          <div className="flex justify-center">
            <div className="w-3/4 max-w-xs md:max-w-md">
              <AnimationLottie animationPath={lottieFile} width={undefined} />
            </div>
          </div>

          {/* Education Cards */}
          <div>
            <div className="flex flex-col gap-6">
              {educations.map((education) => (
                <div 
                  key={education.id}
                  className="relative rounded-lg overflow-hidden border-2 border-[#2a2649] transition-all duration-300 hover:scale-105 hover:border-[#2a2649] hover:shadow-lg hover:shadow-gray-50 bg-gray/60 backdrop-blur-sm"
                >
                  <div className="p-4 relative text-white">
                    <Image
                      src={blur}
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="text-center mb-2">
                      <p className="text-xs md:text-sm text-[#16f2b3]">{education.duration}</p>
                    </div>
                    <div className="flex items-center gap-4 md:gap-6 px-2 md:px-4 py-4">
                      <div className="text-violet-500 transition-transform duration-300 group-hover:scale-110 hover:text-[#16f2b3]">
                        <BsPersonWorkspace size={32} />
                      </div>
                      <div>
                        <p className="text-sm md:text-lg font-medium uppercase mb-1 transition-colors duration-300 hover:text-[#16f2b3]">{education.title}</p>
                        <p className="text-xs md:text-sm">{education.institution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;