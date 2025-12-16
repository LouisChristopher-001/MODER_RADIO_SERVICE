import React, { useState } from "react";
import { Coffee, Utensils, Sparkles, Clock, Award, TrendingUp, ChefHat, Lightbulb, Droplet, Wind, Zap, Palette, Play, ArrowRight, Star, FileText, Hammer } from "lucide-react";

const RestaurantCafeSection = () => {
  const [activeTab, setActiveTab] = useState("design");
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      icon: ChefHat,
      title: "Commercial Kitchen Design",
      description: "State-of-the-art kitchen layouts optimized for workflow, safety, and efficiency",
      gradient: "from-orange-400 to-rose-500",
      bg: "bg-gradient-to-br from-orange-50 to-rose-50"
    },
    {
      icon: Palette,
      title: "Brand-Driven Interiors",
      description: "Create memorable dining experiences with custom ambiance that tells your story",
      gradient: "from-violet-500 to-purple-600",
      bg: "bg-gradient-to-br from-violet-50 to-purple-50"
    },
    {
      icon: Sparkles,
      title: "Premium Fit-Out",
      description: "End-to-end execution from flooring to fixtures with meticulous attention to detail",
      gradient: "from-blue-500 to-cyan-500",
      bg: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: Zap,
      title: "Fast-Track Delivery",
      description: "Streamlined project timelines to get your business up and running quickly",
      gradient: "from-amber-400 to-orange-500",
      bg: "bg-gradient-to-br from-amber-50 to-orange-50"
    },
    {
      icon: Award,
      title: "Premium Materials",
      description: "Food-safe, durable materials that meet all health and safety regulations",
      gradient: "from-emerald-500 to-green-600",
      bg: "bg-gradient-to-br from-emerald-50 to-green-50"
    },
    {
      icon: TrendingUp,
      title: "Space Optimization",
      description: "Strategic layouts that maximize seating capacity and enhance customer flow",
      gradient: "from-indigo-500 to-blue-600",
      bg: "bg-gradient-to-br from-indigo-50 to-blue-50"
    }
  ];

  const tabContent = {
    design: {
      title: "Design & Planning",
      items: [
        { icon: Lightbulb, text: "Concept Development & Branding" },
        { icon: Coffee, text: "Space Planning & Layout Design" },
        { icon: Palette, text: "Interior Design & Material Selection" },
        { icon: ChefHat, text: "Kitchen Equipment & Workflow Planning" }
      ]
    },
    construction: {
      title: "Construction & Build",
      items: [
        { icon: Utensils, text: "Complete Kitchen Installation" },
        { icon: Sparkles, text: "Dining Area Setup" },
        { icon: Wind, text: "HVAC & Ventilation Systems" },
        { icon: Zap, text: "Electrical & Plumbing Infrastructure" }
      ]
    },
    finishing: {
      title: "Finishing Touches",
      items: [
        { icon: Droplet, text: "Custom Furniture & Fixtures" },
        { icon: Award, text: "Lighting Design & Installation" },
        { icon: Sparkles, text: "Signage & Branding Elements" },
        { icon: TrendingUp, text: "Final Inspection & Handover" }
      ]
    }
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      {/* Modern Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-20 pb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-slate-700">Restaurant & Cafe Specialists</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Design-Build
              <span className="block bg-gradient-to-r from-blue-900 to-orange-500 bg-clip-text text-transparent">
                Restaurant Solutions
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Transform your culinary vision into an unforgettable dining experience. 
              End-to-end restaurant design and construction services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* <a
                href="#contact"
                className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Start Your Project</span>
                <ArrowRight className="w-5 h-5 relative transform group-hover:translate-x-1 transition-transform duration-300" />
              </a> */}
              
              {/* <a
                href="#portfolio"
                className="group px-8 py-4 bg-white text-slate-700 rounded-2xl font-semibold border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                <span>View Showcase</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>

      {/* Animated Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Comprehensive Restaurant Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Every aspect of your restaurant project, meticulously crafted for success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
                className="relative group  transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
              >
                <div className={`relative p-8 rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden ${feature.bg}`}>
                  
                  {/* Animated Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />
                  
                  {/* Floating Icon */}
                  <div className="relative mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5`}>
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-slate-700" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Animated Arrow */}
                  {/* <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div> */}

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                    <div className="absolute top-0 right-0 w-6 h-6 bg-gradient-to-br from-transparent to-transparent via-slate-200/50 transform rotate-45 translate-x-3 -translate-y-3 group-hover:via-orange-500/20 transition-colors duration-300"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modern Process Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 text-sm font-medium mb-4">
                <Star className="w-4 h-4" />
                Our Process
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Streamlined Project Execution
              </h3>
              <p className="text-lg text-slate-600">
                From initial concept to grand opening, we guide you through every step with precision and expertise.
              </p>
            </div>

            {/* Process Steps */}
            <div className="space-y-4">
              {Object.entries(tabContent).map(([key, content], index) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border-2 ${
                    activeTab === key
                      ? 'border-orange-500 bg-white shadow-lg scale-105'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        activeTab === key 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {index + 1}
                      </div>
                      <span className="font-bold text-slate-900">{content.title}</span>
                    </div>
                    <ArrowRight className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${activeTab === key ? 'rotate-90' : ''}`} />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Visual Section */}
          {/* Visual Section */}
<div className="relative">
  {/* Main Card */}
  <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200">
    <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center relative overflow-hidden">
      
      {/* Design Tab Images */}
      {activeTab === "design" && (
        <div className="absolute inset-0 flex items-center justify-center gap-4 p-8">
          <div className="flex-1 h-full bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="w-full h-1/2 bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center">
              <Palette className="w-12 h-12 text-blue-600" />
            </div>
            <div className="w-full h-1/2 bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center">
              <Lightbulb className="w-10 h-10 text-purple-600" />
            </div>
          </div>
          
          <div className="flex-1 h-full bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center">
              <ChefHat className="w-16 h-16 text-orange-600" />
            </div>
          </div>
          
          <div className="flex-1 h-full bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="w-full h-1/2 bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
              <Coffee className="w-10 h-10 text-green-600" />
            </div>
            <div className="w-full h-1/2 bg-gradient-to-br from-red-50 to-rose-100 flex items-center justify-center">
              <FileText className="w-10 h-10 text-red-600" />
            </div>
          </div>
        </div>
      )}
      
      {/* Construction Tab Images */}
      {activeTab === "construction" && (
        <div className="absolute inset-0 flex items-center justify-center gap-4 p-8">
          <div className="flex-1 h-full bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-gray-50 to-slate-200 flex items-center justify-center">
              <Hammer className="w-16 h-16 text-slate-700" />
            </div>
          </div>
          
          <div className="flex-1 h-full bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="w-full h-1/2 bg-gradient-to-br from-yellow-50 to-amber-100 flex items-center justify-center">
              <Utensils className="w-12 h-12 text-amber-600" />
            </div>
            <div className="w-full h-1/2 bg-gradient-to-br from-blue-50 to-cyan-100 flex items-center justify-center">
              <Wind className="w-12 h-12 text-cyan-600" />
            </div>
          </div>
          
          <div className="flex-1 h-full bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-orange-50 to-red-100 flex items-center justify-center">
              <Zap className="w-16 h-16 text-orange-600" />
            </div>
          </div>
        </div>
      )}
      
      {/* Finishing Tab Images */}
      {activeTab === "finishing" && (
        <div className="absolute inset-0 flex items-center justify-center gap-4 p-8">
          <div className="flex-1 h-full bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center">
              <Droplet className="w-16 h-16 text-emerald-600" />
            </div>
          </div>
          
          <div className="flex-1 h-full bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="w-full h-1/2 bg-gradient-to-br from-purple-50 to-violet-100 flex items-center justify-center">
              <Award className="w-12 h-12 text-purple-600" />
            </div>
            <div className="w-full h-1/2 bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-pink-600" />
            </div>
          </div>
          
          <div className="flex-1 h-full bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-cyan-50 to-blue-100 flex items-center justify-center">
              <TrendingUp className="w-16 h-16 text-cyan-600" />
            </div>
          </div>
        </div>
      )}
      
      {/* Tab Label */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg">
          <Coffee className="w-4 h-4 text-orange-500" />
          <span className="text-sm font-medium text-slate-700">
            {activeTab === "design" && "Design Concepts"}
            {activeTab === "construction" && "Construction Progress"}
            {activeTab === "finishing" && "Finishing Touches"}
          </span>
        </div>
      </div>
    </div>

    {/* Tab Content */}
    <div className="p-6 bg-slate-900">
      <div className="grid grid-cols-2 gap-4">
        {tabContent[activeTab].items.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 text-slate-200"
            >
              <div className="p-2 bg-orange-500/20 rounded-lg">
                <IconComponent className="w-4 h-4 text-orange-500" />
              </div>
              <span className="text-sm font-medium">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  </div>

  {/* Floating Elements */}
  <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-500/10 rounded-2xl transform rotate-12"></div>
  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-900/10 rounded-2xl transform -rotate-12"></div>
</div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { value: "100", label: "Code Compliant", suffix: "%" },
              { value: "30", label: "Days Average", suffix: "+" },
              { value: "24/7", label: "Project Support", suffix: "" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-orange-500 bg-clip-text text-transparent mb-2">
                  {stat.value}<span className="text-orange-500">{stat.suffix}</span>
                </div>
                <div className="text-slate-600 font-medium group-hover:text-slate-900 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
          
          <div className="relative z-10 text-center py-16 px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-8">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Ready to Begin?</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Create Your Dream Restaurant
            </h3>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Join successful restaurateurs who trusted us to bring their vision to life. 
              Schedule your consultation and let's build something extraordinary together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className="group px-8 py-4 bg-orange-500 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              >
                <ChefHat className="w-5 h-5" />
                <span>Schedule Consultation</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              {/* <a
                href="#portfolio"
                className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-2xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-3"
              >
                <Play className="w-5 h-5" />
                <span>View Success Stories</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCafeSection;