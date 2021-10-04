export default class Component {
	constructor($target, props) {
		this.$target = $target;
		this.props = props;
	}

	setState($newState) {
		this.$state = { ...this.$state, ...$newState };
		this.render();
	}

	render() {
		this.$target.innerHTML = this.template();
		this.setEvent();
		this.mounted();
	}

	setEvent() {}
	template() {}
	mounted() {}
}
