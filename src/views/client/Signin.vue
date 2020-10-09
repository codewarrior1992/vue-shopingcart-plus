<template>
  <div class="account">
    <div class="form-box">
      <form>
        <div class="logo">
          <img src="@/../public/logo.png" alt="none" />
          <a href=""></a>
        </div>
        <p class="title">用 Los Pollos 帳號登入</p>
        <div class="input-group">
          <input
            type="email"
            required
            id="email"
            placeholder="Los Pollos 帳號"
          />
          <i class="far fa-envelope signin-left"></i>
        </div>
        <div class="input-group">
          <input type="password" required id="password" placeholder="密碼" />
          <i class="far fa-lock signin-left"></i>
          <i class="far fa-eye signin-toggleBtn"></i>
        </div>
        <a href="#" class="submit">登入</a>
        <!-- <span class="checkout"
          >還不是會員嗎 ? <a href="#">立即註冊新帳號</a></span
        > -->
        <span class="checkout"
          >還不是會員嗎 ?
          <router-link to="/signup">立即註冊新帳號</router-link></span
        >
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      signin: true,
    };
  },
  mounted() {
    const toggleBtn = document.querySelector(".signin-toggleBtn");
    const password = document.querySelector("#password");
    toggleBtn.addEventListener("click", function (e) {
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
      this.classList.toggle("fa-eye-slash");
    });
  },
};
</script>