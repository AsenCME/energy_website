import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: "/hub",
			name: "hub",
			component: () => import(/* webpackChunkName: "hub" */ "./views/Hub.vue"),
		},
		{
			path: "/contacts",
			name: "contacts",
			component: () => import(/* webpackChunkName: "contacts" */ "./views/Contacts.vue"),
		},
		{
			path: "/printing",
			name: "printing",
			component: () => import(/* webpackChunkName: "contacts" */ "./views/Printing.vue"),
		},
		{
			path: "/consulting",
			name: "consulting",
			component: () => import(/* webpackChunkName: "contacts" */ "./views/Consulting.vue"),
		},
		{
			path: "/about",
			name: "about",
			component: () => import(/* webpackChunkName: "contacts" */ "./views/About.vue"),
		},
	],
});
