import React from "react"

export default class CartWidget extends React.Component {
    render () {
        return <img src={this.props.greetings} alt="logo de Zelda" width="50px" height="50px" />
    }
}