<template>
	<div class="filter-container flex">
		<div
			class="mr-4 mb-4"
			v-for="(option, index) in avaiableOption"
			:key="index"
		>
			<input
				:id="index"
				type="radio"
				name="radio"
				class="hidden"
				:value="option"
				v-model="filterValue"
			/>
			<label :for="index" class="flex items-center cursor-pointer text-xl">
				<span
					class="bg-white-600 bg-opacity-100 rounded-full text-black p-2 border-black border-2"
				>
					{{ option }}
				</span>
			</label>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Filters',
	data() {
		return {
			avaiableOption: ['bitcoin', 'apple', 'earthquake', 'animal'],
			filterValue: null,
		};
	},
	components: {},
	watch: {
		filterValue: function (val) {
			this.$emit('filterChange', val);
			localStorage.setItem('filter', val);
		},
	},
	mounted() {
		if (localStorage.getItem('filter')) {
			this.filterValue = localStorage.getItem('filter');
		}
	},
};
</script>

<style>
input[type='radio']:checked + label span {
	@apply bg-green-600 text-white border-green-600;
}
</style>
