import Layout from "@/components/ui/Layout.jsx";
import {Card} from "@/components/ui/card.jsx";
import {Button} from "@/components/ui/button.jsx";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.jsx"
import { Input } from "@/components/ui/input.jsx"
import {Link} from "react-router-dom";
import Account from "@/components/ui/Account.jsx";
import {Label} from "@/components/ui/label.jsx";
import {useState} from "react";

function Settings() {
    const [isDisabled, setIsDisabled] = useState(true)
    const phoneRegex = new RegExp("\\d{3}\\d{3}\\d{4}");

    const formSchema= z.object(
        {
            firstname: z.string().min(3, {
                message: " First name must be at least 3 characters.",
            }),
            lastname: z.string().min(2, {
                message:"Last name must be at least 2 characters."
            }),
            company: z.string().min(2,{
                message:"Company must be at least 2 characters."
            }),
            mobilenumber:z.string().regex(phoneRegex, 'Invalid Number!'),
            linenumber:z.string().regex(phoneRegex, 'Invalid Number!'),
            email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email.")
            /*.refine(async (e) => {
                const emails = await fetchEmails();
                return emails.includes(e);
            }, "This email is not in our database")*/
        })

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            lastName:"",
            phone:"",
            email:"",
            company:""

        },
    });
    function onSubmit(values) {
        console.log(values);
    }

    function handleCheckboxChange(e) {
        setIsDisabled(!e.target.checked)
    }

    return (
        <Layout>
            <main className="h-[622px] w-full flex gap-5">
                <Account/>
                <div className="rounded-xl flex flex-col gap-5 flex-[2.5]">
                    <div className="buttons w-full flex gap-5">
                        <Button variant="ghost" className="p-0 h-10 overflow-hidden"><Link to="/account/billing" className="flex items-center px-10 h-full"> Billing & Plans </Link></Button>
                        <Button variant="default" className="p-0 h-10 overflow-hidden"><Link to="/account/settings" className="flex items-center px-10 h-full">Settings </Link></Button>
                        <Button variant="ghost" className="p-0 h-10 overflow-hidden"><Link to="/account/security" className="flex items-center px-10 h-full">Security </Link></Button>
                    </div>
                    <Card className="w-full h-full p-8 border-none overflow-hidden shadow-md">

                        <div className="h-full">
                            <div className="pb-1 pr-10 mb-5 border-b-2 border-b-border inline-block font-[500] text-lg">Change Your Information</div>
                            <div className="pb-3 flex items-center">
                                <input type="checkbox" id="confirm-change" onChange={handleCheckboxChange}/>
                                <Label htmlFor="confirm-change" className="pl-2 text-[15px]">I Want to Change My Information</Label>
                            </div>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-y-0 gap-5 h-full">
                                    <FormField control={form.control} name="firstname" render={({ field }) => (
                                        <FormItem className="h-2">
                                            <FormLabel>First Name</FormLabel>
                                            <FormControl>
                                                <Input disabled={isDisabled} placeholder="Name" {...field} className=" bg-[#f8f8f8] dark:bg-[#393D42]"/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>)}/>
                                    <FormField control={form.control} name="lastname" render={({ field }) => (
                                        <FormItem className="h-2">
                                            <FormLabel>Last Name</FormLabel>
                                            <FormControl>
                                                <Input disabled={isDisabled} id="lastname" placeholder="Last Name" {...field} className="outline-1 outline-[#1DBAFF]  bg-[#f8f8f8] dark:bg-[#393D42]"/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>)}/>
                                    <FormField control={form.control} name="mobilenumber" render={({ field }) => (
                                        <FormItem className="h-2">
                                            <FormLabel>Mobile Number</FormLabel>
                                            <FormControl>
                                                <Input disabled={isDisabled} id="mobile" placeholder={"5123456789"} {...field} className=" bg-[#f8f8f8] dark:bg-[#393D42]"/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>)}/>
                                    <FormField control={form.control} name="linenumber" render={({ field }) => (
                                        <FormItem className="h-2">
                                            <FormLabel>Line Number</FormLabel>
                                            <FormControl>
                                                <Input disabled={isDisabled} id="line" placeholder={"2987654321"} {...field} className=" bg-[#f8f8f8] dark:bg-[#393D42]"/>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>)}/>
                                    <FormField control={form.control} name="email" render={({ field }) => (
                                        <FormItem className="h-2">
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input disabled={isDisabled} id="email" placeholder="example@domain.com" {...field} className=" bg-[#f8f8f8] dark:bg-[#393D42]"/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>)}/>
                                    <FormField control={form.control} name="company" render={({ field }) => (
                                        <FormItem className="h-2">
                                            <FormLabel>Company Name</FormLabel>
                                            <FormControl>
                                                <Input disabled={isDisabled} id="company" placeholder="Company" {...field} className=" bg-[#f8f8f8] dark:bg-[#393D42]"/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>)}/>
                                    <Button type="submit" disabled={isDisabled} className="">Submit</Button>
                                </form>
                            </Form>
                        </div>
                    </Card>
                </div>
            </main>

        </Layout>
    );
}

export default Settings;