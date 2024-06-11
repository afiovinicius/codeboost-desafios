import { cepFormat } from "@/functions";
import { SchemaFormStepTwo } from "@/schemas";
import { TypeFormSteps } from "@/types"

import { Formik, Form } from "formik";

export const StepTwo = ({ isNext, isPrev, isDataForm, isDataFormSet, isStep }: TypeFormSteps) => {

  const handleCEP = async (cep: string) => {
    try {
      const dataFetch = await fetch(`/api/details-cep/?cep=${cep}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await dataFetch.json();

      if (isDataFormSet) {
        isDataFormSet((prevState) => ({
          ...prevState,
          cep: res.cep,
          uf: res.uf,
          city: res.localidade,
          road: res.bairro,
          street: res.logradouro,
          complement: res.complemento,
        }));
      }
    } catch (error) {
      console.error("Erro ao buscar dados do endereço:", error);
    }
  };

  const handlePrevClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    isPrev && isPrev();
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={{ ...isDataForm }}
      validationSchema={SchemaFormStepTwo}
      onSubmit={(values) => isNext && isNext(values)}
    >
      {({
        values,
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
          <div className="my-8 flex justify-around flex-wrap gap-x-4 gap-y-10 w-full h-fit">
            <div className="w-full max-w-[23.2rem]">
              <label htmlFor="cep" className="text-[1.8rem] text-gray-600">CEP</label>
              <input
                type="text"
                name="cep"
                id="cep"
                onBlur={handleBlur}
                value={cepFormat({ value: values.cep })}
                onChange={(e) => {
                  handleChange(e)
                  const cep = e.target.value.replace(/\D+/g, "")
                  cep.length == 8 && handleCEP(cep)
                }}
                className="mt-[0.8rem] w-full h-fit p-[0.8rem] border-[0.2rem] border-gray-400 text-[1.6rem] text-gray-400 rounded-[0.8rem] focus:border-gray-600 focus:text-gray-600"
              />
              {errors.cep && touched.cep && (
                <h5 className="text-[1.4rem] text-red-500">{errors.cep}</h5>
              )}
            </div>
            <div className="w-full max-w-[9.6rem]">
              <label htmlFor="uf" className="text-[1.8rem] text-gray-600">UF</label>
              <input
                type="text"
                name="uf"
                id="uf"
                onBlur={handleBlur}
                value={values.uf.replace(/\d+/g, "")}
                onChange={handleChange}
                className="mt-[0.8rem] w-full h-fit p-[0.8rem] border-[0.2rem] border-gray-400 text-[1.6rem] text-gray-400 rounded-[0.8rem] focus:border-gray-600 focus:text-gray-600"
              />
              {errors.uf && touched.uf && (
                <h5 className="text-[1.4rem] text-red-500">{errors.uf}</h5>
              )}
            </div>
            <div className="w-full max-w-[23.2rem]">
              <label htmlFor="city" className="text-[1.8rem] text-gray-600">Cidade</label>
              <input
                type="text"
                name="city"
                id="city"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
                className="mt-[0.8rem] w-full h-fit p-[0.8rem] border-[0.2rem] border-gray-400 text-[1.6rem] text-gray-400 rounded-[0.8rem] focus:border-gray-600 focus:text-gray-600"
              />
              {errors.city && touched.city && (
                <h5 className="text-[1.4rem] text-red-500">{errors.city}</h5>
              )}
            </div>
            <div className="w-full max-w-[21rem]">
              <label htmlFor="road" className="text-[1.8rem] text-gray-600">Bairro</label>
              <input
                type="text"
                name="road"
                id="road"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.road}
                className="mt-[0.8rem] w-full h-fit p-[0.8rem] border-[0.2rem] border-gray-400 text-[1.6rem] text-gray-400 rounded-[0.8rem] focus:border-gray-600 focus:text-gray-600"
              />
              {errors.road && touched.road && (
                <h5 className="text-[1.4rem] text-red-500">{errors.road}</h5>
              )}
            </div>
            <div className="w-full max-w-[33.2rem]">
              <label htmlFor="street" className="text-[1.8rem] text-gray-600">Rua</label>
              <input
                type="text"
                name="street"
                id="street"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.street}
                className="mt-[0.8rem] w-full h-fit p-[0.8rem] border-[0.2rem] border-gray-400 text-[1.6rem] text-gray-400 rounded-[0.8rem] focus:border-gray-600 focus:text-gray-600"
              />
              {errors.street && touched.street && (
                <h5 className="text-[1.4rem] text-red-500">{errors.street}</h5>
              )}
            </div>
            <div className="w-full max-w-[9.6rem]">
              <label htmlFor="numberHome" className="text-[1.8rem] text-gray-600">N°</label>
              <input
                type="text"
                name="numberHome"
                id="numberHome"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.numberHome}
                className="mt-[0.8rem] w-full h-fit p-[0.8rem] border-[0.2rem] border-gray-400 text-[1.6rem] text-gray-400 rounded-[0.8rem] focus:border-gray-600 focus:text-gray-600"
              />
              {errors.numberHome && touched.numberHome && (
                <h5 className="text-[1.4rem] text-red-500">{errors.numberHome}</h5>
              )}
            </div>
            <div className="w-full max-w-[33.2rem]">
              <label htmlFor="complement" className="text-[1.8rem] text-gray-600">Complemento</label>
              <input
                type="text"
                name="complement"
                id="complement"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.complement}
                className="mt-[0.8rem] w-full h-fit p-[0.8rem] border-[0.2rem] border-gray-400 text-[1.6rem] text-gray-400 rounded-[0.8rem] focus:border-gray-600 focus:text-gray-600"
              />
              {errors.complement && touched.complement && (
                <h5 className="text-[1.4rem] text-red-500">{errors.complement}</h5>
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
              Pagar
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}