import React, {Component} from 'react';
import  {connect} from 'react-redux';
import {selectBook} from '../actions';
class BooksList extends Component{
   renderList(){
       return this.props.books.map((book) => {
           return(
               <div className="item" key={book.title}>
                   <div className="right floated content">
                    <buttnon className="ui button secondary" onClick={() => this.props.selectBook(book)}>
                        Pokaż szczegóły
                    </buttnon>
                   </div>
                   <div className="content">{book.title}</div>
               </div>
           )
       })
   }
   
    render (){  
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {books: state.books};
}
export default connect(mapStateToProps, {selectBook})(BooksList);