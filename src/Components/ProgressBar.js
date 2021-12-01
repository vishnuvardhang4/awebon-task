import React, { Component } from 'react'

export default class ProgressBar extends Component {
    render() {
        const Parentdiv = {
            height: this.props.height,
            width: '95%',
            backgroundColor: 'whitesmoke',
            borderRadius: 40,
            margin: 10
          }
          
          const Childdiv = {
            height: '100%',
            width: `${this.props.progress}%`,
            backgroundColor: this.props.bgcolor,
           borderRadius:40,
            textAlign: 'right'
          }
          
          const progresstext = {
            padding: 10,
            color: 'black',
            fontWeight: 900
          }
          
        return (
            <div style={Parentdiv}>
                <div style={Childdiv}>
                    <span style={progresstext}>{`${this.props.progress}%`}</span>
                </div>
            </div>
        )
    }
}
