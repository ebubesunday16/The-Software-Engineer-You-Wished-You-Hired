'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

// Component for individual paragraph with reading effect
function ReadingParagraph({ children, index }: { children: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.6, 1]);
  const filter = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["blur(4px)", "blur(1px)", "blur(0px)"]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity, filter }}
      className="mb-6 text-lg leading-relaxed"
    >
      {children}
    </motion.div>
  );
}

// Main component
export default function ReadingExperience() {
  const paragraphs = [
    "As you begin your journey through this text, notice how the words gradually come into focus. This simulates the natural reading experience where your attention flows from one section to the next.",
    "The skeleton effect creates anticipation for what's coming next. Each paragraph emerges from obscurity as you scroll, guiding your attention and creating a more immersive reading experience.",
    "This technique is particularly effective for long-form content, storytelling, or educational materials. It encourages users to engage with the content at a comfortable pace.",
    "The blur and opacity transitions work together to create a sense of depth. Unread text appears distant and unclear, while the current reading position comes into sharp focus.",
    "You can customize the scroll thresholds, animation curves, and visual effects to match your brand's aesthetic. The key is maintaining readability while adding visual interest.",
    "Notice how the text ahead remains partially visible, providing context without overwhelming. This creates a natural flow that mimics how we actually read and process information.",
    "The animation is performance-optimized using Framer Motion's useTransform, which runs on the GPU. This ensures smooth scrolling even with multiple animated elements on the page.",
    "Consider using this effect strategically - not every piece of text needs it. Reserve it for hero sections, key narratives, or moments where you want to slow down and focus the reader's attention.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 sticky top-0">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-slate-100"
        >
          Reading Experience Demo
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-slate-600 dark:text-slate-400 mb-16 text-lg"
        >
          Scroll down to see the reading simulation effect in action
        </motion.p>

        <div className="text-slate-700 dark:text-slate-300">
          {paragraphs.map((text, index) => (
            <ReadingParagraph key={index} index={index}>
              {text}
            </ReadingParagraph>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center text-slate-500 dark:text-slate-400"
        >
          You've reached the end ✨
        </motion.div>
      </div>
    </div>
  );
}