<template>
  <div class="menu-board">
    <h1>Our Menu</h1>
    <!-- burger -->
    <div class="bg-wraper">
      <div class="burger-group">
        <img src="@/../public/img-bg/burger-chalk-menu.png" alt="" />
        <div class="burger-list">
          <h2>Burgers</h2>
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
    </div>
    <br />
    <!-- combo -->
    <div class="combo-group">
      <h2>
        MEGA
        <p>COMBO DEAL</p>
      </h2>
      <img src="@/../public/img-bg/combo-chalk-menu.png" alt="" />
    </div>
    <br />
    <!-- pizza -->
    <div class="bg-wraper">
      <div class="pizza-group">
        <div class="pizza-list">
          <h2>Pizzas</h2>
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
        <img src="@/../public/img-bg/pizza-chalk-menu.png" alt="" />
      </div>
    </div>
    <br />
    <div class="rest-food">
      <div class="box">
        <h2>SIDES & SALADS</h2>
        <img src="@/../public/img-bg/sides-chalk-menu.png" alt="" />
        <div class="list">
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
      <div class="box">
        <h2>DESSERTS</h2>
        <img src="@/../public/img-bg/desserts-chalk-menu.png" alt="" />
        <div class="list">
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
      <div class="box">
        <h2>DRINKS</h2>
        <img src="@/../public/img-bg/refils-chalk-menu.png" alt="" />
        <div class="list">
          <MenuCard />
          <MenuCard />
          <MenuCard />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MenuCard from "@/components/client/menu/MenuCard.vue";
export default {
  components: {
    MenuCard,
  },
  data() {
    return {};
  },
};
</script>
