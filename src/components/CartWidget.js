import React from "react"

export default class CartWidget extends React.Component {
    render () {
        return (
            
            <div className="imgLogo">
                <img src={this.props.greetings} alt="logo de Zelda" width="70px" height="70px" />
            </div>
            

        )
    }
}