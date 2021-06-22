<template>
	<div class="base-tab">
		<nav class="tabs flex flex-col sm:flex-row">
			<button
				v-for="(tabHeader, index) in tabHeaders"
				:key="index"
				:data-target="`panel-${index + 1}`"
				class="tab py-4 px-6 block hover:text-blue-500 focus:outline-none border-b-2 font-medium"
				:class="{ 'active-tab': activeTab === index }"
				@click="onActiveTab(index)"
			>
				{{ tabHeader }}
			</button>
		</nav>
		<div id="panels">
			<div
				class="panel-1 tab-content py-5"
				v-for="(tabContent, index) in tabContents"
				:class="{ active: activeTab === index, hidden: activeTab !== index }"
				:key="index"
				:id="`panel-${index + 1}`"
			>
				<component :is="tabContent"></component>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'BaseTab',
	props: {
		tabHeaders: {
			type: Array,
			require: true,
		},
		tabContents: {
			type: Array,
			require: true,
		},
	},
	computed: {
		...mapGetters(['activeTab']),
	},
	methods: {
		...mapActions(['updateActiveTabs']),
		onActiveTab(index) {
			this.updateActiveTabs({ value: index });
			if (this.$route.path !== '/news') {
				this.$router.push('/news');
			}
		},
	},
};
</script>

<style>
.active-tab {
	@apply text-blue-500 border-blue-500;
}
</style>
