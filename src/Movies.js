import React from 'react';
import axios from './client';
import Movie from './Movie';
import { Link } from '@reach/router';

class Movies extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      error: null
    }
  }
  componentDidMount() {
    axios.get('discover/movie', {
      sort_by: 'popularity_desc'
    })
    .then(response => {
      if (response.data && response.data.results) {
        this.setState({
          movies: response.data.results,
          error: null
        })
      }
    })
    .catch(error => {
      this.setState({
        error: 'An error occurred while retrieving data.'
      })
    })
  }
  render() {
    return (
      <div id="movies">
        {this.state.movies.map(movie => 
        (
          <Link to={`/${movie.id}`} key={movie.id}>
            <Movie movie={movie} />
          </Link>
        )
      )}
      </div>
    )
  }
}

export default Movies;