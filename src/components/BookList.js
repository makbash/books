import React from 'react';

import './BookList.css';

import Book from './Book';

class BookList extends React.Component {

    render() {
        // console.log(this.props.books)

        // return this.props.books.map((book, i) => {
        //     return <div key={i}>
        //         <Book book={book} />
        //     </div>
        // })

        const bookList = this.props.books.map((book, i) => {
            return <Book book={book} key={i} />
        })

        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Bookfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {bookList}
                    </div>
                </div>
            </section>
        )
    }

}

export default BookList;