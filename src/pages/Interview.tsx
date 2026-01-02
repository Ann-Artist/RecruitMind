import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { interviewQuestions, getRoleTitle } from "@/data/interviewQuestions";
import { Mic, MicOff, ArrowLeft, SkipForward, CheckCircle, Brain } from "lucide-react";

const Interview = () => {
  const { roleId } = useParams<{ roleId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  const questions = roleId ? interviewQuestions[roleId] || [] : [];
  const roleTitle = roleId ? getRoleTitle(roleId) : "";

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) navigate("/auth?mode=login");
    };
    checkAuth();
  }, [navigate]);

  useEffect(() => {
    if (questions.length > 0 && currentQuestion === 0) {
      speakQuestion(questions[0].question);
    }
  }, []);

  const speakQuestion = (text: string) => {
    if ('speechSynthesis' in window) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.onend = () => setIsSpeaking(false);
      speechSynthesis.speak(utterance);
    }
  };

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      toast({ title: "Speech recognition not supported", variant: "destructive" });
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;

    recognitionRef.current.onresult = (event) => {
      let finalTranscript = "";
      for (let i = 0; i < event.results.length; i++) {
        finalTranscript += event.results[i][0].transcript;
      }
      setTranscript(finalTranscript);
    };

    recognitionRef.current.onerror = () => {
      setIsListening(false);
      toast({ title: "Error with speech recognition", variant: "destructive" });
    };

    recognitionRef.current.start();
    setIsListening(true);
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  const submitAnswer = () => {
    if (!transcript.trim()) {
      toast({ title: "Please provide an answer", variant: "destructive" });
      return;
    }

    const newAnswers = [...answers, transcript];
    setAnswers(newAnswers);
    setTranscript("");

    if (currentQuestion < questions.length - 1) {
      const nextQ = currentQuestion + 1;
      setCurrentQuestion(nextQ);
      speakQuestion(questions[nextQ].question);
    } else {
      setIsComplete(true);
      speechSynthesis.speak(new SpeechSynthesisUtterance("Great job! You have completed the interview."));
    }
  };

  if (isComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass rounded-2xl p-8 max-w-md text-center animate-fade-in">
          <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Interview Complete!</h1>
          <p className="text-muted-foreground mb-6">You answered {answers.length} questions for {roleTitle}.</p>
          <Button onClick={() => navigate("/dashboard")} className="gradient-bg">Back to Dashboard</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="glass border-b border-border p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Button variant="ghost" onClick={() => navigate("/dashboard")}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Exit
          </Button>
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-8">
            <span className="text-sm text-primary">{roleTitle} Interview</span>
            <h2 className="text-xl md:text-2xl font-semibold mt-2 animate-fade-in">
              {questions[currentQuestion]?.question}
            </h2>
          </div>

          <div className="glass rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-center gap-1 mb-4 h-12">
              {isListening && [...Array(7)].map((_, i) => (
                <div key={i} className="w-1.5 bg-primary rounded-full voice-wave" style={{ height: `${20 + Math.random() * 30}px`, animationDelay: `${i * 0.1}s` }} />
              ))}
              {!isListening && <p className="text-muted-foreground text-sm">Tap the mic to start speaking</p>}
            </div>
            
            <div className="flex justify-center mb-4">
              <button
                onClick={isListening ? stopListening : startListening}
                disabled={isSpeaking}
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all ${isListening ? 'bg-destructive animate-pulse-glow' : 'gradient-bg hover:opacity-90'}`}
              >
                {isListening ? <MicOff className="w-7 h-7 text-white" /> : <Mic className="w-7 h-7 text-white" />}
              </button>
            </div>

            {transcript && (
              <div className="bg-secondary/50 rounded-lg p-4 max-h-32 overflow-y-auto">
                <p className="text-sm">{transcript}</p>
              </div>
            )}
          </div>

          <div className="flex gap-4 justify-center">
            <Button variant="outline" onClick={() => { setTranscript(""); submitAnswer(); }}>
              <SkipForward className="w-4 h-4 mr-2" /> Skip
            </Button>
            <Button onClick={submitAnswer} className="gradient-bg" disabled={!transcript.trim()}>
              Submit Answer
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Interview;
