import React from "react";
import FeatureCard from "./FeatureCard";
import {BookOpen, Brain, Trophy, Users, CircleHelp} from 'lucide-react';
import {motion} from "framer-motion";

const fadeInUp = {
  initial: {opacity: 0, y: 60},
  animate: {opacity: 1, y: 0},
  transition: {duration: 0.6}
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const FeaturesSection = () => {
  return (
    <section className="bg-[#69B0FC] py-0 shadow-lg">
      <motion.div
        className="container mx-auto px-4"
        initial="initial"
        whileInView="animate"
        viewport={{once: true, amount: 0.3}}
        variants={stagger}
      >
        <motion.h2
          className="text-7xl font-bold text-center mb-12"
          variants={fadeInUp}
        >
          Why Choose Our Platform?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<BookOpen className="w-8 h-8 text-purple-600" />}
            title="Extensive Question Bank"
            description="Access thousands of curated questions across various subjects and difficulty levels."
          />
          <FeatureCard
            icon={<Brain className="w-8 h-8 text-purple-600" />}
            title="Adaptive Learning"
            description="Learn from industry experts with our carefully curated courses. Expand your knowledge with lessons designed to help you excel in your field."
          />
          <FeatureCard
            icon={<Trophy className="w-8 h-8 text-purple-600" />}
            title="Progress Tracking"
            description="Monitor your improvement with detailed analytics and performance insights."
          />
          <FeatureCard
            icon={<Users className="w-8 h-8 text-purple-600" />}
            title="Collaborative Learning"
            description="Engage with peers, join study groups, and participate in live quizzes."
          />
          <FeatureCard
            icon={<CircleHelp className="w-8 h-8 text-purple-600" />}
            title="Daily Quizzes for Mastery"
            description="Challenge yourself with daily quizzes, earn coins, and track your progress. Reinforce your learning habits with our engaging quizzes designed to test and improve your understanding of various subjects."
          />
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturesSection;