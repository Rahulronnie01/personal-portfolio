"use client";

import { motion, useAnimate } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css/core';

const BRANDS = [
  "/brands/ahoora.png",
  "/brands/beyou.png",
  "/brands/broadstar.png",
  "/brands/bunaiwala.png",
  "/brands/feranoid.png",
  "/brands/gulabri.png",
  "/brands/gulmohar.png",
  "/brands/hum.png",
  "/brands/ichaa.png",
  "/brands/khsual.png",
  "/brands/kurti.png",
  "/brands/laad.png",
  "/brands/ls.png",
  "/brands/miramaar.png",
  "/brands/nehamta.png",
  "/brands/nook.png",
  "/brands/ph.png",
  "/brands/pink.png",
  "/brands/pirul.png",
  "/brands/quickflo.png",
  "/brands/rimika.png",
  "/brands/rr.png",
  "/brands/stylm.png",
  "/brands/zeyora.png"
];

// Trusted Brands Component

export default function TrustedBrands() {
const [scope1, animate1] = useAnimate();
const [scope2, animate2] = useAnimate();
const animation1 = useRef<any>(null);
const animation2 = useRef<any>(null);

useEffect(() => {
  if (scope1.current) {
    animation1.current = animate1(scope1.current, { x: ["0%", "-50%"] }, {
      duration: 30,
      ease: "linear",
      repeat: Infinity
    });
  }
}, [animate1, scope1]);

useEffect(() => {
  if (scope2.current) {
    animation2.current = animate2(scope2.current, { x: ["-50%", "0%"] }, {
      duration: 30,
      ease: "linear",
      repeat: Infinity
    });
  }
}, [animate2, scope2]);

const half = Math.ceil(BRANDS.length / 2);
const row1 = BRANDS.slice(0, half);
const row2 = BRANDS.slice(half);

return (

<section className="relative py-24 bg-[#0a0a0a] overflow-hidden">

<div className="text-center mb-16">
<h2 className="text-4xl md:text-6xl font-bold text-white">
Trusted by <span className="text-blue-400">D2C Brands</span>
</h2>
</div>

<div className="relative w-full overflow-hidden">

{/* fade edges */}

<div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"/>
<div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#0a0a0a] to-transparent z-10"/>

{/* DESKTOP VIEW */}
<div className="hidden md:flex flex-col gap-12">
{/* ROW 1 */}
<motion.div
ref={scope1}
className="flex gap-16 w-max "
onMouseEnter={() => animation1.current?.pause()}
onMouseLeave={() => animation1.current?.play()}
>
{
[...row1, ...row1, ...row1, ...row1]
.map((brand, i) => (

<div
key={i}
className="flex items-center justify-center"
>
<Image
src={brand}
alt="brand"
width={160}
height={80}
className="h-20 md:h-24 w-auto object-contain opacity-80 hover:opacity-100 hover:scale-150 transition duration-300"
/>
</div>
))}
</motion.div>

{/* ROW 2 */}
<motion.div
ref={scope2}
className="flex gap-16 w-max"
onMouseEnter={() => animation2.current?.pause()}
onMouseLeave={() => animation2.current?.play()}
>
{
[...row2, ...row2, ...row2, ...row2].map((brand, i) => (

<div
key={i}
className="flex items-center justify-center"
>
<Image
src={brand}
alt="brand"
width={160}
height={80}
className="h-20 md:h-24 w-auto object-contain opacity-80 hover:opacity-100 hover:scale-150 transition duration-300"
/>
</div>
))}
</motion.div>
</div>

{/* MOBILE VIEW */}
<div className="flex md:hidden flex-col gap-12">
  <Splide
    hasTrack={false}
    options={{
      type: 'loop',
      drag: 'free',
      focus: 'center',
      autoWidth: true, // Let them size naturally so more fit
      gap: '2rem', // Space between logos
      arrows: false,
      pagination: false,
      friction: 0.8, // Add "weight" to swiping so it's less slippery
      autoScroll: {
        speed: 0.5, // 50% slower auto-scroll
        pauseOnHover: true,
        pauseOnFocus: false,
      },
    }}
    extensions={{ AutoScroll }}
  >
    <SplideTrack className="flex items-center h-20">
      {[...row1, ...row1, ...row1].map((brand, i) => (
        <SplideSlide key={`m1-${i}`} className="flex justify-center items-center h-full">
          <Image src={brand} alt="brand" width={140} height={70} className="h-14 w-auto object-contain opacity-70" />
        </SplideSlide>
      ))}
    </SplideTrack>
  </Splide>

  <Splide
    hasTrack={false}
    options={{
      type: 'loop',
      drag: 'free',
      focus: 'center',
      autoWidth: true,
      gap: '2rem',
      arrows: false,
      pagination: false,
      friction: 0.8, // Match weight
      autoScroll: {
        speed: -0.5, // 50% slower, reverse direction
        pauseOnHover: true,
        pauseOnFocus: false,
      },
    }}
    extensions={{ AutoScroll }}
  >
    <SplideTrack className="flex items-center h-20">
      {[...row2, ...row2, ...row2].map((brand, i) => (
        <SplideSlide key={`m2-${i}`} className="flex justify-center items-center h-full">
          <Image src={brand} alt="brand" width={140} height={70} className="h-14 w-auto object-contain opacity-70" />
        </SplideSlide>
      ))}
    </SplideTrack>
  </Splide>
</div>

</div>

</section>

);

}

