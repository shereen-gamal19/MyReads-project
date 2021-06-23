//we import React and Component packages from react 
import React ,{Component }from 'react'
//we will import the OurListBooks component inside our app.js file
import OurContainerBooks from './OurContainerBooks'
// import * as BooksAPI from './BooksAPI' as we will import everything from it and every books from it 
import * as BooksAPI from './BooksAPI'
//we will import Route packages to make a  link to the OurListBooks file with the Searchbooks.js wih app.js file
//import { BrowserRouter as Router, Route} from 'react-router-dom'
import { BrowserRouter, Route } from 'react-router-dom'
//we will import the two files that we will make the links with them
import SearchFromOurAPI from './SearchFromOurAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    //we will update our books array here
    books:[]
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    //showSearchPage: false
    
    

  };
  //first we will get all books from the BooksAPI by using .getAll
  componentDidMount() {
    BooksAPI.getAll()
    //we will make a promise so that if we get our books then we will update our current books 
      .then((books) => {
        this.setState(() => ({
          books
        }))
      });
      console.log(this.state.books);
  }
  

  //i will make a mehod to change the shelf by using update method from BooksAPI file
  UpdateTheShelf = (book,selectedshelf)=>{
    console.log(this.state.books);
    BooksAPI.update(book,selectedshelf).then(()=>{
        //we will make the shelf of the book is the selected shelf
        book.shelf=selectedshelf
        //we will filter all books inside the book array and if the selected book<s id not equal any ids in the array or it is not inside the array then we will add this book to the array by using concat method
        const myNewBook =[...this.state.books].filter((B)=> B.id !== book.id).concat(book);
        // we will update our book array with the new comming books
        this.setState({
          books:myNewBook
        })
        console.log(this.state.books)
      })
  }

  render() {
    return (// we link with the List books page and search page 

      <div className="app"> 
        <BrowserRouter>
       
          <Route exact path='/' render={() => (
            <OurContainerBooks //we will put the new updated books array and the book shelf in the OurContainerBooks and we put the books that in the container with  the updated books array 
            /* الourcontainerbooks : 
            جواها 2 props اللي هما 
            books , TheSelectedShelf 
            كمان القيمه بتاعت ال (props) ممكن تكون كلام او object
            books props : هتكون object اللي هو books array inside state and we invok it by using this.state.books
            TheSelectedShelf props: and the value is also object and its invoked by "this" because it is a method  and we call it in this way
            */
            books={this.state.books} TheSelectedShelf={this.UpdateTheShelf}

            />
          )} ></Route>
          <Route exact path='/Search' render={() => (
            <SearchFromOurAPI // we will put the updated books array and the book shelf in the search page
            /* الSearchbooks : 
            جواها 2 props اللي هما 
            books , TheSelectedShelf 
            */
             books={this.state.books} TheSelectedShelf={this.UpdateTheShelf}
            //history.push('/')

            
            />
          )} />
          </BrowserRouter>
          
      </div>    
    )
  }
}

export default BooksApp
