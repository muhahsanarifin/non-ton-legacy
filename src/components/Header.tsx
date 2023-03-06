import { Dropdown } from "./Dropdown";
import Image from "next/image";
import nontonLogo from "../assets/icon/non-ton.png";

export const Header = () => {
  return (
    <>
      <div className="relative">
        <div className="fixed top-0 left-0 right-0 navbar bg-white shadow px-4 z-50">
          <div className="flex-1">
            <Image
              src={nontonLogo}
              alt="non-ton"
              width={100}
              height={100}
              className="w-10"
            />
            <a className="btn btn-ghost normal-case text-xl pb-1 text-cyan-dark">
              non-ton
            </a>
          </div>
          <div className="flex-none">
            <Dropdown />
          </div>
        </div>
      </div>
    </>
  );
};
