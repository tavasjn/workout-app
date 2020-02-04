import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getUser, logout } from "../redux/reducer";
// import Button from "@material-ui/core/Button";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";
import axios from "axios";
import { withRouter } from "react-router-dom";

import { API_DOMAIN } from "../Config";

function HeaderComponent(props) {
  useEffect(() => {
    if (!props.user.loggedIn) {
      props.getUser();
    }
    // axios.get('/api/cart')
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
  }, []);

  const userLogin = () => {
    window.location.href = `http://${API_DOMAIN}:5000/api/login`;
  };

  const logoutUser = () => {
    console.log("hitting logout", props);
    const { cart } = props;
    axios
      .post("/api/cart", { cart })
      .then(res => console.log(res))
      .catch(err => console.log(err));
    props.logout();

    props.history.push("/");
    // console.log(props)
  };

  return (
    <div id="home-product-page-header-1">
      <div className='header-main'>
        <button onClick={userLogin} className='header-buttons'>Login Feature</button>
        <button onClick={logoutUser} className='header-buttons'>Logout</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    loggedIn: state.loggedIn
  };
};

const mapDispatchToProps = {
  getUser,
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HeaderComponent));
