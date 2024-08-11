import {useState} from 'react';
import Layout from "@/components/ui/Layout.jsx";
import {Card} from "@/components/ui/card.jsx";
import {DataTable} from "@/components/ui/DataTable.jsx";
import {Button} from "@/components/ui/button.jsx";
import {TbArrowsUpDown, TbFileSpreadsheet, TbFileTypeCsv, TbFileTypePdf, TbPrinter, TbUpload,} from "react-icons/tb";
import {Dialog, DialogContent, DialogFooter, DialogHeader} from "@/components/ui/dialog.jsx";;
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.jsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod"
import {Input} from "@/components/ui/input.jsx";
function Users() {
    const [isDropdownActive,setIsDropdownActive ] = useState(false)
    const [isDialogActive, setIsDialogActive] = useState(false)
    const [users, setUsers] = useState([
        {name:"John Doe", company:"Ah-Jin", email:"john.doe1@dom.com", phone:"555 555 4444", paymentMethod:"cash", status:"active"},
        {name:"Jane Doe", company:"Hunters", email:"jane.doe1@dom.com", phone:"555 555 5555", paymentMethod:"credit", status:"passive"},
        {name:"James Doe", company:"Fame", email:"james.doe1@dom.com", phone:"555 555 6666", paymentMethod:"debit", status:"active"},
        {name:"John Smith", company:"White Tiger", email:"john.smith1@dom.com", phone:"555 555 7777", paymentMethod:"cash", status:"active"},
        {name:"Jane Smith", company:"Fiend", email:"jane.smith1@dom.com", phone:"555 555 888", paymentMethod:"credit", status:"passive"},
        {name:"James Smith", company:"Knights", email:"james.smith1@dom.com", phone:"555 555 9999", paymentMethod:"debit", status:"passive"},
        {name:"John Doe", company:"Ah-Jin", email:"john.doe2@dom.com", phone:"555 666 4444", paymentMethod:"cash", status:"active"},
        {name:"Jane Doe", company:"Hunters", email:"jane.doe2@dom.com", phone:"555 666 5555", paymentMethod:"credit", status:"passive"},
        {name:"James Doe", company:"Fame", email:"james.doe2@dom.com", phone:"555 666 6666", paymentMethod:"debit", status:"active"},
        {name:"John Smith", company:"White Tiger", email:"john.smith2@dom.com", phone:"555 666 7777", paymentMethod:"cash", status:"active"},
        {name:"Jane Smith", company:"Fiend", email:"jane.smith2@dom.com", phone:"555 666 888", paymentMethod:"credit", status:"passive"},
        {name:"James Smith", company:"Knights", email:"james.smith2@dom.com", phone:"555 666 9999", paymentMethod:"debit", status:"passive"},
        {name:"John Doe", company:"Ah-Jin", email:"john.doe3@dom.com", phone:"555 777 4444", paymentMethod:"cash", status:"active"},
        {name:"Jane Doe", company:"Hunters", email:"jane.doe3@dom.com", phone:"555 777 5555", paymentMethod:"credit", status:"passive"},
        {name:"James Doe", company:"Fame", email:"james.doe3@dom.com", phone:"555 777 6666", paymentMethod:"debit", status:"active"},
        {name:"John Smith", company:"White Tiger", email:"john.smith3@dom.com", phone:"555 777 7777", paymentMethod:"cash", status:"active"},
        {name:"Jane Smith", company:"Fiend", email:"jane.smith3@dom.com", phone:"555 777 888", paymentMethod:"credit", status:"passive"},
        {name:"James Smith", company:"Knights", email:"james.smith3@dom.com", phone:"555 777 9999", paymentMethod:"debit", status:"passive"},
    ])
    const columns = [
        {
            accessorKey: "name",
            header: (({column}) =>
                <div className="w-full flex justify-start">
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="pl-2 font-[600] text-lg hover:bg-black hover:bg-opacity-5"
                    >
                        Name <TbArrowsUpDown className="ml-2 h-4 w-4" />
                    </Button>
                </div>
                ),
            size:"20%",
        },
        {
            accessorKey: "company",
            header: (({column}) =>
                <div className="w-full flex justify-start">
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="pl-2 font-[600] text-lg hover:bg-black hover:bg-opacity-5"
                    >
                        Company <TbArrowsUpDown className="ml-2 h-4 w-4"/>
                    </Button>
                </div>),
            size:"15%",
        },
        {
            accessorKey: "email",
            header: (({column}) =>
                <div className="w-full flex justify-start">
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="pl-2 font-[600] text-lg hover:bg-black hover:bg-opacity-5"
                    >
                        Email <TbArrowsUpDown className="ml-2 h-4 w-4"/>
                    </Button>
                </div>),
            size:"25%",
        },
        {
            accessorKey: "phone",
            header: (({column}) =>
                <div className="w-full flex justify-start">
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="pl-2 font-[600] text-lg hover:bg-black hover:bg-opacity-5"
                    >
                        Phone <TbArrowsUpDown className="ml-2 h-4 w-4"/>
                    </Button>
                </div>),
            size:"20%",
        }, {
            accessorKey: "paymentMethod",
            header: (({column}) =>
                <div className="w-full flex justify-start">
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="pl-2 font-[600] text-lg hover:bg-black hover:bg-opacity-5"
                    >
                        Payment <TbArrowsUpDown className="ml-2 h-4 w-4"/>
                    </Button>
                </div>),
            size:"10%",
            cell: (({row}) => {
                const payment = row.getValue("paymentMethod")
                if (payment === "cash") {
                    return (
                        <span className="text-[#00ff83] font-[700] text-[15px] px-2 py-1 rounded-2xl text-center">
                             {payment}
                        </span>
                    )
                } else if (payment === "debit") {
                    return (
                        <span className="text-[#4f9ecb] font-[700] text-[15px] px-2 py-1 rounded-2xl text-center">
                             {payment}
                        </span>
                    )
                }else{
                    return(
                        <span className="text-[#fffb05] font-[700] text-[15px] px-2 py-1 rounded-2xl text-center">
                             {payment}
                        </span>
                    )
                }
            })
        },
        {
            accessorKey: "status",
            header: (({column}) =>
                <div className="w-full flex justify-start">
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="pl-2 font-[600] text-lg hover:bg-black hover:bg-opacity-5"
                    >
                        Status <TbArrowsUpDown className="ml-2 h-4 w-4"/>
                    </Button>
                </div>),
            size:"10%",
            cell: (({row}) => {
                const status = row.getValue("status")
                if (status === "active") {
                    return (
                        <span className="text-[#4fcb9e] font-[700] text-[15px] px-2 py-1 rounded-2xl text-center">
                            &#x2022; {status}
                        </span>
                    )
                } else {
                    return (
                        <span className="text-[#FF4A4A] font-[700] text-[15px] px-2 py-1 rounded-2xl text-center">
                            &#x2022; {status}
                        </span>
                    )
                }
            })
        },
    ]

    const userFormSchema = z.object({
        name: z.string().min(3,{
            message:"Name must be at least 3 characters"
        }),
        company:z.string().min(2,{
            message:"Company must be at least 2 characters"
        }),
        email:z.string().email({
            message:"Invalid Email Address"
        }),
        phone:z.string().min(10,{
            message:"Phone Number must be at least 10 characters"
        }),
    })
    const userForm = useForm({
            resolver:zodResolver(userFormSchema),
            defaultValues: {name:"", company:"", email:"", phone:"",}
        })

    function addNewUser(data) {
        setUsers([...users, {
            name: data.name,
            company: data.company,
            email: data.email,
            phone: data.phone,
            paymentMethod: "credit",
            status: "active"
        }])
        setIsDialogActive(false)
    }

    return (
        <Layout>
            <main className="w-full" >
                <Card className="p-0">
                    <div className="flex flex-row justify-end gap-5 p-5 border-b relative">
                        <Button onClick={()=> setIsDropdownActive(!isDropdownActive)}>Export Data<TbUpload className="text-lg ml-[5px]" strokeWidth={3}/></Button>
                        <Button onClick={()=> setIsDialogActive(true)}>Add New User</Button>
                        <div className={`dropdown-menu absolute text-[16px] z-[5] top-[60px] shadow-md rounded-md text-sm right-40 text-card-foreground border overflow-hidden bg-card ${isDropdownActive ? "" : "hidden"}`}>
                            <div className="pr-16 pl-3 py-2  flex gap-2 items-center hover:bg-accent cursor-pointer">
                                <TbPrinter className="text-2xl"/>Print
                            </div>
                            <div className="pr-20 pl-3 py-2  flex gap-2 items-center hover:bg-accent cursor-pointer">
                                <TbFileTypeCsv className="text-2xl" /> Csv
                            </div>
                            <div className="pr-20 pl-3 py-2  flex gap-2 items-center hover:bg-accent cursor-pointer">
                               <TbFileSpreadsheet className="text-2xl"/> Excel
                            </div>
                            <div className="pr-20 pl-3 py-2  flex gap-2 items-center hover:bg-accent cursor-pointer">
                                <TbFileTypePdf className="text-2xl"/>Pdf
                            </div>
                        </div>
                    </div>
                    <DataTable
                        data={users}
                        columns={columns}
                        stableRow={false}
                        filters={["name", "company", "email", "phone",]}
                        className=""/>
                </Card>
            </main>
            <Dialog open={isDialogActive} onOpenChange={setIsDialogActive}>
                <DialogContent className="max-w-xl">
                    <DialogHeader className="pb-5">Add New User</DialogHeader>
                    <Form {...userForm}>
                        <form onSubmit={userForm.handleSubmit(addNewUser)}>
                            <FormField control={userForm.control} name="name" render={({ field }) => (
                                <FormItem className="grid h-12 grid-cols-5 grid-rows-2 gap-3 items-center">
                                    <FormLabel className="text-end col-start-1 col-span-1">Name</FormLabel>
                                    <FormControl>
                                        <Input {...field} className="space-y-0 col-start-2 col-span-4"/>
                                    </FormControl>
                                    <FormMessage className="row-start-2 col-start-2 col-span-3"/>
                                </FormItem>
                            )} />
                            <FormField control={userForm.control} name="company" render={({ field }) => (
                                <FormItem className="grid h-12 grid-cols-5 grid-rows-2 gap-3 items-center">
                                    <FormLabel className="text-end col-start-1 col-span-1">Company</FormLabel>
                                    <FormControl>
                                        <Input {...field} className="space-y-0 col-start-2 col-span-4"/>
                                    </FormControl>
                                    <FormMessage className="row-start-2 col-start-2 col-span-3"/>
                                </FormItem>
                            )} />
                            <FormField control={userForm.control} name="email" render={({ field }) => (
                                <FormItem className="grid h-12 grid-cols-5 grid-rows-2 gap-3 items-center">
                                    <FormLabel className="text-end col-start-1 col-span-1">Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} className="space-y-0 col-start-2 col-span-4"/>
                                    </FormControl>
                                    <FormMessage className="row-start-2 col-start-2 col-span-3"/>
                                </FormItem>
                            )} />
                            <FormField control={userForm.control} name="phone" render={({ field }) => (
                                <FormItem className="grid h-12 grid-cols-5 grid-rows-2 gap-3 items-center">
                                    <FormLabel className="text-end col-start-1 col-span-1">Phone</FormLabel>
                                    <FormControl>
                                        <Input {...field} className="space-y-0 col-start-2 col-span-4"/>
                                    </FormControl>
                                    <FormMessage className="row-start-2 col-start-2 col-span-3"/>
                                </FormItem>
                            )} />

                            <DialogFooter>
                                <Button type="submit">Add</Button>
                                <Button variant="ghost" type="button" onClick={()=> setIsDialogActive(false)}>Cancel</Button>
                            </DialogFooter>
                        </form>
                    </Form>

                </DialogContent>
            </Dialog>
        </Layout>
    );
}

export default Users;