"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useRouter } from 'next/navigation';


export default function ComingSoon() {
  const imageRef = useRef(null);
  const router = useRouter();

  useEffect(() => { 
    if(imageRef.current){
      gsap.to(imageRef.current,{
        scale: 1.2,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      })
    }
  })
  return (
    <>
      <div
        className="flex cursor-pointer"
        onClick={() => router.push("/spelling-bee")}
      >
        <img
          ref={imageRef}
          src="coming-soon.png"
          alt="coming soon image"
          className=""
        />
      </div>
    </>
  );
}
