import { useState } from 'react';

const demoPlans = [
  {
    _id: "free",
    name: "Free",
    price: 0,
    priceLabel: "Free",
    credits: 15,
    billing: "One-time",
    features: [
      "15 resume analyses",
      "Basic ATS score",
      "AI suggestions",
      "No credit card required",
    ],
    highlight: false,
  },
  {
    _id: "pro-monthly",
    name: "Pro",
    price: 9,
    priceLabel: "$9/mo",
    credits: 100,
    billing: "Monthly",
    features: [
      "100 resume analyses/month",
      "Advanced ATS score",
      "Priority AI suggestions",
      "Email support",
      "Cancel anytime",
    ],
    highlight: true,
  },
  {
    _id: "pro-annual",
    name: "Pro (Annual)",
    price: 90,
    priceLabel: "$90/yr",
    credits: 1200,
    billing: "Annual",
    features: [
      "1200 resume analyses/year",
      "Advanced ATS score",
      "Priority AI suggestions",
      "Email support",
      "2 months free",
    ],
    highlight: true,
  },
  {
    _id: "ultra-pro-monthly",
    name: "Ultra Pro",
    price: 19,
    priceLabel: "$19/mo",
    credits: 500,
    billing: "Monthly",
    features: [
      "500 resume analyses/month",
      "Full ATS breakdown",
      "Personalized AI feedback",
      "Priority support",
      "Early access to new features",
    ],
    highlight: false,
  },
  {
    _id: "ultra-pro-annual",
    name: "Ultra Pro (Annual)",
    price: 190,
    priceLabel: "$190/yr",
    credits: 6000,
    billing: "Annual",
    features: [
      "6000 resume analyses/year",
      "Full ATS breakdown",
      "Personalized AI feedback",
      "Priority support",
      "Early access to new features",
      "2 months free",
    ],
    highlight: false,
  },
];

function PlansPage() {
  const [plans] = useState(demoPlans);

  return (
    <div className="container p-4 mx-auto">
      <h2 className="mb-8 text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400">
        Our Plans
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan._id}
            className={`relative p-8 rounded-2xl shadow-xl border transition-transform duration-200 bg-white dark:bg-slate-900 ${
              plan.highlight
                ? "border-blue-500 scale-105 ring-2 ring-blue-200"
                : "border-gray-200 dark:border-slate-700"
            }`}
          >
            {plan.highlight && (
              <span className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Popular
              </span>
            )}
            <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-white">{plan.name}</h3>
            <p className="mb-1 text-4xl font-extrabold text-blue-600 dark:text-cyan-400">{plan.priceLabel}</p>
            <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">
              {plan.credits} credits &middot; {plan.billing}
            </p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700 dark:text-gray-200">
                  <svg
                    className="w-5 h-5 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full px-4 py-2 rounded-md font-bold transition-colors duration-200 ${
              plan.price === 0
                ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                : "bg-indigo-600 text-white hover:bg-indigo-700"
            }`}>
              {plan.price === 0 ? "Start Free" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlansPage;