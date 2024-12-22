import React from 'react';
import { BarChart, Clock, Github, GraduationCap, HelpCircle, Mail, User } from 'lucide-react'
import FeatureCard from '../components/FeatureCard'

const AboutPage = () => {
  return (
    <div className="bg-[#69A9FF] min-h-screen">
      <div className="container mx-auto px-4 py-32">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-center text-[#FFE599] mb-16">
          About Our Platform
        </h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <FeatureCard 
            icon={<User className="w-8 h-8 text-purple-600" />}
            title="For Users"
            description="As a user, you gain access to a comprehensive set of features tailored to enhance your learning experience. Seamlessly share study materials, download notes, and participate in quizzes to assess your knowledge."
          />
          <FeatureCard 
            icon={<GraduationCap className="w-8 h-8 text-purple-600" />}
            title="For Admins"
            description="Admins wield powerful tools to manage courses, sections, topics, and quizzes effortlessly. Automation features allow admins to streamline processes, including follow-ups and reminders to keep user engagement high."
          />
        </div>
        {/* Key Features Section */}
        <section className="mt-24">
          <h2 className="text-4xl font-bold text-center text-[#FFE4A7] mb-12">
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard 
              icon={<HelpCircle className="w-8 h-8 text-purple-600" />}
              title="Daily Quiz"
              description="Engage in daily quizzes to test your knowledge, earn coins, and track your progress over time. These quizzes are designed to reinforce daily learning habits."
            />
            <FeatureCard 
              icon={<Clock className="w-8 h-8 text-purple-600" />}
              title="Scheduled Quiz"
              description="Participate in scheduled quizzes where you can compete with others. These quizzes are structured to assess your skills within a specific time frame."
            />
            <FeatureCard 
              icon={<BarChart className="w-8 h-8 text-purple-600" />}
              title="Analysis"
              description="Receive detailed analysis and rankings for each quiz attempt. Understand your strengths and areas for improvement."
            />
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="mt-24 mb-12">
          <h2 className="text-4xl font-bold text-center text-[#FFE4A7] mb-12">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FeatureCard 
              icon={<Github className="w-8 h-8 text-purple-600" />}
              title="GitHub"
              description="Connect with us on GitHub for updates and contribute to our open source community."
            />
            <FeatureCard 
              icon={<Mail className="w-8 h-8 text-purple-600" />}
              title="Email"
              description="For inquiries and support, feel free to reach out to our dedicated team."
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutPage;