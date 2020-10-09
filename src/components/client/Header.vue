<template>
  <div class="header-container">
    <!-- navigation -->
    <div class="nav-container">
      <ul class="left">
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li class="menu">
          <router-link to="/menu"
            >Menu <i class="fas fa-caret-down"></i
          ></router-link>
          <ul class="dropdown">
            <li>
              <router-link to="/menu">v.1 Menu - Cards</router-link>
            </li>
            <li>
              <router-link to="/menu">v.2 Menu - List</router-link>
            </li>
            <li>
              <router-link to="/menu">v.3 Menu - Sortable</router-link>
            </li>
          </ul>
        </li>
      </ul>
      <div class="logo">
        <img src="@/../public/logo.png" alt="none" />
      </div>
      <ul class="right">
        <li>
          <router-link to="/blog">Blog</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
        <li>
          <router-link to="/account">Account</router-link>
        </li>
      </ul>
    </div>

    <div class="wraper">
      <!-- service -->
      <div class="service">
        <div class="call">
          <h5>Order Online or Call Now</h5>
          <a href="tel:+886932381578">
            <i class="fas fa-phone"></i>
          </a>
        </div>
        <div class="icons">
          <div class="collect">
            <i class="far fa-heart"></i>
            <span>2</span>
          </div>
          <div class="cart">
            <i class="fal fa-shopping-bag"></i>
            <span>5</span>
          </div>
          <div class="search">
            <i class="fal fa-search"></i>
          </div>
        </div>
      </div>

      <!-- main-menu -->
      <ul class="main-menu">
        <li>
          <router-link to="" class="arrow">
            <i class="flaticon-023-pizza-slice"></i> pizza
            <span class="pizza tag">3 styles</span></router-link
          >
          <div class="mega-menu">
            <ul>
              <li>
                <router-link to="" class="item-link">
                  <img src="@/../public/img-pizza/menu-pizza1.jpg" alt="" />
                  <h2>LEGENDARY DEEEP DISH</h2>
                </router-link>
              </li>
              <li>
                <router-link to="" class="item-link">
                  <img src="@/../public/img-pizza/menu-pizza2.jpg" alt="" />
                  <h2>FLAKY THIN CRUST</h2>
                </router-link>
              </li>
              <li>
                <router-link to="" class="item-link">
                  <img src="@/../public/img-pizza/menu-pizza3.jpg" alt="" />
                  <h2>BY THE SLICE</h2>
                </router-link>
              </li>
              <li class="customize">
                <h3>About Our Pizza</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
                  suscipit!
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
                  suscipit!
                </p>
                <router-link to="" class="build">BUILD YOUR PIZZA</router-link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <router-link to="">
            <i class="flaticon-030-kebab"></i> sandwitches
          </router-link>
        </li>
        <li>
          <router-link to="" class="arrow">
            <i class="flaticon-007-burger-1"></i> burgers
            <span class="burgers tag">Bestseller </span>
          </router-link>
          <div class="mega-menu">
            <ul>
              <li>
                <router-link to="" class="item-link">
                  <img src="@/../public/img-burger/menu-burger1.jpg" alt="" />
                  <h2>LEGENDARY DEEEP DISH</h2>
                </router-link>
              </li>
              <li>
                <router-link to="" class="item-link">
                  <img src="@/../public/img-burger/menu-burger2.jpg" alt="" />
                  <h2>FLAKY THIN CRUST</h2>
                </router-link>
              </li>
              <li>
                <router-link to="" class="item-link">
                  <img src="@/../public/img-burger/menu-burger3.jpg" alt="" />
                  <h2>BY THE SLICE</h2>
                </router-link>
              </li>
              <li class="customize">
                <h3>About Our Pizza</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
                  suscipit!
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum,
                  suscipit!
                </p>
                <router-link to="" class="build">BUILD YOUR PIZZA</router-link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <router-link to="">
            <i class="flaticon-008-fried-potatoes"></i> sides & salads
          </router-link>
        </li>
        <li>
          <router-link to="" class="arrow">
            <i class="flaticon-050-french-fries"></i> combos
            <span class="combos tag">save</span>
          </router-link>
          <div class="sub-menu">
            <ul>
              <li>
                <router-link to="" class="item-link">
                  <img src="@/../public/img-combos/menu-combo1.jpg" />
                </router-link>
              </li>
              <li>
                <ul class="popular">
                  <h3>Popular Combos</h3>
                  <li>
                    <router-link to="">
                      <i class="flaticon-050-french-fries"></i>Burger + Fries
                    </router-link>
                  </li>
                  <li>
                    <router-link to="">
                      <i class="flaticon-006-burger-2"></i>Burger + Shake
                    </router-link>
                  </li>
                  <li>
                    <router-link to="">
                      <i class="flaticon-029-package"></i>Burger + Fries &
                      Soda</router-link
                    >
                  </li>
                  <li>
                    <router-link to="">
                      <i class="flaticon-021-fried-chicken"></i>Crispy Tenders +
                      Fries
                    </router-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <router-link to="">
            <i class="flaticon-009-coffee"></i> drinks
          </router-link>
        </li>
        <li>
          <router-link to="">
            <i class="flaticon-026-ice-cream"></i> desserts
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
