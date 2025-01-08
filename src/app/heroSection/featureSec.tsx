"use client";
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Import images
import muscle from '../../../images/muscle.jpg';
import shreded from '../../../images/shreded.jpg';
import maintain from '../../../images/abs.jpg';
import fatloss from '../../../images/fatlos.jpg';
import strength from '../../../images/strength.png.jpg';

import strength2 from '../../../images/ladies/strength.jpg';
import cardio from '../../../images/ladies/cardio.jpg';
import weightloss from '../../../images/ladies/Fatloss.webp';
import abss from '../../../images/ladies/abs.jpg';
import yuga from '../../../images/ladies/images.jpg';

const FeatureSection = () => {
  const scrollRefMen = useRef<HTMLDivElement>(null);
  const scrollRefWomen = useRef<HTMLDivElement>(null);

  // Automatic scroll for Men's section
  useEffect(() => {
    const scrollMen = scrollRefMen.current;

    if (scrollMen) {
      const scroll = () => {
        scrollMen.scrollBy({ left: 200, behavior: 'smooth' });
      };
      const interval = setInterval(scroll, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  // Automatic scroll for Women's section
  useEffect(() => {
    const scrollWomen = scrollRefWomen.current;

    if (scrollWomen) {
      const scroll = () => {
        scrollWomen.scrollBy({ left: 200, behavior: 'smooth' });
      };
      const interval = setInterval(scroll, 3000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="space-y-10 bg-gray-100">
      <h2 className="text-4xl font-serif pt-5">Feature Posts</h2>
      
      <h3 className="text-2xl font-semibold text-center my-6">Men's Section</h3>
      <div ref={scrollRefMen} className="overflow-x-auto whitespace-nowrap space-x-5 w-full h-[400px]">
        <div className="inline-block p-4">
          <Link href="/blog/muscle-building">
            <Image src={muscle} alt="muscle building" width={300} height={100} />
            <p className="pt-5 text-[16px] hover:text-[30px] transition-all duration-300">Muscle Building</p>
          </Link>
        </div>
        <div className="inline-block p-4">
          <Link href="/blog/shredded-training">
            <Image src={shreded} alt="shredded training" width={300} height={100} />
            <p className="pt-5 text-[16px] hover:text-[30px] transition-all duration-300">Shredded Training</p>
          </Link>
        </div>
        <div className="inline-block p-4">
          <Link href="/blog/strength-training">
            <Image src={strength} alt="strength training" width={300} height={100} />
            <p className="pt-5 text-[16px] hover:text-[30px] transition-all duration-300">Strength Training</p>
          </Link>
        </div>
        <div className="inline-block p-4">
          <Link href="/blog/abs-exercise">
            <Image src={maintain} alt="abs exercise" width={300} height={300} />
            <p className="pt-5 text-[16px] hover:text-[30px] transition-all duration-300">Abs Exercise</p>
          </Link>
        </div>
        <div className="inline-block p-4">
          <Link href="/blog/fat-loss">
            <Image src={fatloss} alt="fat loss" width={300} height={300} />
            <p className="pt-5 text-[16px] hover:text-[30px] transition-all duration-300">Fat Loss</p>
          </Link>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-center my-6">Women's Section</h3>
      <div ref={scrollRefWomen} className="overflow-x-auto whitespace-nowrap space-x-5 w-full h-[400px]">
        <div className="inline-block p-4">
          <Link href="/blog/strength-training-women">
            <Image src={strength2} alt="strength training" width={300} height={100} />
            <p className="pt-5 text-[16px] hover:text-[30px] transition-all duration-300">Strength Training</p>
          </Link>
        </div>
        <div className="inline-block p-4">
          <Link href="/blog/cardio-workouts">
            <Image src={cardio} alt="cardio" width={300} height={100} />
            <p className="pt-5 text-[16px] hover:text-[30px] transition-all duration-300">Cardio</p>
          </Link>
        </div>
        <div className="inline-block p-4">
          <Link href="/blog/weight-loss">
            <Image src={weightloss} alt="weight loss" width={300} height={100} />
            <p className="pt-5 text-[16px] hover:text-[30px] transition-all duration-300">Weight Loss</p>
          </Link>
        </div>
        <div className="inline-block p-4">
          <Link href="/blog/abs-exercise-women">
            <Image src={abss} alt="abs exercise" width={300} height={300} />
            <p className="pt-5 text-[16px] hover:text-[30px] transition-all duration-300">Abs Exercise</p>
          </Link>
        </div>
        <div className="inline-block p-4">
          <Link href="/blog/yoga">
            <Image src={yuga} alt="yoga" width={300} height={300} />
            <p className="pt-5 text-[16px] hover:text-[30px] transition-all duration-300">Yoga</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
