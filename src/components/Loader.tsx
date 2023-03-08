export const Loader = () => {
  return (
    <>
      <div className="loader-section">
        <div className="lds-facebook">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <style jsx>{`
        .loader-section {
          min-height: 50vh;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .lds-facebook {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }
        .lds-facebook div {
          display: inline-block;
          position: absolute;
          left: 8px;
          width: 16px;
          background: #2c3333;
          animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
        }
        .lds-facebook div:nth-child(1) {
          left: 8px;
          animation-delay: -0.24s;
        }
        .lds-facebook div:nth-child(2) {
          left: 32px;
          animation-delay: -0.12s;
        }
        .lds-facebook div:nth-child(3) {
          left: 56px;
          animation-delay: 0;
        }
        @keyframes lds-facebook {
          0% {
            top: 8px;
            height: 64px;
          }
          50%,
          100% {
            top: 24px;
            height: 32px;
          }
        }
      `}</style>
    </>
  );
};

export const Skeleton = () => {
  return (
    <>
      <li className=" bg-white shadow p-2 flex flex-col gap-y-2 rounded-md xs:w-full animate-pulse h-28">
        <div className="bg-cyan-blue-light rounded h-6 w-1/4 xs:w-9/12 xs:h-14"></div>
        <div className="flex flex-col gap-y-1">
          <div className="bg-cyan-blue-light rounded h-9 w-6/12 xs:hidden"></div>
          <div className="bg-cyan-blue-light rounded h-2 w-8"></div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="bg-cyan-blue-light rounded h-2 w-1/5"></div>
          <div className="bg-cyan-blue-light rounded h-2 w-1/5"></div>
        </div>
      </li>
    </>
  );
};
