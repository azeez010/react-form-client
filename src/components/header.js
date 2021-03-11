import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="p-4 border-b-2 border-blue-600 ">
                <h1 className="md:text-3xl sm:text-xl font-semibold text-blue-700">Django React test</h1>  
                <hr/>
                <hr className="text-blue-600" />
            </div>
        )
    }
}
