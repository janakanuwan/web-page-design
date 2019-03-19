// Ref: https://codepen.io/marekdano/pen/bVNYpq

import React from 'react';

class ToDoListItemView extends React.Component {
    render() {
        const {items} = this.props;
        const itemList = items.map((item, index) => <li key={index}> {item} </li>)

        return (
            <div>
                <h3>ToDo Items</h3>
                <ul> {itemList} </ul>
            </div>
        );
    }
}


class ToDoListFormView extends React.Component {
    constructor(props) {
        super(props);
        // https://reactjs.org/docs/uncontrolled-components.html
        this.formInput = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault(); // stop page being reload

        // take the input value from 'ref'
        const newItemValue = this.formInput.current.value;
        if (newItemValue) {
            this.props.addItem(newItemValue);
            this.formInput.current.value ='';
        }
    }

    render() {
        return (
            // Ref: https://reactjs.org/docs/forms.html
            <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                <input type="text" ref={this.formInput} className="form-control" placeholder="add a new todo..."/>
                <button type="submit">Add</button>
            </form>
        );
    }
}

class ToDoListPresenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem(newItem) {
        const updatedItems = this.state.items.concat(newItem);
        this.setState({items: updatedItems});
    }

    render() {
        return (
            <div>
                <ToDoListItemView items={this.state.items} />
                <ToDoListFormView addItem={this.addItem} />
            </div>
        );
    }
}

export default ToDoListPresenter;
