import { UserPlus, Target, Mic2, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Account",
    description: "Sign up in seconds and get immediate access to the platform.",
  },
  {
    icon: Target,
    step: "02",
    title: "Select Your Role",
    description: "Choose the position you're interviewing for: Frontend, Backend, Data Science, and more.",
  },
  {
    icon: Mic2,
    step: "03",
    title: "Start Practicing",
    description: "Our AI will ask you role-specific questions. Respond naturally using your voice.",
  },
  {
    icon: BarChart3,
    step: "04",
    title: "Review & Improve",
    description: "Get instant feedback and track your progress to continuously improve.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">RecruitMind</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and begin your journey to interview success.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="glass rounded-xl p-6 h-full hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-lg gradient-bg flex items-center justify-center group-hover:glow transition-all duration-300">
                        <step.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <span className="absolute -top-2 -right-2 text-xs font-bold bg-background px-2 py-0.5 rounded-full border border-border">
                        {step.step}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
