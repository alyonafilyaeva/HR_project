import React from "react";
import "../Styles/app.css"

const AddResume = (props) => {
    
    let post = React.createRef()
    let about = React.createRef()
    let salary = React.createRef()
    let exp = React.createRef()
    

    let onAddRes = (e) => {
        e.preventDefault()
        props.AddResume()
    }

    let onResChange = () => {
        let postRes = post.current.value;
        let aboutRes = about.current.value;
        let salaryRes = salary.current.value;
        let expRes = exp.current.value;
        props.ChangeResume(postRes, aboutRes, salaryRes, expRes)
    }
    debugger;
    return (
        <div>
            <form>
                <div>
                    <div>
                        <p>Почта:</p>
                        <input onChange={onResChange} type='text' name='post' ref={post} value={props.newResPost}/>
                        <p>департамент</p>
                        <p>из бд</p>
                        <p>Мин зарплата</p>
                        <input onChange={onResChange} type='text' name='salary' ref={salary} value={props.newResSalery}/>
                        <p>Стаж работы</p>
                        <input onChange={onResChange} type='text' name='salary' ref={exp} value={props.newResExp}/>
                        <p>О себе</p>
                        <textarea onChange={onResChange} type='text' name="about" ref={about} value={props.newResAbout}/>
                    </div>
                    <div>
                        <p>Загрузите изображние</p>
                        <input type="file" name="photo" accept="image/*" />
                        <p>Загрузите свое резюме</p>
                        <input type="file" name="photo" accept="application/pdf" />
                    </div>
                </div>

                
                <button onClick={onAddRes}>Создать резюме</button>
            </form>
        </div>
    )
}

export default AddResume;