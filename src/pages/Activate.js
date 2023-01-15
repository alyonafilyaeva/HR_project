import React, { useContext, useLayoutEffect } from 'react'

const Activate = () => {
    return(
        <div className='activate_item'>
            <p>Нажмите на кнопку активации учетной записи</p>
            <button className='orange activate'>Активировать</button>
        </div>
    )
}

export default Activate;