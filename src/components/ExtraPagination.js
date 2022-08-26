import { Pagination } from '@mui/material'
import React, { useState } from 'react'

const Pagination = ({ items }) => {
    const [currentPage, setCurrentPage] = useState(1)

    const itemsPerPage = 9
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem)

    // currentItems.map(
    //     ()=>{
    //         ....
    //     }
    // )



    const paginate = (e, value) => {
        setCurrentPage(value)
    }

    return (
        <Pagination
            shape="rounded"
            count={items.length / itemsPerPage}
            onClick={paginate}
            defaultPage={1}
            page={currentPage}
            color="standard"
            size="large"
        />
    )
}

export default Pagination
