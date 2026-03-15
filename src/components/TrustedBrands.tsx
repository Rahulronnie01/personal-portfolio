"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

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

export default function TrustedBrands() {
const controls = useAnimation();
const controls2= useAnimation();
useEffect(() => {
  controls.start({
    x: ["0%", "-50%"],
    transition: {
      duration: 30,
      ease: "linear",
      repeat: Infinity
    }
  });
}, []);


useEffect(() => {
  controls2.start({
    x: ["-50%", "0%"],
    transition: {
      duration: 30,
      ease: "linear",
      repeat: Infinity
    }
  });
}, []);

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

<div
className="flex flex-col gap-12"
onMouseEnter={() => controls.stop()}
onMouseLeave={() =>
  controls.start({
    x: "-50%",
    transition: {
      duration: 30,
      ease: "linear",
      repeat: Infinity
    }
  })
  
}

>


{/* ROW 1 */}

<motion.div
className="flex gap-16 w-max "
animate={controls}
transition={{
duration:30,
ease: "linear",
repeat: Infinity
}}
>
{
[...row1, ...row1, ...row1, ...row1]


.map((brand, i) => (

<div
key={i}
className="flex items-center justify-center"
>

<img
src={brand}
alt="brand"
className="h-20 md:h-24 object-contain opacity-80 hover:opacity-100 hover:scale-150 transition duration-300"
/>

</div>

))}

</motion.div>

{/* ROW 2 */}

<motion.div
className="flex gap-16 w-max"
animate={controls2}
transition={{
duration:30,
ease:"linear",
repeat:Infinity
}}

onMouseEnter={() => controls2.stop()}

onMouseLeave={() =>
  controls2.start({
    x: "0%",
    transition: {
      duration: 30,
      ease: "linear",
      repeat: Infinity
    }
  })
}
>
{
[...row2, ...row2, ...row2, ...row2].map((brand, i) => (

<div
key={i}
className="flex items-center justify-center"
>

<img
src={brand}
alt="brand"
className="h-20 md:h-24 object-contain opacity-80 hover:opacity-100 hover:scale-150 transition duration-300"
/>

</div>

))}
</motion.div>

</div>

</div>

</section>

);

}

