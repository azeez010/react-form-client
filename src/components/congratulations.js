import React, { Component } from 'react'
import { connect } from 'react-redux';

class Congratulations extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <div className="p-4">
                    <h1 className="bg-green-500 p-2 text-xl text-white my-2">Congratulation!!! {this.props.first_name} {this.props.last_name} Your form has been submitted successfully</h1>  
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        first_name: state.formdata.form.first_name,
        last_name: state.formdata.form.last_name       
    }
}

export default connect(mapStateToProps)(Congratulations)