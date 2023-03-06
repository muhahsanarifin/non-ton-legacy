export const Dropdown = () => {
  return (
    <>
      <button className="btn btn-square btn-ghost dropdown dropdown-hover dropdown-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-5 h-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
          ></path>
        </svg>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-white rounded-box w-36 text-cyan-dark"
        >
          <li className="text-xs">
            <a>About</a>
          </li>
          <li className="text-xs">
            <a>Develoved by</a>
          </li>
        </ul>
      </button>
    </>
  );
};
