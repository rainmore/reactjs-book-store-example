import React from "react";

const ForgetPasswordPage: React.FC = () => {
  return (
    <>
      <h1>Forget Password</h1>
      <p>
        Email: <input type="text" name="username" placeholder="Please enter username" />
      </p>
      <p>
        <button type="submit">Reset password</button>
      </p>
    </>
  );
};


export default ForgetPasswordPage;