import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from './Select';



class Book extends Component{

  /*get_selected = (a) => {
    let selector = document.getElementById('selectShelf');
    console.log(selector);
    console.log(selector.selectedIndex);
    console.log(selector.options[selector.selectedIndex]);
    let valueSelected = selector.options[selector.selectedIndex].value;
    console.log(valueSelected);
    return valueSelected;
  }

  get_selected_2 = (event) => {
    return event.target.value;
  }*/

  handleChangeBookToShelf = (newShelf) => {
    console.log("2");
    console.log(newShelf);
    this.props.onChangeShelf(this.props, newShelf);
  }

  render(){
    return(
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128,
            height: 193, backgroundImage: `url(${this.props.url})` }}></div>

          <Select
            shelf={this.props.shelf}
            idBook={this.props.idBook}
            onChangeShelf={this.handleChangeBookToShelf}
          />

        </div>
        <div className="book-authors">{this.props.authors}</div>
        <div className="book-title">{this.props.title}</div>
      </div>);
  }
}

Book.propTypes = {
  authors: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  url:PropTypes.string.isRequired,
  idBook: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired
};
export default Book;
