"use client";

import { useState } from "react";

type Phase = {
  id: number;
  title: string;
  tone: string;
  sections: { heading: string; items: string[] }[];
};

const phases: Phase[] = [
  {
    id: 1,
    title: "Phase 1: Development and Beta Testing (3 months)",
    tone: "rd1",
    sections: [
      {
        heading: "1. Platform Development",
        items: [
          "Develop the core features of AlphaXBot, including signal generation, buy/sell options, and user interface.",
          "Integrate onchain analysis and AI algorithms for accurate signal generation.",
          "Ensure compatibility with multiple blockchain networks.",
        ],
      },
      {
        heading: "2. Beta Testing",
        items: [
          "Conduct rigorous testing of the platform's functionality, performance, and security.",
          "Gather feedback from beta testers to identify bugs, usability issues, and areas for improvement.",
          "Iterate on the platform based on beta test results.",
        ],
      },
      {
        heading: "3. Community Building",
        items: [
          "Start building an online community through social media channels, forums, and outreach efforts.",
          "Engage with potential users to generate interest and gather feedback on desired features.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Phase 2: Launch and Early Adoption (3 months)",
    tone: "rd2",
    sections: [
      {
        heading: "1. Platform Launch",
        items: [
          "Officially launch AlphaXBot to the public with a targeted marketing campaign.",
          "Highlight the platform's unique features, benefits, and competitive advantages.",
        ],
      },
      {
        heading: "2. User Acquisition",
        items: [
          "Implement user acquisition strategies to attract traders from various backgrounds and experience levels.",
          "Offer promotional deals or incentives to encourage early adoption and user engagement.",
        ],
      },
      {
        heading: "3. User Support and Feedback",
        items: [
          "Provide responsive customer support to address user inquiries, issues, and feedback.",
          "Continuously gather user feedback to identify areas for improvement and feature enhancements.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Phase 3: Expansion and Optimization (6 months)",
    tone: "rd3",
    sections: [
      {
        heading: "1. Feature Expansion",
        items: [
          "Expand the platform's feature set based on user feedback and market trends.",
          "Introduce new functionalities such as advanced trading options, portfolio management tools, and analytics.",
        ],
      },
      {
        heading: "2. Community Growth",
        items: [
          "Scale up community-building efforts to grow the user base and foster a vibrant trading community.",
          "Organize webinars, workshops, and events to educate users and facilitate knowledge sharing",
        ],
      },
      {
        heading: "3. Partnerships and Integrations",
        items: [
          "Forge partnerships with exchanges, DeFi protocols, and other blockchain projects to enhance interoperability and functionality.",
          "Explore integration opportunities with third-party tools and services to provide added value to users.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Phase 4: Scaling and Sustainability (Ongoing)",
    tone: "rd4",
    sections: [
      {
        heading: "1. Scalability",
        items: [
          "Continuously optimize the platform's infrastructure to handle increasing user traffic and activity.",
          "Monitor performance metrics and implement scalability solutions as needed.",
        ],
      },
      {
        heading: "2. Monetization Strategies",
        items: [
          "Implement monetization strategies such as subscription plans, premium features, and referral programs.",
          "Explore additional revenue streams such as data licensing and sponsored content.",
        ],
      },
      {
        heading: "3. Regulatory Compliance",
        items: [
          "Stay updated on regulatory developments and ensure compliance with relevant laws and regulations.",
          "Implement robust security and data protection measures to safeguard user assets and privacy.",
        ],
      },
      {
        heading: "4. Continuous Improvement",
        items: [
          "Prioritize ongoing development, optimization, and innovation to maintain AlphaXBot's competitive edge in the market.",
          "Solicit user feedback and conduct market research to inform product roadmap decisions and future iterations.",
        ],
      },
    ],
  },
];

export default function Roadmap() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="roadmap"
      className="bg-white flex flex-col items-center justify-center px-[20px] overflow-hidden py-[50px] lg:py-[100px] relative"
    >
      <h2 className="text-navy mb-[40px] font-[600] font-syne text-[28px] lg:text-[36px] text-center z-20">
        Roadmap
      </h2>
      <div className="w-full lg:w-[70%] text-black grid gap-[20px] 2xl:container">
        {phases.map((phase) => {
          const open = active === phase.id;
          return (
            <div
              key={phase.id}
              className={`${open ? "h-fit" : "h-[70px]"} ${phase.tone} rounded-[10px] lg:rounded-[12px] transition-all overflow-hidden`}
            >
              <button
                type="button"
                onClick={() => setActive((v) => (v === phase.id ? 0 : phase.id))}
                className="w-full h-[70px] p-[10px_20px] flex items-center justify-between cursor-pointer text-left"
                aria-expanded={open}
              >
                <p className="text-white font-syne text-[18px] leading-[20px] lg:leading-[35px] lg:text-[30px]">
                  {phase.title}
                </p>
                <span className="text-white text-[28px] leading-none" aria-hidden>
                  {open ? "▴" : "▾"}
                </span>
              </button>
              <div className="bg-white m-[10px_20px] p-[10px] rounded-[6px] flex flex-col space-y-[10px]">
                {phase.sections.map((section) => (
                  <div key={section.heading}>
                    <p className="font-syne text-[18px] font-[600] text-navy">
                      {section.heading}
                    </p>
                    <ul className="font-syne list-disc px-[20px]">
                      {section.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
