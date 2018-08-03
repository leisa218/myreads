import React, { Component } from 'react'
import PropTypes from 'prop-types'


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
		//console.log('list books props', this.props)
		//console.log(this.props.booklist)
		return(
			<ol className='books-grid'>
				{this.props.booklist.map((b) => (
					<li key={b.id}>
						<div className='book'>
							<div className='book-top'>
								<div className='book-cover' style={{ width: 128, height: 193, backgroundImage:`url(${b.imageLinks.thumbnail})`}}></div>
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
							<div className='book-title'>{b.title}</div>
							<div className='book-author'>{b.author}</div>
						</div>
					</li>
				))}
			</ol>
		)
	}
}

export default ListBooks