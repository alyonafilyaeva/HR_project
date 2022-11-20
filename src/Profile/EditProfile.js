import React from "react";

const EditProfile = () => {
    return(
        <div>
            <p>Профиль</p>
            <div className="cart">
                <div >
                    <p>Фамилия Имя Отчество</p>
                    <p>Сотрудник</p>
                    <div className="data">
                        <form>
                            <p>Фамилия Имя Отчество</p>
                            <input type="text"></input>
                            <p>E-mail: email@email.com</p>
                            <input typy="email"></input>
                            <p>Телефон: 88005553535</p>
                            <input type="tel"></input>
                        </form>
                        
                    </div>
                    <div>
                        <button>Сохранить</button>
                    </div>
                </div>
                <div>
                    photo
                </div>
            </div>
        </div>
    )
}

export default EditProfile;