<template>
  <div class="account">
    <div class="form-box">
      <form>
        <div class="logo">
          <img src="@/../public/logo.png" alt="none" />
          <a href=""></a>
        </div>
        <p class="title">註冊 Los Pollos 帳號</p>
        <div class="input-group">
          <label for="email">Los Pollos 帳號</label>
          <input type="email" required id="email" />
          <i class="far fa-envelope signup-left"></i>
          <span>帳號只能是英文、數字和「-」</span>
        </div>
        <div class="input-group">
          <label for="password">密碼</label>
          <input type="password" required id="password" />
          <i class="far fa-lock signup-left"></i>
          <span>密碼需為 6 碼以上的英文或數字</span>
          <i class="far fa-eye signup-toggleBtn"></i>
        </div>
        <div class="accept">
          按下註冊鈕的同時，表示您已詳閱我們的
          <a href="#">資料使用政策與使用條款</a>
          ，同意使用 Los Pollos 所提供的服務並訂閱電子報
        </div>
        <a href="#" class="submit">註冊</a>
        <!-- <span class="checkout">已經有帳號了 ? <a href="#">馬上登入</a></span> -->
        <span class="checkout"
          >已經有帳號了 ? <router-link to="/signin">馬上登入</router-link></span
        >
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    const toggleBtn = document.querySelector(".signup-toggleBtn");
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