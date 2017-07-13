import Vue from 'vue'
import Router from 'vue-router'
import index from '@components/index'
import vueResource from 'vue-resource'

Vue.use(vueResource)
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		component: index,
		children: [{
			path: "chatList",
			name: 'chatList',
			component: require('@views/chat-list')
		}, {
			path: "chat",
			name: 'chat',
			component: require('@views/chat')
		}, {
			path: "contact",
			name: 'contact',
			component: require('@views/contact')
		}, {
			path: "dynamic",
			name: 'dynamic',
			component: require('@views/dynamic')
		}]
	},{
			path: '*',
			component: require('@views/404')
		}
	]
})