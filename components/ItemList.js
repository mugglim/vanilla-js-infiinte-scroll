import Component from './Component.js';

export default class ItemList extends Component {
	constructor($target, props) {
		super($target, props);
		this.setState({});
	}

	itemTemplate(item) {
		return `
            <div class="item">
                <h2>name : ${item.name}</h2>
                <h2>job : ${item.job}</h2>
                <h2>phone : ${item.phone}}</h2>
            </div>
        `;
	}

	template() {
		return !this.props
			? ''
			: this.props.itemList.map(el => this.itemTemplate(el)).join('');
	}
}
