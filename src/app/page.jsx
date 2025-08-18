'use client';
import Image from 'next/image';
import { useRef } from "react";
import { ChevronDown, Phone, CheckCircle, FileText, Zap } from 'lucide-react';
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import { motion } from "framer-motion";
import RedesignedProcessTimeline from "@components/RedesignedProcessTimeline"
import ImageCarousel from "@/components/ImageCarousel";
import React, { useState, useEffect } from 'react';
import { Menu, X, Mail,Search, Users, TrendingUp, ArrowRight, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';





// A simple placeholder image component for demonstration
const PreviewImage = ({ src, alt, className }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`bg-gray-200 rounded-lg shadow-xl ${className}`}
      onError={(e) => { e.target.src = 'https://placehold.co/400x300'; }}
    />
  );
};

// Keyframes for the custom animations
const style = `
  @keyframes slideInFromLeft {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInFromRight {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInFromBottom {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -100 },
  hiddenRight: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const logos = [
  { src: "/logo1.png", alt: "Himalyan", width: 100,height:200 },
  { src: "/logo2.jpeg", alt: "Cesira", width: 150,height:200 },
  { src: "/logo3.png", alt: "High", width: 150,height:200 },
  { src: "/logo4.png", alt: "Pursilajit", width: 150,height:200 },
  { src: "/logo5.png", alt: "Soulfull", width: 150,height:200 }
];

const first = [
  { src: "/aa.png", alt: "Himalyan", width: 800,height:1200 },
  { src: "/bb.png", alt: "Cesira", width: 800,height:1200 },
  { src: "/cc.png", alt: "High", width: 800,height:1200 },
  { src: "/dd.png", alt: "Pursilajit", width: 800,height:1200 },
  { src: "/ee.png", alt: "Soulfull", width: 800,height:1200 },
  { src: "/ff.png", alt: "Soulfull", width: 800,height:1200 }
];

const photos = [
  { src: "/email1.png", alt: "Himalyan" },
  { src: "/email2.png", alt: "Cesira" },
  { src: "/email3.png", alt: "High" },
  { src: "/email4.png", alt: "Pursilajit" },
  { src: "/email5.png", alt: "Soulfull" },
  { src: "/email6.png", alt: "Soulfull" },
  { src: "/email7.png", alt: "Soulfull" },
  { src: "/email8.png", alt: "Soulfull" },
  { src: "/email9.png", alt: "Soulfull" },
  { src: "/email10.png", alt: "Soulfull" },
  { src: "/email11.png", alt: "Soulfull" },
  { src: "/email12.png", alt: "Soulfull" },
  { src: "/email13.png", alt: "Soulfull" },
  { src: "/email14.png", alt: "Soulfull" }
];

export default function BadRetentionHomepage() {
  
   const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  ////////////////////
   const ref = useRef(null);
  
  // STEP 2: The hook that returns `true` when the ref element is in view
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };
  
  ////////////////////

  const faqs = [
    "What’s your success rate?",
    "How do I know if my brand qualifies?",
    "Who do you work with?",
    "What’s the price?",
    "What’s your guarantee?",
    "How fast will I see results?"
  ];
  const faqAnswers = [
  "We don’t gamble with your brand. If we’re not 100% sure we can scale you profitably after our deep-dive diagnosis, we won’t take you on. That’s why our success rate is one of the highest in the retention game — we only work with brands where it’s a no-brainer win.",
  "If you’re doing $30K+/month in revenue in fashion, health, or supplements, you qualify for a free deep-dive strategy session.",
  "Only fashion, health, and supplement brands. Why? Because we own this lane. If you’re not in it, we won’t take your money.",
  "We keep it simple: retainer + revenue share on what we generate for you. That way, we win only when you win. Pricing is flexible based on your size and goals, but if we’re a fit, you’ll see the value before the invoice.",
  "We’ll grow your email/SMS revenue — or you don’t pay us. NO upfront. No conditions apply BS. We put skin in the game, so you know we’re serious.",
  "Many see a lift in 7 days or less — whether it’s from your first BADRetention™ campaign or our immediate flow optimizations. We’ve turned accounts into profit machines before the first invoice hits."
];


  const totalDuration = (first?.length || 0) * 6;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // ✅ FIX: Moved the useInView hook call inside the component function.
  // This hook is now correctly used for the animated grid section.
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true, // Animation will run only once
    threshold: 0.2,    // Trigger when 20% of the section is visible
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const services = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Campaign Design",
      description: "Beautiful, conversion-focused email templates that drive results"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "List Segmentation",
      description: "Strategic audience targeting for maximum engagement and retention"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Performance Analytics",
      description: "Data-driven insights to optimize your email marketing ROI"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation Workflows",
      description: "Smart email sequences that nurture leads and retain customers"
    }
  ];

  const stats = [
    { number: "250%", label: "Average ROI Increase" },
    { number: "89%", label: "Email Open Rate" },
    { number: "500+", label: "Successful Campaigns" },
    { number: "95%", label: "Client Retention" }
  ];
  
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
     <div className=" bg-[url('/bg-desktop.png')] sm:bg-[url('/bg-desktop.png')] bg-cover bg-center rounded-xl">

      {/* Navigation */}
      <nav >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mt-[-20px]  py-4">
            {/* Logo */}
            <Image
              className='mt-4'
              src="/groups.png" // Make sure the image exists in your public folder
              alt="Our Trusted Partners"
              width={150} // Adjust as needed
              height={30} // Adjust as needed
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-fade-in-up">
                
              {/* Preheader */}
              <div className="mt-[-80px] xl:mt-[-70px] xl:text-[19px] mx-auto w-[80%] sm:w-[50%] rounded-[16px] p-[1px] bg-gradient-to-r from-white to-[#E63946]">
                <h1 className="rounded-[16px] border border-transparent text-[11px] sm:text-[17px] font-semibold text-[#F5F5F5] text-center shadow-md bg-black">
                  🚨 Attention 6&7 Figure Fashion & Supplement Brands
                </h1>
              </div>

              {/* Main Header */}
              <h1 className="text-[18px] xl:w-[90%] mx-auto font-montserrat mt-6 sm:text-2xl md:text-2xl  xl:text-4xl font-bold mb-6 leading-tight">
                <span className="   bg-white bg-clip-text text-transparent">
                  DISCOVER HOW YOU CAN ADD{' '}
                </span>
                <span className="text-red-600">
                  $25,000-$45,000 IN MRR
                </span>
                <br />
                <span className="bg-white xl:w-[90%] mx-auto bg-clip-text text-transparent  mr-2">
                  WITHOUT SPENDING A SINGLE DOLLAR ON ADS
                </span>
                
                <span className="text-white underline decoration-red-600 decoration-2">
                  USING OUR PROVEN BAD PROFIT FRAMEWORK
                </span>
              </h1>
              
              {/* Subheadline */}
             <div className="max-w-7xl mx-auto text-white leading-relaxed space-y-4 px-4">
              {/* ////////////////////////// */}
  {/* Desktop/Laptop View */}
<p className="hidden sm:block xl:text-[19px]  font-spaceGrotesk sm:text-[17px] text-[13px] text-white mb-6 mt-5 max-w-7xl mx-auto leading-relaxed"> This is the exact same system a $30k/month brand is using to bank an extra{' '} 
    <span className="text-white font-semibold">30%-45% revenue every single </span> 
    <span className='flex mx-auto items-center justify-center'><span className='text-white flex'><span className='text-white'>month</span>…{' '}
    </span >
     Now imagine what those same 30%-45% would look like when applied to YOUR{' '} <span className="text-white ml-1 "> revenue numbers!</span> 
     </span>
      </p>
{/* Mobile View */}
<p className="block w-full sm:hidden text-[14px] font-spaceGrotesk text-white mb-4 mt-3 leading-relaxed  text-center">
  This is the exact same system a $30k/month brand is using
  
  to bank an extra{' '}
  <span className="text-white font-semibold">30%-45% revenue</span>
  
  <span className='ml-1 text-white font-semibold '>every single month...

  <span className='text-white'>Now imagine what those same</span></span> <span className=" font-semibold">30%-45% </span>
  
  would look like when applied to YOUR{' '}
  <span className="text-white font-semibold">revenue numbers!</span>
</p>

{/* ////////////////////////////////// */}
</div>
{/* ///////////////// */}

              <div className="flex flex-col mx-auto sm:flex-row gap-4 mt-[30px] justify-center items-center">
                  <div className="border-glow rounded-lg">
                    <a
                     href="https://calendly.com/sameer-badretention/30min"
  target="_blank"
  rel="noopener noreferrer"


                     className="group cursor-pointer font-montserrat bg-gradient-to-r from-red-600 to-red-700 hover:from-white hover:to-white hover:text-black text-white px-6 py-2 rounded-lg font-bold text-[14px] sm:text-[25px] transition-all duration-300 flex items-center space-x-2">
                      <span>I WANT MY PROFIT ROADMAP NOW</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                  </div>
              </div>
              
             <div className="w-full text-center mt-2 px-4 py-2  ">
  <p className="text-[10px] sm:text-[12px]  font-semibold text-white tracking-wide">
    ⭐⭐⭐⭐⭐| Trusted by <span className="text-white font-bold">10+ fast-scaling</span> DTC brands
  </p>
</div>




              {/* ///////////////////////////////////////// */}
              <div className="flex flex-col items-center justify-center  text-center py-10 ">
                <h1 className="text-white font-spaceGrotesk text-3xl font-semibold mb-4">
                  Our Trusted Partners
                </h1>
                
                <Image
  className="mt-4 w-[250px] h-auto sm:w-[390px]" // smaller on mobile, bigger on sm+
  src="/shopppe.png"
  alt="Our Trusted Partners"
  width={390}
  height={90}
/>


              </div>
              
            </div>
          </div>
        </div>
      </section>
      </div>
<div className="mt-[-70px] sm:mt-[-50px] text-center flex flex-col items-center justify-center w-full sm:w-3/4 mx-auto px-4">
  <h1 className="text-sm  mb-2">
    Brand’s we’ve helped increase their revenue.
  </h1>
  <h1 className="text-md  mt-[-7px] font-semibold">
    Trusted by leading DTC brands.
  </h1>
</div>

      {/* sliding section */}
      {/* Logos section — Right ➡ Left */}
      <section className="relative overflow-hidden w-full sm:w-[80%] mx-auto mt-12 px-4 sm:px-0">
  {/* Left shadow */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-20 bg-gradient-to-r from-black/40 sm:from-black/60 to-transparent z-20" />

  {/* Right shadow */}
  <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-20 bg-gradient-to-l from-black/40 sm:from-black/60 to-transparent z-20" />

  {/* Logos scrolling */}
  <div className="scroll-animation-first whitespace-nowrap">
    {[...logos, ...logos].map((logo, index) => (
      <Image
        key={index}
        src={logo.src}
        alt={logo.alt}
        width={logo.width} // original width for laptops
        height={100}
        className="object-contain inline-block mx-2 sm:mx-8 w-[70px] sm:w-[unset]" 
        // w-[70px] → mobile
        // sm:w-[unset] → revert to original width on laptop
      />
    ))}
  </div>
</section>




{/* ///////////////////////////////////////////////////////////////////////// */}


<div className="flex flex-col items-center justify-center w-full px-4 text-center mt-12">
  <p className="text-sm sm:text-base md:text-lg text-white font-semibold">
    Emails & SMS That
  </p>

  <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-montserrat font-bold uppercase leading-snug mt-1">
    Pay for Your Ads
  </h1>

  <p className="text-white font-spaceGrotesk mt-2 text-xs sm:text-sm md:text-base max-w-xs sm:max-w-md md:max-w-3xl">
    & Then Print Pure Profit.
  </p>
</div>

{/* ///////////////////////////////////////////////////////////////////////// */}








      {/* Photos section — Left ➡ Right */}
{/* Photos section — Left ➡ Right */}
<section className="relative overflow-x-hidden mt-9 mx-auto flex items-start">
  
  {/* Left shadow */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-6 sm:w-20 bg-gradient-to-r from-black/40 sm:from-black/60 to-transparent z-20" />
  <div className="pointer-events-none absolute right-0 top-0 h-full w-6 sm:w-20 bg-gradient-to-l from-black/40 sm:from-black/60 to-transparent z-20" />

  {/* Scrolling content */}
  <div className="scroll-animation-ltr px-4 sm:px-8"> {/* Added side padding */}
    {[...Array(2)].map((_, i) => (
      <div
        key={i}
        className="inline-flex items-start gap-3 sm:gap-4"
        style={{ minWidth: "1200px" }}
      >
        {photos.map((logo, index) => (
          <div
            key={`${i}-${index}`}
            className="flex-shrink-0 overflow-hidden"
            style={{
              width: "180px",
              height: "360px",
            }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={150}
              height={300}
              className="object-cover object-top w-full h-full"
            />
          </div>
        ))}
      </div>
    ))}
  </div>
</section>


            

      <main className="min-h-screen sm:mt-[-10px] mt-[-52px] bg-black flex items-center justify-center ">
        <div className=" w-full">
          <ImageCarousel />
        </div>
      </main>

      {/* /////////////////////////////////////// */}
      <div className="min-h-screen bg-black  text-white">
        <div className="flex flex-col items-center justify-center md:mt-[50px] -mt-105  w-full px-4 text-center ">


  <h1 className="text-2xl  sm:text-4xl font-montserrat md:text-5xl font-bold uppercase leading-tight">
    From Inbox to Checkout & Purchase
  </h1>

  <p className="text-base sm:text-lg md:text-2xl text-white mt-3 max-w-4xl">
    Every system you need to grow on autopilot
  </p>

</div>

        <div className="sm:px-8 px-4  py-12">
           
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
           
            
            {/* Email Marketing Card */}
            <motion.div
              className="relative rounded-3xl p-8 -mt-12 text-center overflow-hidden bg-black"
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="relative rounded-3xl sm:p-8 p-4 text-center overflow-hidden bg-black">
                {/* Glow effect in top-left */}
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-red-500/70 rounded-full blur-3xl"></div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6 text-white">Email Marketing</h2>
                  <p className="text-lg leading-relaxed text-gray-300">
                   We build behavior-driven flows and on-brand campaigns that pay for themselves within weeks, then keep compounding.

                  </p>
                </div>
              </div>
            </motion.div>

            {/* Product Drop Card */}
            <motion.div
              className="relative rounded-3xl  mt-[-30px] sm:mt-[-20px]  p-8 text-center overflow-hidden bg-black"
              initial="hiddenRight"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="relative rounded-3xl p-8 text-center overflow-hidden bg-black">
                {/* Glow effect */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-red-500/70 rounded-full blur-3xl"></div>
                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6 text-white">Product Drop</h2>
                  <p className="text-lg leading-relaxed text-[#F5F5F5]">
                   We launch products like events. Expect coordinated pre-heat, drop day, and post-drop sequences that spike revenue 30–40% at full margin.

                  </p>
                </div>
              </div>
            </motion.div>

            {/* Consulting */}
            <motion.div
              className="relative rounded-3xl mt-[-80px] p-8 text-center overflow-hidden bg-black"
              initial="hiddenLeft"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="relative rounded-3xl p-8 text-center overflow-hidden bg-black">
                {/* Glow effect */}
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-red-500/70 rounded-full blur-3xl"></div>
                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6 text-white">Consulting</h2>
                  <p className="text-lg leading-relaxed text-[#F5F5F5]">
                    We arm you with tested, profit-first playbooks to keep your brand ahead, your KPIs green, and your retention compounding month after month.

                  </p>
                </div>
              </div>
            </motion.div>

            {/* SMS Marketing */}
            <motion.div
              className="relative rounded-3xl mt-[-80px] p-8 text-center overflow-hidden bg-black"
              initial="hiddenRight"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
            >
              <div className="relative rounded-3xl p-8 text-center overflow-hidden bg-black">
                {/* Glow effect */}
                <div className="absolute -top-20 -right-20 w-60 h-60 bg-red-500/70 rounded-full blur-3xl"></div>
                {/* Content */}
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-6 text-white">SMS Marketing</h2>
                  <p className="text-lg leading-relaxed text-[#F5F5F5]">
                   We grow your SMS list the right way, then turn subscribers into buyers with smart offers and pacing.

                  </p>
                </div>
              </div>
            </motion.div>

            {/* Advertorials */}
            
          </div>
          <motion.div
  className="relative rounded-3xl mt-[-30px] sm:mt-[-30px] p-6 sm:p-8 w-full sm:w-[80%] md:w-[47%] mx-auto text-center overflow-hidden bg-black"
  initial="hiddenLeft"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={cardVariants}
>
  <div className="relative rounded-3xl p-6 sm:p-8 text-center overflow-hidden bg-black">
    {/* Glow effect */}
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-red-500/70 rounded-full blur-3xl"></div>

    {/* Content */}
    <div className="relative z-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-white">
        Advertorials
      </h2>
      <p className="text-base sm:text-lg leading-relaxed text-[#F5F5F5] max-w-2xl sm:max-w-2xl mx-auto">
        Not ads. Not blogs. Advertorials that blend editorial storytelling with hard-hitting persuasion, making buying feel like the natural next step.
      </p>
    </div>
  </div>
</motion.div>

        </div>






        {/* Cured section - Animations trigger on scroll */}
         <style dangerouslySetInnerHTML={{ __html: style }} />
        <div className="flex flex-col mt-[-70px] items-center justify-center min-h-screen p-1">
          
                 <div className="relative w-full min-h-screen rounded-xl mt-10 overflow-hidden">
  {/* Background gradient */}
  <div
    className={`absolute inset-0 rounded-xl
      bg-[radial-gradient(circle_at_top_left,rgba(255,0,0,0.6)_0%,rgba(0,0,0,0.95)_30%,#000_100%)]
      before:content-[''] before:absolute before:inset-0
      before:bg-[linear-gradient(to_right,rgba(255,0,0,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,0,0,0.2)_1px,transparent_1px)]
      before:bg-[size:60px_60px]
      z-0`}
  />

  {/* Foreground content */}
  <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">

    {/* Heading */}
    <div className="flex flex-col items-center justify-center w-full text-center mt-8 sm:mt-12">
      <p className="text-sm sm:text-base md:text-lg text-white font-semibold">
        More proof!
      </p>
      <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase leading-snug mt-1 sm:mt-2">
        Straight from the dashboard
      </h1>
      <p className="text-white font-spaceGrotesk text-xs sm:text-sm md:text-base lg:text-lg max-w-xs sm:max-w-md md:max-w-3xl text-center mt-2">
        Actual revenue jumps from brands we’ve scaled because with us, the numbers do the talking.
      </p>
    </div>

    {/* 2x1x2 Image Grid */}
    <div className="flex flex-col items-center mt-8 sm:mt-12 justify-center w-full text-gray-800 p-4 sm:p-8">
      <div
        className="flex flex-col md:flex-row items-center md:items-stretch justify-center w-full max-w-6xl space-y-4 md:space-y-0 md:space-x-4 sm:space-x-8"
        ref={sectionRef} // ref for animation trigger
      >
        {/* Left Column */}
        <div className="flex flex-col justify-center space-y-4 w-full md:w-2/4">
          <div className={`${sectionInView ? 'animate-[slideInFromLeft_1.2s_cubic-bezier(0.4,0,0.2,1)_forwards]' : 'opacity-0'}`}>
            <PreviewImage src="/fir.png" alt="Top Left Image" className="w-full h-auto" />
          </div>
          <div className={`${sectionInView ? 'animate-[slideInFromLeft_1.2s_cubic-bezier(0.4,0,0.2,1)_forwards]' : 'opacity-0'}`}>
            <PreviewImage src="/nicheleft.png" alt="Bottom Left Image" className="w-full h-auto" />
          </div>
        </div>

        {/* Center Column */}
        <div className="w-full md:w-2/4 flex items-center justify-center mt-4 md:mt-0">
          <div className={`${sectionInView ? 'animate-[slideInFromBottom_1.2s_cubic-bezier(0.4,0,0.2,1)_forwards]' : 'opacity-0'}`}>
            <PreviewImage src="/sec.png" alt="Center Tall Image" className="w-full h-auto max-h-[60vh] sm:max-h-[80vh]" />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-center space-y-4 w-full md:w-2/4 mt-4 md:mt-0">
          <div className={`${sectionInView ? 'animate-[slideInFromRight_1.2s_cubic-bezier(0.4,0,0.2,1)_forwards]' : 'opacity-0'}`}>
            <PreviewImage src="/thir.png" alt="Top Right Image" className="w-full h-auto" />
          </div>
          <div className={`${sectionInView ? 'animate-[slideInFromRight_1.2s_cubic-bezier(0.4,0,0.2,1)_forwards]' : 'opacity-0'}`}>
            <PreviewImage src="/nicheright.png" alt="Bottom Right Image" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

          

<div className="min-h-screen bg-black text-white overflow-hidden">
     <div className="min-h-screen bg-black">
      <RedesignedProcessTimeline />
    </div>

            {/* //////////other vs bad ////////////////// */}


  <section className="px-4 ">
        <div className="max-w-6xl mx-auto">
          <div className="relative text-center -mt-8 z-30 sm:mt-6 ">
           

            <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-4">
              Other Agencies VS <span className="text-red-600">BADRetention™</span>
            </h2>
            <p className="text-white text-lg mb-8">
              If we don’t deliver on our promise within 60 days or less, we’ll work for free until we do!

            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Other Agencies */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 font-montserrat text-center text-gray-300">Other Agencies</h3>
              
              <div className="space-y-4">
                {[
                  "Obssessing over open and click rates",
                  "Works as another service provide", 
                  "Focus on acquisition(getting more clients) without retaining them",
                  "Hire cheap freelancers",
                  "Late replies, inactive communications",
                  "Wait 1 month to start seeing results"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center">
                      <span className="text-gray-400 text-sm">✗</span>
                    </div>
                    <span className="text-gray-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* BADRETENTION */}
            <div className="bg-gradient-to-br from-black  to-red-600/50 border-1 border-red-500 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
              <h3 className="text-2xl font-bold mb-6 text-center font-montserrat text-red-600 relative z-10">BAD RETENTION</h3>
              <div className="space-y-4 relative z-10">
                {[
                  "Obssess over Real Revenue. REAL Profits",
                  "Works as a partner",
                  "Focus on Retention & let the word of mouth be our acquisition", 
                  "In-house 100% professionals",
                  "Active communication and instant reply",
                  "See results within 7-14 days after onboarding"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>





      
      {/* //////////other vs bad ////////////////// */}

 
      
      {/* /////////////////////////////////////////////////////////// */}

      {/* FAQ Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-red-500/10 px-4 py-2 rounded-full border border-red-500/20 mb-8">
              <span className="text-red-600 text-sm font-medium">FAQs</span>
            </div>
            <h2 className="text-4xl font-montserrat md:text-5xl font-bold mb-4">Got questions?</h2>
            <p className="text-gray-400 text-lg">We've got the answers.</p>
          </div>

          <div className="space-y-4">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className="cursor-pointer border bg-gradient-to-br from-black to-red-600/50 rounded-xl overflow-hidden hover:border-white transition-all duration-300"
    >
      <button
        onClick={() => toggleFaq(index)}
        className="w-full cursor-pointer px-6 py-6 text-left flex justify-between items-center hover:bg-red-500/5 transition-colors"
      >
        <span className="text-lg font-medium">{faq}</span>
        <ChevronDown
          className={`w-5 h-5 text-red-400 transition-transform duration-300 ${
            openFaq === index ? "rotate-180" : ""
          }`}
        />
      </button>
      {openFaq === index && (
        <div className="px-6 pb-6 text-white animate-in slide-in-from-top-2 duration-300">
          <p>{faqAnswers[index]}</p>
        </div>
      )}
    </div>
  ))}
</div>

        </div>
      </section>
      

      {/* CTA Section */}
      <section className="px-4 py-16 mt-[-160px] w-full md:py-24">
        <div className=" mx-auto text-center">
          
          <div className="flex flex-col items-center justify-center w-full px-4 text-center mt-12">
  
  
 
  <h1 className="text-white text-[20px] font-montserrat mt-5 sm:-mt-10  sm:text-xl md:text-[40px] xl:text-5xl w-full flex items-center justify-center  font-bold uppercase leading-tight ">
    Turn Your Traffic & Email List Into Cash
  </h1>
  
 
  <p className="text-white font-spaceGrotesk mt-[10px]   text-xs sm:text-sm md:text-2xl  max-w-5xl">
   That Pays for Your Ads (and Then Prints Pure Profit)
</p>

</div>
          <div className="w-full flex justify-center mt-[30px]">
  <a 

  href="https://calendly.com/sameer-badretention/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="group cursor-pointer bg-gradient-to-r from-red-600 to-red-700 hover:from-white hover:to-white hover:text-black text-white px-6 py-2 rounded-lg font-bold text-[15px] transition-all duration-300 flex items-center justify-center space-x-2">
    <span>Get Your Free Audit Today</span>
    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
  </a>
</div>

{/* /////////////////////here we have to add the calendly link ////////////////////////// */}

{/* /////////////////////////////////////////////// */}


<p className=" w-full text-center flex items-center justify-center  mx-auto text-sm  text-white z-10 p-2 duration-300  ">
      ⭐⭐⭐⭐⭐| Join over 10+ DTC brands now
    </p>

       
          {/* <div className="flex justify-center items-center space-x-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text mt-5 text-red-500 text-2xl">★</span>
            ))}
          </div> */}
{/*           
          <p className="text-sm text-gray-400 mb-8">
            Rated <span className="text-red-400 font-bold">4.9/5</span> by 100+ happy brands.
          </p> */}

          <p className="text-sm mt-[20px]   text-gray-300">
            PS. If we don't deliver on our promise, we will work for free untill we do
            
          </p>
        </div>
      </section>
      {/* ////////////////////////////////////////////////////////////////////////// */}
     <nav >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mt-[-40px]  py-4">
            {/* Logo */}
            <Image
              src="/groups.png" // Make sure the image exists in your public folder
              alt="Our Trusted Partners"
              width={150} // Adjust as needed
              height={30} // Adjust as needed
            />
          </div>
        </div>
        <p className='w-full text-center flex items-center justify-center  mt-[-20px] mx-auto text-sm'>© 2024 Bad Retention. All rights reserved.</p>
      </nav>
       <div className="flex mx-auto items-center justify-center text-center mt-[-5px] py-7   space-x-4">
      <a
        href="https://www.instagram.com/badretention/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white transition-colors"
      >
        <Instagram className="w-6 h-6" />
      </a>

      {/* <a
        href="https://facebook.com/yourprofile"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white  transition-colors"
      >
        <Facebook className="w-6 h-6" />
      </a> */}

      <a
        href="https://x.com/EcomSameer?t=RLzsoYIarUWoCw0_smwj_w&s=09"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white transition-colors"
      >
        <Twitter className="w-6 h-6" />
      </a>

      <a
        href="https://www.linkedin.com/company/bad-retention/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white  transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </a>
    </div>
      {/* ////////////////////////////////////////////////////////////////////////// */}

  
    </div>

        </div>
      </div>

      {/* ✅ FIX: Removed the duplicate style block */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(239, 68, 68, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.8);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s infinite;
        }
      `}</style>
    </div>
  );
}