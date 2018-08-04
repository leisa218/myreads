import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListShelfs from './ListShelfs'
import SearchBooks from './SearchBooks'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { withRouter } from "react-router-dom";


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    shelf: [
      {
        'shelfName': 'currentlyReading',
        'title': 'Currently Reading'
      },
      {
        'shelfName': 'wantToRead',
        'title': 'Want to read'
      },
      {
        'shelfName': 'read',
        'title': 'Read'
      }
    ],
    books: [],
    query: ''
  }
  componentDidMount(){
    this.getBooks()
  }
  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }
  updateBooks = (book,shelf) => {
    BooksAPI.update(book, shelf).then(() =>{
      this.getBooks()
      this.props.history.push("/");
    })
  }
  render() {
    return (
      <div className="app">
          <Route exact path='/search' render={(history) =>(
            <div className="search-books">
              <SearchBooks booklist={this.state.books} onChange={this.updateBooks}/>
            </div>
          )}/>
          <Route exact path='/' render={() =>(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <ListShelfs shelfs={this.state.shelf} allbooks={this.state.books} onChange={this.updateBooks}/>
                </div>
              </div>
              <div className="open-search">
                <Link to='/search'>Add a book</Link>
              </div>
            </div>
          )} />
      </div>
    )
  }
}


export default withRouter ( BooksApp)
