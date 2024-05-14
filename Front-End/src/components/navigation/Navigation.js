import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./Navigation.css";
import { logout } from "../../store/actions/actions";

export default function Navigation() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.userLogin);
  const { userName } = useSelector((state) => state.userProfile);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="./img/argentBankLogo.webp"
          alt="Argent Bank Logo"
          width="200"
          height="54"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {!token ? (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        ) : (
          ""
        )}
        {token ? (
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {userName}
          </Link>
        ) : (
          ""
        )}
        {token ? (
          <Link onClick={logoutHandler} className="main-nav-item" to="/">
            <i className="fa fa-sign-out"></i>
            Sign Out
          </Link>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
}
