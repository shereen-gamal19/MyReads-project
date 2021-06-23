//we will make make a component to the book shelves
import React, { Component } from 'react'
// we will import all books to put them on the shelves
import OurAllBooks from './OurAllBooks'
//we will import the PropTypes

import PropTypes from 'prop-types'
//we will make a class component called OurBooksShelfs

class OurBooksShelfs extends Component {
          // لو ال شيلف اللي احنا محددينه زي اي شيلف من الموجودين


    render(){//our props will be shelf,title,books, TheSelectedShelf
        const {shelf,title,books,TheSelectedShelf} = this.props
                // لو ال شيلف اللي احنا محددينه زي اي شيلف من الموجودين

        // we will filter all books that comming from the OurAllBooks component
        const Requiredbookshelf = books.filter(book=>book.shelf === shelf); 
        
        return( 
          
            <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">{/*هنا هنستخدم الفلتر عشان نفلتر كل الكتب اللي جايه من ال OurAllBooks*/}
                
                  {Requiredbookshelf.map((book )=>(// we will map through all books with the key prop and with their uniquily id
                        <OurAllBooks key={book.id} TheSelectedShelf={TheSelectedShelf} book={book} />))}
     
                        
                      
                
                </ol>
              </div>
            </div>
          

        )
    }
}
// we will specify each type of the props of our component

OurBooksShelfs.propTypes ={
  shelf:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  books:PropTypes.array.isRequired,
  TheSelectedShelf:PropTypes.func.isRequired,

}  
export default OurBooksShelfs

   