import axios from "axios";
const Login = () => {
  async function handleLogin() {}

  async function handleregister() {}
  return (
    <div>
      <div
        className="Login"
        style={{
          backgroundImage: `url()`,
          backgroundRepeat: "no-repeat",
          height: 700,
          width: 700,
        }}
      >
        <div className="Login__info">
          <h1>.הגעת למקום הנכון</h1>
          <h2>יעוץ משכנתאות איכותי מאנשים שבאמת אכפת להם מהחיסכון שלך</h2>
        </div>
        <form onSubmit={handleLogin} className="Login__Login">
          <div className="Login__form">
            <p>משתמש רשום</p>
            <label htmlFor="Login__label">email</label>
            <input type="email" name="email" placeholder="your name here" />
          </div>

          <div className="Login__form">
            <label htmlFor="Login__label">password</label>
            <input
              type="password"
              name="password"
              placeholder="your password here"
            />
            <input className="Login__submit" type="submit" value="Login" />
          </div>
        </form>

        <form onSubmit={handleregister} className="Login__register">
          <div className="Login__form">
            <h3>משתמש חדש</h3>
            <label htmlFor="Login__label">name</label>
            <input type="text" name="text" placeholder="your name here" />
          </div>
          <div className="Login__form">
            <label htmlFor="Login__label">email</label>
            <input type="email" name="email" placeholder="your email here" />
          </div>
          <div className="Login__form">
            <label htmlFor="Login__label">password</label>
            <input
              type="password"
              name="password"
              placeholder="your password here"
            />

            <input className="Login__submit" type="submit" value="register" />
          </div>
        </form>
      </div>
      );
    </div>
  );
};

export default Login;
