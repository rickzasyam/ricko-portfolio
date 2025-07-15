import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return (
      <section 
        id="hero" 
        className="scroll-mt-24 relative min-h-screen flex flex-col items-center justify-center px-4"
      >
          <div className="container max-w-4xl mx-auto text-center z-10">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in"> G'Day, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> 
                        {" "}
                        Ricko
                        </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> 
                        {" "}
                        Erlangga
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-muted foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    I graduated from Full Stack Data analytics from Revou I am a
                    team player and a detail person. I am also proficient in SQL, data visualization, and Python, as well as
                    being a critical thinker and good communicator.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-3">
                  <a href="#projects" className="cosmic-button">
                       View My work
                  </a>
                </div>
              </div>
          </div>

        <a href="#about">
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer">
            <span className="text-sm text-muted-foreground mb-2"> Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
          </div>
        </a>
      </section>
    );
}