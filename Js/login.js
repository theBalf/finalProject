function loginBehaviour() {
  function openForm(form) {
    const loginStatus = JSON.parse(localStorage.getItem("loginStatus"));
    if (loginStatus && loginStatus === true) {
      let profilepath = "../pages/profile.html";
      // const curentpath = window.location.pathname;
      // if (curentpath.includes("/folder/")) {
      //   profilepath = "./pages/profile.html";
      // }
      window.open(profilepath);
    } else {
      form.classList.add("activelogin");
      document.body.classList.add("no-scroll");
    }
  }
  function closeForm(form) {
    form.classList.remove("activelogin");
    document.body.classList.remove("no-scroll");
  }

  return { openForm, closeForm };
}
export const loginAction = loginBehaviour();
function signINUP() {
  function register() {
    const user = document.querySelector(".usernameSignUp").value.trim();
    const password = document.querySelector(".passwordSignUp").value.trim();
    const email = document.querySelector(".emailSignup").value.trim();
    const num = document.querySelector(".phoneSignup").value.trim();
    if (!user || !password || !email || !num) {
      alert("همه فیلد ها را پر کنید!");
      return;
    } else if (user && password && email && num) {
      let users = JSON.parse(sessionStorage.getItem("user")) || [];
      if (!Array.isArray(users)) {
        users = [users];
      }
      let existUser = false;
      for (let index = 0; index < users.length; index++) {
        const u = users[index];
        if (u.username === user) {
          alert("نام کاربری قبلا استفاده شده است");
          existUser = true;
          break;
        } else if (u.email === email) {
          alert("ایمیل قبلا استفاده شده است");
          existUser = true;
          break;
        } else if (u.phone === num) {
          alert("شماره تماس قبلا استفاده شده است");
          existUser = true;
          break;
        }
      }
      if (existUser === true) {
        return;
      }

      if (!localStorage.getItem("lastUserId")) {
        localStorage.setItem("lastUserId", "0");
      }
      let lastId = Number(localStorage.getItem("lastUserId"));
      let newId = lastId++;

      const newUser = {
        id: newId,
        username: user,
        password: password,
        email: email,
        phone: num,
        role: "costumer",
      };
      users.push(newUser);
      sessionStorage.setItem("user", JSON.stringify(users));
      alert("ثبت نام انجام شد");
      loginAction.closeForm(document.querySelector(".signupPage"));
    }
    return;
  }

  function login() {
    let isLogIn = "false";
    const user = document.querySelector(".usernameLogin").value.trim();
    const password = document.querySelector(".passwordLogin").value.trim();
    if (!user || !password) {
      alert("نام کاربری و رمز خود را وارد کنید");
      return;
    } else if (user && password) {
      
      const signedUpusers = JSON.parse(sessionStorage.getItem("user"));
      if (signedUpusers && signedUpusers.length>0) {
        for (let index = 0; index < signedUpusers.length; index++) {
          const signedUpuser = signedUpusers[index];
          if (
            user === signedUpuser.username &&
            password === signedUpuser.password
          ) {
            alert("وارد شدید");
            loginAction.closeForm(document.querySelector(".loginPage"));
            isLogIn = "true";
            localStorage.setItem("loginStatus", isLogIn);
            break;
          }
          
        }
      }
     
      if (isLogIn === "false") {
        alert("نام کاربری یا رمز عبور خود را چک کنید");
        document.querySelector(".usernameLogin").value = "";
        document.querySelector(".passwordLogin").value = "";
        return;
      }
    }
  }

  return { register, login };
}

export const accountAction = signINUP();
