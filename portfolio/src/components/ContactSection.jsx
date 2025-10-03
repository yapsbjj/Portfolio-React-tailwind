import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from '@/hooks/use-toast';
import { useState } from "react";
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                    to_name: 'Yassine',
                    reply_to: data.email,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            if (result.status === 200) {
                toast({
                    title: "Message envoyé ✅",
                    description: "Thank you for your message, I'll answer very soon.",
                });
                e.target.reset();
            } else {
                throw new Error('Failed to send email');
            }
        } catch (err) {
            console.error('EmailJS Error:', err);
            toast({
                title: "Erreur ❌",
                description: "Impossible d'envoyer le message. Veuillez réessayer.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">

                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Informations de contact */}
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <a href="mailto:ya.ramdane01@gmail.com" 
                                       className="text-muted-foreground hover:text-primary transition-colors">
                                       ya.ramdane01@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <a href="tel:+33679316117" 
                                       className="text-muted-foreground hover:text-primary transition-colors">
                                       +33 6 79 31 61 17
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary"/>
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <span className="text-muted-foreground">Eragny sur Oise France</span>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">Connect with me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://fr.linkedin.com/in/yassine-ramdane-12845a160?trk=people-guest_people_search-card" 
                                   target="_blank" rel="noopener noreferrer"><Linkedin/></a>
                                <a href="https://www.instagram.com/_yaps_rmdne/?hl=fr" target="_blank" rel="noopener noreferrer"><Instagram/></a>
                                <a href="https://www.facebook.com/yassine.ramdane" target="_blank" rel="noopener noreferrer"><Facebook/></a>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire de contact */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name"  
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="John Doe..."
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email"  
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="john@gmail.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your message</label>
                                <textarea  
                                    id="message" 
                                    name="message"  
                                    required 
                                    rows="5"
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Your message"
                                />
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2", {
                                    "opacity-50 cursor-not-allowed": isSubmitting
                                })}
                            >
                                {isSubmitting ? "Sending..." : "Send message"}
                                <Send size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};