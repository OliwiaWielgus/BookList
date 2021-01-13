import { combineReducers} from 'redux';
const booksReducer = () => {
    return [
        { title: 'Odnaleziony', author: 'Harlan Coben', pages: '352', category: 'Kryminał'},
        { title: 'Człowiek nietoperz', author: 'Jo Nesbo', pages: '420',category: 'Kryminał'},
        { title: 'Gone', author: 'Michael Grant', pages: '250', category: 'Przygodowa'},
        { title: 'Kochaj', author: 'Regina Brett', pages: '154', category: 'Psychologiczna'},
        { title: 'Zawsze i na zawsze', author: 'Jenny Han', pages: '352', category: 'Młodzieżowa'},
        { title: 'Duma i uprzedzenie', author: 'Jane Austen', pages: '352', category: 'Romans'},
        { title: 'I nie było już nikogo', author: 'Agatha Christie', pages: '120', category: 'Kryminał'},
        { title: 'Mgła', author: 'Stephen King', pages: '744', category: 'Thriller'},
        { title: 'Lalka', author: 'Bolesław Prus', pages: '1050', category: 'Społeczno-obyczajowa'},
        { title: 'Akademia Pana Kleksa', author: 'Jan Brzechwa', pages: '200', category: 'Przygodowa'},
        { title: 'Hygge', author: 'Marie-Tourell-Søderberg', pages: '352', category: 'Obyczajowa'},
    ]
}
const selectedBookReducer = (selectBook = null, action) => {
    if(action.type === 'BOOK_SELECTED'){
        return action.payload;
    }
    return selectBook;
}
export default combineReducers({
    books: booksReducer,
    selectedBook: selectedBookReducer
})