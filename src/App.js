import "./App.scss";
import Faq from "./components/Faq/Faq";
import User from "./components/User/User";
import Login from "./components/Login/Login";
import Index from "./components/Index/Index";
import Logout from "./components/Logout/Logout";
import Layout from "./components/Layout/Layout";
import Support from "./components/Support/Support";
import AllResearches from "./components/Research/AllResearches";
import Register from "./components/Register/Register";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddReseach from "./components/Research/Researches/Research/AddReseach/AddReseach";
import EditReseach from "./components/Research/Researches/Research/EditReseach/EditReseach";
import MyResearches from "./components/Research/MyReseaches";
import { AuthProvider } from "./context/AuthContext";

const App = (props) => {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index state={props.state.indexPage} />} />
          <Route path="support" element={<Support />} />
          <Route
            path="research/*"
            element={<AllResearches state={props.state.researchesPage} />}
          />
          <Route
            path="research/my"
            element={<MyResearches state={props.state.researchesPage} />}
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
          <Route path="register" element={<Register />} />
          <Route path="add" element={<AddReseach />} />
          <Route path="edit" element={<EditReseach />} />
        </Route>
      </Routes>
    </AuthProvider>
      
    </BrowserRouter>
  );
};

export default App;
