"use client";

import { useRef } from "react";

import { BodyInputCodePin } from "../style";

interface InputPinCodeAtomProps {
  digit: string;
  index: number;
  onChange: (index: number, value: string) => void;
}

export const InputPinCodeAtom = ({
  digit,
  index,
  onChange,
}: InputPinCodeAtomProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(index, e.target.value);
  };

  return (
    <input
      key={index}
      type="text"
      value={digit}
      maxLength={1}
      className={BodyInputCodePin.slots.inputPin}
      onChange={handleChange}
      ref={inputRef}
    />
  );
};
