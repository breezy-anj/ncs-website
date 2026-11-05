"use client";
import * as React from "react";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  staggerDelay?: number;
}

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  staggerDelay = 0.04,
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "0px 0px -50px 0px" });
  const wordsArray = words.trim().split(/\s+/);

  useEffect(() => {
    if (isInView && scope.current) {
      animate(
        "span",
        {
          opacity: 1,
          filter: filter ? "blur(0px)" : "none",
        },
        {
          duration: duration ? duration : 0.5,
          delay: stagger(staggerDelay),
        }
      );
    }
  }, [isInView, filter, duration, staggerDelay, animate, scope]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <React.Fragment key={`${word}-${idx}`}>
              <motion.span
                className="opacity-0 inline-block text-inherit font-['Satoshi',Arial,sans-serif]"
                style={{
                  filter: filter ? "blur(8px)" : "none",
                }}
              >
                {word}
              </motion.span>
              {idx < wordsArray.length - 1 ? " " : ""}
            </React.Fragment>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-['Satoshi',Arial,sans-serif]", className)}>
      {renderWords()}
    </div>
  );
};

export default TextGenerateEffect;

