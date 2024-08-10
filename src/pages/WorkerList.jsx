import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
import {Card} from "@/components/ui/card.jsx";
import {useState} from "react";
import {TbArrowsUpDown} from "react-icons/tb";
import {DataTable} from "@/components/ui/DataTable.jsx";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/dialog.jsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.jsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod"
import {Input} from "@/components/ui/input.jsx";

function WorkerList() {
    const [activeAddModal,setActiveAddModal]= useState(false)
    const [workers,setWorkers] = useState([
        {id:1,name:"John Doe",email:"john.doe@example.com",phone:"+90 555 555 5555","Job Title":"Waiter"},
        {id:2,name:"Jane Doe",email:"jane.doe@example.com",phone:"+90 666 666 6666","Job Title":"Waitress"},
        {id:3,name:"John Smith",email:"john.smith@example.com",phone:"+90 777 777 7777","Job Title":"Chef"},
        {id:4,name:"Jane Smith",email:"jane.smith@example.com",phone:"+90 888 888 8888","Job Title":"Cashier"},
        {id:5,name:"John Doe",email:"john.doe@example.com",phone:"+90 555 555 5555","Job Title":"Waiter"},
        {id:6,name:"Jane Doe",email:"jane.doe@example.com",phone:"+90 666 666 6666","Job Title":"Waitress"},
        {id:7,name:"John Smith",email:"john.smith@example.com",phone:"+90 777 777 7777","Job Title":"Chef"},
        {id:8,name:"Jane Smith",email:"jane.smith@example.com",phone:"+90 888 888 8888","Job Title":"Cashier"},
        {id:9,name:"John Doe",email:"john.doe@example.com",phone:"+90 555 555 5555","Job Title":"Waiter"},
        {id:10,name:"Jane Doe",email:"jane.doe@example.com",phone:"+90 666 666 6666","Job Title":"Waitress"},
        {id:11,name:"John Smith",email:"john.smith@example.com",phone:"+90 777 777 7777","Job Title":"Chef"},
        {id:12,name:"Jane Smith",email:"jane.smith@example.com",phone:"+90 888 888 8888","Job Title":"Cashier"}])
    const columns = [
        {
            accessorKey:"name",
            header:({ column }) => {
                return (
                    <div className="w-full flex justify-start">
                        <Button variant="ghost" className="font-[600] text-start pl-2" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                            Name<TbArrowsUpDown className="ml-2 h-4 w-4"/>
                        </Button>
                    </div>

                )
            },
            size:"20%"

        }, {
            accessorKey:"email",
            header:({ column }) => {
                return (
                    <div className="w-full flex justify-start">
                        <Button variant="ghost" className="font-[600] text-start pl-2"
                                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                            Email<TbArrowsUpDown className="ml-2 h-4 w-4"/>
                        </Button>
                    </div>
                )
            },
            size: "35%"
        }, {
            accessorKey: "phone",
            header: ({column}) => {
                return (
                    <div className="w-full flex justify-start">
                        <Button variant="ghost" className="font-[600] text-start pl-2"
                                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                            Phone<TbArrowsUpDown className="ml-2 h-4 w-4"/>
                        </Button>
                    </div>
                )
            },
            size: "30%"
        }, {
            accessorKey: "Job Title",
            header: ({column}) => {
                return (
                    <div className="w-full flex justify-start">
                        <Button variant="ghost" className="font-[600] text-start pl-2"
                                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
                            Job Title<TbArrowsUpDown className="ml-2 h-4 w-4"/>
                        </Button>
                    </div>
                )
            },
            size: "10%"
        }
    ]

    const formSchema = z.object({
        name: z.string().min(3,{
            message:"Name must be at least 3 characters"
        }),
        email:z.string().email({
            message:"Invalid Email Address"
        }),
        phone:z.string().min(10,{
            message:"Phone Number must be at least 10 characters"
        }),
        "Job Title":z.string().min(3,{
        message:"Name must be at least 3 characters"})
    })

    const form = useForm(
        {
            resolver:zodResolver(formSchema),
            defaultValues: {
                name:"",
                email:"",
                phone:"",
                "Job Title":""
            }
        }
    )

    function addNewEmployee(data) {
        setWorkers([...workers, {
            name:data.name,
            email: data.email,
            phone: data.phone,
            "Job Title": data["Job Title"]
        }])
        setActiveAddModal(false)
    }

    return (
        <div className="rounded-xl flex flex-col gap-5 flex-[2.5]">
            <div className="w-full flex gap-5">
                <Button variant="ghost" className="p-0 h-10 overflow-hidden">
                    <Link to="/account/billing" className="flex items-center px-10 h-full">
                        Billing & Plans
                    </Link>
                </Button>
                <Button variant="default" className="p-0 h-10 overflow-hidden">
                    <Link to="/account/employees" className="flex items-center px-10 h-full">
                        Employees
                    </Link>
                </Button>
                <Button variant="ghost" className="p-0 h-10 overflow-hidden">
                    <Link to="/account/settings" className="flex items-center px-10 h-full">
                        Settings
                    </Link>
                </Button>
                <Button variant="ghost" className="p-0 h-10 overflow-hidden">
                    <Link to="/account/security" className="flex items-center px-10 h-full">
                        Security
                    </Link>
                </Button>
            </div>
            <Card className="h-full pb-0 relative z-0">
                <div className="absolute left-0 bottom-0 p-5 z-[5]">
                    <Button variant="default" onClick={() => {setActiveAddModal(true)}}>Add New Employee</Button>
                </div>
                <div className="w-full h-full">
                    <DataTable columns={columns} data={workers} filters={["name","Job Title"]}/>
                </div>
                <Dialog open={activeAddModal} onOpenChange={setActiveAddModal}>
                    <DialogContent className="sm:max-w-[475px]">
                        <DialogHeader>
                            <DialogTitle>Add New Employee</DialogTitle>
                        </DialogHeader>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(addNewEmployee)} className="flex flex-col gap-5 pt-5">
                                <FormField control={form.control} name="name" render={({ field }) => (
                                    <FormItem className="grid h-12 grid-cols-5 grid-rows-2 gap-3 items-center">
                                        <FormLabel className="text-end col-span-1">Name</FormLabel>
                                        <FormControl>
                                            <Input {...field} className="space-y-0 col-span-4"/>
                                        </FormControl>
                                        <FormMessage className="row-start-2 col-start-2 col-span-4"/>
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="email" render={({field}) => (
                                    <FormItem className="grid h-12 grid-cols-5 grid-rows-2 gap-3 items-center">
                                        <FormLabel className="text-end col-span-1">Email</FormLabel>
                                        <FormControl>
                                            <Input {...field} className="space-y-0 col-span-4"/>
                                        </FormControl>
                                        <FormMessage className="row-start-2 col-start-2 col-span-4"/>
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="phone" render={({field}) => (
                                    <FormItem className="grid h-12 grid-cols-5 grid-rows-2 gap-3 items-center">
                                        <FormLabel className="text-end col-span-1">Phone</FormLabel>
                                        <FormControl>
                                            <Input {...field} className="space-y-0 col-span-4"/>
                                        </FormControl>
                                        <FormMessage className="row-start-2 col-start-2 col-span-4"/>
                                    </FormItem>
                                )} />
                                <FormField control={form.control} name="Job Title" render={({field}) => (
                                    <FormItem className="grid h-12 grid-cols-5 grid-rows-2 gap-3 items-center">
                                        <FormLabel className="text-end col-span-1">Job Title</FormLabel>
                                        <FormControl>
                                            <Input {...field} className="space-y-0 col-span-4"/>
                                        </FormControl>
                                        <FormMessage className="row-start-2 col-start-2 col-span-4"/>
                                    </FormItem>
                                )} />
                                <DialogFooter>
                                    <Button type="submit">Add New Employee</Button>
                                </DialogFooter>
                            </form>
                        </Form>
                    </DialogContent>
                </Dialog>
            </Card>
        </div>
    );
}

export default WorkerList;