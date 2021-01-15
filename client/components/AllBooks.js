import React from 'react'
import SearchByTitle from './SearchByTitle'
import SearchByGenre from './SearchByGenre'

class AllBooks extends React.Component {
  render() {
    return (
      <div>
        <SearchByTitle />
      </div>
    )
  }
}

export default AllBooks
