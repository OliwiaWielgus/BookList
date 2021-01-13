import React from 'react';
import BooksList from './BooksList';
import BookDetail from './BookDetail';
const App = () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide"> 
                <BooksList />
                </div>
                <div className="column eight wide"> 
                <BookDetail />
                </div>
            </div>  
        </div>
    )
}
export default App;