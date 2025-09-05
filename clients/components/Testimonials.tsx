"use client";
import React from "react";

const Testimonials: React.FC = () => {
  return (
    <div className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">What Our Users Say</h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-700">
            <p className="text-lg">“Best resume checker I’ve used. Instant feedback improved my resume in minutes.”</p>
            <div className="mt-4">
              <p className="font-medium">John Doe</p>
              <p className="text-gray-500 dark:text-gray-400">Software Engineer</p>
            </div>
          </div>
          <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-700">
            <p className="text-lg">“I landed my dream job thanks to this tool. AI suggestions were spot on.”</p>
            <div className="mt-4">
              <p className="font-medium">Jane Smith</p>
              <p className="text-gray-500 dark:text-gray-400">Product Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
