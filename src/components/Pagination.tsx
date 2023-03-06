export const Pagination = () => {
  return (
    <>
      <div className="flex justify-end px-4">
        <div className="btn-group">
          <button className="btn btn-outline text-cyan-dark border-gray-very-light">
            «
          </button>
          <button className="btn btn-outline text-xs text-cyan-dark border-gray-very-light">
            Page 1
          </button>
          <button className="btn btn-outline text-cyan-dark border-gray-very-light">
            »
          </button>
        </div>
      </div>
    </>
  );
};
