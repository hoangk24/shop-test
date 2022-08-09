const menu: string[] = ["😄New", "😗Movies", "😍Series", "🤩Cartoons"];
export default function Header() {
  return (
    <div className="header h-[10%] flex items-center">
      <img
        src="https://bazar-react.vercel.app/assets/images/logo2.svg"
        alt=""
      />
      <ul className="menu menu-horizontal p-1 flex-1">
        {menu.map((it, index) => (
          <li className="rounded-lg" key={index}>
            <a href="/">{it}</a>
          </li>
        ))}
      </ul>
      <div className="flex items-center ">
        <button type="submit" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button type="submit" className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
