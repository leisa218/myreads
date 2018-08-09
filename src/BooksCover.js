import React, { Component } from 'react'
import PropTypes from 'prop-types'


class BooksCover extends Component{ 
	static propTypes = {
	  cover: PropTypes.object
	}

	checkCover(){
    if (this.props.cover !== undefined) {
      return (
      	<div className='book-cover' style={{ width: 128, height: 193, backgroundImage:`url(${this.props.cover.thumbnail})`}}></div>
      )
    } else {
      return (
      	<div className='book-cover'></div>
      )
    }
  }

	render(){

		return(
			<div className="book-cover-wrapper">
				 { this.checkCover() }		
			</div>
		)
	}
}

export default BooksCover