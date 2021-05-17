import React, { } from 'react';
import '../styles/Header.css'

function SearchArea(props) {
    return (
        <div className="search-area">
            <form onSubmit={props.searchBook} action="">
                <i className="material-icons">icone</i>
                <input onChange={props.handleSearch} type="text" placeholder="Pesquisar por :" />
                <button type="submit"> Buscar </button>
            </form>

        </div>
    );
}

export default SearchArea;