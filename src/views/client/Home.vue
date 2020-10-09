<template>
	<div class="home-page">
		<Header />
		<Carousel />
		<div class="introduction">
			<span>Our Signature</span>
			<h2 class="title">CHAR-GRILLED BURGERS</h2>
			<p class="summary">
				Hand-crafted fresh to order. Smashed to lock in flavor on a
				toasted brioche bun. Served with garlic dill pickles & fries.
			</p>
		</div>
		<div class="main-food">
			<div class="client-card-group">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<router-link to="" class="page-link">MORE BURGERS</router-link>
		</div>
		<div class="side-battle">
			<h2>U Don’t Have To Choose a *Side</h2>
			<div class="photos">
				<div class="item">
					<img
						src="@/../public/img-side/hand-breaded-tenders.png"
						alt=""
					/>
					<p>HAND-BREADED</p>
					<span>CRISPY TENDERS</span>
				</div>
				<div class="item">
					<img src="@/../public/others/vintage-burst2.png" alt="" />
				</div>
				<div class="item">
					<img src="@/../public/img-side/naked-tenders.png" alt="" />
					<p>HAND-BREADED</p>
					<span>CRISPY TENDERS</span>
				</div>
			</div>
		</div>
		<div class="side-food">
			<h2 class="title">MORE GREAT SIDES</h2>
			<p class="summary">
				For every main dish, there is a perfect side.
			</p>
			<div class="client-card-group">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
		<div class="offers-group">
			<h2 class="title">what we offers</h2>
			<div class="offers">
				<div class="item">
					<span class="flaticon-034-waiter"></span>
					<h5>Friendly Service</h5>
					<p>
						Filet mignon buffalo shankle leberkas, porchetta
						frankfurter.
					</p>
				</div>
				<div class="item">
					<span class="flaticon-047-menu"></span>
					<h5>Original Recipes</h5>
					<p>
						Filet mignon buffalo shankle leberkas, porchetta
						frankfurter.
					</p>
				</div>
				<div class="item">
					<span class="flaticon-038-take-away"></span>
					<h5>Convenient Locations</h5>
					<p>
						Filet mignon buffalo shankle leberkas, porchetta
						frankfurter.
					</p>
				</div>
				<div class="item">
					<span class="flaticon-031-delivery"></span>
					<h5>Fast Dlivery</h5>
					<p>
						Filet mignon buffalo shankle leberkas, porchetta
						frankfurter.
					</p>
				</div>
			</div>
		</div>
		<div class="subscription">
			<div>
				<h2>Love Burgers? Like Deals?</h2>
				<p>
					Be the first to know about our newsest menu item and latest
					offers
				</p>
			</div>
			<div class="send">
				<input type="email" placeholder="Please leave your email ..." />
				<i class="far fa-envelope"></i>
				<a href="#">Send</a>
			</div>
		</div>
		<Footer />
	</div>
</template>
<script>
import Header from '@/components/client/Header.vue';
import Carousel from '@/components/client/Carousel.vue';
import Footer from '@/components/client/Footer.vue';
import Card from '@/components/client/Card.vue';
export default {
	components: {
		Header,
		Carousel,
		Footer,
		Card,
	},
	data() {
		return {};
	},
};
</script>
