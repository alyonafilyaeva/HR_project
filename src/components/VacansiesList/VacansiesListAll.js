import React, { useContext, useEffect, useLayoutEffect } from "react";
import { Component } from "react";
import Vacansie from "./Vacansie";
import axios from "axios"
import AuthContext from "../../context/AuthContext";

function VacansiesListAll(props) {
    console.log(props)
    let { authToken } = useContext(AuthContext)
    useLayoutEffect(() => {
        /* props.setVacansies([]) */
        axios.get("http://127.0.0.1:8000/api/vacancies/", {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${String(authToken.access)}`
            }

        }).then(response => {
            props.setVacansies(response.data)
            console.log(response.data)
        })
    }, [])
    const vacansieElements = props.vacansiesPage.vacansies.map(vacansie =>
        <Vacansie vacansie={vacansie} />
    )
    return (
        <ul className="vacansiesList">
            {vacansieElements}
        </ul>
    )
}



/* class VacansiesListAll extends Component {
    

    constructor(props) {
        super(props);
        this.vacansieElements = this.props.vacansiesPage.vacansies.map(vacansie =>
            <Vacansie vacansie = {vacansie} />
            );
            
        
    }
    componentDidMount() {
        let {AuthTokens} =  useContext(AuthContext)
        console.log(tokens)

        axios.get("http://127.0.0.1:8000/api/vacancies/",{

        }).then(response =>  
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
} */

export default VacansiesListAll;

