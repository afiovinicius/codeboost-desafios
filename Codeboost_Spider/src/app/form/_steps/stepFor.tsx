import { TypeFormSteps } from "@/types"
import { useEffect } from "react";
import confetti from "canvas-confetti";

export const StepFor = ({ isDataForm }: TypeFormSteps) => {

  useEffect(() => {
    const duration = 3000;
    const end = Date.now() + duration;
    var colors = ['#ff414c', '#ebc771'];
    var unicorn = confetti.shapeFromText({ text: '🦄', scalar: 2 });

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  }, []);

  return (
    <div className="h-[29.6rem] w-full bg-slate-100 flex items-center justify-center top-[-50%] translate-y-[50%]">
      <h1>Parabéns {isDataForm.name}</h1>
    </div>
  )
}