import React from 'react';
import { Button } from './Base';
import { ElementProps } from "./Base/interface"

interface PaginationProps extends ElementProps {
    page: number,
    pages: number,
}

const Pagination = function({
    page,
    pages,
    onChange,
    className=''
} : PaginationProps) {
    const arrPages = Array.from({length: pages}, (_, i) => i + 1)
    
    const handleChangePage = (idx: number) => {
        idx = idx < 1 ? 1 : (idx > pages ? pages : idx)
        if(idx === page) return;
        if(onChange) onChange(idx)
    }

    return (
        <div className={`co-pagination d-flex align-items-center ${className}`}>
            <Button className="secondary me-3" icon="arrow-left" size="xs" circle onClick={() => handleChangePage(page - 1)}/>
            {arrPages.map((val) => (
                <div 
                    className={`co-pagination-page ${val === page ? 'current' : ''}`} 
                    onClick={() => handleChangePage(val)}
                    key={`pagination-${val}`}
                >
                    {val}
                </div>
            ))}
            <Button className="secondary ms-3" icon="arrow-right" size="xs" circle onClick={() => handleChangePage(page + 1)}/>            
        </div>
    );
}

export default Pagination;
