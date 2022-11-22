import React, { useState } from "react";
import Image from "next/image";
import Input from "../share/components/Input";
import art from "../assets/image/landingpage-art.png";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(name, email, password);
  const handleRegister = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      password: password,
    };
    fetch("https://pencarikhuntul.lol/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status == 200) {
        alert("pendaftaran sukses");
      }
      console.log(res.json);
    });
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex align-items-center justify-content-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <Image src={art} className="img-fluid" alt="Phone image" />
            </div>
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <form onSubmit={handleRegister}>
                <Input
                  type={"text"}
                  title={"nama"}
                  id={"nama"}
                  set={(e) => setName(e.target.value)}
                />
                {/* Email input */}
                <Input
                  type={"text"}
                  title={"email address"}
                  id={"email"}
                  set={(e) => setEmail(e.target.value)}
                />
                {/* Password input */}
                <Input
                  type={"password"}
                  title={"password"}
                  id={"password"}
                  set={(e) => setPassword(e.target.value)}
                />
                <div>
                  <a href="#!">Forgot password?</a>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block mt-5"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
