import React, {Component} from 'react';

class Select extends Component{

  constructor(props){
    super(props);

    this.state = {valueSelected: props.shelf};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    console.log("1");
    this.setState({valueSelected: event.target.value});
    console.log(event.target.value);
    this.props.onChangeShelf(event.target.value);
    console.log("Fin");
  }


  render(){
    return(
      <div className="book-shelf-changer">
        <select
          value={this.state.valueSelected}
          id="selectShelf"
          onChange={this.handleChange}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
        </select>
      </div>
    );

  }
}

export default Select;
