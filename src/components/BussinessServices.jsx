import React, { useState } from "react";
import EzOne from "../assets/EzOne.png";

const BusinessServices = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const services = [
    { title: "Presentation Design", icon: "📊" },
    { title: "Audio - Visual Production", icon: "🎥" },
    { title: "Translation Services", icon: "🌍" },
    { title: "Graphic Design", icon: "🎨" },
    { title: "Research & Analytics", icon: "🔍" },
    { title: "Data Processing", icon: "💾" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Email is required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage("Enter a valid email.");
      return;
    }

    try {
      const response = await fetch("https://test.ezworks.ai/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setMessage("Form Submitted");
      } else if (response.status === 422 && email.endsWith("@ez.works")) {
        setMessage("Emails ending with @ez.works are not allowed.");
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Network error, please try again.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-center p-8 xl:p-16 2xl:p-24 bg-white">
     {/* myleftsection */}
      <div className="w-full lg:w-[40%] m-5">
        <img src={EzOne} alt="ezone" className="w-[50%] xl:w-[60%] 2xl:w-[70%] h-auto" />
        <h2 className="font-light font-serif text-3xl xl:text-4xl 2xl:text-5xl mt-6">
          Suite Of Business Support Services
        </h2>
        <div className="mt-12">
          <p className="text-gray-700 mt-8 text-lg xl:text-xl 2xl:text-2xl ">
            Satyam Saurav needs an opportunity. Temporibus blanditiis, officia,
            necessitatibus magni veniam numquam ipsam fuga facilis possimus quasi aliquid!
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="border rounded-md px-3 py-2 xl:px-6 xl:py-3 2xl:px-8 2xl:py-4 text-gray-800 w-full
               sm:w-60"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-orange-500  text-white px-3 py-2 xl:px-5 xl:py-3 2xl:px-6 2xl:py-4 rounded-md mt-4 sm:mt-0"
            >
              Contact Me
            </button>
          </form>

          {message && <p className="mt-4 text-red-500">{message}</p>}
        </div>
      </div>

      {/* yaha se right */}
      <div className="w-full lg:w-[65%] xl:w-[75%] 2xl:w-[80%] mt-6 lg:mt-0">
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-blue-950 text-sky-400  p-2 lg:p-6 xl:p-8 2xl:p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-2 text-lg font-semibold">
                <span>{service.icon}</span>
                {service.title}
              </div>
              <p className="text-sm text-white mt-2">
                Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessServices;
