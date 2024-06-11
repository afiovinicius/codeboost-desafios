"use client"

import { useState } from "react";
import { StepOne } from "./_steps/stepOne";
import { StepThree } from "./_steps/stepThree";
import { StepTwo } from "./_steps/stepTwo";
import { TypeDataFormStep } from "@/types";
import { StepFor } from "./_steps/stepFor";

export default function FormPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [dataForm, setDataForm] = useState<TypeDataFormStep>({
    name: "",
    email: "",
    tel: "",
    cep: "",
    uf: "",
    city: "",
    road: "",
    street: "",
    numberHome: "",
    complement: "",
    proof: null
  })


  const nextStep = async (data?: TypeDataFormStep) => {
    setDataForm({ ...dataForm, ...data })
    setCurrentStep(currentStep + 1)
  }

  const prevStep = async () => {
    setCurrentStep(currentStep - 1)
  }

  const handleForm = async (data: TypeDataFormStep) => {
    try {
      await nextStep(data)
      const file = data.proof;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const base64data = reader.result?.toString();
        data.proof = base64data;

        await fetch("/api/send-mail", {
          method: "POST",
          body: JSON.stringify(data),
        });
      };
    } catch (error) {
      return error
    }
  };


  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne isNext={nextStep} isDataForm={dataForm} isStep={currentStep} />
        );
      case 2:
        return (
          <StepTwo isNext={nextStep} isPrev={prevStep} isDataForm={dataForm} isDataFormSet={setDataForm} isStep={currentStep} />
        );
      case 3:
        return (
          <StepThree isHandleForm={handleForm} isPrev={prevStep} isDataForm={dataForm} isDataFormSet={setDataForm} isStep={currentStep} />
        );
      case 4:
        return (
          <StepFor isDataForm={dataForm} />
        );
      default:
        return (
          <StepOne isNext={nextStep} isDataForm={dataForm} isStep={currentStep} />
        );
    }
  };
  return (
    <div className="flex flex-col gap-[1.6rem] max-w-[80rem] m-auto">
      {renderCurrentStep()}
    </div>
  );
}
