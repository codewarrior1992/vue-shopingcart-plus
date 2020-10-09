<template>
  <div>
    <!-- <ul class="pages">
  
      <li class="go">
        <a
          href="#"
          :class="{disabled : currentPage == 0}"
          @click.prevent="showPage(currentPage -=1 )"
        >&laquo;</a>
      </li>

   
      <li class="page" v-for="(page,i) in pages.length" :key="i">
        <a
          href="#"
          :class="{active : currentPage === page - 1}"
          @click.prevent="showPage(currentPage = i)"
        >{{ i + 1 }}</a>
      </li>

    
      <li class="back">
        <a
          href="#"
          @click.prevent="showPage(currentPage +=1 )"
          :class="{disabled : currentPage == pages.length -1}"
        >&raquo;</a>
      </li>
    </ul>-->
    <ul class="pages">
      <li class="back">
        <a href="#">
          <i class="fas fa-angle-left"></i>
        </a>
      </li>
      <li>
        <a href="#" class="active">1</a>
      </li>
      <li>
        <a href="#">2</a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li class="go">
        <a href="#">
          <i class="fas fa-angle-right"></i>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  //   props: ["pages"],
  data() {
    return {
      currentPage: 0,
      pages: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    showPage(val) {
      this.$emit("show", val);
    },
  },
};
</script>
