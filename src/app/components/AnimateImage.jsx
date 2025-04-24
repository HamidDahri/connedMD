"use client";
import React, { useRef } from "react";
import Image from "next/image";

function AnimatedImage({ src, alt, ...props }) {
  const imageRef = useRef(null);
  const animationRef = useRef(null);

  let followX = 0,
    followY = 0,
    x = 0,
    y = 0,
    friction = 1 / 12;

  const animate = () => {
    x += (followX - x) * friction;
    y += (followY - y) * friction;

    if (imageRef.current) {
      imageRef.current.style.transform = `translate(-0%, -0%) perspective(600px) rotateY(${-x}deg) rotateX(${y}deg)`;
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleMouseMove = (e) => {
    const winWidth = window.innerWidth;
    const winHeight = window.innerHeight;

    const mouseX = Math.max(-100, Math.min(100, winWidth / 2 - e.clientX));
    const mouseY = Math.max(-100, Math.min(100, winHeight / 2 - e.clientY));

    followX = (12 * mouseX) / 100;
    followY = (10 * mouseY) / 100;

    if (!animationRef.current) {
      animate(); // start animation loop
    }
  };

  const handleMouseLeave = () => {
    followX = 0;
    followY = 0;

    if (!animationRef.current) {
      animate(); // if not already animating, start loop to return to neutral
    }

    // Optional: stop animation once near zero
    const smoothReset = () => {
      if (Math.abs(x) < 0.1 && Math.abs(y) < 0.1) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
        x = 0;
        y = 0;
        if (imageRef.current) {
          imageRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
        }
      } else {
        animationRef.current = requestAnimationFrame(smoothReset);
      }
    };
    smoothReset();
  };

  return (
    <Image
      ref={imageRef}
      src={src}
      alt={alt}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    />
  );
}

export default AnimatedImage;
