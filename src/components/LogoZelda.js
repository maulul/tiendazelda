import React from "react"

export default class LogoZelda extends React.Component {
    render () {
        return (
            
            <div className="imgLogo">
                <img src={this.props.logo} alt="logo de Zelda" width="70px" height="70px" />
            </div>
            

        )
    }
}