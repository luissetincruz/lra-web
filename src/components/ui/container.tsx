import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = Readonly<ComponentPropsWithoutRef<"div">>;

export function Container({ className, ...props }: ContainerProps) {
  const classes = ["mx-auto w-full max-w-7xl px-5 sm:px-8", className].filter(Boolean).join(" ");

  return <div className={classes} {...props} />;
}
