import React from "react";
import { useDebouncedCallback } from "use-debounce";
import { formProps } from "@/utils/types/contentsType";

export const Search: React.FC<formProps> = ({ onSetQuery, onSetPages }) => {
  const debounce = useDebouncedCallback((value) => {
    onSetQuery(value);
  }, 1000);

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-full h-10 bg-white"
        onChange={(e) => {debounce(e.target.value); onSetPages(1)}}
      />
    </>
  );
};
