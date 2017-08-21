import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf';

class Library extends Component{

  filterBooksShelf = (category) => {
    return this.props.books.filter((book) => book.shelf === category);
  }


  render(){
    return (
      <div>
        <Shelf
          category='Currently Reading'
          onChangeShelf={this.props.onChangeShelf}
          books={this.filterBooksShelf('currentlyReading')} />
        <Shelf
          category='Want to Read'
          onChangeShelf={this.props.onChangeShelf}
          books={this.filterBooksShelf('wantToRead')} />
        <Shelf
          category='Read'
          onChangeShelf={this.props.onChangeShelf}
          books={this.filterBooksShelf('read')} />
      </div>
    );
  }
}


Library.propTypes = {
  onChangeShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};
export default Library;
