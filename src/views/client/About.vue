<template>
	<div>
		<Header />
		<Carousel />
		<div class="about-page">
			<!-- about us -->
			<div class="wraper about">
				<h2 class="title">About Los Pollos</h2>
				<span class="summary"
					>Spicy jalapeno bacon ipsum dolor amet jowl brisket
					burgdoggen, meatball bresaola bacon boudin tri-tip pig pork
					fatback pork chop prosciutto short ribs pork belly. Ham
					boudin rump strip steak, porchetta drumstick picanha spare
					ribs sausage. Tongue ham hock turkey kevin ham short loin
					tenderloin beef ribs shank turducken chicken. Shankle ham
					boudin porchetta, corned beef ribeye strip steak pork
					chop.</span
				>
				<img src="@/../public/img-bg/sandwich-board.png" alt="" />
			</div>
			<!-- our story -->
			<div class="wraper story">
				<h2 class="title">Our Story</h2>
				<ul class="tabs">
					<li class="tab-link">1992</li>
					<li class="tab-link active">2006</li>
					<li class="tab-link">2020</li>
				</ul>
				<div class="tab-content" id="pre">
					<div class="photo"></div>
					<div class="info">
						<h3>Title</h3>
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Et eaque soluta aut eligendi dolore cupiditate
							sunt hic in facilis officiis architecto mollitia,
							consectetur non obcaecati aperiam accusantium nulla
							autem, consequuntur, quasi odio alias adipisci
							tempora quisquam eveniet? Corporis accusantium
							dignissimos quos aperiam neque repellat odio magnam
							asperiores quas numquam! Odio.
						</p>
					</div>
				</div>
				<!-- <div class="tab-content" id="mid">
        <div class="photo"></div>
        <div class="info">
          <h3>Title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et eaque
            soluta aut eligendi dolore cupiditate sunt hic in facilis officiis
            architecto mollitia, consectetur non obcaecati aperiam accusantium
            nulla autem, consequuntur, quasi odio alias adipisci tempora
            quisquam eveniet? Corporis accusantium dignissimos quos aperiam
            neque repellat odio magnam asperiores quas numquam! Odio.
          </p>
        </div>
      </div>
      <div class="tab-content" id="now">
        <div class="photo"></div>
        <div class="info">
          <h3>Title</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et eaque
            soluta aut eligendi dolore cupiditate sunt hic in facilis officiis
            architecto mollitia, consectetur non obcaecati aperiam accusantium
            nulla autem, consequuntur, quasi odio alias adipisci tempora
            quisquam eveniet? Corporis accusantium dignissimos quos aperiam
            neque repellat odio magnam asperiores quas numquam! Odio.
          </p>
        </div>
      </div> -->
			</div>
			<!-- awards -->
			<div class="wraper awards">
				<h2 class="title">Press & Awards</h2>
				<span class="summary ">
					Spicy jalapeno bacon ipsum dolor amet jowl brisket
					burgdoggen, meatball bresaola bacon boudin tri-tip pig pork
					fatback pork chop prosciutto short ribs pork belly. Ham
					boudin rump strip steak, porchetta drumstick.
				</span>
				<img src="@/../public/others/awards-600x164.jpg" alt="" />
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
	},
	data() {
		return {};
	},
};
</script>
