<template>
  <div class="admin">
    <Header />
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "@/components/admin/Header.vue";
export default {
  components: {
    Navigation,
  },
};
</script>
