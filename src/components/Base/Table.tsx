import React, { ReactNode } from 'react';
import { TYPE_SIZE } from 'types';

export interface ColumnInfo {
    title: string | undefined, 
    show?: TYPE_SIZE,
    align?: "left" | "center" | "right",
    valign?: "top" | "center" | "bottom",
    width?: number | undefined,
    minWidth?: number | undefined,
    flex?: number | undefined,
    render: (val : any) => ReactNode
}

interface TableProps {
    className?: string,
    column: ColumnInfo[],
    data: string[][] | number[][] | Object[]
}

const Table = function({
    column,
    data,
    className=''
} : TableProps) {
    
    const getCellClass = (colInfo : ColumnInfo) => {
        const cellAlign = colInfo.align || "left"
        const cellVAlign = colInfo.valign || "center"
        let cellClass = colInfo.width !== undefined ? "flex-0" : ('flex-' + (colInfo.flex || 1))
        cellClass += " " + (cellAlign === "center" ? "justify-content-center" : (cellAlign === "right" ? "justify-content-end" : "justify-content-start"))
        cellClass += " " + (cellVAlign === "center" ? "align-items-center" : (cellVAlign === "bottom" ? "align-items-bottom" : "align-items-top"))

        return cellClass
    }

    const getCellStyle = (colInfo : ColumnInfo) => {
        let style = {}
        if( (colInfo.width || 0) > 0 )
            style = { width: colInfo.width + 'px' }
        if( colInfo.minWidth)
            style = { ...style, minWidth: colInfo.minWidth + 'px' }
        return style
    }

    return (
        <div className={`co-table d-flex flex-column ${className}`}>
            <div className="co-table-row-header d-flex align-items-stretch align-self-stretch">
            {column.map((colInfo : ColumnInfo, idx) => (
                <div className={`co-table-header-cell ${getCellClass(colInfo)}`} key={`co-table-header-col-${idx}`} style={getCellStyle(colInfo)}>
                    {colInfo.title}
                </div>
            ))}
            </div>
            <div className="co-table-row-wrapper flex-1">
            {data.map((row, rowIdx) => (
                <div className="co-table-row d-flex align-items-stretch" key={`co-table-row-${rowIdx}`}>
                    {column.map((colInfo : ColumnInfo, colIdx : number) => {
                       
                        return (
                            <div className={`co-table-cell d-flex ${getCellClass(colInfo)}`} key={`co-table-col-${colIdx}`} style={getCellStyle(colInfo)}>
                                {colInfo.render(row)}
                            </div>
                        )
                    })}
                </div>
            ))} 
            </div>
        </div>
    );
}

export default Table;
