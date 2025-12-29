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
import csharpIcon from "@/assets/icons/CSharpIcon.svg";
import djangoIcon from "@/assets/icons/Django Icon.svg";
import fastapiIcon from "@/assets/icons/FastAPI Icon.svg";
import numpyIcon from "@/assets/icons/NumPy Icon.svg";
import pandasIcon from "@/assets/icons/Pandas Icon.svg";
import matplotlibIcon from "@/assets/icons/Matplotlib Icon.svg";
import scikitLearnIcon from "@/assets/icons/Scikit-learn Icon.svg";
import tensorflowIcon from "@/assets/icons/TensorFlow Icon.svg";
import pytorchIcon from "@/assets/icons/PyTorch Icon.svg";
import huggingFaceIcon from "@/assets/icons/Hugging Face.svg";
import opencvIcon from "@/assets/icons/OpenCV Icon.svg";
import pycharmIcon from "@/assets/icons/PyCharm Icon.svg";
import cometIcon from "@/assets/icons/Comet.webp";
import cursorIcon from "@/assets/icons/Cursor.png";
import claudeCodeIcon from "@/assets/icons/Claude Code.png";
import anacondaIcon from "@/assets/icons/Anaconda Icon.svg";
import arduinoIcon from "@/assets/icons/Arduino Icon.svg";
import powershellIcon from "@/assets/icons/Powershell Icon.svg";
import gitlabIcon from "@/assets/icons/GitLab Icon.svg";
import unityIcon from "@/assets/icons/Unity Icon.svg";
import photoshopIcon from "@/assets/icons/Adobe Photoshop Icon.svg";
import illustratorIcon from "@/assets/icons/Adobe Illustrator Icon.svg";
import fusion360Icon from "@/assets/icons/Fusion 360.png";
import unityCertIcon from "@/assets/icons/Unity Certified Developer.png";
export default function skills() {
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
          icon: csharpIcon,
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
          icon: djangoIcon,
        },
        {
          name: "FastAPI",
          icon: fastapiIcon,
        },
      ],
    },
    {
      title: "Data Science & ML",
      skills: [
        {
          name: "NumPy",
          icon: numpyIcon,
        },
        {
          name: "Pandas",
          icon: pandasIcon,
        },
        {
          name: "Matplotlib",
          icon: matplotlibIcon,
        },
        {
          name: "Scikit-learn",
          icon: scikitLearnIcon,
        },
        {
          name: "TensorFlow",
          icon: tensorflowIcon,
        },
        {
          name: "PyTorch",
          icon: pytorchIcon,
        },
        {
          name: "Hugging Face",
          icon: huggingFaceIcon,
        },
        {
          name: "OpenCV",
          icon: opencvIcon,
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
        {
          name: "GitLab",
          icon: gitlabIcon,
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
          icon: pycharmIcon,
        },
        {
          name: "PNPM",
          icon: pnpmIcon,
        },
        {
          name: "Arc",
          icon: arcIcon,
        },
        {
          name: "Comet",
          icon: cometIcon,
        },
        {
          name: "Warp",
          icon: warpIcon,
        },
        {
          name: "Cursor",
          icon: cursorIcon,
        },
        {
          name: "Claude Code",
          icon: claudeCodeIcon,
        },
        {
          name: "macOS",
          icon: macosIcon,
        },
        {
          name: "Anaconda",
          icon: anacondaIcon,
        },
        {
          name: "Arduino",
          icon: arduinoIcon,
        },
        {
          name: "PowerShell",
          icon: powershellIcon,
        },
      ],
    },
    {
      title: "Creative & Design",
      skills: [
        {
          name: "Unity Engine",
          icon: unityIcon,
        },
        {
          name: "Photoshop",
          icon: photoshopIcon,
        },
        {
          name: "Illustrator",
          icon: illustratorIcon,
        },
        {
          name: "Fusion 360",
          icon: fusion360Icon,
        },
      ],
    },
    {
      title: "Certifications",
      skills: [
        {
          name: "Unity Certified Developer",
          icon: unityCertIcon,
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
