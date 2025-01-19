"use client";
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import styles from '../Pages/LandingPage.module.css';

const features = [
  {
    title: "Snap, Style, and Slay",
    description: "Take a photo of what inspires you. Our AI finds similar products so you can style your look and slay effortlessly.",
    icon: "/images/camera.png",
    bgColor: "bg-[#ffded4]"
  },
  {
    title: "Find Your Perfect Match",
    description: "Upload a photo and let our AI match it to the best products for your style.",
    icon: "/images/match.png",
    bgColor: "bg-[#ffeed4]"
  },
  {
    title: "Shop What You Love",
    description: "Discover products inspired by your snaps and bring your vision to life.",
    icon: "/images/shoppingbag.png",
    bgColor: "bg-[#d4f0ff]"
  },
  {
    title: "Personalized Shopping",
    description: "Experience a curated journey tailored to your style preferences with just one snap.",
    icon: "/images/personalized.png",
    bgColor: "bg-[#ffd4d4]"
  }
];

export default function UserFeatures() {
  const router = useRouter(); // Initialize the router

  const handleRequest = () => {
    router.push('/User'); // Navigate to the Waitlist page
  };

  return (
    <section className="py-20 bg-[#ffd4d4] rounded-tl-[400px] relative min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-between">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#333] mb-4">Snap, Style, and Slay</h2>
          <p className="text-2xl text-[#666]">Effortless Style with Just One Snap</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 flex-grow">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Feature Icon */}
              <div
                className={`${feature.bgColor} rounded-full w-16 h-16 mb-6 flex items-center justify-center mx-auto`}
              >
                <Image src={feature.icon} alt={feature.title} width={36} height={36} />
              </div>
              {/* Feature Title */}
              <h3 className="text-lg font-bold mb-2 text-[#333] text-center">{feature.title}</h3>
              {/* Feature Description */}
              <p className="text-[#666] text-sm leading-relaxed text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action Button */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full md:w-auto">
          <button
            className={`${styles.ctaButton} shadow-lg`}
            onClick={handleRequest} // Attach the handler
          >
            Join the Waitlist!
          </button>
        </div>
      </div>
    </section>
  );
}
