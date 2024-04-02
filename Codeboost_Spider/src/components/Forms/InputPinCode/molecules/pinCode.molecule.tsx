import { InputPinCodeAtom } from "../atoms/pinCode.atom";
import { BodyInputCodePin } from "../style";

interface InputPinCodeMoleculeProps {
  pin: string[];
  inputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
  onChange: (index: number, value: string) => void;
}

export const InputPinCodeMolecule = ({
  pin,
  inputRefs,
  onChange,
}: InputPinCodeMoleculeProps) => {
  return (
    <div className={BodyInputCodePin.base}>
      {pin.map((digit, index) => (
        <InputPinCodeAtom
          key={index}
          digit={digit}
          index={index}
          onChange={onChange}
          ref={(ref) => (inputRefs.current[index] = ref)}
        />
      ))}
    </div>
  );
};
