import Article from './article';
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

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-10">Welcome to My Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Article 
          title="Muscle Building" 
          image={muscle} 
          content="Muscle building is essential for enhancing your strength and overall physical appearance. This article covers the best exercises and nutrition tips to help you gain muscle effectively."
          imageWidth={300}
          imageHeight={200}
        />
        <Article 
          title="Shredded Training" 
          image={shreded} 
          content="Shredded training focuses on reducing body fat while maintaining muscle mass. Learn about the most effective workouts and dietary strategies to get shredded."
          imageWidth={300}
          imageHeight={200}
        />
        <Article 
          title="Strength Training" 
          image={strength} 
          content="Strength training is crucial for building strong muscles, improving bone density, and boosting metabolism. Discover various strength training routines that suit all fitness levels."
          imageWidth={300}
          imageHeight={200}
        />
        <Article 
          title="Abs Exercise" 
          image={maintain} 
          content="Abs exercises are key to achieving a well-defined core. This guide provides effective exercises to target your abdominal muscles and tips to maintain a healthy diet for visible results."
          imageWidth={300}
          imageHeight={200}
        />
        <Article 
          title="Fat Loss" 
          image={fatloss} 
          content="Losing fat requires a combination of proper nutrition and consistent exercise. Learn about the best fat loss techniques and how to create a sustainable plan that fits your lifestyle."
          imageWidth={300}
          imageHeight={200}
        />
        <Article 
          title="Strength Training for Women" 
          image={strength2} 
          content="Strength training is not just for men. Women can greatly benefit from incorporating strength exercises into their routine. Understand the unique advantages and effective workouts for women."
          imageWidth={300}
          imageHeight={200}
        />
        <Article 
          title="Cardio Workouts" 
          image={cardio} 
          content="Cardio workouts are essential for improving cardiovascular health and burning calories. Explore a variety of cardio exercises that can be done at home or at the gym."
          imageWidth={300}
          imageHeight={200}
        />
        <Article 
          title="Weight Loss" 
          image={weightloss} 
          content="Weight loss is a common goal for many. Learn about balanced diet plans, effective exercises, and tips to stay motivated on your weight loss journey."
          imageWidth={300}
          imageHeight={200}
        />
        <Article 
          title="Abs Exercise for Women" 
          image={abss} 
          content="Achieving toned abs is possible for women with the right exercises and nutrition. This article covers ab workouts specifically designed for women."
          imageWidth={300}
          imageHeight={200}
        />
        <Article 
          title="Yoga for Flexibility and Relaxation" 
          image={yuga} 
          content="Yoga is an excellent way to enhance flexibility and reduce stress. Discover the various yoga poses and routines that can help you achieve a balanced and peaceful mind."
          imageWidth={300}
          imageHeight={200}
        />
      </div>
    </div>
  );
};

export default Blog;
