import React, { useState, useEffect } from "react";
import "./home.css";

// import image from '../image/puritemple.jpg'
import smll from "../image/odisha-sc.jpg";
import anugul from "../image/ANUGUL.jpg";
import Balangir from "../image/Balangir.jpg";
import Balasore from "../image/Balasore.jpg";
import Bargarh from "../image/Bargarh.jpg";
import Bhadrak from "../image/Bhadrak.jpg";
import Boudh from "../image/Boudh.jpg";
import cuttack from "../image/Cuttack.JPG";
import Debagarh from "../image/Debagarh.jpg";
import Dhenkanal from "../image/Dhenkanal.jpg";
import Gajapati from "../image/Gajapati.jpg";
import Ganjam from "../image/ganjam.jpg";
import Jagatsinghpur from "../image/Jagatsinghpur.jpg";
import Jajpur from "../image/Dashashwamedh-Ghat-Jajpur.jpg";
import Jharsuguda from "../image/Jharsuguda.jpg";
import Kalahandi from "../image/Kalahandi.jpeg";
import Kandhamal from "../image/Kandhamal.jpg";
import Kendrapara from "../image/Kendrapara.jpg";
import Khordha from "../image/Khordha.jpg";
import Koraput from "../image/Koraput.jpg";
import Malkangiri from "../image/Malkangiri.jpg";
import Mayurbhanj from "../image/Mayurbhanj.jpg";
import Nabarangpur from "../image/Nabarangpur.png";
import Nayagarh from "../image/Nayagarh.jpg";
import Nuapada from "../image/Nuapada.jpg";
import Puri from "../image/Puri.jpg";
import Rayagada from "../image/Rayagada.jpg";
import Sambalpur from "../image/Sambalpur.jpg";
import Subarnapur from "../image/Subarnapur.jpg";
import Sundergarh from "../image/Sundergarh.jpg";
import { Slide } from "react-awesome-reveal";
import PulseLoader from "react-spinners/PulseLoader";

const About = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const [loaderStatus, setLoaderStatus] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoaderStatus(false);
    }, 2000);
  }, []);

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Introduction Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">About TourMate</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Welcome to TourMate, your ultimate travel companion for exploring
            the majestic beauty of Nepal. Our platform is designed to simplify
            your travel planning, offering a one-stop solution for booking,
            creating personalized itineraries, accessing real-time support, and
            more. Whether you're an adventure seeker or a cultural explorer,
            TourMate ensures a smooth and fulfilling travel experience.
          </p>
        </section>

        {/* Mission Statement */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Our Mission
          </h2>
          <p className="mt-4 text-gray-600 text-lg text-center">
            Our mission at TourMate is to empower travelers by providing an
            intuitive platform that integrates all aspects of trip planning into
            a cohesive, easy-to-use experience. From detailed itineraries to
            on-the-go assistance, we are committed to making your journey in
            Nepal unforgettable.
          </p>
        </section>

        {/* Core Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Our Core Values
          </h2>
          <ul className="mt-6 space-y-4 text-gray-600 text-lg">
            <li>
              🌍 <strong>Customer-Centric Experience</strong> - We prioritize
              user satisfaction, ensuring travelers have access to the best
              resources for planning and experiencing their trips.
            </li>
            <li>
              🧭 <strong>Innovation</strong> - We continuously evolve our
              platform to offer cutting-edge features like personalized
              itineraries and real-time trip tracking.
            </li>
            <li>
              🌟 <strong>Transparency</strong> - We provide clear and concise
              information to travelers, ensuring that they make informed
              decisions during their trip planning process.
            </li>
            <li>
              🌤 <strong>Support & Responsiveness</strong> - Our platform is
              designed to provide real-time support, ensuring travelers are
              never left in the dark during their journey.
            </li>
          </ul>
        </section>

        {/* Traveling Plans Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Our Travel Plans & Services
          </h2>
          <p className="mt-4 text-gray-600 text-lg text-center">
            TourMate offers a wide range of travel plans tailored to meet the
            diverse needs of tourists exploring Nepal. Whether you’re traveling
            solo, with friends, or family, we have something for everyone.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Adventure Tours
              </h3>
              <p className="mt-2 text-gray-600 text-lg">
                Explore Nepal’s breathtaking landscapes with our adventure
                tours, including trekking in the Himalayas, white-water rafting,
                and jungle safaris.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Cultural Exploration
              </h3>
              <p className="mt-2 text-gray-600 text-lg">
                Dive deep into Nepal's rich culture and heritage with our
                customized cultural tours. Visit ancient temples, bustling
                markets, and experience local traditions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Family-Friendly Packages
              </h3>
              <p className="mt-2 text-gray-600 text-lg">
                We offer travel plans designed for families, providing a balance
                of relaxation and adventure suitable for all age groups,
                ensuring a memorable vacation.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Eco-Tourism
              </h3>
              <p className="mt-2 text-gray-600 text-lg">
                Join our eco-friendly tours to explore Nepal's pristine
                environment while minimizing your carbon footprint. We focus on
                sustainable travel that respects nature and local communities.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Luxury Travel
              </h3>
              <p className="mt-2 text-gray-600 text-lg">
                For those looking for a premium experience, our luxury packages
                provide exclusive accommodations, private tours, and
                personalized services to make your trip truly special.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Solo Travel Plans
              </h3>
              <p className="mt-2 text-gray-600 text-lg">
                For solo adventurers, we offer specially curated itineraries
                that cater to safety, exploration, and solo-friendly activities,
                ensuring you make the most out of your travels.
              </p>
            </div>
          </div>
        </section>

        {/* Unique Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            What Makes TourMate Unique?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Customized Itineraries
              </h3>
              <p className="mt-2 text-gray-600 text-lg">
                TourMate allows you to create fully customized itineraries based
                on your preferences, whether you’re looking for cultural,
                adventure, or relaxation-focused experiences.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Real-Time Assistance
              </h3>
              <p className="mt-2 text-gray-600 text-lg">
                We provide 24/7 real-time support to ensure that your travel
                plans go off without a hitch, from answering questions to
                solving issues on the go.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Seamless Booking
              </h3>
              <p className="mt-2 text-gray-600 text-lg">
                TourMate offers integrated booking services, making it easy to
                book flights, hotels, and tours directly from our platform. No
                need to juggle multiple apps or websites.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                Weather Information
              </h3>
              <p className="mt-2 text-gray-600 text-lg">
                Stay informed with real-time weather updates, ensuring that your
                outdoor activities are safe and well-planned based on the
                current conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Team Information */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Meet Our Team
          </h2>
          <p className="mt-4 text-gray-600 text-lg text-center">
            TourMate is developed by a passionate team of travel enthusiasts,
            designers, and developers who understand the nuances of creating a
            memorable travel experience. Our dedication to innovation and
            user-centric design drives us to constantly improve and deliver the
            best travel platform for our users.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
