import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Page404 extends Component{ 

	render(){

		return(
		  <section id="not-found">
		  	<div id="title">Ups...sorry the requested age does not exist</div>
		    	<div class="circles">
		      	<p>404<br />
		       		<small>PAGE NOT FOUND</small>
		      	</p>
		      	<Link to='/' className='back-home'>Go back home</Link>
		      	<span class="circle big"></span>
		      	<span class="circle med"></span>
		      	<span class="circle small"></span>
		    	</div>
		  </section>
		)
	}
}

export default Page404