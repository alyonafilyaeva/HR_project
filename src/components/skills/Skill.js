import React from "react";

const Skill = (props) => {
    
    return(
        <div>
            <p className={`${props.skill.status == 0 ? 'soft': 'hard'}`}>{props.skill.name}</p>
        </div>
    )
}

export default Skill;