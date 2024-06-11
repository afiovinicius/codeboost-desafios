export interface TypeDataFormStep {
  name: string;
  email: string;
  tel: string;
  cep: string;
  uf: string;
  city: string;
  road: string;
  street: string;
  numberHome: string;
  complement: string;
  proof: File | any;
}

export interface TypeFormSteps {
  isNext?: (data?: TypeDataFormStep) => Promise<void>;
  isPrev?: () => Promise<void>;
  isDataForm: TypeDataFormStep;
  isDataFormSet?: React.Dispatch<React.SetStateAction<TypeDataFormStep>>;
  isStep?: number;
  isHandleForm?: (data: TypeDataFormStep) => Promise<unknown>;
}
