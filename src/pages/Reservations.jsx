import Layout from "@/components/ui/Layout.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
import {Card} from "@/components/ui/card.jsx";
import {
    flexRender,
    getCoreRowModel, getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table"
import {TbArrowsUpDown, TbEdit, TbTrash} from "react-icons/tb";
import {useState} from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import {Label} from "@/components/ui/label.jsx";
import {Input} from "@/components/ui/input.jsx";

function Reservations() {
    const columns = [
        {
            accessorKey: "date",
            header:(({column}) =>
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="w-full"
                >
                    Date <TbArrowsUpDown className="ml-2 h-4 w-4" />
                </Button>),
            size:200
        },
        {
            accessorKey: "time",
            header:(({column}) =>
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="w-full"
                >
                    Time <TbArrowsUpDown className="ml-2 h-4 w-4" />
                </Button>),
            size:200,
            cell:(({row})=> <div className="text-[#5555dd] font-[600]">{row.getValue("time")}</div>)
        },
        {
            accessorKey: "name",
            header:(({column}) =>
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="w-full"
                >
                    Name <TbArrowsUpDown className="ml-2 h-4 w-4" />
                </Button>),
            size:300,
            cell:(({row})=> <div className="font-[700]">{row.getValue("name")}</div>)
        },
        {
            accessorKey: "pax",
            header:(({column}) =>
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="w-full"
                >
                    Pax <TbArrowsUpDown className="ml-2 h-4 w-4" />
                </Button>),
            size:200
        },
        {
            accessorKey: "table",
            header:(({column}) =>
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="w-full"
                >
                    Table <TbArrowsUpDown className="ml-2 h-4 w-4" />
                </Button>),
            size:200
        },
    ]
    const reservations = [
        {
            date:"21.10.2024",
            time:"18.00",
            name:"Will Smith",
            pax:"3",
            table:"T-02"
        },
        {
            date:"22.10.2024",
            time:"18.30",
            name:"John Smith",
            pax:"8",
            table:"T-05"
        },
        {
            date:"23.10.2024",
            time:"19.30",
            name:"Adam Smith",
            pax:"5",
            table:"T-06"
        },
        {
            date:"24.10.2024",
            time:"19.00",
            name:"Sam Smith",
            pax:"8",
            table:"T-07"
        },
        {
            date:"25.10.2024",
            time:"21.30",
            name:"Emma Smith",
            pax:"4",
            table:"T-09"
        },
        {
            date:"26.10.2024",
            time:"20.30",
            name:"Patti Smith",
            pax:"2",
            table:"T-11"
        },
        {
            date:"27.10.2024",
            time:"21.00",
            name:"Kevin Smith",
            pax:"3",
            table:"T-12"
        },
        {
            date:"28.10.2024",
            time:"21.00",
            name:"Emmitt Smith",
            pax:"6",
            table:"T-13"
        },
        {
            date:"29.10.2024",
            time:"20.00",
            name:"Zadie Smith",
            pax:"7",
            table:"T-15"
        },
    ]

    const ReservationTable = ({data,columns}) => {
        const [sorting, setSorting] = useState([])
        const [columnFilters, setColumnFilters] = useState([])
        const table = useReactTable({
            data,
            columns,
            getCoreRowModel: getCoreRowModel(),
            onSortingChange: setSorting,
            onColumnFiltersChange: setColumnFilters,
            getFilteredRowModel: getFilteredRowModel(),
            getPaginationRowModel: getPaginationRowModel(),
            initialState: {
                pagination: {
                    pageSize: 10
                }
            },
            getSortedRowModel: getSortedRowModel(),
            state: {
                sorting,
                columnFilters
            },
        })
        return (
        <div>
            <div className="flex items-center gap-10 pl-10 pr-20 py-4">
                <Input placeholder="Filter names..." className="flex-1"
                       value={(table.getColumn("name")?.getFilterValue()) ?? ""} onChange={(event) =>
                    table.getColumn("name")?.setFilterValue(event.target.value)}/>
                <Input placeholder="Filter Date..." className="flex-1"
                       value={(table.getColumn("date")?.getFilterValue()) ?? ""} onChange={(event) =>
                    table.getColumn("date")?.setFilterValue(event.target.value)}/>

            </div>
            <div className="border-b">
                <Table className="">
                    <TableHeader className="">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow className="h-11" key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id} style={{ width: `${header.getSize()}px` }}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                                <div className="w-full"></div>
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow className="h-11" key={row.id} data-state={row.getIsSelected() && "selected"}>
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                        <TableCell className="w-full pr-10 text-end items-center justify-end flex gap-3">
                                            <div>
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <TbEdit className="text-xl cursor-pointer"/>
                                                    </DialogTrigger>
                                                    <DialogContent className="sm:max-w-[425px] bg-white">
                                                        <DialogHeader>
                                                            <DialogTitle>Edit Reservation</DialogTitle>
                                                        </DialogHeader>
                                                        <DialogDescription className="grid gap-4 py-4">
                                                            <div className="grid grid-cols-4 items-center gap-4">
                                                                <Label htmlFor="name" className="text-right">
                                                                    Name
                                                                </Label>
                                                                <Input id="name" placeholder={row.original.name}
                                                                       className="col-span-3"/>
                                                            </div>
                                                            <div className="grid grid-cols-4 items-center gap-4">
                                                                <Label htmlFor="pax" className="text-right">
                                                                    Person
                                                                </Label>
                                                                <Input id="pax" type="number"
                                                                       placeholder={row.original.pax}
                                                                       className="col-span-3"/>
                                                            </div>
                                                            <div className="grid grid-cols-4 items-center gap-4">
                                                                <Label htmlFor="date" className="text-right">
                                                                    Date
                                                                </Label>
                                                                <Input id="date" type="text" placeholder={row.original.date}
                                                                       onFocus={(e) => e.target.type = "date"}
                                                                       onBlur={(e) => e.target.type = "text"}
                                                                       className="col-span-3"/>
                                                            </div>
                                                            <div className="grid grid-cols-4 items-center gap-4">
                                                                <Label htmlFor="time" className="text-right">
                                                                    Time
                                                                </Label>
                                                                <Input id="time" type="text" placeholder={row.original.time}
                                                                       onFocus={(e) => e.target.type = "time"}
                                                                       onBlur={(e) => e.target.type = "text"}
                                                                       className="col-span-3"/>
                                                            </div>
                                                            <div className="grid grid-cols-4 items-center gap-4">
                                                                <Label htmlFor="table" className="text-right">
                                                                    Table
                                                                </Label>
                                                                <Input id="table" type="text" placeholder={row.original.table} className="col-span-3"/>
                                                            </div>
                                                        </DialogDescription>
                                                        <DialogFooter>
                                                            <Button type={`button {/*submit*/}`}>Save changes</Button>
                                                        </DialogFooter>
                                                    </DialogContent>
                                                </Dialog></div>
                                            <div>
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                    <TbTrash className="text-xl cursor-pointer"/>
                                                    </DialogTrigger>
                                                    <DialogContent className="sm:max-w-[425px] bg-white">
                                                        <DialogHeader>
                                                            <DialogTitle>Delete Reservation</DialogTitle>
                                                        </DialogHeader>
                                                        <DialogDescription>
                                                            Are You Sure You Want to Delete This Reservation?
                                                        </DialogDescription>
                                                        <DialogFooter>
                                                            <Button type={`button {/*submit*/}`}>Delete</Button>
                                                            <Button type={`button {/*submit*/}`} variant="ghost" onClick={() => document.querySelector(".dialogClose").click()}>Cancel</Button>
                                                        </DialogFooter>
                                                    </DialogContent>
                                                </Dialog>
                                            </div>
                                        </TableCell>
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
                    <div className="flex items-center justify-end absolute bottom-0 left-0 right-0 pr-5 pt-6 pb-3 gap-3">
                        <Button variant="default" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
                            Previous
                        </Button>
                        <Button variant="default" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                            Next
                        </Button>
                    </div>
                </div>
        </div>
        )
    }

    return (
        <Layout>
            <main className="w-full h-[622px] flex flex-col gap-5">
                <div className="w-full flex gap-5">
                    <Button variant="default" className="p-0 h-10 overflow-hidden"><Link to="/reservations"
                                                                                         className="flex items-center px-10 h-full">Reservation
                        List </Link></Button>
                    <Button variant="ghost" className="p-0 h-10 overflow-hidden"><Link to="/tables"
                                                                                       className="flex items-center px-10 h-full">Tables </Link></Button>
                </div>
                <Card className="border-none overflow-hidden text-center h-full relative">
                    <ReservationTable data={reservations} columns={columns}/>
                </Card>
            </main>
        </Layout>
);
}

export default Reservations;