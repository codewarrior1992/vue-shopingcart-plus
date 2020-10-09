<template>
  <div class="carousel-wraper">
    <div
      class="carousel"
      :style="{ 'background-image': 'url(' + bgcheckout + ')' }"
    ></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      bgcheckout:
        "https://lafka.althemist.com/fastfood/wp-content/uploads/sites/2/2019/05/back-chefs-title.jpg",
    };
  },
};
</script>