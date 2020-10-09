import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '/home',
		component: () => import('../views/client/Home.vue'),
	},
	{
		path: '/about',
		component: () => import('../views/client/About.vue'),
	},
	{
		path: '/menu',
		component: () => import('../views/client/Menu.vue'),
		children: [
			{
				path: '',
				name: 'menu-sort',
				component: () =>
					import('../components/client/menu/MenuSort.vue'),
			},
			{
				path: 'chalk-board',
				name: 'menu-board',
				component: () =>
					import('../components/client/menu/MenuChalkBoard.vue'),
			},
			{
				path: 'section',
				name: 'menu-section',
				component: () =>
					import('../components/client/menu/MenuSection.vue'),
			},
		],
	},
	{
		path: '/signup',
		name: 'Signup',
		component: () => import('../views/client/Signup.vue'),
	},
	{
		path: '/signin',
		name: 'Signin',
		component: () => import('../views/client/Signin.vue'),
	},
	{
		path: '/admin',
		component: () => import('../views/admin/Admin.vue'),
		children: [
			{
				path: '',
				name: 'Dashboard',
				component: () => import('../views/admin/Dashboard.vue'),
			},
			{
				path: 'products',
				name: 'products',
				component: () => import('../views/admin/Products.vue'),
			},
			{
				path: 'orders',
				name: 'Orders',
				component: () => import('../views/admin/Orders.vue'),
			},
			{
				path: 'coupons',
				name: 'Coupons',
				component: () => import('../views/admin/Coupons.vue'),
			},
		],
	},
];

const router = new VueRouter({
	routes,
});

export default router;
