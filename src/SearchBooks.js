import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class SearchBooks extends Component{

  state = {
    query: '',
    booksFound: []
  }

  updateQuery = (newQuery) => {
    this.setState({query: newQuery});
    BooksAPI.search(newQuery, 4).then((books) => {
      this.setState({booksFound: books})
    });
  }

  render(){
    return(

      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={this.props.handleClick}>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.booksFound.map(book => (
              <li key={book.id}>
                <Book
                  title={book.title}
                  authors={book.authors}
                  url={book.imageLinks.thumbnail}
                  id={book.id}
                  onChangeShelf={this.props.onChangeShelf}
                  shelf={book.shelf}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
