import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, ValidationError } from "@formspree/react";

export const ContactSection = () => {
  const [state, handleSubmit] = useForm("movenwzl");

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-purple-600 dark:text-purple-400">Get in</span> Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Interested in working together or have a question? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <ContactItem
                icon={<Mail className="text-purple-600 dark:text-purple-400" />}
                title="Email"
                content="karimachami24@gmail.com"
                href="mailto:your.email@example.com"
              />
              <ContactItem
                icon={<Phone className="text-purple-600 dark:text-purple-400" />}
                title="Phone"
                content="+212707954826"
                href="tel:+212707954826"
              />
              <ContactItem
                icon={<MapPin className="text-purple-600 dark:text-purple-400" />}
                title="Location"
                content="Agadir, Morocco"
              />
            </div>
          </div>

          {/* FormSpree Form */}
          <div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-md">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

              {state.succeeded ? (
                <p className="text-green-600 dark:text-green-400">Thank you! Your message has been sent.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="border-gray-300 dark:border-gray-700 focus:border-purple-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      required
                      className="border-gray-300 dark:border-gray-700 focus:border-purple-500"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      required
                      rows={5}
                      className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <Button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-purple-600 hover:bg-purple-700"
                  >
                    {state.submitting ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <footer className="mt-20 text-center text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Karima Chami. All rights reserved.</p>
      </footer>
    </section>
  );
};

type ContactItemProps = {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
};

const ContactItem = ({ icon, title, content, href }: ContactItemProps) => (
  <div className="flex items-start">
    <div className="mr-4 mt-1">{icon}</div>
    <div>
      <h4 className="font-medium text-gray-900 dark:text-white">{title}</h4>
      {href ? (
        <a href={href} className="text-gray-600 dark:text-gray-300 hover:text-purple-600 transition-colors">
          {content}
        </a>
      ) : (
        <p className="text-gray-600 dark:text-gray-300">{content}</p>
      )}
    </div>
  </div>
);
