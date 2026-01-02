export interface InterviewQuestion {
  id: number;
  question: string;
  category: string;
}

export const interviewQuestions: Record<string, InterviewQuestion[]> = {
  frontend: [
    { id: 1, question: "Can you explain the difference between var, let, and const in JavaScript?", category: "JavaScript" },
    { id: 2, question: "What is the Virtual DOM and how does React use it to optimize performance?", category: "React" },
    { id: 3, question: "Explain the CSS Box Model and its components.", category: "CSS" },
    { id: 4, question: "What are React Hooks and why were they introduced?", category: "React" },
    { id: 5, question: "How would you optimize the performance of a slow React application?", category: "Performance" },
    { id: 6, question: "Explain event delegation in JavaScript and provide a use case.", category: "JavaScript" },
    { id: 7, question: "What is the difference between CSS Flexbox and Grid? When would you use each?", category: "CSS" },
    { id: 8, question: "How do you handle state management in large React applications?", category: "React" },
  ],
  backend: [
    { id: 1, question: "What is REST API and what are its key principles?", category: "APIs" },
    { id: 2, question: "Explain the difference between SQL and NoSQL databases. When would you choose one over the other?", category: "Databases" },
    { id: 3, question: "What is middleware in Express.js and how does it work?", category: "Node.js" },
    { id: 4, question: "How do you handle authentication and authorization in a backend application?", category: "Security" },
    { id: 5, question: "Explain database indexing and how it improves query performance.", category: "Databases" },
    { id: 6, question: "What is the N+1 query problem and how would you solve it?", category: "Performance" },
    { id: 7, question: "How do you handle errors and exceptions in a production Node.js application?", category: "Node.js" },
    { id: 8, question: "Explain the concept of microservices and when you would use this architecture.", category: "Architecture" },
  ],
  fullstack: [
    { id: 1, question: "How do you ensure data consistency between the frontend and backend?", category: "Architecture" },
    { id: 2, question: "Explain your approach to designing a scalable full-stack application.", category: "System Design" },
    { id: 3, question: "How would you implement real-time features in a web application?", category: "Real-time" },
    { id: 4, question: "What strategies do you use for API versioning?", category: "APIs" },
    { id: 5, question: "How do you handle file uploads in a full-stack application?", category: "Features" },
    { id: 6, question: "Explain the concept of server-side rendering and its benefits.", category: "Performance" },
    { id: 7, question: "How would you design a caching strategy for a web application?", category: "Performance" },
    { id: 8, question: "What is your approach to testing full-stack applications?", category: "Testing" },
  ],
  mobile: [
    { id: 1, question: "What are the key differences between native and cross-platform mobile development?", category: "Fundamentals" },
    { id: 2, question: "How do you handle state management in React Native?", category: "React Native" },
    { id: 3, question: "Explain the mobile app lifecycle in iOS or Android.", category: "Fundamentals" },
    { id: 4, question: "How would you optimize battery consumption in a mobile app?", category: "Performance" },
    { id: 5, question: "What strategies do you use for offline-first mobile applications?", category: "Architecture" },
    { id: 6, question: "How do you handle push notifications in a mobile app?", category: "Features" },
    { id: 7, question: "Explain deep linking and its implementation.", category: "Features" },
    { id: 8, question: "How do you approach mobile app security?", category: "Security" },
  ],
  ml: [
    { id: 1, question: "Explain the difference between supervised and unsupervised learning.", category: "Fundamentals" },
    { id: 2, question: "What is overfitting and how do you prevent it?", category: "Fundamentals" },
    { id: 3, question: "Explain the bias-variance tradeoff.", category: "Theory" },
    { id: 4, question: "How would you handle imbalanced datasets?", category: "Data Processing" },
    { id: 5, question: "What are transformers and why are they important in modern NLP?", category: "NLP" },
    { id: 6, question: "Explain the concept of gradient descent and its variants.", category: "Optimization" },
    { id: 7, question: "How do you evaluate a classification model?", category: "Evaluation" },
    { id: 8, question: "What is transfer learning and when would you use it?", category: "Techniques" },
  ],
  data: [
    { id: 1, question: "How would you approach analyzing a new dataset?", category: "Analysis" },
    { id: 2, question: "Explain the difference between correlation and causation.", category: "Statistics" },
    { id: 3, question: "What is A/B testing and how would you design an experiment?", category: "Experimentation" },
    { id: 4, question: "How do you handle missing data in a dataset?", category: "Data Cleaning" },
    { id: 5, question: "Explain the concept of feature engineering and its importance.", category: "Features" },
    { id: 6, question: "What visualization techniques would you use for different types of data?", category: "Visualization" },
    { id: 7, question: "How would you communicate complex findings to non-technical stakeholders?", category: "Communication" },
    { id: 8, question: "What is the difference between batch processing and stream processing?", category: "Engineering" },
  ],
  devops: [
    { id: 1, question: "Explain the CI/CD pipeline and its benefits.", category: "CI/CD" },
    { id: 2, question: "What is Docker and how does containerization work?", category: "Containers" },
    { id: 3, question: "How would you design a highly available system?", category: "Architecture" },
    { id: 4, question: "Explain the difference between horizontal and vertical scaling.", category: "Scaling" },
    { id: 5, question: "What monitoring and alerting strategies do you implement?", category: "Monitoring" },
    { id: 6, question: "How do you manage infrastructure as code?", category: "IaC" },
    { id: 7, question: "Explain the concept of blue-green deployments.", category: "Deployment" },
    { id: 8, question: "How would you troubleshoot a production incident?", category: "Troubleshooting" },
  ],
  security: [
    { id: 1, question: "What are the OWASP Top 10 security vulnerabilities?", category: "Fundamentals" },
    { id: 2, question: "Explain SQL injection and how to prevent it.", category: "Vulnerabilities" },
    { id: 3, question: "How does HTTPS work and why is it important?", category: "Encryption" },
    { id: 4, question: "What is cross-site scripting (XSS) and how do you prevent it?", category: "Vulnerabilities" },
    { id: 5, question: "Explain the principle of least privilege.", category: "Access Control" },
    { id: 6, question: "How would you conduct a security audit of a web application?", category: "Auditing" },
    { id: 7, question: "What is a zero-day vulnerability?", category: "Threats" },
    { id: 8, question: "How do you implement secure password storage?", category: "Authentication" },
  ],
};

export const getRoleTitle = (roleId: string): string => {
  const titles: Record<string, string> = {
    frontend: "Frontend Developer",
    backend: "Backend Developer",
    fullstack: "Full Stack Developer",
    mobile: "Mobile Developer",
    ml: "ML Engineer",
    data: "Data Scientist",
    devops: "DevOps Engineer",
    security: "Security Engineer",
  };
  return titles[roleId] || "Technical";
};
