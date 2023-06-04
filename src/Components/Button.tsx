import React from "react";

interface Props {
  children: string;
  //color?: string; What if user puts wrong string, it shows no render but error is also not seen, so we can add strings that are acceptable.
  color?: "primary" | "secondary" | "danger"; //Question mark means the parameter is optional, and we have set the default value to primary
  onClickEvent: () => void;
}

const Button = ({ children, color = "primary", onClickEvent }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClickEvent}>
      {children}
    </button>
  );
};

export default Button;
