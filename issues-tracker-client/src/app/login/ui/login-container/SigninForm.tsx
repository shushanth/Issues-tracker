import SubmitBtn from "@/app/common/components/button/submitBtn";

const SigninForm = () => {
  return (
    <div className="signin-form m-2 p-2 flex flex-col">
      <form name="signin" id="signin">
        <div className="email p-2 m-2 flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            placeholder="Email"
            className="p-2 mt-2 rounded-sm text-black"
          />
        </div>
        <div className="password p-2 m-2 flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            placeholder="Password"
            className="p-2 mt-2 rounded-sm text-black"
          />
        </div>
        <SubmitBtn title="Login" />
      </form>
    </div>
  );
};

export default SigninForm;
