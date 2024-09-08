"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const NasheedSchoolContent = [
  {
    title: "Discover Your Sound with Us: A Personal Journey in Nasheed Mastery",
    description:
      "Embark on a Nasheedal journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our Nasheed school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Discover Your Sound with Us: A Personal Journey in Nasheed Mastery",
    description:
      "Embark on a Nasheedal journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our Nasheed school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Discover Your Sound with Us: A Personal Journey in Nasheed Mastery",
    description:
      "Embark on a Nasheedal journey that’s uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our Nasheed school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
  },
  {
    title: "Live Feedback & Engagement",
    description:
      "Immerse yourself in an interactive learning experience where feedback is immediate, just like real-time changes in a collaborative project. This approach enhances your understanding and mastery of Nasheed concepts and performance techniques.",
  },
  {
    title: "Cutting-Edge Curriculum",
    description:
      "Our curriculum is continuously updated to include the latest Nasheed education trends and technologies, ensuring you’re always learning with the most current and effective methods. Say goodbye to outdated materials and welcome an education that evolves with the industry.",
  },
  {
    title: "Limitless Learning Opportunities",
    description:
      "With our expansive resource library and dynamic course offerings, you’ll never find yourself without something new to explore. Our platform provides continuous opportunities for growth, ensuring your Nasheedal skills are always advancing.",
  },
];
// export function StickyScrollRevealDemo() {
//   return (
//     <div className="p-10">
//       <StickyScroll content={NasheedSchoolContent} />
//     </div>
//   );
// }

export default function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={NasheedSchoolContent} />
    </div>
  );
}
