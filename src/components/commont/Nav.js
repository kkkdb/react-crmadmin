import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSubMenu } from '../../redux/action'
// import { Link } from 'react-router-dom'

class Nav extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectIndex: 0
		}
	}

	componentDidMount() {
		this.props.selectSubMenu(0, this.props.navList)
	}

	handleClick(i){
		const { dispatch } = this.props
		this.setState({selectIndex: i})
		dispatch(selectSubMenu(i, this.props.navList))
	}

	render() {
		var { navList } = this.props;
		var tag = navList.map((item,i)=>(
			<li className={this.state.selectIndex === i ? "el-menu-item is-active" : "el-menu-item"} key={i} onClick={()=>{this.handleClick(i)}}><i className={'fa ' + item.icon}></i> {item.name}</li>
		))
		return(
			<div className="level-one-menu">
				<ul className="el-menu">
					{tag}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	navList: state.navList
})

const mapDispatchToProps = (dispatch) => ({
	selectSubMenu: (key, list) => {
		dispatch(selectSubMenu(key, list))
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(Nav)