import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    feedback:
      "I adopted my puppy through this platform and the experience was amazing! The support team was very helpful and made the process so smooth.",
    image:
      "img-1.jpg", 
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Brown",
    feedback:
      "Great service and wonderful staff! I found the perfect companion for my family. Highly recommend to all pet lovers.",
    image:
      "b-img1.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Sarah Williams",
    feedback:
      "The adoption process was straightforward and hassle-free. My cat is happy and healthy, thanks to the guidance provided.",
    image:
      "img-3.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Bilal Abdullah",
    feedback:
    "Excellent experience! The website is user-friendly and the team is very responsive. I adopted a lovely bunny and I couldn't be happier.",
    image:
      "b-img2.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Anjali Roshi",
    feedback:
    "I appreciate the detailed information about each pet. It helped me make the right choice for my home. Great support and service!",
    image:
      "img-5.jpg",
    rating: 5,
  },
  {
    id: 6,
    name: "Umer Robert",
    feedback:
    "Smooth and easy adoption process! I loved the follow-up support as well. Highly recommend this platform for pet adoption.",
    image:
      "b-img6.jpg",
    rating: 5,
  },
];

function TestimonialSection() {
  return (
    <section className=" py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-lg mb-2" style={{color:'purple'}}>Testimonials</h3>
        <h2 className="text-4xl font-bold text-gray-800">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-[purple]"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {testimonial.name}
              </h4>
              <p className="text-gray-600 mb-4">{testimonial.feedback}</p>
              <div className="flex justify-center gap-1 text-yellow-500">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <Star key={index} className="w-5 h-5" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
