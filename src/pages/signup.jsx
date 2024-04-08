function SignUp() {
  return (
    <div
      className={`h-screen w-full flex flex-col gap-y-5 md:gap-y-7 justify-center items-center`}
    >
      <h2 className="w-3/5 sm:w-1/2 md:w-2/5 text-center text-black text-2xl md:text-3xl pb-5 md:pb-7 border-b border-strokes">
        Sign Up
      </h2>
      <div className="w-3/5 sm:w-1/2 md:w-2/5 flex flex-col gap-y-3 text-lg">
        <label htmlFor="fname" className="font-medium cursor-pointer">
          First Name
        </label>
        <input
          className="text-sm placeholder:text-light-black text-black border-[1.5px] p-3 border-input-stroke rounded focus:border-light-black outline-none"
          type="text"
          placeholder="First Name"
          required
          id="fname"
        />
      </div>
      <div className="w-3/5 sm:w-1/2 md:w-2/5 flex flex-col gap-y-3 text-lg">
        <label htmlFor="lname" className="font-medium cursor-pointer">
          Last Name
        </label>
        <input
          className="text-sm placeholder:text-light-black text-black border-[1.5px] p-3 border-input-stroke rounded focus:border-light-black outline-none"
          type="text"
          placeholder="Last Name"
          required
          id="lname"
        />
      </div>
      <div className="w-3/5 sm:w-1/2 md:w-2/5 flex flex-col gap-y-3 text-lg">
        <label htmlFor="email" className="font-medium cursor-pointer">
          Email
        </label>
        <input
          className="text-sm placeholder:text-light-black text-black border-[1.5px] p-3 border-input-stroke rounded focus:border-light-black outline-none"
          type="email"
          placeholder="Email"
          required
          id="email"
        />
      </div>
      <div className="w-3/5 sm:w-1/2 md:w-2/5 flex flex-col gap-y-3">
        <label className="font-medium cursor-pointer" htmlFor="password">
          Password
        </label>
        <input
          className="text-sm placeholder:text-light-black text-black border-[1.5px] p-3 border-input-stroke rounded focus:border-light-black outline-none"
          type="password"
          placeholder="Password"
          required
          id="password"
        />
      </div>
      <button className="font-medium px-14 py-2 bg-btn-black-bg font-lg rounded-full text-white hover:bg-slate-800">
        Sign up
      </button>
    </div>
  );
}

SignUp.getLayout = function getLayout(page) {
  return page;
};

export default SignUp;
