import React from "react";
import { paginationProps } from "@/utils/types/contentsType";

export const Pagination: React.FC<paginationProps> = ({
  onTotalPages,
  onPage,
  onSetPages,
}) => {
  const hanlePrevious = () => {
    onSetPages(onPage - 1);
  };

  const handleNext = () => {
    onSetPages(onPage + 1);
  };

  return (
    <>
      <div className="flex justify-end p-4">
        <div className="btn-group">
          <button
            className="btn btn-outline text-cyan-dark border-gray-very-light btn-sm xs:btn-xs xs:bt-outline-none xs:bg-cyan-blue xs:text-white"
            onClick={hanlePrevious}
            disabled={onPage === 1}
          >
            «
          </button>
          <button className="btn btn-outline text-xs text-cyan-dark border-gray-very-light btn-sm xs:btn-xs xs:bt-outline-none xs:bg-cyan-blue xs:text-white">
            {`Page ${onPage}`}
          </button>
          <button
            className="btn btn-outline text-cyan-dark border-gray-very-light btn-sm xs:btn-xs xs:bt-outline-none xs:bg-cyan-blue xs:text-white"
            onClick={handleNext}
            disabled={onPage === onTotalPages || onTotalPages === 0}
          >
            »
          </button>
        </div>
      </div>
    </>
  );
};
