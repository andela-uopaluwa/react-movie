import React from 'react';

const image_size = 'w200';
const poster_base_url = `https://image.tmdb.org/t/p/${image_size}`;

class Movie extends React.Component {
  shortenMovieTitleString(title) {
    return title.length < 25 ? title : title.substring(0, 25) + '...' 
  }
  render() {
    const { movie } = this.props;
    return (
      <div className="movie">
        <div className="poster">
          <img src={poster_base_url + movie.poster_path} alt="movie poster"/>
        </div>
        <p>{this.shortenMovieTitleString(movie.title)}</p>
        <span>{movie.release_date.split('-')[0]}</span>
      </div>
    )
  }
}

export default Movie;