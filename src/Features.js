import React from "react";
import "./Features.css";

export default function Features() {
  let features = [
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
    <section className="features-section">
      <div className="features-content">
        <h1 className="text-center py-4">House Features</h1>
        <div data-name="features-grid" className="row gx-5 grid-container">
          {features.map((feature, index) => (
            <div
              key={index}
              data-name="feature-card"
              className="grid-content col-4 p-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow "
            >
              <i className={`${feature.icon} text-4xl text-blue-600 mb-4`}></i>
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
}
