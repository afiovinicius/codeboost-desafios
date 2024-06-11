import { SchemaFormImage } from "@/schemas";
import { TypeFormSteps } from "@/types"
import { Form, Formik } from "formik"
import { QRCodeSVG } from "qrcode.react";

export const StepThree = ({ isHandleForm, isPrev, isDataForm, isDataFormSet, isStep }: TypeFormSteps) => {
  const handlePrevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    isPrev && isPrev();
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{ ...isDataForm }}
      validationSchema={SchemaFormImage}
      onSubmit={(values) => isHandleForm && isHandleForm(values)}
    >
      {({
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit} className="top-[-50%] translate-y-[50%]">
          <div className="flex items-center justify-between gap-4 w-full">
            <h1 className="text-[4.8rem]  text-orange-400">Step</h1>
            <h5 className="text-[1.8rem] text-orange-400">{isStep}</h5>
          </div>
          <div className="my-8 flex justify-around gap-8 w-full h-fit">
            <div className="flex flex-col gap-4 items-center">
              <div className="w-[23.2rem] h-[23.2rem]">
                <QRCodeSVG value={"link do pix vindo da api ou fixo"} className="w-full h-full" />
              </div>
              <div className="flex flex-col gap-4">
                <label className="text-[1.8rem] text-orange-600">Em caso de erro copie o código abaixo:</label>
                <button
                  type="button"
                  className="text-[1.8rem] text-gray-50  bg-slate-500 py-4 px-8 rounded-2xl hover:bg-cyan-800"
                  onClick={() => {
                    navigator.clipboard.writeText("link copiado");
                    alert("link copiado")
                  }}
                >
                  link do pix vindo da api ou fixo
                </button>
              </div>
            </div>
            <div className="w-full max-w-[33.2rem]">
              <label htmlFor="proof" className="text-[1.8rem] text-gray-600">Comprovante</label>
              <input
                type="file"
                name="proof"
                id="proof"
                onChange={(e) => {
                  const file = e.currentTarget.files && e.currentTarget.files[0];
                  isDataFormSet && isDataFormSet((prevState) => ({
                    ...prevState,
                    proof: file
                  }));
                  handleChange(e)
                }}
                onBlur={handleBlur}
                accept="image/*"
                className="mt-[0.8rem] w-full p-[0.8rem] border-[0.2rem] border-gray-400 text-[1.6rem] text-gray-400 rounded-[0.8rem] focus:border-gray-600 focus:text-gray-600"
              />
              {errors.proof && touched.proof && (
                <h5 className="text-[1.4rem] text-red-500">{String(errors.proof)}</h5>
              )}
            </div>
          </div>
          <div className="w-full flex justify-between">
            <button
              type="button"
              onClick={handlePrevClick}
              className="text-[1.8rem] text-gray-500 py-4 px-8 w-fit border border-gray-500 rounded-2xl hover:bg-cyan-800 hover:bg-opacity-10">
              Voltar
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-[1.8rem] text-gray-50  bg-slate-500 py-4 px-8 w-fit rounded-2xl hover:bg-cyan-800">
              Enviar Comprovante
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}