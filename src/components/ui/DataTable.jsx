import {
    flexRender,
    getCoreRowModel, getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {useState} from "react";
import {Button} from "@/components/ui/button.jsx";
import {Input} from "@/components/ui/input.jsx";
import { cn } from "@/lib/utils"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {ChevronLeftIcon, ChevronRightIcon, DoubleArrowLeftIcon, DoubleArrowRightIcon} from "@radix-ui/react-icons";
    export function DataTable({columns,data,filters = [],stableRow = true ,className, ...rest}) {
    const [sorting, setSorting] = useState([])
    const [columnFilters, setColumnFilters] = useState([])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        initialState:{

        },
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
            columnFilters
        },
    })
        if(stableRow){
            table.initialState.pagination.pageSize = 8
        }

    function deleteRow() {
    }

        return (
        <div className={cn(`relative h-full pb-16`,className)}>
            <div className="flex gap-5 p-5 py-8 border-b">
                {
                    filters.map((filter,index) => (
                        <Input
                            key={index}
                            placeholder={`Filter ${filter}`}
                            className="max-w-[50%]"
                            value={(table.getColumn(filter)?.getFilterValue()) ?? ""}
                            onChange={(event) =>
                                table.getColumn(filter)?.setFilterValue(event.target.value)
                            }
                        />
                    ))
                }

            </div>
            <Table>
                <TableHeader className="bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id} className="h-14">
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id} style={{width:`${header.column.columnDef.size}`,padding:"0 1vw 0 2vw"}} className="px-0">
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody className="font-[500]">
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                className="h-12"
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id} style={{width:`${cell.column.columnDef.size}`,padding:"0 1vw 0 2.5vw"}}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="flex items-center  justify-end space-x-2 py-4 absolute left-0 right-5 bottom-0">
                {!stableRow && <Select
                    value={`${table.getState().pagination.pageSize}`}
                    onValueChange={(value) => {
                        table.setPageSize(Number(value))
                    }}
                >
                    <SelectTrigger className="h-8 w-[70px]">
                        <SelectValue placeholder={table.getState().pagination.pageSize}/>
                    </SelectTrigger>
                    <SelectContent side="top">
                        {[10, 25, 50].map((pageSize) => (
                            <SelectItem key={pageSize} value={`${pageSize}`}>
                                {pageSize}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>}
                <Button
                    variant="a"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="border-border border"
                >Previous
                </Button>
                <div className="flex px-1 gap-1">
                    {
                        Array.from({length: table.getPageCount()}).map((_, index) => (
                            <Button className="size-8 p-0 border-border border" variant="a" onClick={() => table.setPageIndex(index)}>
                                {index + 1}
                            </Button>
                        ))
                    }
                </div>

                <Button
                    variant="a"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="border-border border"
                >Next
                </Button>
            </div>
        </div>

    )
}
