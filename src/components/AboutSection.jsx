import { ChartArea, Database, Search } from "lucide-react";

export const AboutSection = () => {
    return (
      <section id="about" className="scroll-mt-24 py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary"> Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div className="space-y-6">
                <h3 className="text-2xl font-semibold">
                    Passionate Data Analyst
                </h3>

                <p className="text-muted-foreground">
                   With over 1 year of experience working in consultant, 
                   I specialize in solving operational business
                   problem by creating efficient Supply Chain Management system.
                </p>

                <p>
                    I'm Passionate about creating efficient solution to complex problems, 
                    and I'm constantly learning new technologies and technique to stay at 
                    front of the ever-evolving world of data analysis.

                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                  <a href="#contact" className="cosmic-button">
                    {" "}
                    Get in Touch
                  </a>

                  <a 
                    href="https://drive.google.com/uc?export=download&id=1oANeEaBTe0Hpz837ZgeIs_doCVKdp-Ap" 
                    className="px-6 py-2 rounded-full border border-primary/50 text-primary bg-primary/10 backdrop-blur-md card-hover hover:bg-primary/20 transition-all duration-300"
                    aria-label="Download Ricko's CV"
                  >
                    Download CV
                  </a>
                </div>
              </div>

            <div className="grid grid-cols-1 gap-6"> 
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10"> 
                    <Database className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg"> Data Collection</h4>
                    <p className="text-muted-foreground">
                        Efficiently gathering structured and unstructured 
                        data from various sources to ensure analysis readiness.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10"> 
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                   <div className="text-left">
                    <h4 className="font-semibold text-lg"> Exploratory Data Analysis</h4>
                    <p className="text-muted-foreground">
                        Identifying patterns, trends, and outliers to
                        uncover meaningful insights from raw data.
                    </p>
                  </div>
                </div>
              </div>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10"> 
                    <ChartArea className="h-6 w-6 text-primary" />
                  </div>
                   <div className="text-left">
                    <h4 className="font-semibold text-lg"> Data Visualization</h4>
                    <p className="text-muted-foreground">
                        Turning data into clear, interactive 
                        visuals to support smart decision-making.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
