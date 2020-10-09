<template>
	<div class="menu-page">
		<Header />
		<Carousel />
		<router-view></router-view>
		<Footer />
	</div>
</template>
<script>
import Header from '@/components/client/Header.vue';
import Carousel from '@/components/client/Carousel.vue';
import Footer from '@/components/client/Footer.vue';
export default {
	components: {
		Header,
		Carousel,
		Footer,
	},
	data() {
		return {};
	},
};
</script>
