
// class: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

// class: https://javascript.info/class
// JS bind: https://javascript.info/bind

class SortButton {
  constructor(containerElement, onClickCallback, sortFunction) {
    this._onClick = this._onClick.bind(this);
    this.onClickCallback = onClickCallback;

    this.sortFunction = sortFunction;
    containerElement.addEventListener('click', this._onClick);
  }

  _onClick() {
    this.onClickCallback(this.sortFunction);
  }
}
