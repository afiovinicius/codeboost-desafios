"use client";

import React, { useState, useRef } from "react";

import { BodyInputCodePin } from "./style";

interface PropsTest {
  verifyPin: (value: string) => void;
}

export const InputPinCode = ({ verifyPin }: PropsTest) => {
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    const newPin = [...pin];
    const numericValue = value.replace(/\D/g, "");
    newPin[index] = numericValue;
    setPin(newPin);

    if (numericValue !== "" && index < pin.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    const joinedPin = newPin.join("");
    console.log(joinedPin);

    verifyPin(joinedPin);
  };

  return (
    <div className={BodyInputCodePin.base}>
      {pin.map((digit, index) => (
        <input
          key={index}
          type="text"
          value={digit}
          maxLength={1}
          className={BodyInputCodePin.slots.inputPin}
          onChange={(e) => handleChange(index, e.target.value)}
          ref={(ref) => (inputRefs.current[index] = ref)}
        />
      ))}
    </div>
  );
};
