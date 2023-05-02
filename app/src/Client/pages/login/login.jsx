import React, { useState } from "react";
import { useEffect } from "react";
import Axios from "axios";
import style from "./login.css";
import Cookies from "universal-cookie";
import WindowAlert from "sweetalert";
import logo from "../../../img/imagen-header.jpg"
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const cookies=new Cookies();
  useEffect(() => {
    document.getElementById("image-header").style.display = "none";
    document.getElementById("header-client").style.minHeight="15vh";
    document.getElementById("header-client").style.margin="0";
    document.getElementById("header-client").style.backgroundImage="none";
    document.getElementById("header-client").style.background="#000";
    document.getElementById("header-client").style.color="#000";
    document.getElementById("footer").style.display = "none";
  }, []);

  const logged = () => {
    Axios.post("http://empresa-ole-backend.vercel.app/login", {
      name_user: username,
      password: password,
    })  
    .then((response) => {
      
      if(response.data.result){

            cookies.set("id",response.data.id)
            cookies.set("name",response.data.name,{path:"/"})
            cookies.set("username",response.data.user,{path:"/"})
            cookies.set("email",response.data.email,{path:"/"})
            console.log(response.data.type_user)
              WindowAlert({
                title:"Inicio de Sesion",
                text: `Bienvenido ${response.data.name}`,
                icon: "success",
                timer:"3000"
              })

            
            setTimeout(() => {

              (response.data.type_user===1)?
              
              window.location.href="./":

              window.location.href="./dashboard/products"
            
            
          },2000)
            
        }
        else{
            WindowAlert({
              title:"Inicio de Sesion",
              text: "Las credenciales son incorrectas",
              icon: "error",
              timer:"3000"
            })
        }
    });
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "gray " }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i
                            
                            
                          ></i>
                          <span className="h1 fw-bold mb-0">
                            <img src="data:image/jpeg;base64,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"/>
                          </span>
                        </div>

                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Iniciar Sesion con tu Cuenta.
                        </h5>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="username"
                            className="form-control form-control-sm"
                            onChange={(e) => {
                              setUsername(e.target.value);
                            }}
                            placeholder="Usuario"
                          />
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            id="password"
                            className="form-control form-control-sm"
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
                            placeholder="Contraseña"
                          />
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            onClick={logged}
                            className="btn btn-dark btn-lg btn-block"
                            type="button"
                            style={{ width: "100%" }}
                          >
                            Iniciar Sesion.
                          </button>
                        </div>

                        <a className="small text-muted" href="#!">
                          
                        </a>
                        <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        No tienes una cuenta?{" "}
                          <a href="./registrer" style={{ color: "#393f81" }}>
                            Registrate Aqui.
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
