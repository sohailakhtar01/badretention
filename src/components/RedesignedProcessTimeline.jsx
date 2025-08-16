"use client";
import React, { useRef } from "react";
import { motion,useTransform, useScroll } from "framer-motion";
import {  useInView } from "framer-motion";
import { Phone, Search, FileText, Zap } from "lucide-react";
import clsx from "clsx";

// Timeline data
const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We get on a quick discovery session to uncover where your brand is leaking profit.",
    icon: Phone,
  },
  {
    step: "02",
    title: "Strategy & Audit",
    description:
      "We break down your current email, SMS, and post-purchase strategy — showing you exactly what’s costing you sales (and how we’ll fix it).",
    icon: Search,
  },
  {
    step: "03",
    title: "Actionable Proposal",
    description:
      " If we can’t prove how we’ll add 20–45% more revenue, risk-free, we don’t work together. Period.",
    icon: FileText,
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.4, delayChildren: 0.3 } },
};
const itemVariantsLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.5 },
  },
};
const itemVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 12, duration: 0.5 },
  },
};

function RedesignedProcessTimeline() {
   const ref = useRef(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"], 
  });

  // map scroll progress 0 → 1 into 0px → 100% height
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative bg-black mt-[-90px]  text-white px-4 py-16  font-sans"
    >
      <div
        className="absolute  inset-y-0 mt-[20px] rounded-xl  w-full h-full
          bg-[radial-gradient(circle_at_top_right,rgba(255,0,0,0.6)_0%,rgba(0,0,0,0.95)_30%,#000_100%)]
          before:content-[''] before:absolute before:inset-0
          before:bg-[linear-gradient(to_right,rgba(255,0,0,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,0,0,0.2)_1px,transparent_1px)]
          before:bg-[size:60px_60px]
          z-0"
      />
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        

        {/* Title */}
       <div className="flex flex-col items-center  justify-center w-full px-4 text-center mt-[90px] xl:mt-[30px] mb-8">


  <h1 className="text-2xl sm:text-4xl font-montserrat md:text-5xl font-bold uppercase leading-tight">
    From “Let’s Talk” to “Holy Profit”
  </h1>
  <div className="flex items-center justify-center">
  <Zap className=" text-base sm:text-lg md:text-2xl w-6 h-6 mt-4 text-white" />

  <p className="text-base ml-2 sm:text-lg md:text-2xl text-white mt-3 max-w-4xl">
   Our 3-Step Process
  </p>
  </div>

</div >  

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative mt-[50px]"
        >
          {/* Vertical spine */}
           <motion.div
        className="hidden md:block absolute left-1/2 -translate-x-1/2 top-6 w-0.5 bg-red-500"
        style={{
          height: lineHeight,
        }}
        aria-hidden="true"
      />

          {/* Steps */}
          {processSteps.map((item, index) => {
            const isOdd = index % 2 !== 0;

            return (
              <motion.div
                key={item.step}
                variants={isOdd ? itemVariantsRight : itemVariantsLeft}
                className={clsx(
                  "relative flex flex-col md:flex-row items-center w-full",
                  { "md:flex-row-reverse": isOdd }
                )}
              >
                {/* Step circle */}
                <div
                  className={clsx(
                    "mb-4 md:mb-0 z-10",
                    "md:absolute md:top-1/2 md:-translate-y-1/2 md:left-1/2 md:-translate-x-1/2"
                  )}
                >
                  <div className="bg-black border-2 border-red-500 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="font-bold text-lg text-red-400">
                      {item.step}
                    </span>
                  </div>
                </div>

                {/* Card */}
                <div className="w-full md:w-[calc(50%-3rem)]">
                  <div
  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transform transition-all duration-300
             hover:border-red-500/80 hover:scale-105 hover:shadow-2xl hover:shadow-red-900/50
             hover:bg-gradient-to-br hover:from-black hover:to-red-600/50
             md:text-left"
>
  <item.icon className="w-10 h-10 mb-4 text-[#E63946]" />

                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-400 text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default RedesignedProcessTimeline;
