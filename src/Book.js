import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Select from './Select';


class Book extends Component{

  /**
  * @description handle the changing of the book to a new shelf
  * @param {string} newShelf - the shelf where the book is to be moved to
  */
  handleChangeBookToShelf = (newShelf) => {
    this.props.onChangeShelf(this.props, newShelf);
  }

  //TODO: take care if length authors > 1
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
            id={this.props.id}
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
  id: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  shelf: PropTypes.string.isRequired
};
export default Book;
