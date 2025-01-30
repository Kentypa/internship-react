import { ComponentWithChildren } from "../../types/component-with-children.tsx";

type LabelProps = {
  htmlFor: string;
};

export const Label: ComponentWithChildren<LabelProps> = ({
  htmlFor,
  children,
}) => {
  return (
    <label htmlFor={htmlFor}>
      <b>{children}</b>
    </label>
  );
};
