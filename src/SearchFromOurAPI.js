import React, { Component } from 'react'
//we will make a link to the OurListBooks file
import { Link } from 'react-router-dom'
//we will import every books from our api 
import * as BooksAPI from './BooksAPI'
import OurAllBooks from './OurAllBooks'
import PropTypes from 'prop-types'


//our component is called SearchFromOurAPI ,class component 
class SearchFromOurAPI extends Component{
  static propTypes ={ // we will specify our types of props
     books:PropTypes.array.isRequired,
     TheSelectedShelf :PropTypes.func.isRequired
  }

  /*
  // we will make a mehod to search for the books from our api
  */
    constructor(props){
      super (props)
      this.state = {
        books: [],
        query:''

      }
    }
  //we will make a setState that the cuurent state depends on the previous state   
  // we will make a method to search for the books from our api
  // we will make event so that when we click on the search bar and write the name of the book then the search for this books begin 
  SearchForBook=(query)=>{
    this.setState(() => ({ // we will update our query
       query 
     }))
     if(query.trim() !== ''){ // if the query is not empty
   // we will target the value that written in the search bar
        BooksAPI.search(query,100).then(books=>{
            //check for errors first
      // we will know of the written value is valid or not by using typeof method
          if(  
            (typeof books ==="undefined") ||("error"in books)||books.length === 0 || // A: if there's no books in the array
            books.hasOwnProperty('error')  // A: if there's an error in the response and our current state is depend on the previous state 
          ) {
            this.setState(prevState=>({books:[]}))  
            console.log(this.state.books)

          }else{// Here, there's no books in the state to search for it, and also we will  updating the state after settings the shelf property
            let ThesearchedBooks = [];//we will make an empty array to put all the books that comming from search in it after settin their shelves
            let HomeBooks = this.props.books;// we will set all the books that is from the main page
            ThesearchedBooks = books.map((ThesearchedBook) => {// we will map through all books that comming from search
              ThesearchedBook.shelf = 'none';// we will Setting the default shelf to 'none'
              HomeBooks.map((homeBook) => {// A: map through all books from home
                if (homeBook.id === ThesearchedBook.id) {// we will check if that searched book is existing in our home books 
                  ThesearchedBook.shelf = homeBook.shelf;// if it was in the home page then setting the correct shelf
                }
              });
              return ThesearchedBook;//we will return the book with the shelf property (after updating them)

            });
            this.setState(prevState => ({
              books: ThesearchedBooks,
            }));
          }
        })
       } else {
        // If the search bar or the query is empty, remove books from the state
        this.setState({
          books: []
        });
     }
      
    
    

  }
  render(){
       const {  TheSelectedShelf ,books  } = this.props // our props
       const {query} = this.state //our state
        return(
            
                <div className="search-books">
                  <div className="search-books-bar">
                     <Link to='/'> 
                        
                        <button className="close-search" >Close</button>
                     </Link>  
        
                    <div className="search-books-input-wrapper">
                     
                      <input type="text" value ={query} onChange={(event)=>this.SearchForBook(event.target.value)} placeholder="Search by title or author"/>
                      
                    </div>
                  </div>
                  <div className="search-books-results">
                    {(this.state.books.length>0) && ( 
                       <ol className="books-grid">
                       {// هنا الكتاب اللي هيرجع في اخر واحده هيكون نفس الكتاب اللي عملنا عليه ماب
                       this.state.books.map(book=><OurAllBooks books={books} // حضرتك عاملة this.state.books.map على الرغم من انك معرفة فوق ال booksيعني مش محتاجة تضعي قبلها شيء لما تستدعيها
                                        key={book.id} TheSelectedShelf={TheSelectedShelf} 
                                        book={book }/>)} 
                     </ol>
                    )}
                   
                  </div>
                 
            
                </div>
              
               
            

        )
    }

}
export default SearchFromOurAPI
/*hasOwnProperty is a method to check if an object has a specific property or not
books = { error: '' } 
books.hasOwnProperty('error') // will return true
books.hasOwnProperty('prop') // will return false
*/