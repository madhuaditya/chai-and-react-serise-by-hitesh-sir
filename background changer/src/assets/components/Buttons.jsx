import React from 'react'

const Buttons = ({text , color}) => {
    return (
        <>
        <button  className={ 'm-1 rounded-3xl ' +''+color }>{text}</button>
        </>
    )
}
export default Buttons
