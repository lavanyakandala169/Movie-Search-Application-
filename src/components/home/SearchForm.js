import React, { Component } from 'react';

import { connect } from 'react-redux';
//import Select from 'react-select';


import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../actions/searchAction';

// const scaryAnimals = [
//   { label: "Alligators", value: 1 },
//   { label: "Crocodiles", value: 2 },
//   { label: "Sharks", value: 3 },
//   { label: "Small crocodiles", value: 4 },
//   { label: "Smallest crocodiles", value: 5 },
//   { label: "Snakes", value: 6 },
// ];



export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-5">
          Movie Search Application</h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
            
          {/* <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={this.onChange}
            />  */}
            
  <select className="form-control" onChange={this.onChange}>
  <option value="" disabled selected>Search Movies, TV Series ...</option>
  <option>All</option>
  <option>Movies</option>
  <option>Series</option>
  <option>Episodes</option>
</select> 
    <button type="submit" className="btn btn-secondary btn-bg ml-1">
              Search
            </button> 
            
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);