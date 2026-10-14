"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export interface TimelineItemProps {
  title: string;
  description: string;
  date: string;
  image?: string;
  className?: string;
}

export interface TimelineProps {
  items: TimelineItemProps[];
  className?: string;
}

const TimelineItem = ({
  title,
  description,
  date,
  image,
  index,
}: TimelineItemProps & { index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 items-center md:gap-0 gap-6">
      <div
        className={cn(
          "flex flex-col justify-center p-0 md:p-12 z-10",
          isEven ? "md:items-end md:text-right" : "md:order-2"
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col gap-3"
        >
          <div className="space-y-2 font-satoshi">
            <p className="text-lg md:text-xl text-white/50 font-normal font-satoshi">
              ({date})
            </p>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-white font-satoshi">
              {title}
            </h3>
          </div>
          <p className="text-base md:text-lg text-white/70 leading-relaxed font-satoshi">
            {description}
          </p>
        </motion.div>
      </div>

      <div
        className={cn(
          "flex items-center justify-center p-0 md:p-12 z-10",
          isEven ? "md:order-2" : ""
        )}
      >
        {image ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
          >
            <img
              src={image}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[420px] aspect-16/9 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent p-6 flex flex-col justify-between backdrop-blur-sm shadow-xl font-satoshi"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-white/40 font-satoshi">
                Milestone
              </span>
              <span className="text-sm font-semibold text-white/60 font-satoshi">
                {date || `0${index + 1}`}
              </span>
            </div>
            <p className="text-lg font-medium text-white/90 font-satoshi">
              {title}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export const Timeline = ({ items, className }: TimelineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const dotTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className={cn("relative md:px-0 font-satoshi", className)}>
      <div className="absolute md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2 bg-white/10" />
      <div className="absolute md:left-1/2 top-0 bottom-0 w-px md:-translate-x-1/2">
        <motion.div
          style={{ scaleY: scrollYProgress, originY: 0 }}
          className="absolute inset-0 bg-white w-full"
        />
        <motion.div
          style={{ top: dotTop }}
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 h-4 w-4 rounded-full border-4 border-black bg-white shadow-lg md:block hidden"
        />
      </div>

      <div className="flex flex-col md:px-0 px-6 md:py-0 py-8 md:gap-0 gap-12">
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
