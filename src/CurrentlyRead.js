import React from 'react'
import Book from './Book'

class CurrentlyRead extends React.Component {
  render() {
    return(
      <div className="bookshelf-books">
        <ol className="books-grid">
          { this.props.books.map((book) => {
            return(<li>
              <Book book= {book} shelfUpdate= {this.props.shelfUpdate}/>
            </li>
            )})}
        </ol>
      </div>
    )}
}

export default CurrentlyRead