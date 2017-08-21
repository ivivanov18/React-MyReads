import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Library from './Library';
import Shelf from './Shelf';
import SearchBooks from './SearchBooks';
import OpenSearch from './OpenSearch';


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true,
    books: [],

    bookshelves:{
      currentlyReading: "Currently Reading",
      wantToRead: "Want to Read",
      read: "Read"},
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeBooktoShelf = (book, shelf) => {

    const books = this.state.books.slice();
    for(let bookL of books){
      if(bookL.id == book.idBook){
        bookL.shelf = shelf;
      }
    }
    this.setState({books: books});
  }

  changeShowSearchPage = () => {
    this.setState(() => ({
      showSearchPage: !this.state.showSearchPage,
    }))
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks handleClick={this.changeShowSearchPage}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Library
                onChangeShelf={this.changeBooktoShelf}
                books = {this.state.books}/>
            </div>
            <OpenSearch handleClick={this.changeShowSearchPage} />
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
