import { shallowMount } from '@vue/test-utils';
import NewsList from '@/pages/NewsList';

describe('Profile Page Component', () => {
	// render the component
	let wrapper;
	beforeEach(() => {});
	afterEach(() => {
		jest.clearAllMocks();
	});
	it('Page Profile should render welcome page correctly', () => {
		wrapper = shallowMount(NewsList, {
			stubs: ['router-link', 'router-view'],
		});
		expect(wrapper).toMatchSnapshot();
	});
});
