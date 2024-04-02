import { useRef, useState } from "react";

import { InputPinCodeMolecule } from "../molecules/pinCode.molecule";

interface InputPinCodeOrganismProps {
  verifyPin: (value: string) => void;
}

export const InputPinCodeOrganism = ({
  verifyPin,
}: InputPinCodeOrganismProps) => {
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
    <InputPinCodeMolecule
      pin={pin}
      inputRefs={inputRefs}
      onChange={handleChange}
    />
  );
};
