
import { MessageSquare, Mic, Gamepad2, Zap, Shield, Globe } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Ask anything",
      description: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Improve everyday",
      description: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Connect everywhere",
      description: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Voice recognition",
      description: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Gamepad2 className="w-8 h-8" />,
      title: "Gamification",
      description: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
      color: "from-purple-500 to-blue-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Integration with APIs",
      description: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Chat Smarter, Not Harder
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              with StarForge
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-8 h-full hover:border-purple-500/50 transition-all duration-300 backdrop-blur-sm">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                
                <button className="mt-6 flex items-center text-white hover:text-purple-400 transition-colors">
                  <span className="mr-2">EXPLORE MORE</span>
                  <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
