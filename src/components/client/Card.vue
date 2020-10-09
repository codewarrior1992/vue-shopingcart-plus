<template>
  <div class="client-card">
    <div class="card-head" :style="{ 'background-image': `url(${img})` }">
      <i class="fas fa-heart"></i>
      <router-link to="" class="link"></router-link>
    </div>
    <div class="card-content">
      <div class="info">
        <ul class="ratings">
          <div class="rating-item" data-rating="1"></div>
          <div class="rating-item" data-rating="2"></div>
          <div class="rating-item" data-rating="3"></div>
          <div class="rating-item active" data-rating="4"></div>
          <div class="rating-item" data-rating="5"></div>
        </ul>
        <span class="price">$249.00</span>
      </div>
      <h2>bacon cheese burger</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quis.
      </p>
      <a href="#" class="cart">Add to Cart</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img:
        "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/05/burger17-680x680.jpg",
    };
  },
};
</script>