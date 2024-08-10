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

export function DataTable({columns,data,filters = []}) {
    const [sorting, setSorting] = useState([])
    const [columnFilters, setColumnFilters] = useState([])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        initialState:{
            pagination:{
                pageSize:8,
            },
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


    function deleteRow() {

    }
    return (
        <div className="relative h-full pb-1">
            <div className="flex gap-5 mb-3">
                {
                    filters.map((filter,index) => (
                        <Input
                            key={index}
                            placeholder={`Filter ${filter}`}
                            value={(table.getColumn(filter)?.getFilterValue()) ?? ""}
                            onChange={(event) =>
                                table.getColumn(filter)?.setFilterValue(event.target.value)
                            }
                        />
                    ))
                }

            </div>
            <Table className="text-center">
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id} style={{width:`${header.column.columnDef.size}`}} className="px-0">
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
                                    <TableCell key={cell.id} className="text-start" style={{width:`${cell.column.columnDef.size}`}}>
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
            <div className="flex items-center justify-end space-x-2 py-4 absolute left-0 right-0 bottom-0">
                <Button
                    variant="a"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                    className="border-border border"
                >
                    Previous
                </Button>
                <Button
                    variant="a"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="border-border border"
                >
                    Next
                </Button>
            </div>
        </div>

)
}
