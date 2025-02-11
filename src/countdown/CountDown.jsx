import React from "react";

const CountDown = ({ timeLeft }) => {
  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-amber-200">
      <h1 className="text-4xl font-bold text-stone-800 mb-8">
        Countdown Timer
      </h1>
      <div className="flex gap-8 m-5">
        <div className="border rounded px-4 py-4 bg-sky-300 text-2xl font-bold text-gray-600 flex flex-col items-center">
          FR
          <span className="text-lg font-medium mt-2 text-gray-700">70</span>
        </div>
        <div className="border rounded px-4 py-4 bg-green-300 text-2xl font-bold flex flex-col items-center">
          SFM
          <span className="text-lg font-medium mt-2 text-gray-700">60</span>
        </div>
        <div className="border rounded px-4 py-4 bg-pink-300 text-2xl font-bold flex flex-col items-center">
          AUDIT
          <span className="text-lg font-medium mt-2 text-gray-700">50</span>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-2xl">
          <span className="text-5xl font-extrabold text-indigo-600">
            {days}
          </span>
          <span className="mt-2 text-sm font-medium uppercase text-stone-500">
            Days
          </span>
        </div>

        <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-2xl">
          <span className="text-5xl font-extrabold text-indigo-600">
            {hours}
          </span>
          <span className="mt-2 text-sm font-medium uppercase text-stone-500">
            Hours
          </span>
        </div>

        <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-2xl">
          <span className="text-5xl font-extrabold text-indigo-600">
            {minutes}
          </span>
          <span className="mt-2 text-sm font-medium uppercase text-stone-500">
            Minutes
          </span>
        </div>

        <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-2xl">
          <span className="text-5xl font-extrabold text-indigo-600">
            {seconds}
          </span>
          <span className="mt-2 text-sm font-medium uppercase text-stone-500">
            Seconds
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
