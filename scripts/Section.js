export default class Section {
    constructor({items, renderer}, container) {
        this._items = items;
        this._renderer = renderer;
        this._container = document.querySelector(`.${container}`);
    }
// loops through each of the items that were called in and calls the renderer on that item
    renderItem() {
        this._items.forEach((item) => {
            this._renderer(item);
        })
    }

    addItem(element) {
        this._container.prepend(element);
    }
}