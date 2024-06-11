import { phoneFormat } from "@/functions";
import { SchemaFormStepOne } from "@/schemas";
import { TypeFormSteps } from "@/types"

import { Formik, Form } from "formik";

export const StepOne = ({ isNext, isDataForm, isStep }: TypeFormSteps) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={{ ...isDataForm }}
      validationSchema={SchemaFormStepOne}
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
            <div className="w-full max-w-[26rem]">
              <label htmlFor="email" className="text-[1.8rem] text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="mt-[0.8rem] w-full h-fit p-[0.8rem] border-[0.2rem] border-gray-400 text-[1.6rem] text-gray-400 rounded-[0.8rem] focus:border-gray-600 focus:text-gray-600"
              />
              {errors.email && touched.email && (
                <h5 className="text-[1.4rem] text-red-500">{errors.email}</h5>
              )}
            </div>
            <div className="w-full max-w-[26rem]">
              <label htmlFor="name" className="text-[1.8rem] text-gray-600">Nome Completo</label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className="mt-[0.8rem] w-full h-fit p-[0.8rem] border-[0.2rem] border-gray-400 text-[1.6rem] text-gray-400 rounded-[0.8rem] focus:border-gray-600 focus:text-gray-600"
              />
              {errors.name && touched.name && (
                <h5 className="text-[1.4rem] text-red-500">{errors.name}</h5>
              )}
            </div>
            <div className="w-full max-w-[26rem]">
              <label htmlFor="tel" className="text-[1.8rem] text-gray-600">Whatsapp</label>
              <input
                type="tel"
                name="tel"
                id="tel"
                onChange={handleChange}
                onBlur={handleBlur}
                value={phoneFormat({ value: values.tel })}
                className="mt-[0.8rem] w-full h-fit p-[0.8rem] border-[0.2rem] border-gray-400 text-[1.6rem] text-gray-400 rounded-[0.8rem] focus:border-gray-600 focus:text-gray-600"
              />
              {errors.tel && touched.tel && (
                <h5 className="text-[1.4rem] text-red-500">{errors.tel}</h5>
              )}
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-[1.8rem] text-gray-50  bg-slate-500 py-4 px-8 w-fit rounded-2xl hover:bg-cyan-800">
              Próximo
            </button>
          </div>
        </Form>
      )}
    </Formik>
  )
}