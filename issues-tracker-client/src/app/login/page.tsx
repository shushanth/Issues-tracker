import LoginContainer from "./ui/login-container";

const Login = () => {
  return (
    <main className="sign-in-up-layout flex flex-col items-center">
      <div className="sign-in-card flex flex-col  w-2/5 rounded-sm ring-indigo-500 ring-2 min-h-96">
        <LoginContainer />
      </div>
    </main>
  );
};

export default Login;
