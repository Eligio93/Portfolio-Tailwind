import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-5 text-white">
      <section className="flex justify-evenly gap-5">
        <h3 className="w-fit bg-gradient-to-r from-sky-500 to-pink-500 bg-clip-text text-3xl text-transparent">
          Eligio Cristantielli <br /> Web Developer
        </h3>

        <div className="flex flex-col gap-5 lg:flex-row">
          {/*githubLink*/}
          <a
            href="https://github.com/Eligio93"
            target="_blank"
            className="flex items-center gap-3"
          >
            <svg
              className="h-8 w-8"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle className="fill-indigo-300" cx="24" cy="24" r="20" />
              <path
                className="fill-[#0B1120]"
                d="M6.81348 34.235C9.24811 38.3138 13.0939 41.4526 17.6772 42.9784C18.6779 43.1614 19.0425 42.5438 19.0425 42.0134C19.0425 41.7938 19.0388 41.4058 19.0339 40.8866C19.0282 40.2852 19.0208 39.5079 19.0155 38.6124C13.4524 39.8206 12.2787 35.931 12.2787 35.931C11.3689 33.6215 10.0576 33.0064 10.0576 33.0064C8.2417 31.7651 10.1951 31.7896 10.1951 31.7896C12.2025 31.9321 13.2584 33.8511 13.2584 33.8511C15.0424 36.9071 17.94 36.0243 19.0794 35.5135C19.2611 34.2207 19.7767 33.3391 20.3489 32.8394C15.908 32.3348 11.2387 30.6183 11.2387 22.9545C11.2387 20.7715 12.0184 18.9863 13.2977 17.5879C13.0914 17.082 12.4051 15.0488 13.4929 12.2949C13.4929 12.2949 15.1725 11.7571 18.9934 14.3453C20.5883 13.9021 22.2998 13.6798 24.0003 13.6725C25.6983 13.6798 27.4099 13.9021 29.0072 14.3453C32.8256 11.7571 34.5016 12.2949 34.5016 12.2949C35.5931 15.0488 34.9067 17.082 34.7005 17.5879C35.9823 18.9863 36.757 20.7715 36.757 22.9545C36.757 30.638 32.0804 32.3286 27.6247 32.8234C28.343 33.441 28.9827 34.6614 28.9827 36.5277C28.9827 38.3152 28.9717 39.8722 28.9644 40.9035C28.9608 41.4143 28.9581 41.7962 28.9581 42.0134C28.9581 42.5487 29.3178 43.1712 30.3332 42.976C33.9844 41.7572 37.1671 39.5154 39.5403 36.5903C35.8734 41.1108 30.274 44 23.9997 44C16.6943 44 10.3038 40.0832 6.81348 34.235Z"
              />
            </svg>
            <p className="text-indigo-300 hover:underline">Github</p>
          </a>
          {/*email link*/}
          <a
            className="flex items-center gap-3"
            href="mailto:eligio.cristantielli@gmail.com"
          >
            <svg className="h-8 w-8 fill-indigo-300" viewBox="0 0 100 100">
              <g>
                <path
                  d="M13.266,81h73.469C89.087,81,91,78.967,91,76.614V26.165c0-0.009,0.003,0.043,0.003,0.034c0-2.348-1.914-4.199-4.267-4.199
		h-0.002H13.612h-0.347C10.913,22,9,23.795,9,26.147v50.467C9,78.967,10.913,81,13.266,81z M38.525,49.122L13,74.442V29.89
		L38.525,49.122z M87,30.186v42.289L62.914,48.581L87,30.186z M59.723,51.02c0.044,0.053,0.082,0.169,0.132,0.22L85.764,77H16.221
		l25.533-25.387l7.481,5.607c0.356,0.268,0.779,0.388,1.203,0.388c0.428,0,0.855-0.144,1.214-0.418L59.723,51.02z M86.047,26
		L50.431,53.202L14.326,26H86.047z"
                />
              </g>
            </svg>
            <p className="text-indigo-300 hover:underline">Email</p>
          </a>
          {/*linkedin link*/}
          <a
            target="_blank"
            className="flex items-center gap-3"
            href="https://www.linkedin.com/in/eligio-cristantielli"
          >
            <svg className="h-8 w-8" viewBox="0 0 48 48">
              <circle className="fill-indigo-300" cx="24" cy="24" r="20" />
              <path
                className="fill-[#0B1120]"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.7747 14.2839C18.7747 15.529 17.8267 16.5366 16.3442 16.5366C14.9194 16.5366 13.9713 15.529 14.0007 14.2839C13.9713 12.9783 14.9193 12 16.3726 12C17.8267 12 18.7463 12.9783 18.7747 14.2839ZM14.1199 32.8191V18.3162H18.6271V32.8181H14.1199V32.8191Z"
              />
              <path
                className="fill-[#0B1120]"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M22.2393 22.9446C22.2393 21.1357 22.1797 19.5935 22.1201 18.3182H26.0351L26.2432 20.305H26.3322C26.9254 19.3854 28.4079 17.9927 30.8101 17.9927C33.7752 17.9927 35.9995 19.9502 35.9995 24.219V32.821H31.4922V24.7838C31.4922 22.9144 30.8404 21.6399 29.2093 21.6399C27.9633 21.6399 27.2224 22.4999 26.9263 23.3297C26.8071 23.6268 26.7484 24.0412 26.7484 24.4574V32.821H22.2411V22.9446H22.2393Z"
              />
            </svg>
            <p className="text-indigo-300 hover:underline">Linkedin</p>
          </a>
        </div>
      </section>
      <p className="text-center text-sm">
        Copyright &copy;2023 Eligio Cristantielli
      </p>
    </footer>
  );
}
