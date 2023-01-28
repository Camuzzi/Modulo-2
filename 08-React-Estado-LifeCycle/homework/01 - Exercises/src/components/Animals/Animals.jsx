import React from 'react'

export default class Animals extends React.Component {
  constructor (props) {
    super()
  }

  render () {
    const {animals} = this.props;
    return (
    <div>
      {animals?.map(a => {
          return(
        <div key={a.name}>
          <h5>{a.name}</h5>
          <img src={a.image} alt={a.name} width="300px" />
          <br />
          <span>{a.specie}</span>
        </div>
        )
      })}
    </div>
    )}
}
