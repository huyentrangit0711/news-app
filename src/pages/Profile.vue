<template>
	<div class="profile-tab">
		<h1>Profile tab</h1>
		<register-form></register-form>
	</div>
</template>

<script>
import RegisterForm from '../components/profile/RegisterForm.vue';
export default {
	name: 'ProfilePage',
	components: {
		RegisterForm,
	},
};

//Profile tab
</script>
