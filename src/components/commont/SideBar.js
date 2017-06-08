import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../../style/sideBar.css'

class SideBar extends Component {
	render() {
		var menu = this.props.subMenu
		var tag = menu.map((item, index1)=>{
			var tag2 = item.sub_list.map((elem, index2)=>(
				<div className='third-menu-item' key={index2}>{elem.name}</div>
			))
			return (
				<div className='sub-menu-item' key={index1}>
					<div className='item-title'>{item.title}</div>
					{tag2}
				</div>
			)
		})
		return(
			<div className="SideBar">{tag}</div>
		)
	}
}

const mapStateToProps = (state) => ({
	subMenu: state.subMenu		
})

export default connect(mapStateToProps)(SideBar);

