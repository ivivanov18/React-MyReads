import React, {Component} from 'react';

class Select extends Component{

  /**
  * @description Represents a SELECT component with the different values to select from
  * @constructor
  * @param {string} props.book.id - the id of the book to which this select is attached
  * @param {string} props.shelf - the shelf to which the books belongs to
  */
  constructor(props){
    super(props);

    this.state = {valueSelected: props.shelf};

  }

  /**
  * @description Function called when select value is changed
  * @param {object} event - passed from changing the select value
  */
  handleChange = (event) => {

    this.setState({valueSelected: event.target.value});
    this.props.onChangeShelf(event.target.value);

  }


  render(){
    return(
      <div className="book-shelf-changer">
        <select
          value={this.state.valueSelected ? this.state.valueSelected : "none"}
          onChange={this.handleChange}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );

  }
}

export default Select;
