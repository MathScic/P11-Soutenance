import "./UserContent.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserProfile } from "../../store/actions/actions";

export default function UserContent() {
  const dispatch = useDispatch();

  const { userName } = useSelector((state) => state.userProfile);
  const { firstName } = useSelector((state) => state.userProfile);
  const { lastName } = useSelector((state) => state.userProfile);
  const { token } = useSelector((state) => state.userLogin);
  const { success } = useSelector((state) => state.userLogin);

  const [newUserName, setNewUserName] = useState();
  const [newFirstname, setNewFirstname] = useState();
  const [newLastname, setNewLastname] = useState();

  const [editButton, setEditButton] = useState("");

  const editNameButton = (e) => {
    e.preventDefault();
    setEditButton((current) => !current);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(token, newUserName, newFirstname, newLastname));
    if ({ success }) {
      setEditButton((current) => !current);
    }
  };

  return (
    <>
      {!editButton ? (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName + " " + lastName + " " + "alias " + userName} !
          </h1>
          <button onClick={editNameButton} className="edit-button">
            Edit Name
          </button>
        </div>
      ) : (
        <div className="header">
          <h1>Welcome back</h1>
          <form className="editNameContent" onSubmit={submitHandler}>
            <div className="editNameInputs">
              <input
                type="text"
                placeholder={firstName}
                onChange={(e) => setNewFirstname(e.target.value)}
                disabled
                style={{ backgroundColor: "#ccc", color: "#000" }}
              />
              <input
                type="text"
                placeholder={lastName}
                onChange={(e) => setNewLastname(e.target.value)}
                disabled
                style={{ backgroundColor: "#ccc", color: "#000" }}
              />

              <input
                type="text"
                placeholder={userName}
                onChange={(e) => setNewUserName(e.target.value)}
                required
              />
            </div>
            <div className="editNameButtons">
              <button className="save-button" type="submit">
                Save
              </button>
              <button className="cancel-button" onClick={editNameButton}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
