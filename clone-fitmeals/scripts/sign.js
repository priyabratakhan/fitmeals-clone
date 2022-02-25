let Register = async () => {
  let register_data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
    username: document.getElementById("username").value,
    mobile: document.getElementById("mobile").value,
    description: document.getElementById("description").value,
  };
  register_data = JSON.stringify(register_data);
  try {
    let res = await fetch(
      "https://masai-api-mocker.herokuapp.com/auth/register",
      {
        method: "POST",
        body: register_data,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let data = await res.json();
      console.log("data:", data);
      alert("thanks for registerd");
  } catch (err) {
    console.log("err:", err);
  }
};

//   for Login
let Login = async () => {
  try {
    let login_data = {
      username: document.getElementById("login-username").value,
      password: document.getElementById("login-password").value,
    };
    let login_data_json = JSON.stringify(login_data);
    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: login_data_json,
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await res.json();
    getUser(login_data.username, data.token);
  } catch (err) {
    console.log("err:", err);
  }
};

//   for authentication
let getUser = async (username, token) => {
  try {
    let res = await fetch(
      `https://masai-api-mocker.herokuapp.com/user/${username}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    let data = await res.json();
    console.log("data:", data);
  } catch (err) {
    console.log("err:", err);
    alert("wrong credentials");
  }
};
