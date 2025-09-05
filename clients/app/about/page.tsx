import React from "react";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <section className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-blue-100 dark:border-gray-700 p-8 mb-10">
             <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 dark:from-cyan-400 dark:via-blue-400 dark:to-blue-700 mb-4">
               About Resume Roster
             </h2>
             <p className="text-lg text-gray-700 dark:text-gray-200 text-center mb-4">
               We are a team of passionate developers and career coaches dedicated to helping you land your dream job. Our mission is to provide the best resume analysis tool on the market, powered by AI and designed for real results.
             </p>
           </section>
     
           <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 mb-10">
             <div className="bg-blue-50 dark:bg-gray-800 rounded-xl p-6 shadow border border-blue-100 dark:border-gray-700">
               <h3 className="text-2xl font-bold text-blue-700 dark:text-cyan-400 mb-2">Our Mission</h3>
               <p className="text-gray-700 dark:text-gray-300">
                 To empower job seekers with actionable, AI-driven feedback and insights that make every resume stand out. We believe everyone deserves a fair shot at their dream career.
               </p>
             </div>
             <div className="bg-cyan-50 dark:bg-gray-800 rounded-xl p-6 shadow border border-cyan-100 dark:border-gray-700">
               <h3 className="text-2xl font-bold text-cyan-700 dark:text-blue-400 mb-2">What We Offer</h3>
               <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                 <li>Instant, AI-powered resume analysis</li>
                 <li>ATS compatibility scoring</li>
                 <li>Personalized suggestions and improvements</li>
                 <li>Modern, user-friendly interface</li>
                 <li>Privacy-first approach</li>
               </ul>
             </div>
           </section>
     
           <section className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-blue-100 dark:border-gray-700 p-8">
             <h3 className="text-2xl font-bold text-blue-700 dark:text-cyan-400 mb-2">Meet the Team</h3>
             <p className="text-gray-700 dark:text-gray-300 mb-4">
               Our team combines expertise in software engineering, artificial intelligence, and career coaching. We are committed to continuous improvement and value your feedback to make Resume Roster even better.
             </p>
             <div className="flex flex-wrap gap-6 justify-center">
               <div className="flex flex-col items-center">
                 <img src="/team1.png" alt="Team Member" className="w-20 h-20 rounded-full mb-2 border-2 border-blue-400" />
                 <span className="font-semibold text-gray-800 dark:text-gray-100">Arun Kushwaha</span>
                 <span className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</span>
               </div>
               {/* <div className="flex flex-col items-center">
                 <img src="/team2.png" alt="Team Member" className="w-20 h-20 rounded-full mb-2 border-2 border-cyan-400" />
                 <span className="font-semibold text-gray-800 dark:text-gray-100">Priya Sharma</span>
                 <span className="text-sm text-gray-500 dark:text-gray-400">Career Coach</span>
               </div> */}
               {/* <div className="flex flex-col items-center">
                 <img src="/team3.png" alt="Team Member" className="w-20 h-20 rounded-full mb-2 border-2 border-blue-400" />
                 <span className="font-semibold text-gray-800 dark:text-gray-100">Rahul Verma</span>
                 <span className="text-sm text-gray-500 dark:text-gray-400">AI Engineer</span>
               </div> */}
             </div>
           </section>
    </div>
  );
}
