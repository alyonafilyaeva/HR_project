import React from "react";
import { Component } from "react";
import Vacansie from "./Vacansie";
import axios from "axios"

/* function VacansiesListAll(props) {
    axios.get("http://127.0.0.1:8000/api/vacancies/").then(response =>  
    {
        debugger;
        for (let i = 0; i < response.data.length; i++) {
            props.setVacansies(response.data[i]);
            
        }
        
        
    })
    debugger;    
    const vacansieElements = props.vacansiesPage.vacansies.map(vacansie =>
        <Vacansie vacansie = {vacansie} />
        )
    return(
        <ul className="vacansiesList">
            {vacansieElements}
        </ul>
    )
}
 */


class VacansiesListAll extends Component {
    constructor(props) {
        super(props);
        this.vacansieElements = this.props.vacansiesPage.vacansies.map(vacansie =>
            <Vacansie vacansie = {vacansie} />
            );
            
            
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/vacancies/").then(response =>  
            {
                debugger;
                for (let i = 0; i < response.data.length; i++) {
                    this.props.setVacansies(response.data[i]);
                }
            })
    }

    render() {
        return(
            <ul className="vacansiesList">
                {this.vacansieElements}
            </ul>
        )
    }
}

export default VacansiesListAll;

