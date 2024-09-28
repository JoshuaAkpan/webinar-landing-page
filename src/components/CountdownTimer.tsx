"use client";
import React, { useState, useEffect } from "react";

interface CountdownProps {
  eventTime: string;
}

const CountdownTimer: React.FC<CountdownProps> = ({ eventTime }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(eventTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else if (difference === 0) {
      return "Event in progress";
    } else {
      return "The event has ended";
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const renderTimeCircle = (time: number | string, label: string) => (
    <div className="flex flex-col items-center">
      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border-2 border-white rounded-full shadow-lg">
        <span className="text-sm font-bold text-white">{time}</span>
      </div>
      <span className="mt-2 text-sm text-white">{label}</span>
    </div>
  );

  if (typeof timeLeft === "string") {
    return <div className="text-center text-3xl font-semibold">{timeLeft}</div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 justify-center max-w-[500px] ">
      {renderTimeCircle((timeLeft as any).hours || "00", "Hours")}
      {renderTimeCircle((timeLeft as any).minutes || "00", "Minutes")}
      {renderTimeCircle((timeLeft as any).seconds || "00", "Seconds")}
    </div>
  );
};

export default CountdownTimer;
