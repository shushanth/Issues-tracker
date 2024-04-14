export default function RegisterForm() {
  return (
    <div className="register-form m-2 p-2 flex flex-col">
      <form name="register" id="register">
        <div className="firstname p-2 m-2 flex flex-col">
          <label htmlFor="firstname">Firstname</label>
          <input
            id="firstname"
            placeholder="Firstname"
            className="p-2 mt-2 rounded-sm text-black"
          />
        </div>
        <div className="lastname p-2 m-2 flex flex-col">
          <label htmlFor="lastname">Lastname</label>
          <input
            id="lastname"
            placeholder="Lastname"
            className="p-2 mt-2 rounded-sm text-black"
          />
        </div>
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
        <div className="action p-2 m-4 flex flex-col">
          <button className="p-2 mb-2 rounded-sm bg-indigo-500">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
