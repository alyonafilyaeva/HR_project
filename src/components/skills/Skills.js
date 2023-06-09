import React from "react";
import Skill from "./Skill";

function Skills(props) {
    let skills = props.skills.skills
    let realskills = props.realskills
    let skillsList = []
    if (realskills != undefined) {
        for (let i = 0; i < realskills.length; i++) {
            console.log(realskills[i])
            for (let j = 0; j < skills.length; j++) {
    
                if (skills[j].id == realskills[i]) {
                    skillsList.push(skills[j])
                }
            }
        }
    }
    


    const skillElements = skillsList.map(skill => <Skill skill={skill}/>)
    return (
        <div className="skills">
            {skillElements}
        </div>
    )
}

export default Skills;
