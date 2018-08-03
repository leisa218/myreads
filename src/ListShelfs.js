import React, { Component } from 'react'
import ListBooks from './ListBooks'
import PropTypes from 'prop-types'



class ListShelfs extends Component{
	static propTypes = {
	  allbooks: PropTypes.array.isRequired,
	  onUpdateShelf: PropTypes.func,
	  shelfs: PropTypes.array.isRequired
	}

	getShelfBooks(shelfName){
	  return this.props.allbooks.filter((b) => b.shelf === shelfName)
	}

	render(){
		//console.log('shelf props', this.props)
		return(
			<div>
			{this.props.shelfs.map((shelf) =>(
				<div className="bookshelf" key={shelf.shelfName}>
					<h2 className="bookshelf-title">{shelf.title}</h2>
					<div className="bookshelf-books">
						<ListBooks booklist={this.getShelfBooks(shelf.shelfName)} onChangeShelf={this.props.onChange}/>
					</div>
				</div>			
			))}
			</div>
		)
	}

}


export default ListShelfs