import React, { useEffect, useState } from "react";
import UpArrowIcon from "../assets/icon/up-arrow.svg";
import Image from "next/image";
import { Pagination } from "./Pagination";
import { paginationProps } from "@/utils/types/contentsType";

export const Footer: React.FC<paginationProps> = ({
  onTotalPages,
  onSetPages,
  onPage,
  onContentPegs,
}) => {
  const [activeUpButton, setActiveUpButton] = useState(false);

  const handleUP = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.onscroll = () => {
      window.scrollY > 0 ? setActiveUpButton(true) : setActiveUpButton(false);
    };
  }, []);

  return (
    <>
      <div className="relative 3xl:hidden lg:hidden xs:block">
        <footer className="fixed bottom-0 w-full flex p-4  items-center">
          {/* <div className="bg-white p-4 border-solid border-2 border-gray-very-light text-cyan-dark">
            <p>2022-2023 © non-ton</p>
          </div> */}
          {onContentPegs !== 0 ? (
            <Pagination
              onSetPages={onSetPages}
              onPage={onPage}
              onTotalPages={onTotalPages}
              onContentPegs={onContentPegs}
            />
          ) : null}

          {activeUpButton ? (
            <button
              className="btn btn-circle ml-auto btn-sm"
              id="upBtn"
              onClick={handleUP}
            >
              <Image
                src={UpArrowIcon}
                alt="up arrow"
                width={100}
                height={100}
                className="w-8 h-8"
              />
            </button>
          ) : null}
        </footer>
      </div>
    </>
  );
};
