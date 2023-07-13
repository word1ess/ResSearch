import "./App.scss";
import Faq from "./components/Faq/Faq";
import User from "./components/User/User";
import Login from "./components/Login/Login";
import Index from "./components/Index/Index";
import Logout from "./components/Logout/Logout";
import Layout from "./components/Layout/Layout";
import Support from "./components/Support/Support";
import Research from "./components/Research/Research";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index state={props.state.indexPage} />} />
          <Route path="support" element={<Support />} />
          <Route
            path="research/*"
            element={<Research state={props.state.researchesPage} />}
          />
          <Route
            path="user"
            element={
              <User
                state={props.state.userPage}
                changeUserInfo={props.changeUserInfo}
              />
            }
          />
          <Route path="faq" element={<Faq />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
