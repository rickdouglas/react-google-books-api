import React, { useState } from "react";
import _ from 'lodash';
import request from "superagent";

import Header from "./Header";
import Book from "./Book";


import PaginationItens, {
    functionPaginate,
    functionNextPage,
    functionPrevPage,
    functionLastPage,
    functionFirstPage,
    functionItemsPerPage
} from './PaginationItens';


function Books() {
  const [books, setBooks] = useState([]);
  const [searchField, setSearchField] = useState("");
  const INITIAL_currentPage = 1;
  const INITIAL_itensPerPage = 10;
  const [totalItens, setTotalItens] = useState(0);
  const [currentPage, setCurrentPage] = useState(INITIAL_currentPage);
  const [itensPerPage, setItensPerPage] = useState(INITIAL_itensPerPage);

  function onChangePaginate(pageNum) {
    setCurrentPage(functionPaginate(pageNum, totalItens, itensPerPage));
  }
  function onChangeNextPage() {
    setCurrentPage(functionNextPage(currentPage, totalItens, itensPerPage));
  }
  function onChangePrevPage() {
    setCurrentPage(functionPrevPage(currentPage, totalItens, itensPerPage));
  }
  function onChangeFirstPage() {
    setCurrentPage(functionFirstPage());
  }
  function onChangeLastPage(lastPage) {
    setCurrentPage(functionLastPage(lastPage, totalItens, itensPerPage));
  }
  function onChangeItemsPerPage(evt) {
    setItensPerPage(functionItemsPerPage(evt));
  }


  function getBooks() {
    const URL = `https://content-books.googleapis.com/books/v1/volumes?q=${searchField}&key=`;
    request.get(URL).then((data) => {
      const newData = data.body.items;
      console.log("newData", newData);
      setBooks(newData);
      setTotalItens(data.body.totalItems);
    });
  }

  function searchBook() {
    getBooks();
  }

  function handleSearch(e) {
    console.log(e.target.value);
    setSearchField(e.target.value);

    if (searchField.length > 3) {
      getBooks();
    }
  }

  
  return (
    <div>
      <Header searchBook={searchBook} handleSearch={handleSearch} />
      {books.map((book) => (
        <div>
          <Book
            key={book.id}
            avatar={ _.get(book, 'volumeInfo.imageLinks') || null}
            title={book.volumeInfo.title}
            description={book.volumeInfo.description}
            publishedDate={book.volumeInfo.publishedDate}
          />
        </div>
      ))}
      <PaginationItens
        itensPerPage={10}
        total={totalItens}
        onChangePaginate={onChangePaginate}
        onChangeNextPage={onChangeNextPage}
        onChangePrevPage={onChangePrevPage}
        onChangeFirstPage={onChangeFirstPage}
        onChangeLastPage={onChangeLastPage}
        onChangeItemsPerPage={onChangeItemsPerPage}
      />{" "}
    </div>
  );
}
export default Books;
