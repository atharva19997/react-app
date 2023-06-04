import { ReactNode } from "react";

//Component that can accept children
interface Props {
  children: ReactNode; //Which takes whatever is in the tags. Special prop that is present in every Prop. ReactNode used to use HTML tags in children or it throws error.
  onClickClose: () => void;
}

const Alert = ({ children, onClickClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        className="btn-close"
        type="button"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClickClose}
      ></button>
    </div>
  );
};

export default Alert;
