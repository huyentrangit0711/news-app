<template>
	<div class="profile-tab">
		<h1>Profile</h1>
		<register-form v-if="!isLoggedIn"></register-form>
		<welcome-page></welcome-page>
	</div>
</template>

<script>
import RegisterForm from '../components/profile/RegisterForm.vue';
import WelcomePage from '../components/profile/WelcomePage.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
	name: 'ProfilePage',
	components: {
		RegisterForm,
		WelcomePage,
	},
	computed: {
		...mapGetters(['isLoggedIn']),
	},
	mounted() {
		this.updateAuth({ value: localStorage.getItem('username') !== null });
	},
	methods: {
		...mapActions(['updateAuth']),
	},
};
</script>
