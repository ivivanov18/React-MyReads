import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';


class SearchBooks extends Component{

  state = {
    query: '',
    booksFound: []
  }

  /**
  * @description Function to update the query with the new entered query
  * @param {string} newQuery - The new entered query
  */
  updateQuery = (newQuery) => {
    this.setState({query: newQuery});
    BooksAPI.search(newQuery.trim()).then((books) => {
      if(books){
        this.setState({booksFound: books});
      }else{
        this.setState({booksFound: []});
      }
    });
  }

  render(){

    return(

      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
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
              value={this.state.query.trim()}
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
                  shelf={book.shelf ? book.shelf : "none"}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
