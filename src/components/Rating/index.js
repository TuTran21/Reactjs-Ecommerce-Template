import React from 'react'

const Star = props => {
  const {filled,value, onClick} = props
  const starClick = () => {
    onClick(value)
  }
  return (
    <div onClick={starClick}
      style={{
        width: 20,
        height: 20,
        background: filled ? 'black' : 'pink',
        borderRadius: '50%',
      }}
    />
  )
}

class Rating extends React.Component{
  state = {
    rate: this.props.rate
  }
  onStarClick = star => {
    this.setState({rate: star})
  }
  render(){
    const {rate} = this.state
    return (
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <Star value={1} filled={1 <= rate} onClick={this.onStarClick}/>
        <Star value={2} filled={2 <= rate} onClick={this.onStarClick}/>
        <Star value={3} filled={3 <= rate} onClick={this.onStarClick}/>
        <Star value={4} filled={4 <= rate} onClick={this.onStarClick}/>
        <Star value={5} filled={5 <= rate} onClick={this.onStarClick}/>
      </div>
    )
  }
}


export default Rating