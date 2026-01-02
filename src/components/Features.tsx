import { Brain, Mic, MessageSquare, TrendingUp, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice Interaction",
    description: "Natural voice conversations with our AI interviewer. Just speak as you would in a real interview.",
  },
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced NLP analyzes your responses for content, clarity, and confidence in real-time.",
  },
  {
    icon: MessageSquare,
    title: "Instant Feedback",
    description: "Get detailed feedback on your answers immediately after each question.",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your improvement over time with detailed analytics and insights.",
  },
  {
    icon: Clock,
    title: "Practice Anytime",
    description: "Available 24/7. Practice whenever suits your schedule, as many times as you need.",
  },
  {
    icon: Shield,
    title: "Role-Specific Questions",
    description: "Tailored questions for different tech roles: Frontend, Backend, Data Science, and more.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]" style={{ background: "var(--gradient-glow)" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="gradient-text">Ace Your Interview</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI interview platform provides all the tools you need to prepare, practice, and perfect your interview skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:glow transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
