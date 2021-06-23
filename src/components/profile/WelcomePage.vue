<template>
	<div class="w-full">
		<h1>Welcome user {{ username }}</h1>
		<button
			class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
			type="button"
			@click="onLogOutHandler"
		>
			Logout
		</button>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'WelcomePage',
	components: {},
	data() {
		return {
			username: '',
		};
	},
	mounted() {
		this.username = localStorage.getItem('username');
	},
	methods: {
		...mapActions(['updateAuth']),
		onLogOutHandler() {
			localStorage.removeItem('username');
			this.updateAuth({ value: false });
		},
	},
};
</script>
