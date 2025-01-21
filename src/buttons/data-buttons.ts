export type Variant =
  | "numeric"
  | "operator"
  | "c"
  | "ce"
  | "point"
  | "sinal"
  | "equal"
  | "percent";

interface Buttons { 
  value: string;
  variant: Variant;
}

const buttons: Buttons[] = [
  { value: "CE", variant: "ce" },
  { value: "C", variant: "c" },
  { value: "%", variant: "percent" },
  { value: "/", variant: "operator" },  
  { value: "7", variant: "numeric" },
  { value: "8", variant: "numeric" },
  { value: "9", variant: "numeric" },
  { value: "x", variant: "operator" },
  { value: "4", variant: "numeric" },
  { value: "5", variant: "numeric" },
  { value: "6", variant: "numeric" },
  { value: "-", variant: "operator" },
  { value: "1", variant: "numeric" },
  { value: "2", variant: "numeric" },
  { value: "3", variant: "numeric" },
  { value: "+", variant: "operator" },
  { value: "+/-", variant: "sinal" },
  { value: "0", variant: "numeric" },
  { value: ".", variant: "point" },
  { value: "=", variant: "equal" },
];

export default buttons;
