import { Star } from "lucide-react";
import Image from 'next/image';

const Reviews = () => {
  const reviews = [
    {
      src: '/photos/homepage/5.jpg',
      name: "David Chen",
      role: "Homeowner in Vancouver",
      text: "Called them when my dishwasher stopped working and they were here the same day. Fixed the issue quickly and even repaired some drywall damage behind the unit. Professional service and fair pricing. Highly recommend!"
    },
    {
      src: '/photos/homepage/6.jpg',
      name: "Sarah Wong",
      role: "Property Manager, Burnaby",
      text: "We use PG Wall Finishing for all our appliance rentals and repairs. They maintain our entire fleet of rental units and their response time is incredible. The wall repair service is an added bonus - saves us from calling multiple contractors."
    },
    {
      src: '/photos/homepage/7.jpg',
      name: "James Miller",
      role: "Restaurant Owner",
      text: "When our commercial freezer broke down, they saved our business thousands in potential losses. The technician diagnosed and fixed the issue within hours. We now use their maintenance service for all our appliances. Top-notch professionals!"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8 md:mb-16">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={review.src}
                    alt={review.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{review.name}</h3>
                  <p className="text-gray-600 text-sm">{review.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-5 h-5 fill-yellow-400 text-yellow-400" 
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-gray-700 text-base leading-relaxed">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;