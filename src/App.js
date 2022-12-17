import { Fragment, useState } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";

import UserProfile from "./components/UserProfile";

import Auth from "./components/Auth";
import { useSelector } from "react-redux";

function App() {
  const islogin = useSelector((state) => state.auth.isLogin);

  return (
    <Fragment>
      {islogin && (
        <Fragment>
          <Header />
          <UserProfile />
          <Counter />
        </Fragment>
      )}
      {!islogin && <Auth />}
    </Fragment>
  );
}

export default App;
