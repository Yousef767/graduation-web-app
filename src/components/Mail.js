import React from "react";
import Image from "next/image";

function Mail() {
  return (
    <div className="formInner">
      <div className="imgInner">
        <Image src="/media/images/reg.jpg" alt="" width={1000} height={1000} />
      </div>
      <div className="form">
        <form action="">
          <header>
            <h1 className="mc">Forgot Password</h1>
          </header>
          <div className="sed">
            <h2>Mail Address Here</h2>
            <span>
              Enter the email address associated <br /> with your account.
            </span>
          </div>
          <div className="inputs">
            <div className="input inputTwo">
              <span>Email</span>
              <input type="email" />
              <Image
                src="/media/icons/mail.png"
                alt=""
                width={200}
                height={200}
              />
            </div>
          </div>
          <button type="submit" className="btn w100">
            Recover password
          </button>
        </form>
      </div>
    </div>
  );
}

export default Mail;
