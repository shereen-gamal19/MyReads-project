//we will make a component to put our books inside it 
import React , {Component} from 'react'
//we will import the PropTypes

import PropTypes from 'prop-types'
// we will import TheOptions Component
import TheOptions from './TheOptions'
//we will make a class component
class OurAllBooks extends Component{

 // هنعمل ايفنت عشان لما ندوس علي options تظهر معانا 
  //حطينا ايفنت علي TheSelectedShelf which inside the TheOptions file
  //كمان احنا هنحطه علي اي  book بس هيتنفذ لما نقف عند كتاب معين 
  // وده في حاله لما نكون هنغير مكان كتاب معين
  //   event.target.valueعشان كدا حددنا 
  // we will make an event to change the book which is selected 
    onChange=(event)=>{
      this.props.TheSelectedShelf(this.props.book , event.target.value)
    }
    // we will make a method to put the selected book in its shelf
     
    FindtheShelfOfTheBook =(book) =>{
       //      بحيث اننا لما ندوس علي اي كتاب عشان ننقله واخترنا اي رف من الرفوف فهو هيشوف هل الركتاب ده هيطلع ال اي دي بتاعه ويفلتره ولو هو اكبر من ال  الصفر يبقي يحطه اول كتاب في الرف ولو اصغر من كدا يبقي هيرجع نون method هنا احنا هنعمل 
        // we will filter all books in the books array to extract the selected book by using the book's id
        /*انا دلوقتي مطلوب مني ان الكتاب لو موجود فى الكتب الاساسيه يظهر الرف بتاعه فى الكتاب
  يعني لو عندي كتاب اسمه Redux 101
  في currently reading
  لما ابحث عن
  Redux
  الكتاب ده هيظهر فانا ازاي اخلي الshelf بتاعه يظهر؟
  هدور في الكتب الموجوده لو هو موجود بس كده
  لما بتجيب الكتب في الصفحة الرئيسية، بيكون موجود فيها الرف بتاعها
  لكن في البحث، هو مش بيرجعلك الرف بتاعها.
  دا المفروض تحدده بناء علي الداتا اللي عندك من الصفحة الرئيسية، لو موجود هتحدده، لو مش موجود 
  يبقي none
  */
      
  // we will filter all books array and if the book has a shelf then it will appear in the main page and search pages together
      if(typeof book === 'object' ) { // we will check if the book is object from https://stackoverflow.com/questions/4456336/finding-variable-type-in-javascript
        
        // typeof book === 'object' && book !== null 
        if (Array.isArray(this.props.books )){ // we will check if the books is array from https://www.w3schools.com/jsref/jsref_isarray.asp
          const FindTheBook = this.props.books.filter((boo)=>boo.id === book.id);
          if (FindTheBook.length >0){
            return FindTheBook[0].shelf //هنا هيفلتر كل الكتب ولو لقي الكتاب يعني هيكون كتاب واحد والطول اكبر من الصفر يعني هيلاقي كتب غالبا هيبقي هو كتاب واحد
                                     // هنا الكتاب اللي هيطل عسرجعه بال الشيلف 

          }
          return "none"
        }
      } 
  
    };
    render(){
      //we will put our props of the OurAllBooks which are book , title ,authors
      const {book }=this.props
      //const{ title , authors}=book
      //here we will get the image and the shlf from the books araay which is comming from google books
      // if we the book has image then return the book wth the image else return the book without the image
      const TheImage= book.imageLinks ? book.imageLinks.thumbnail : ''
      // if the book has a shelf then return the book with its shelf and if it hasn't shelf then find it by using FindtheShelfofTheBook method
      const Shelf = book.shelf ? book.shelf : this.FindtheShelfOfTheBook(book)
      


        return(// we will invoke the TheOptions component and we will invokes its props and passing Shelf variable and onChange event  
            <div>
            
                    <li>
                      <div className="book">
                        <div className="book-top"> 
                          <div className="book-cover" style={{ width: 128, height: 193,
                             backgroundImage: `url(${TheImage})` }}></div>
                          
                          <TheOptions shelf={Shelf} TheSelectedShelf={this.onChange}  book={book}/>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                      </div>
                    </li>
                
            </div>
          

           
            
          
          
        )
    }
}
// we will specify each type of the props of our component


OurAllBooks.propTypes ={//book is object
  book:PropTypes.object.isRequired,
  
  books:PropTypes.array,
  TheSelectedShelf:PropTypes.func.isRequired,

}  
export default OurAllBooks