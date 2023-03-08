import React from "react";
import { ModalProps } from "@/utils/types/contentsType";

export const Modal: React.FC<ModalProps> = ({onIdModal}) => {
  return (
    <>
      <input type="checkbox" id={onIdModal} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={onIdModal}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-white">NON-TON</h3>
          <p className="py-4 text-white">
            Deliver Tech/Programming enthusiast to get useful contents easily.
          </p>
          <p className="text-xs">2022-2023 © non-ton</p>
        </div>
      </div>
    </>
  );
}
