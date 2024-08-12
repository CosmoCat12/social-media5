import { ReactNode } from "react";

interface ISpan {
  children: ReactNode;
}

const Span = ({ children }: ISpan) => {
  return <span>{children}</span>;
};

export default Span;
