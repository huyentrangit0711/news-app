import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueRouter from 'vue-router';
import NewItem from '@/components/news/NewItem';
const localVue = createLocalVue();
localVue.use(VueRouter);
const router = new VueRouter();
describe('News Item Component', () => {
	let wrapper;
	it('Component renders correctly', () => {
		wrapper = shallowMount(NewItem, {
			propsData: {
				article: {
					id: 12435,
					title: 'Mock title',
					description: 'Mock description',
				},
			},
			router,
			stubs: ['router-link'],
		});
		expect(wrapper).toMatchSnapshot();
	});
	it('Computed property newDetailLink should work correctly', () => {
		wrapper = shallowMount(NewItem, {
			propsData: {
				article: {
					id: 12435,
					title: 'Mock title',
					description: 'Mock description',
				},
			},
			router,
			stubs: ['router-link'],
		});
		expect(wrapper.vm.newDetailLink).toEqual({
			name: 'new-detail',
			params: { newId: 12435 },
		});
	});
});
