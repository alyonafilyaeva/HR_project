import React, { Component } from "react";

class ActiveVacansie extends Component {
    constructor(props) {
        super(props)
        this.props = props
        console.log(this.props)
    }
    render() {

        console.log(this.props)
        return(
            <div className="vacansie" >
                <div className="vacansie-item">
                    <div className="vacansie-top">
                        <h2>{this.props.vacansie.title}</h2>
                        <p className="blur">{this.props.vacansie.data_updated}</p>
                    </div>
                    <p className="blur">{this.props.vacansie.salary}</p>
                    <p className="blur">Опыт работы: {this.props.vacansie.exp_work}</p>
                    <section>{this.props.vacansie.description}</section>
                </div>
            </div>
        )
    }
    
}

export default ActiveVacansie;
