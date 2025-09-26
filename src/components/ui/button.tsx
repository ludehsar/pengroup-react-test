import { cva } from "class-variance-authority";
import { JSX } from "react";

type Variant = "default" | "outlined";

type ButtonVariantsProps = {
  variant?: Variant;
};

type ButtonProps = ButtonVariantsProps & {
  customClassNames?: string;
  children: React.ReactNode;
};

type ButtonVariantsFunction = (props: ButtonVariantsProps) => string;

const ButtonVariants: ButtonVariantsFunction = cva(
  "transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none text-lg lg:text-2xl font-black px-4 lg:px-8 py-2",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary/80 text-[#061665]",
        outlined:
          "bg-transparent hover:bg-primary/20 text-primary border border-primary",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

export default function Button({
  variant,
  customClassNames = "",
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`${ButtonVariants({ variant })} ${customClassNames}`}
      {...props}
    >
      {children}
    </button>
  );
}
