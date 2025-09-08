import { Briefcase, Code, User } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary "> Me</span>
            </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Passionate MERN Developper & Tech Creator </h3>

            <p className="text-muted-foreground">
                With 17 years of experience in some of the most prestigious hotels and restaurants in Paris, 
                I have developed strong discipline, a service-oriented mindset, and great adaptability. 
                Driven by the desire to take on new challenges, I decided to transition into web development.
                 Curious, self-motivated, and a fast learner, I quickly put new skills into practice and am eager to grow in this field.
                Came from the school in web development, 
                I'm specialize in MERN fullStack website developpement, 
                accessible and performant web applications using modern technologies. 
            </p>

            <p className="text-muted-foreground">
                I'm passionate about creating elegent solutions to complex
                problems, and I'm constantly learning new technologies and
                techniques to stay at the forefront of the ever-evolving web
                landscape.

            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#contact" className="cosmic-button">
                    Get in touch
                </a>

                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Cv.pdf"; // fichier placé dans /public
                    link.download = "Mon-CV.pdf"; // nom du fichier final
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  Download C.V
                </button>

            </div>

            </div>

            <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4 ">
                        <div className="p-3 Rounded-fullbg-primary/10">
                        <Code className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                            <h4 className="font-semibold text-lg">Web Development</h4>
                            <p className="text-muted-foreground">
                                Creating responsive websites and web applications with
                                modern frameworks.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4 ">
                        <div className="p-3 Rounded-fullbg-primary/10">
                        <User className="h-6 w-6 text-primary" />
                        </div>

                        <div className="text-left">
                            <h4 className="font-semibold text-lg">UI/UX Design</h4>
                            <p className="text-muted-foreground">
                               Designing intuitive user interfaces and seamless user experiences.
                            </p>
                        </div>
                        

                    </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                    <div className="flex items-start gap-4 ">
                        <div className="p-3 Rounded-fullbg-primary/10">
                        <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                         <div className="text-left">
                            <h4 className="font-semibold text-lg">Project Management</h4>
                            <p className="text-muted-foreground">
                                Leading projects from conception to completion with agile
                                methodologies.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        
    </section>
}
