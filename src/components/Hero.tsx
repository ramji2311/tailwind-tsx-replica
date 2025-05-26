
import { ArrowDown } from "lucide-react";
import { FloatingElements } from "./FloatingElements";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <FloatingElements />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm text-slate-300 mb-6">
            [ GET STARTED WITH STARFORGE ]
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Explore the Possibilities
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            of AI Chatting with StarForge
          </span>
        </h1>
        
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Unleash the power of AI within StarForge. Upgrade your productivity with 
          StarForge, the open AI chat app.
        </p>
        
        <button className="px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-slate-100 transition-colors text-lg">
          GET STARTED
        </button>
        
        <div className="mt-16">
          <div className="relative bg-slate-900/50 border border-slate-700 rounded-2xl p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl h-64 flex items-center justify-center">
              <div className="text-6xl">🤖</div>
            </div>
            
            <div className="absolute top-4 right-4 flex items-center space-x-2 bg-purple-600 px-3 py-1 rounded-full">
              <ArrowDown className="w-4 h-4" />
              <span className="text-sm">Code generation</span>
              <div className="flex -space-x-1">
                <div className="w-6 h-6 bg-blue-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                <div className="w-6 h-6 bg-yellow-500 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-xs text-slate-300">1m ago</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
