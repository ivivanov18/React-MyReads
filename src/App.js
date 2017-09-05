import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Library from './Library';
import SearchBooks from './SearchBooks';
import OpenSearch from './OpenSearch';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';


/**
* @description The main for the application
*/
class BooksApp extends React.Component {

  state = {
    books: [],
  }

  /**
  * @description Loads all the books from the backend server
  */
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  /**
  * @description Changes a book from shelf where it it to shelf in argument
  * @param {book} book - The book to be changed to new shelf
  * @param {string} shelf - The shelf where the book is the moved
  */
  changeBooktoShelf = (book, shelf) => {

    if (book.shelf !== shelf) {
      BooksAPI.update(book, shelf).then(() => {
        book.shelf = shelf;

        // Filter out the book and append it to the end of the list
        // so it appears at the end of whatever shelf it was added to.
        this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([ book ])
      }))});
    }

  }


  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/search" render={({history}) => (

            <SearchBooks
              onChangeShelf={(book, shelf)=>{
                this.changeBooktoShelf(book,shelf)
                history.push('/')
              }}
              books={this.state.books}/>
          )}/>

          <Route exact path="/" render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <Library
                  onChangeShelf={this.changeBooktoShelf}
                  books={this.state.books}/>
              </div>
              <OpenSearch />
            </div>
          )}/>

        </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
