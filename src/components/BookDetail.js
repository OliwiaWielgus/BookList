import React from 'react';
import {connect} from 'react-redux';

const BookDetail = ({book}) => { 
    if(!book) {
        return <div>Wybierz książkę znajdującą się po lewej stronie!</div>
    } 
    return(
        <div>
            <h3>Informacje o książce:</h3>
            <p>Tytuł: {book.title}</p>
            <p>Autor: {book.author}</p>
            <p>Ilość stron: {book.pages}</p>
            <p>Kategoria: {book.category}</p>
        </div>
        )
}
const mapStateToProps = (state) => {
    return {book: state.selectedBook};
}
export default connect(mapStateToProps)(BookDetail) ;