import React, { Component } from "react";

const Resume = (props) => {
        return(
            <div className="vacansie">
                <div className="vacansie-item">
                    <div className="vacansie-top">
                        <h2>{props.resume.name}</h2>
                        <p className="blur">{props.resume.date}</p>
                    </div>
                    <p className="blur">{props.resume.salary}</p>
                    <p className="blur">Опыт работы: {props.resume.exp}</p>
                    <section>{props.resume.about}</section>
                </div>
                <div className="vacansie-right">
                    <p>Департамент</p>
                    <p className="blur">{props.resume.department}</p>
                    <p>Глава департамента</p>
                    <p className="blur">{props.resume.headDepartment}</p>
                </div>
            </div>
        )
}

export default Resume;