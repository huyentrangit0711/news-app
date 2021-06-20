<template>
	<div class="profile-tab">
		<h1>Profile</h1>
		<register-form v-if="!isLoggedIn"></register-form>
		<welcome-page v-else></welcome-page>
	</div>
</template>

<script>
import RegisterForm from '../components/profile/RegisterForm.vue';
import WelcomePage from '../components/profile/WelcomePage.vue';
export default {
	name: 'ProfilePage',
	data() {
		return {
			isLoggedIn: false,
		};
	},
	components: {
		RegisterForm,
		WelcomePage,
	},
	mounted() {
		this.isLoggedIn = localStorage.getItem('username') !== null;
		console.log(this.isLoggedIn);
	},
};

//Profile tab
</script>
