import React, { useEffect, useRef } from 'react'

type control = 'id' | 'text' | 'money' | 'date' | 'tag' | 'button' | 'compound' | 'action'

export interface IColumn {
    colName: string
    control: control
}
interface TableProps {
    columns: IColumn[]
    data: any
    btnClick?: (event: any) => void
}
export const Table: React.FC<TableProps> = ({ columns, data, btnClick = () => null }) => {
    const table = useRef<HTMLBdbMlDynamicTableElement>(null)
    useEffect(() => {
        table.current?.addEventListener('buttonClick', btnClick)
        return () => {
            table.current?.removeEventListener('buttonClick', btnClick)
        }
    }, [])
    return <bdb-ml-dynamic-table ref={table} column-table={JSON.stringify(columns)} row-table={JSON.stringify(data)}></bdb-ml-dynamic-table>
}
