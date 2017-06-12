import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
    render() {
        return (
            <div>
                会员等级设置
                <Link to="/">main</Link>
            </div>
        )
    }
}


