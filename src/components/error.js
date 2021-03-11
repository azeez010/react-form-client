import React, { Component } from 'react'
import { connect } from 'react-redux';

class Errors extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div>
                <div>
                    <h1 className="bg-red-500 p-2 text-xl text-white my-2">{this.props.error}</h1>  
                </div>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        error: state.formdata.error
    }
}

export default connect(mapStateToProps)(Errors)