import {
    flexRender,
    getCoreRowModel, getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table.jsx"
import { Button } from "@/components/ui/button.jsx"
import {useState} from "react";
import {Input} from "@/components/ui/input.jsx";
export default function UserTable ({data,columns}){

    const [sorting, setSorting] = useState([])
    const [columnFilters, setColumnFilters] = useState([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            pagination: {
                pageSize: 10, //custom default page size
            },
        },
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
            columnFilters
        },
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
    })
    return (
        <div>
            <div className="flex items-center gap-5 px-5 py-4">
                <Input placeholder="Filter names..."  className="flex-1" value={(table.getColumn("name")?.getFilterValue()) ?? ""} onChange={(event) =>
                        table.getColumn("name")?.setFilterValue(event.target.value)}/>
                <Input placeholder="Filter company..."  className="flex-1" value={(table.getColumn("company")?.getFilterValue()) ?? ""} onChange={(event) =>
                    table.getColumn("company")?.setFilterValue(event.target.value)}/>
                <Input placeholder="Filter email..."  className="flex-1" value={(table.getColumn("email")?.getFilterValue()) ?? ""} onChange={(event) =>
                    table.getColumn("email")?.setFilterValue(event.target.value)}/>
                <Input placeholder="Filter phone..."  className="flex-1" value={(table.getColumn("phone")?.getFilterValue()) ?? ""} onChange={(event) =>
                    table.getColumn("phone")?.setFilterValue(event.target.value)}/>

            </div>

        <div className="rounded-md">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
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
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
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
                <div
                    className="flex items-center justify-end border-t-[1px] absolute bottom-0 left-0 right-0  pr-5 pt-6 pb-6 gap-3">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}