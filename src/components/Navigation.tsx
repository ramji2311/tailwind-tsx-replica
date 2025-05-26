
import { Star, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">StarForge</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">
              FEATURES
            </a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">
              PRICING
            </a>
            <Link to="/how-to-use" className="text-slate-300 hover:text-white transition-colors">
              HOW TO USE
            </Link>
            <Link to="/roadmap" className="text-slate-300 hover:text-white transition-colors">
              ROADMAP
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/register" className="text-slate-300 hover:text-white transition-colors">
              NEW ACCOUNT
            </Link>
            <Link to="/signin" className="px-4 py-2 border border-slate-600 rounded-lg text-white hover:border-purple-500 transition-colors">
              SIGN IN
            </Link>
          </div>
          
          <button className="md:hidden">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};
