import React , {Component} from 'react'
//we will import the PropTypes
import PropTypes from 'prop-types'
//we will make a class component called TheOptions
class TheOptions extends Component{
  render(){
    const {TheSelectedShelf,book } = this.props // our props
    const{shelf}=book
    return (

// we will make an event onChange so that we can change the shelf of the book and the value will be the shelf itselfs 
                        <div className="book-shelf-changer"> 
                            <select onChange ={TheSelectedShelf} value={shelf}>
                              <option value="move" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                        </div>

    )
  }
}
// we will specify each type of the props of our component

TheOptions.propTypes ={
  shelf:PropTypes.string,
  TheSelectedShelf:PropTypes.func.isRequired,

}
export default TheOptions
