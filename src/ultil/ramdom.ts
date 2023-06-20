import { useId } from "react";

export const RandomId = () => {
  const newId = useId();
  return newId;
};
