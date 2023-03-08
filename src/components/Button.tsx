export const ResetButton = () => {
  return (
    <>
      <button
        className="btn bg-transparent border-none shadow btn-sm text-cyan-dark hover:bg-gray-very-light xs:btn-xs"
        onClick={() => {
          window.location.reload();
        }}
      >
        Reset
      </button>
    </>
  );
};
