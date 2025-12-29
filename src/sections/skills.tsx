import MotionDiv from "@/components/motion-div";
import MotionList from "@/components/motion-list";
import Image, { StaticImageData } from "next/image";
import reactIcon from "@/assets/icons/react.png";
import pythonIcon from "@/assets/icons/python.png";
import html5Icon from "@/assets/icons/html5.png";
import tailwindcssIcon from "@/assets/icons/tailwindcss.png";
import pnpmIcon from "@/assets/icons/pnpm.png";
import gitIcon from "@/assets/icons/git.png";
import macosIcon from "@/assets/icons/macos.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import arcIcon from "@/assets/icons/arc.png";
import warpIcon from "@/assets/icons/warp.webp";
import githubActionsIcon from "@/assets/icons/github-actions.png";
export default function skills() {
  // TODO: Add missing technology icons to /src/assets/icons/
  // Missing icons: C#, Django, FastAPI, NumPy, Pandas, Matplotlib, SciPy,
  // Scikit-learn, TensorFlow, PyTorch, Hugging Face, OpenCV, YOLOv11,
  // PyCharm, Comet Browser, Cursor, Claude Code, Unity, Photoshop,
  // Illustrator, Fusion 360

  const data = [
    {
      title: "Languages",
      skills: [
        {
          name: "Python",
          icon: pythonIcon,
        },
        {
          name: "C#",
          icon: pythonIcon, // TODO: Add C# icon
        },
      ],
    },
    {
      title: "Web Development",
      skills: [
        {
          name: "React",
          icon: reactIcon,
        },
        {
          name: "HTML5",
          icon: html5Icon,
        },
        {
          name: "Tailwind CSS",
          icon: tailwindcssIcon,
        },
        {
          name: "Django",
          icon: pythonIcon, // TODO: Add Django icon
        },
        {
          name: "FastAPI",
          icon: pythonIcon, // TODO: Add FastAPI icon
        },
      ],
    },
    {
      title: "Data Science & ML",
      skills: [
        {
          name: "NumPy",
          icon: pythonIcon, // TODO: Add NumPy icon
        },
        {
          name: "Pandas",
          icon: pythonIcon, // TODO: Add Pandas icon
        },
        {
          name: "Matplotlib",
          icon: pythonIcon, // TODO: Add Matplotlib icon
        },
        {
          name: "SciPy",
          icon: pythonIcon, // TODO: Add SciPy icon
        },
        {
          name: "Scikit-learn",
          icon: pythonIcon, // TODO: Add Scikit-learn icon
        },
        {
          name: "TensorFlow",
          icon: pythonIcon, // TODO: Add TensorFlow icon
        },
        {
          name: "PyTorch",
          icon: pythonIcon, // TODO: Add PyTorch icon
        },
        {
          name: "Hugging Face",
          icon: pythonIcon, // TODO: Add Hugging Face icon
        },
        {
          name: "OpenCV",
          icon: pythonIcon, // TODO: Add OpenCV icon
        },
        {
          name: "YOLOv11",
          icon: pythonIcon, // TODO: Add YOLOv11 icon
        },
      ],
    },
    {
      title: "DevOps",
      skills: [
        {
          name: "Git",
          icon: gitIcon,
        },
        {
          name: "GitHub Actions",
          icon: githubActionsIcon,
        },
      ],
    },
    {
      title: "Development Tools",
      skills: [
        {
          name: "VS Code",
          icon: vscodeIcon,
        },
        {
          name: "PyCharm",
          icon: pythonIcon, // TODO: Add PyCharm icon
        },
        {
          name: "PNPM",
          icon: pnpmIcon,
        },
        {
          name: "Arc Browser",
          icon: arcIcon,
        },
        {
          name: "Comet Browser",
          icon: arcIcon, // TODO: Add Comet icon
        },
        {
          name: "Warp Terminal",
          icon: warpIcon,
        },
        {
          name: "Cursor",
          icon: vscodeIcon, // TODO: Add Cursor icon
        },
        {
          name: "Claude Code",
          icon: vscodeIcon, // TODO: Add Claude Code icon
        },
        {
          name: "macOS",
          icon: macosIcon,
        },
      ],
    },
    {
      title: "Creative & Design",
      skills: [
        {
          name: "Unity Engine",
          icon: pythonIcon, // TODO: Add Unity icon
        },
        {
          name: "Photoshop",
          icon: pythonIcon, // TODO: Add Photoshop icon
        },
        {
          name: "Illustrator",
          icon: pythonIcon, // TODO: Add Illustrator icon
        },
        {
          name: "Fusion 360",
          icon: pythonIcon, // TODO: Add Fusion 360 icon
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center text-center"
    >
      <MotionDiv>
        <h2 className="mb-4">My Skills</h2>
      </MotionDiv>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <MotionDiv key={index}>
            <div className="mb-6 md:px-2">
              <h3>{item.title}</h3>
              <MotionList className="flex flex-wrap justify-evenly gap-0 md:gap-5 md:px-6 lg:justify-center">
                {item.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </MotionList>
            </div>
          </MotionDiv>
        ))}
      </div>
    </section>
  );
}

function SkillCard({ icon, name }: { icon: StaticImageData; name: string }) {
  return (
    <div className="group rounded-xl border-none p-5 text-center shadow-none transition-all duration-200 ease-linear hover:scale-110 hover:drop-shadow-xl">
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-16 w-16 items-center justify-center">
          <Image src={icon} alt={name} priority />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}
