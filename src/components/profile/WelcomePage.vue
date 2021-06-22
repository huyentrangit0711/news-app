<template>
	<div class="w-full max-w-xs">
		test
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
		onLogOutHandler() {
			localStorage.removeItem('username');
		},
	},
};
</script>
