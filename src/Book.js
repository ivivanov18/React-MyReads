import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Book extends Component{

  get_selected = () => {
    let selector = document.getElementById('selectShelf');
    let value = selector[selector.selectedIndex].value;
    console.log(value);
    return value;
  }

  get_selected_2 = (event) => {
    return event.target.value;
  }


  render(){
    return(
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128,
            height: 193, backgroundImage: `url(${this.props.url})` }}></div>
          <div className="book-shelf-changer">
            <select id="selectShelf" onChange={() => this.props.onChangeShelf(this.props, this.get_selected())}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
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
  onChangeShelf: PropTypes.func.isRequired
};
export default Book;
