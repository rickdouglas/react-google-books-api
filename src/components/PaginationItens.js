import React, { memo, useState } from 'react';
import { Pagination, DropdownButton} from 'react-bootstrap';

function PaginationItens({
    itensPerPage,
    total,
    onChangePaginate,
    onChangeNextPage,
    onChangePrevPage,
    onChangeFirstPage,
    onChangeLastPage,
    
}) {
    const pageNumbers = [];
    const lastPage = Math.ceil(total / itensPerPage);
    for (let i = 1; i <= lastPage; i++) {
        pageNumbers.push(i);
    }


    const PagesNumbers = () => (
        <>
            {pageNumbers.map(num => (
                <Pagination.Item data-pagina={num} onClick={() => onChangePaginate(num)} key={num}>
                    {num}
                </Pagination.Item>
            ))}
        </>
    );

    return (
        <div className="text-center">
            <Pagination>
                <Pagination.First onClick={() => onChangeFirstPage()} />
                <Pagination.Prev onClick={() => onChangePrevPage()} />
                <PagesNumbers />
                <Pagination.Next onClick={() => onChangeNextPage()} />
                <Pagination.Last onClick={() => onChangeLastPage(lastPage)} />
            </Pagination>
        </div>
    );
}

export default memo(PaginationItens);

//#region faz o calculo de limit da pagina para retornar o valor aceitavel.
function calLimit(value, totalItens, itensPerPage) {
    let limitMin = 0;
    let limitMax = Math.ceil(totalItens / itensPerPage) - 1;
    let valueReturn = value;
    if (value < limitMin) {
        valueReturn = limitMin;
    }
    if (value > limitMax) {
        valueReturn = limitMax;
    }
    return valueReturn;
}
//#endregion

//#region Implmentacao padrão para comp que importa o pagination itens
export function functionPaginate(pageNum, totalItens, itensPerPage) {
    return calLimit(pageNum - 1, totalItens, itensPerPage);
}
export function functionNextPage(currentPage, totalItens, itensPerPage) {
    return calLimit(currentPage + 1, totalItens, itensPerPage);
}
export function functionPrevPage(currentPage, totalItens, itensPerPage) {
    return calLimit(currentPage - 1, totalItens, itensPerPage);
}
export function functionFirstPage() {
    return 0;
}
export function functionLastPage(lastPage, totalItens, itensPerPage) {
    return calLimit(lastPage - 1, totalItens, itensPerPage);
}
export function functionItemsPerPage(evt) {
    return parseInt(evt.target.text);
}
//#endregion
