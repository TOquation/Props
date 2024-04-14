import React from 'react'
import propsTypes from 'prop-types'

const User = (props) => {
const logged = <h1>welcome {props.name}</h1>;
const notLogged = <p>Not properly logged in</p>;

return (
    props.isLogged ?
     logged : notLogged
)
}

User.propsTypes = {
    name : propsTypes.string,
    isLogged : propsTypes.bool
}

User.defaultProps = {
    name : "Hillarious",
    isLogged : false
}

export default User