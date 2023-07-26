import { useContext } from "react";
import "./User.scss";
import AuthContext from "../../context/AuthContext";
import Researcher from "./Researcher";
import Participant from "./Participant";

const User = () => {
  let { user } = useContext(AuthContext);
  return (
    <main className="content bg">
      <section className="user">
        <div className="container">
          {user.userType === "Researcher" ? <Researcher /> : <Participant />}
        </div>
      </section>
    </main>
  );
};

export default User;
