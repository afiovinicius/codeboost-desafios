"use client";

import { RenderComponentStyle } from "@/functions";

import { InputPinCodeOrganism } from "@/components/Forms/InputPinCode/organisms/pinCode.organism";

import { SectionRender } from "./styles";

export default function RootPage() {
  function handlePin(value: string) {
    return value;
  }

  return (
    <>
      <section className={SectionRender.base}>
        <h1>Hello World</h1>
        <InputPinCodeOrganism verifyPin={handlePin} />
      </section>
      <RenderComponentStyle
        asElement="div"
        asStyle={SectionRender.base}
      ></RenderComponentStyle>
    </>
  );
}
