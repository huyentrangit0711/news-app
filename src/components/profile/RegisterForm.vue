<template>
	<div class="w-full">
		<form
			class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-9"
			@submit.prevent="onSubmitHandler"
		>
			<div class="mb-9">
				<label
					class="block text-gray-700 text-sm font-bold mb-2"
					for="username"
				>
					Username
				</label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="username"
					type="text"
					placeholder="Username"
					v-model="username"
				/>
			</div>
			<div class="mb-9">
				<label
					class="block text-gray-700 text-sm font-bold mb-2"
					for="password"
				>
					Password
				</label>
				<input
					class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="password"
					type="password"
					v-model="password"
					placeholder="******************"
				/>
			</div>
			<p class="text-red-500 text-xs italic py-2 px-4" v-if="showError">
				Please check username or password, it should not be empty.
			</p>
			<div class="flex items-center justify-between">
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Register user
				</button>
			</div>
		</form>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	name: 'RegisterForm',
	components: {},
	data() {
		return {
			username: '',
			password: '',
			showError: false,
		};
	},
	methods: {
		...mapActions(['updateAuth']),
		onSubmitHandler: function () {
			this.showError = this.username === '' || this.password === '';
			if (!localStorage.getItem('username')) {
				localStorage.setItem('username', this.username);
				this.updateAuth({ value: true });
			}
		},
	},
};
</script>

<style></style>
