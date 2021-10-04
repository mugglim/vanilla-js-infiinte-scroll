import Component from './Component.js';
import ItemList from './ItemList.js';
import apiData from '../api-data.js';

const options = {
	root: null,
	rootMargin: '0px',
	threshold: 1.0,
};

export default class App extends Component {
	constructor($target, props) {
		super($target, props);

		this.setState({
			count: 0,
			itemList: [],
			requestCount: 10,
		});
	}

	template() {
		return `
            <div class="item-list"></div>
			<button class="load-btn">Load More</button>
        `;
	}

	setEvent() {}

	setObserver() {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0,
		};
		const observer = new IntersectionObserver(this.intersectHandler, options);
		const target = document.querySelector('.load-btn');
		observer.observe(target);
	}

	intersectHandler = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				this.fetchDummyData();
			}
		});
	};

	fetchDummyData() {
		setTimeout(() => {
			const data = apiData;
			const newItemList = data.slice(
				this.$state.count,
				this.$state.count + this.$state.requestCount,
			);

			if (newItemList.length) {
				const count = this.$state.count + newItemList.length;
				const itemList = [...this.$state.itemList, ...newItemList];
				this.setState({ count, itemList });
			}
		}, 1000);
	}

	mounted() {
		this.setObserver();
		const $itemList = document.querySelector('.item-list');
		new ItemList($itemList, { itemList: this.$state.itemList });
	}
}
