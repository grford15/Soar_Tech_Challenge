import React, {Component} from 'react';
import RepoComponent from '../components/RepoComponent';
import Header from '../components/Header';

class ApiContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      items: [],
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadAPIFunction = this.loadAPIFunction.bind(this);

  }



  handleChange(event) {
   this.setState({value: event.target.value});
 }

 handleSubmit(event) {
   event.preventDefault();
   this.loadAPIFunction();
 }

 loadAPIFunction(){
    let url = `https://api.github.com/search/repositories?q=${this.state.value}`
    fetch(url)
    .then(response => response.json())
    .then(items => this.setState({items: items["items"]}))
    .catch(err => console.log(err));
  }



  render(){

    return (
      <React.Fragment>
      <Header />
        <div id = "search-bar">
          <form onSubmit={this.handleSubmit}>
            <label id = "input-lbl">Repo Name:
            <input type="text" value={this.state.value} onChange={this.handleChange}
            id="search-box" />
            </label>
            <input type="submit" value="Submit" id="submit-btn" />
          </form>
        </div>
        <RepoComponent items = {this.state.items}/>
      </React.Fragment>
      );

  }

}

export default ApiContainer;
