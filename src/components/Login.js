import React, { useState } from "react";
import logo from '../images/Vector.svg'
import { GoogleLogin, GoogleLogout } from "react-google-login";

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [loginStatus, setLoginStatus] = useState(false);

  const responseGoogle = response => {
    console.log(response);
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);
    setLoginStatus(true);
  };
  const logout = () => {
    console.log("logout");
    setLoginStatus(false);
  };
  return (
    <div className="sectionlogin">
      <h4 className="titlelogin">Bienvenido a DDrop</h4>
      <h6 className="plogin">Para subir tus archivos de forma simple a drive, puedes hacer LogIn a través de Google.</h6>
      <div className="barra"></div>
      {!loginStatus && (
        <GoogleLogin
          clientId="671348139606-906f7lcl8vk6l26hivc1ka0hk2teuvb1.apps.googleusercontent.com"
          render={renderProps => (
            <button className="buttongoogle" onClick={renderProps.onClick} disabled={renderProps.disabled}><img src={logo} alt="Logo" className="logo"/>Login con Google</button>
          )}
          buttonText="Login con Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
      {loginStatus && (
        <div>
          <h2>Welcome {name}</h2>
          <h2>Email: {email}</h2>
          <img src={url} alt={name} />
          <br />
          <GoogleLogout
            clientId="671348139606-906f7lcl8vk6l26hivc1ka0hk2teuvb1.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logout}
          />
        </div>
      )}
    </div>
  );
}
