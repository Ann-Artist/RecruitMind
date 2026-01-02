import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Code2,
  Server,
  Database,
  Smartphone,
  Brain,
  LineChart,
  Shield,
  Cloud,
  ArrowRight,
  User,
} from "lucide-react";

const roles = [
  {
    id: "frontend",
    title: "Frontend Developer",
    icon: Code2,
    description: "React, Vue, Angular, CSS, JavaScript",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "backend",
    title: "Backend Developer",
    icon: Server,
    description: "Node.js, Python, Java, APIs, Databases",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "fullstack",
    title: "Full Stack Developer",
    icon: Database,
    description: "End-to-end development expertise",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "mobile",
    title: "Mobile Developer",
    icon: Smartphone,
    description: "iOS, Android, React Native, Flutter",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "ml",
    title: "ML Engineer",
    icon: Brain,
    description: "Machine Learning, TensorFlow, PyTorch",
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "data",
    title: "Data Scientist",
    icon: LineChart,
    description: "Data Analysis, Python, SQL, Statistics",
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: "devops",
    title: "DevOps Engineer",
    icon: Cloud,
    description: "CI/CD, Docker, Kubernetes, AWS",
    color: "from-amber-500 to-orange-500",
  },
  {
    id: "security",
    title: "Security Engineer",
    icon: Shield,
    description: "Cybersecurity, Penetration Testing",
    color: "from-red-500 to-rose-500",
  },
];

const Dashboard = () => {
  const [user, setUser] = useState<{ email?: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth?mode=login");
    }
  }, [loading, user, navigate]);

  const handleStartInterview = (roleId: string) => {
    navigate(`/interview/${roleId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar user={user} />

      <main className="flex-1 pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
              <User className="w-4 h-4 text-primary" />
              <span className="text-sm">{user?.email}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your <span className="gradient-text">Interview Role</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Select the position you're preparing for. Our AI will ask you relevant technical questions based on your choice.
            </p>
          </div>

          {/* Role Selection Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <button
                key={role.id}
                onClick={() => handleStartInterview(role.id)}
                className="glass rounded-xl p-6 text-left hover:border-primary/50 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${role.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <role.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {role.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {role.description}
                </p>
                <div className="flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Start Interview
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
