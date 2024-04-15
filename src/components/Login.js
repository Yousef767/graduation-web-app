"use client";
import React from "react";
import Image from "next/image";

function Login() {
  return (
    <div className="formInner">
      <div className="imgInner">
        <Image
          src="/media/images/reg.jpg"
          alt=""
          width={1000}
          height={1000}
        />
      </div>
      <div className="form">
        <form action="">
          <header>
            <h1>Login</h1>
            <span>Welcom back to sitname , Let’s get startred!</span>
          </header>
          <div className="inputs">
            <div className="input">
              <input type="text" placeholder="Username" spellCheck='false' />
              <Image
                src={"/media/icons/User.png"}
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="input">
              <input type="password" placeholder="Password" />
              <Image
                src="/media/icons/LockSimpleOpen.png"
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="rem">
              <div className="chk">
                <input type="checkbox" id="check" />{" "}
                <label htmlFor="check">Remember me</label>
              </div>
              <a href="mail">Forget Password?</a>
            </div>
          </div>
          <button type="submit" className="btn w100">
            Login
          </button>
          <div className="dont">
            Dont have an account?{" "}
            <a href="/signup">Register now</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
