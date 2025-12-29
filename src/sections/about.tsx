import CoolPortraitCard from "@/components/cool-portrait-card";
import MotionDiv from "@/components/motion-div";

export default function about() {
  return (
    <section
      id="about"
      className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
    >
      <div className="order-2 lg:order-1 lg:w-2/3">
        <MotionDiv delayOffset={0.2}>
          <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
        </MotionDiv>
        <article className="flex flex-col gap-4">
          <MotionDiv delayOffset={0.4}>
            <p>
              Hello, I'm Hans Jiang and my Chinese name is
              <span className="whitespace-nowrap"> 江哲宇 (jiāng zhé yǔ)</span>
              . I'm a sophomore at MIT studying <b>Mathematics and Computer Science</b>, driven by a curiosity about how abstract ideas turn into systems that shape real lives. I enjoy working at the intersection of theory and application, whether that's algorithms, machine learning, or the infrastructure that quietly powers decisions in the world around us. I'm especially drawn to questions of robustness, generalization, and responsibility in modern AI systems.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.5}>
            <p>
              Beyond coursework, I'm passionate about understanding technology in context. I think a lot about how models are trained, the social and societal implications of technologies, and what it means to deploy systems in high-stakes settings like healthcare, finance, or public safety. I'm equally interested in quantitative finance and investing, not just as markets, but as complex systems where math, incentives, and human behavior collide.
            </p>
          </MotionDiv>
          <MotionDiv delayOffset={0.6}>
            <p>
              Outside the classroom, you'll often find me chasing movement and momentum: skiing first chair on a bluebird day, exploring trees and off-piste terrain, skateboarding, or spending time outdoors to reset my thinking. Or you can will find me quietly sipping latte or tea, watching sunrise/sunset from the windows. I care deeply about growth, both technical and personal, and I'm motivated by building things that are not only clever, but meaningful. Long term, I want to contribute to technology that is rigorous, humane, and genuinely useful.
            </p>
          </MotionDiv>
        </article>
      </div>
      <div className="lg:order-2 lg:w-1/3">
        <MotionDiv delayOffset={0.4}>
          <CoolPortraitCard className="hidden lg:block">
            <img
              src="/photo.jpeg"
              alt="photo"
              className="w-[350px] min-w-[300px] rounded-xl transition-all"
            />
          </CoolPortraitCard>
        </MotionDiv>
        <MotionDiv delayOffset={0.4}>
          <img
            src="/photo.jpeg"
            alt="photo"
            className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105 lg:hidden"
          />
        </MotionDiv>
      </div>
    </section>
  );
}
