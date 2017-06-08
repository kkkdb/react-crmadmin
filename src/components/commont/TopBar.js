import React, { Component } from 'react'
import { connect } from 'react-redux'
import Nav from './Nav'
import '../../style/topBar.css'

class TopBar extends Component {
	render() {
		return(
			<div className='TopBar'>
				<div className='logo'>CRM 管理系统</div>
				<Nav {...this.props} />
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	navList: state.navList
})

export default connect (mapStateToProps)(TopBar)