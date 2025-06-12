export default function Footer() {
  return (
    <footer id="footer" className="border-t text-gray-600 text-sm lg:mx-20">
      <div className="flex flex-col w-full sm:flex-row items-center justify-between gap-2 md:gap-4 py-4 md:py-6 ">
        <p className="text-center sm:text-left">
          Copyright &copy; {new Date().getFullYear()} Lily Lin — Built with
          Next.js
        </p>
        <span className="flex gap-4 justify-center sm:justify-right text-gray-500">
          {/* Mail */}
          <a className="ml-3 text-gray-500" href="mailto:lily.lin@yale.edu">
            <svg
              width="24"
              height="auto"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                fill="currentColor"
              />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            className="ml-4 text-gray-500"
            href="https://www.linkedin.com/in/zhiyu-lily-lin/"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
