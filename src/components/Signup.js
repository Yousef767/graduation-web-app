import React from "react";
import Image from "next/image";

function Signup() {
  return (
    <div className="formInner">
      <div className="imgInner">
        <Image src="/media/images/reg.jpg" alt="" width={1000} height={1000} />
      </div>
      <div className="form">
        <form action="">
          <header>
            <h1>Signup</h1>
            <span>Fill your personal details and get startred!</span>
          </header>
          <div className="inputs">
            <div className="input">
              <input type="text" placeholder="Username" spellCheck="false" />
              <Image
                src="/media/icons/User.png"
                alt=""
                width={200}
                height={200}
              />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Email address"
                spellCheck="false"
              />
              <Image
                src="/media/icons/mail.png"
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
            <div className="input">
              <input type="password" placeholder="Confirm Password" />
              <Image
                src="/media/icons/CheckSquare.png"
                alt=""
                width={200}
                height={200}
              />
            </div>
          </div>
          <button type="submit" className="btn w100" style={{padding:'20px 0',}}>
            Register Now
          </button>
          <div className="dont">
            Dont have an account? <a href="/login">Login</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
