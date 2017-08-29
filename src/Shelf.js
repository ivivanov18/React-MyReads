import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Shelf extends Component{



  render(){

    return (
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.category}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.map(book => (
                    <li key={book.title}>
                      <Book
                        title={book.title}
                        authors={book.authors}
                        url={book.imageLinks.thumbnail}
                        id={book.id}
                        onChangeShelf={this.props.onChangeShelf}
                        shelf={book.shelf}/>
                    </li>))
                  }
                </ol>
              </div>
            </div>

        ) ;
  }
}

Shelf.propTypes = {
  category: PropTypes.string.isRequired,
  onChangeShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired
};

export default Shelf;
