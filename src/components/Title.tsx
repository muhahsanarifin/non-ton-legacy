import React, { useEffect } from "react";
import { titleProps } from "@/utils/types/titleType";

export const Title = (props: titleProps) => {
  useEffect(() => {
    document.title = `non-ton | ${props.name}`;
  }, [props.name]);
  return null;
};
