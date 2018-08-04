import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import escaepRegExp from 'escape-string-regexp'
import { Link } from 'react-router-dom'


class SearchBooks extends React.Component {
  state = {
    searchresult:[],
    books: [],
    query: ''
  }

  addBookShelfToSearchResult = (books) => {
    let all_Books = this.props.booklist
    for (let book of books) {
      book.shelf = "none"
    }

    for (let book of books) {
      for (let b of all_Books) {
        if (b.id === book.id) {
          book.shelf = b.shelf
        }
      }
    }
    return books
  } 

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    if(query && query !== ''){
      BooksAPI.search(query, 20).then((books) => {
        books = this.addBookShelfToSearchResult(books)
        this.setState({searchresult: books})
      })
    }else{
      this.setState({query: ''})
    }
  }

  render() { 
    let showingBooks

    if(this.state.query && this.state.query !== ''){
      const match = new RegExp(escaepRegExp(this.state.query, 'i'))
      showingBooks = this.state.searchresult.filter((book) => match.test( book.title ))

    }else{
      showingBooks = this.props.booklist
    } 
    return (
      <div>
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(e) => this.updateQuery(e.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <ListBooks booklist={showingBooks} onChangeShelf={this.props.onChange} />
          </ol>
        </div>      
      </div>
    )
  }
}


export default SearchBooks
