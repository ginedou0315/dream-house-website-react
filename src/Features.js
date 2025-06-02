import React from "react";
import "./Features.css";

export default function Features() {
  try {
    const features = [
      {
        icon: "fas fa-water",
        title: "Sea View",
        description: "Breathtaking panoramic ocean views",
      },
      {
        icon: "fas fa-tree",
        title: "Large Garden",
        description: "Beautifully landscaped garden space",
      },
      {
        icon: "fas fa-swimming-pool",
        title: "Pool",
        description: "Medium-sized pool perfect for relaxation",
      },
      {
        icon: "fas fa-utensils",
        title: "Grill Area",
        description: "Outdoor cooking and entertainment space",
      },
      {
        icon: "fas fa-dumbbell",
        title: "Gym Room",
        description: "Fully equipped fitness center",
      },
      {
        icon: "fas fa-home",
        title: "Two Floors",
        description: "Spacious multi-level living",
      },
    ];

    return (
      <section id="features" data-name="features" className="py-20 bg-gray-100">
        <div data-name="features-container" className="container mx-auto px-6">
          <h2
            data-name="features-title"
            className="text-4xl font-bold text-center mb-16"
          >
            House Features
          </h2>
          <div
            data-name="features-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                data-name="feature-card"
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <i
                  className={`${feature.icon} text-4xl text-blue-600 mb-4`}
                ></i>
                <h3
                  data-name="feature-title"
                  className="text-xl font-semibold mb-2"
                >
                  {feature.title}
                </h3>
                <p data-name="feature-description" className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Features component error:", error);
    reportError(error);
    return null;
  }
}
