import { ReactNode } from "react";

//Component that can accept children
interface Props {
  children: ReactNode; //Which takes whatever is in the tags. Special prop that is present in every Prop. ReactNode used to use HTML tags in children or it throws error.
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
