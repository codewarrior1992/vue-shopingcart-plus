<template>
  <div class="products">
    <div class="wrapper">
      <Fastpick />
      <Modal />
    </div>
    <Card />
    <Pagination />
  </div>
</template>
<script>
import Card from "@/components/admin/Card.vue";
import Fastpick from "@/components/admin/Fastpick.vue";
import Modal from "@/components/admin/Modal.vue";
import Pagination from "@/components/common/Pagination.vue";
export default {
  components: {
    Card,
    SelectBox,
    Modal,
    Pagination,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
