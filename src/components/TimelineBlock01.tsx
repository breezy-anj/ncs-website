"use client";

import Timeline from "@/components/ui/timeline-01-utils/timeline";
import { Badge } from "@/components/ui/badge";

const timelineData = [
  {
    title: "Curiosity Into Creation",
    description:
      "Every great journey begins with a question. At NCS, students explore technology, discover their interests, and find the confidence to turn curiosity into creation.",
    date: "01",
  },
  {
    title: "Professional Mindset",
    description:
      "Deadlines, responsibilities, teamwork, and accountability become part of the journey. We help students develop the mindset that the professional world expects.",
    date: "02",
  },
  {
    title: "Hands-On Experience",
    description:
      "From writing the first line of code to designing an interface or developing a complete project, we turn learning into hands-on experience and ideas into something real.",
    date: "03",
  },
  {
    title: "Growing Together",
    description:
      "Behind every project, hackathon, and breakthrough are people who challenge, support, and inspire each other. At NCS, we grow together and celebrate every win together.",
    date: "04",
  },
  {
    title: "Voice & Communication",
    description:
      "Great minds need more than great ideas. Through discussions, presentations, and shared experiences, students learn to communicate confidently and make their ideas heard.",
    date: "05",
  },
  {
    title: "Who We Become",
    description:
      "We come together as students with potential and grow into programmers, developers, designers, and professionals ready to take on new challenges. Because NCS isn't just about what we build — it's about who we become.",
    date: "06",
  },
];

const TimelineBlock01 = () => {
  return (
    <section className="overflow-hidden w-full py-12 md:py-20 font-satoshi">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 font-satoshi">
        <div className="border-x border-b border-white/10 px-6 py-10 md:px-10 md:py-16 lg:px-16 lg:py-20 rounded-t-3xl bg-white/[0.02] backdrop-blur-sm">
          <div className="max-w-2xl space-y-4 font-satoshi">
            <Badge
              variant="outline"
              className="rounded-full px-3.5 py-1 text-xs font-normal border-white/20 text-white/80 bg-white/5 font-satoshi"
            >
              What We Do
            </Badge>
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white font-satoshi">
                What we do at NCS?
              </h2>
              <p className="md:text-lg text-base text-white/60 leading-relaxed font-satoshi">
                From exploring new technologies to building impactful real-world projects, here is how we learn, grow, and build together.
              </p>
            </div>
          </div>
        </div>
        <div className="md:border-x border-r border-white/10 bg-white/[0.01]">
          <Timeline items={timelineData} />
        </div>
        <div className="border-x border-t border-white/10 h-18 md:h-28 rounded-b-3xl bg-white/[0.02]" />
      </div>
    </section>
  );
};

export default TimelineBlock01;
