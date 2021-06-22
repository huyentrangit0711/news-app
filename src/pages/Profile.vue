<template>
	<div class="profile-tab">
		<h1>Profile</h1>
		<div class="register-form" v-if="!isLoggedIn">
			<register-form v-if="!isLoggedIn"></register-form>
		</div>

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
	},
};

//Profile tab
</script>
