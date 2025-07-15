import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const CustomCursor = () => {
  const dotRef = useRef(null);     // Center dot
  const ringRef = useRef(null);    // Outer ring

  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 }); // Mouse position
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });   // Ring position

  useEffect(() => {
    // Set initial position in the center
    gsap.set(dotRef.current, {
      x: mouse.current.x,
      y: mouse.current.y,
    });

    gsap.set(ringRef.current, {
      x: pos.current.x,
      y: pos.current.y,
    });

    // Update mouse position on movement
    const moveCursor = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Dot follows the mouse directly
      gsap.set(dotRef.current, {
        x: mouse.current.x,
        y: mouse.current.y,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Animation loop for the ring
    const tick = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.12;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.12;

      gsap.set(ringRef.current, {
        x: pos.current.x,
        y: pos.current.y,
      });
    };

    gsap.ticker.add(tick);

    // Mouse down and up event listeners
    const handleMouseDown = () => {
      gsap.to(dotRef.current, { scale: 4, duration: 0.2 });
      gsap.to(ringRef.current, { scale: 0, duration: 0.2 });
    };

    const handleMouseUp = () => {
      gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
      gsap.to(ringRef.current, { scale: 1, duration: 0.2 });
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <>
      {/* Center dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] w-1 h-1 bg-primary rounded-full pointer-events-none mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] w-8 h-8 border-2 border-primary rounded-full pointer-events-none mix-blend-difference transform -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
};
