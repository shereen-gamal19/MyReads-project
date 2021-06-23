//we will make a component to put our books inside it 
import React , {Component} from 'react'
//we will link the OurContainerBooks file with the SearchFromOurAPI.js wih app.js file
import { Link } from 'react-router-dom'
//we will import the PropTypes
import PropTypes from 'prop-types'
// we will import OurBooksShelfs
import OurBooksShelfs from './OurBooksShelfs'
//we will make a class component
class OurContainerBooks extends Component{
    render(){//our props will be books and TheSelectedShelf method
        const{ books,TheSelectedShelf} = this.props

        return (// we will invoke OurBooksShelfs component
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyfuntasticReads!</h1>
              </div>{/*we will invoke the OurBooksShelfs Component*/}
              <div className="list-books-content">
                <OurBooksShelfs title="Currently Reading it!" shelf ="currentlyReading" books={books} TheSelectedShelf ={TheSelectedShelf} />  
                <OurBooksShelfs title="Want to read the following books" shelf ="wantToRead" books={books} TheSelectedShelf={TheSelectedShelf} />  
                <OurBooksShelfs title="it is readed" shelf ="read" books={books} TheSelectedShelf={TheSelectedShelf} />  

                <div className="open-search">{/*we will link to the search page*/}
                    <Link 
                      to='/Search'
                     
                    ><button>Add a book</button>
                    </Link>
                </div>
                    
              </div>       
            </div>
             
        )
    }


}
// we will specify each type of the props of our component
OurContainerBooks.propTypes ={
  books:PropTypes.array.isRequired,
  TheSelectedShelf:PropTypes.func.isRequired,

}            
export default OurContainerBooks
          