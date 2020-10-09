<template>
  <nav class="ad-navigation">
    <!-- Logo -->
    <router-link to="/" class="logo">Los Pollos</router-link>

    <!-- Ham -->
    <div class="ham" @click.prevent="navToggle">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>

    <!-- Links -->
    <ul class="nav-links">
      <li>
        <router-link to="/admin" class="link" active-class="active">
          Dashbaord
        </router-link>
      </li>
      <li>
        <router-link to="/admin/products" class="link" active-class="active">
          Products
        </router-link>
      </li>
      <li>
        <router-link to="/admin/orders" class="link"> Orders </router-link>
      </li>
      <li>
        <router-link to="/admin/coupons" class="link"> Coupons </router-link>
      </li>
      <li>
        <a href="#" class="link"> Log Out </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    navToggle() {
      const navLinks = document.querySelector(".nav-links");
      navLinks.classList.toggle("active");
    },
  },
};
</script>
