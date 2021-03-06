import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksCover from './BooksCover'


class ListBooks extends Component{ 
	static propTypes = {
	  booklist: PropTypes.array.isRequired,
	  onChange: PropTypes.func
	}

	change(book,e){
		const shelf =  e.target.value;
		this.props.onChangeShelf(book, shelf)
	}
	render(){
		return(
			<ol className='books-grid'>
				{this.props.booklist.map((b) => (
					<li key={b.id}>
						<div className='book'>
							<div className='book-top'>
								<BooksCover cover={b.imageLinks}/>
								<div className='book-shelf-changer'>
									<select onChange={(e) => this.change(b,e)} value={b.shelf}>
										<option value="move" disabled>Move to...</option>
										<option value="currentlyReading">Currently Reading</option>
										<option value="wantToRead">Want to Read</option>
										<option value="read">Read</option>
										<option value="none">None</option>
									</select>
								</div>
							</div>
							<div className='book-title'><strong>Title: </strong>{b.title}</div>
							<div className='book-authors'><strong>Author: </strong>{b.authors}</div>
						</div>
					</li>
				))}
			</ol>
		)
	}
}

export default ListBooks