import React from 'react';
import { Phone, ClipboardCheck, Wrench, TestTube2, CheckCircle2, Sparkles } from 'lucide-react';

const StepsSection = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Initial Contact",
      description: "Whether your appliance has stopped working or you need wall repairs, our team is ready to help. We'll gather details about your appliance's make and model or your wall repair needs, discuss symptoms or damage, and provide an initial assessment. You'll receive a comprehensive quote within 2 hours, ensuring transparent pricing from the start."
    },
    {
      icon: ClipboardCheck,
      number: "02",
      title: "Diagnostic Assessment",
      description: "For appliance repairs, our certified technicians perform thorough diagnostics using advanced testing equipment to pinpoint the exact issue. We check all components and systems to ensure nothing is overlooked. For wall repairs, we assess the damage extent and underlying causes. Our experience with both services allows us to identify when appliance issues might have caused wall damage, offering comprehensive solutions."
    },
    {
      icon: Wrench,
      number: "03",
      title: "Professional Repair",
      description: "Our skilled technicians get to work, whether it's replacing a faulty dishwasher pump or repairing damaged drywall. We stock common replacement parts for major appliance brands and carry professional-grade wall repair materials. Most appliance repairs are completed same-day, while wall repairs are scheduled to ensure proper drying and finishing time. We maintain a clean workspace and protect your home throughout the process."
    },
    {
      icon: TestTube2,
      number: "04",
      title: "Quality Testing",
      description: "Every repaired appliance undergoes comprehensive testing to ensure all functions work perfectly. We run multiple cycles and check all settings. For wall repairs, we ensure proper setting of materials and verify smooth integration with existing surfaces. This thorough approach guarantees lasting results for both services."
    },
    {
      icon: CheckCircle2,
      number: "05",
      title: "Final Inspection",
      description: "Our quality control process is rigorous for both appliance and wall repairs. For appliances, we verify proper operation, energy efficiency, and safety components. Wall repairs receive detailed inspection under various lighting conditions to ensure perfect finishing. We don't consider the job complete until every detail meets our exacting standards."
    },
    {
      icon: Sparkles,
      number: "06",
      title: "Service Guarantee",
      description: "We stand behind our work with solid warranties - 90 days on appliance repairs and 1 year on wall finishing. Our commitment doesn't end at completion; we're always available for follow-up questions or concerns. This dedication to service excellence has earned us our reputation as Vancouver's trusted repair specialists, with over 500 satisfied clients across the Lower Mainland."
    }
  ];

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">OUR SERVICE PROCESS</h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-12 bg-yellow-500"></div>
            <p className="mx-4 text-lg">From Broken to Like-New</p>
            <div className="h-px w-12 bg-yellow-500"></div>
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Our proven six-step process ensures excellent results whether you need appliance repairs 
            or wall finishing. Every step is designed to deliver efficient, high-quality service 
            with complete customer satisfaction.
          </p>
        </div>

        <div className="relative">
          <div className="space-y-16">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  {/* Connecting Line */}
                  {index !== steps.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-32 bg-gray-200"></div>
                  )}

                  <div className={`flex flex-col md:flex-row items-start ${isEven ? '' : 'md:flex-row-reverse'} gap-8`}>
                    {/* Icon and Number */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
                        <StepIcon className="w-8 h-8 text-yellow-500" />
                      </div>
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`flex-grow md:max-w-xl ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            onClick={() => window.open('/quote', '_current')}
            className="bg-black text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-yellow-500 transition-colors duration-300"
          >
            Schedule Your Repair
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;