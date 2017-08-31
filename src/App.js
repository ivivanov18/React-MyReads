import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Library from './Library';
import SearchBooks from './SearchBooks';
import OpenSearch from './OpenSearch';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';


class BooksApp extends React.Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  changeBooktoShelf = (book, shelf) => {
    /*console.log("book: ", book);
    if(shelf === "none"){
      const books = this.state.books.slice();
      books.splice(books.indexOf(book),1);
      console.log("IndexOf: ", books.indexOf(book));
      this.setState({books: books});
      return;
    }*/

    console.log("changeBooktoShelf");
    const books = this.state.books.slice();

    for(let bookL of books){
      if(bookL.id === book.id){
        bookL.shelf = shelf;
        this.setState({books: books});
        BooksAPI.update(book,shelf);
        return;
      }
    }
     //book not in books
      /*books.push(book);
      BooksAPI.update(book,shelf);
      this.setState({books: books});
      console.log(books);*/

    //BooksAPI.update(book,shelf).then(r => console.log('Shelf updated', r));
    BooksAPI.update(book,shelf).then(
      BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    }));
  }


  changeShowSearchPage = () => {
    this.setState(() => ({
      showSearchPage: !this.state.showSearchPage,
    }))
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/search" render={({history}) => (

            <SearchBooks onChangeShelf={(book, shelf)=>{
              this.changeBooktoShelf(book,shelf)
              history.push('/')
            }}/>
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
