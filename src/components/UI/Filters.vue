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
				v-model="filterOptions"
			/>
			<label :for="index" class="flex items-center cursor-pointer text-xl">
				<span
					class="bg-white-600 bg-opacity-100 rounded-lg text-black p-2 border-black border"
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
			filterOptions: null,
		};
	},
	components: {},
};
</script>

<style>
input[type='radio']:checked + label span {
	@apply bg-green-600 text-white;
}
input[type='radio'] + label span:hover,
input[type='radio'] + label:hover span {
	transform: scale(1.2);
}
</style>
