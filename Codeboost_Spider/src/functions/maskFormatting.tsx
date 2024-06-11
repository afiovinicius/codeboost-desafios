interface MaskFormattedProps {
  value: string | null;
}

export function phoneFormat({ value }: MaskFormattedProps) {
  if (value === null || value === undefined) {
    return "(00) 0 0000-0000";
  }

  const formattedValue = value
    .replace(/\D+/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .replace(/(\d{4})-(\d)(\d{4})/, "$1$2-$3")
    .replace(/(-\d{4})\d+?$/, "$1");

  return `${formattedValue}`;
}

export function percentageFormat({ value }: MaskFormattedProps) {
  if (value === null || value === undefined) {
    return "0%";
  }

  const numericValue = parseFloat(value);
  const formattedValue = Math.round(numericValue).toString();

  return `${formattedValue}%`;
}

export function docsFormat({ value }: MaskFormattedProps): string {
  function formatCPF(value: string): string {
    return value
      .replace(/\D+/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  }

  function formatCNPJ(value: string): string {
    return value
      .replace(/\D+/g, "")
      .replace(/(\d{2})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  }

  if (value === null || value === undefined) {
    return value || "";
  }

  return value.length <= 11 ? formatCPF(value) : formatCNPJ(value);
}

export function currencyFormat({ value }: MaskFormattedProps) {
  if (value === null || value === undefined) {
    return "R$ 0,00";
  }

  const numericValue = parseFloat(value);

  const formattedValue = numericValue.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  return formattedValue;
}

export function cepFormat({ value }: MaskFormattedProps): string {
  if (value === null || value === undefined) {
    return value || "";
  }

  const formattedValue = value
    .replace(/\D+/g, "")
    .replace(/^(\d{5})(\d)/, "$1-$2")
    .substring(0, 9);

  return formattedValue;
}
