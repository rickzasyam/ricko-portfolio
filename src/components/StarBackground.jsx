import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    generateStars();
    generateMeteors();
    checkDarkMode();

    const handleResize = () => generateStars();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("resize", handleResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const checkDarkMode = () => {
    setIsDark(document.documentElement.classList.contains("dark"));
  };

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = Array.from({ length: numberOfStars }, (_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100,
      y: Math.random() * 100,
      opacity: Math.random() * 0.5 + 0.5,
      animationDuration: Math.random() * 4 + 2,
    }));
    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = Array.from({ length: numberOfMeteors }, (_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      x: Math.random() * 100,
      y: Math.random() * 20,
      delay: Math.random() * 15,
      animationDuration: Math.random() * 3 + 3,
    }));
    setMeteors(newMeteors);
  };

  return (
    <div className="fixed inset-0 overflow-visible pointer-events-none z-0">
      {isDark ? (
        <>
          {/* Bintang */}
          {stars.map((star) => (
            <div
              key={star.id}
              className="star animate-pulse-subtle"
              style={{
                position: "absolute",
                width: `${star.size}px`,
                height: `${star.size}px`,
                left: `${star.x}%`,
                top: `${star.y}%`,
                opacity: star.opacity,
                animationDuration: `${star.animationDuration}s`,
                borderRadius: "50%",
                backgroundColor: "white",
                boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.4)",
              }}
            />
          ))}

          {/* Meteor */}
          {meteors.map((meteor) => (
            <div
              key={meteor.id}
              className="meteor"
              style={{
                position: "absolute",
                left: `${meteor.x}%`,
                top: `${meteor.y}%`,
                width: `${meteor.size * 40}px`,
                height: `${meteor.size * 2}px`,
                transform: "rotate(215deg)",
                animation: `meteor ${meteor.animationDuration}s linear infinite, glow-trail 1.2s ease-in-out infinite`,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to right, rgb(235, 100, 20), rgb(60, 4, 226))",
                  clipPath: "polygon(0% 0%, 95% 30%, 95% 70%, 0% 100%)",
                  transform: "skewX(-30deg) scaleY(0.6)",
                  position: "relative",
                  overflow: "visible",
                }}
              >
                {/* Kepala meteor */}
                <div
                  style={{
                    position: "absolute",
                    width: "10px",
                    height: "10px",
                    background: "#facc15",
                    borderRadius: "9999px",
                    top: "50%",
                    left: "0",
                    transform: "translate(-50%, -50%)",
                    filter: "blur(6px) brightness(8)",
                    opacity: 0.9,
                    zIndex: 10,
                  }}
                />
                {/* Trail glow */}
                <div
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    background:
                      "radial-gradient(circle, rgba(243, 234, 102, 0.2) 0%, transparent 70%)",
                    transform: "scaleX(1.5) skewX(30deg)",
                    filter: "blur(10px)",
                    zIndex: -1,
                    opacity: 0.4,
                    animation: "glow-pulse 0.5s ease-in-out infinite",
                  }}
                />
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
          {/* Efek light mode: awan & langit lembut */}
          {<div className="absolute inset-0 bg-gradient-to-b from-orange-400 to-rose-400" />}

          {/* Tambahan: Awan putih pelan */}
          {Array.from({ length: 6 }, (_, i) => {
  const clusterX = Math.random() * 100 - 50; // Start from the left of the screen
  const clusterY = Math.random() * 15 + 10;  // Position vertically between 20% and 50%
  const delay = Math.random() * 20;           // Random delay for animation

  const ballsCount = 6 + Math.floor(Math.random() * 3); // 4–6 balls

  return (
    <div
      key={i}
      className="absolute animate-[cloudFloat_50s_linear_infinite]"
      style={{
        top: `${clusterY}vh`, // Use vh for vertical positioning
        left: `${clusterX}vw`, // Use vw for horizontal positioning
        animationDelay: `${-Math.random() * 10}s`, // Randomize animation delay
        pointerEvents: "none",
      }}
    >
      {Array.from({ length: ballsCount }).map((_, j) => {
        const size = 20 + Math.random() * 150; // 20–80px diameter
        const offsetX = j * (size / 1.5) - 20; // Adjust spacing between balls
        const offsetY = Math.random() * 10 +2; // Random vertical offset for each ball

        return    ( 
                    <div
                      key={j}
                      className="absolute bg-white opacity-60 blur-xl rounded-full"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${offsetX}px`,
                        top: `${offsetY}px`,
                      }}
                    />
                  );
                })}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
