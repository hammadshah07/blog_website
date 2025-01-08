// components/About.js
import React from 'react';
import Image from 'next/image';
import fit from "../../../images/images (1).jpg"
import train from "../../../images/images.jpg"
import diet from "../../../images/diet.jpg"

const AboutSec = () => {
  return (
    <section className="bg-gray-100 text-gray-800 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
        <p className="text-lg text-center mb-6">
          Welcome to our fitness blog! We are dedicated to providing you with the latest and most effective fitness tips, workout routines, nutrition advice, and motivational content to help you achieve your health and fitness goals.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex-1 text-center">
            <Image src={fit} alt="Fitness" className="rounded-lg mx-auto mb-4 w-64 h-64 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p>
              Our mission is to inspire and empower individuals to lead healthier, more active lives. We believe in the transformative power of fitness and aim to provide you with the knowledge and tools you need to succeed.
            </p>
          </div>
          <div className="flex-1 text-center">
            <Image src={train} alt="Workout" className="rounded-lg mx-auto mb-4 w-64 h-64 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Our Approach</h3>
            <p>
              We focus on providing evidence-based information and practical advice. Whether you&apos;re a beginner or an experienced fitness enthusiast, our content is designed to be accessible and applicable to everyone.
            </p>
          </div>
          <div className="flex-1 text-center">
            <Image src={diet} alt="Healthy Eating" className="rounded-lg mx-auto mb-4 w-64 h-64 object-cover" />
            <h3 className="text-xl font-semibold mb-2">Join Us</h3>
            <p>
              Join our community of fitness enthusiasts and start your journey towards a healthier, fitter you. Together, we can achieve great things!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSec;
