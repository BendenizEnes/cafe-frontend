import Layout from "../components/ui/Layout.jsx";
import {Card} from "../components/ui/card.jsx";
import {Button} from "../components/ui/button.jsx";
import Account from "./Account.jsx";
import {Label} from "../components/ui/label.jsx";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "../components/ui/form.jsx"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Input } from "../components/ui/input.jsx"
import {Link} from "react-router-dom";
import {BiSolidHide, BiSolidShow} from "react-icons/bi";
import {useState} from "react";

// import {NavLink} from "react-router-dom";
function Security() {
    const [isCurrentPassHidden, setIsCurrentPassHidden] = useState(true)
    const [isNewPassHidden, setIsNewPassHidden] = useState(true)
    const [isConfirmPassHidden, setIsConfirmPassHidden] = useState(true)
    const [isDisabled, setIsDisabled] = useState(true)

    const formSchema= z.object(
        {
        currentpass: z.string().min(3, {
            message: " First name must be at least 3 characters.",
        }),
        newpass: z.string().min(2, {
            message:"Last name must be at least 2 characters."
        }),
        confirmnewpass: z.string().min(2, {
            message:"Last name must be at least 2 characters."
        }),
        }).refine((data) => data.newpass === data.confirmnewpass, {
        path: ['confirmPassword'],
        message: 'Passwords does not match'
    })

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            currentpass: "",
            newpass:"",
            confirmnewpass:"",
        },
    });
    function onSubmit(values) {
        console.log(values);
    }

    function handleCheckboxChange(e) {
        setIsDisabled(!e.target.checked)
    }

    return (
        <div className="rounded-xl flex flex-col gap-5 flex-[2.5]">
                    <div className="w-full flex gap-5">
                        <Button variant="ghost" className="p-0 h-10 overflow-hidden"><Link to="/account/billing" className="flex items-center px-10 h-full"> Billing & Plans </Link></Button>
                        <Button variant="ghost" className="p-0 h-10 overflow-hidden"><Link to="/account/settings" className="flex items-center px-10 h-full">Settings </Link></Button>
                        <Button variant="default" className="p-0 h-10 overflow-hidden"><Link to="/account/security" className="flex items-center px-10 h-full">Security </Link></Button>
                    </div>
                    <Card className="overflow-hidden h-full">
                        <div
                            className="pb-1 pr-10 mb-5 border-b-2 border-b-border inline-block font-[500] text-lg">Change
                            Your Password
                        </div>
                        <div className="pb-3 flex items-center">
                            <input type="checkbox" id="confirm-change" onChange={handleCheckboxChange}/>
                            <Label htmlFor="confirm-change" className="pl-2 text-[15px]">I Want to Change My
                                Password</Label>
                        </div>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col h-full w-2/3 ">
                                <FormField control={form.control} name="currentpass" render={({field}) => (
                                    <FormItem className="relative h-[120px]">
                                        <FormLabel>Current Password</FormLabel>
                                        <FormControl>
                                            <Input disabled={isDisabled} type={isCurrentPassHidden ? "password" : "text"} {...field} className=" bg-[#f8f8f8] dark:bg-[#393D42]"/>
                                        </FormControl>
                                        <button type="button" className="absolute top-8 right-3" onClick={() => setIsCurrentPassHidden(!isCurrentPassHidden)}>
                                            <BiSolidShow className={`h-[1.2rem] w-[1.2rem] transition-all ${!isCurrentPassHidden ? "scale-100" : "scale-0"}`}/>
                                            <BiSolidHide className={`absolute top-0 h-[1.2rem] w-[1.2rem] transition-all ${!isCurrentPassHidden ? "scale-0" : "scale-100"}`}/>
                                        </button>
                                        <FormMessage/>
                                    </FormItem>)}
                                />

                                <FormField control={form.control} name="newpass" render={({field}) => (
                                    <FormItem className="relative h-[120px]">
                                        <FormLabel>New Password</FormLabel>
                                        <FormControl>
                                            <Input disabled={isDisabled} type={isNewPassHidden ? "password" : "text"}
                                                   className=" bg-[#f8f8f8] dark:bg-[#393D42]" {...field}/>
                                        </FormControl>
                                        <button type="button" className="absolute top-8 right-3"
                                                onClick={() => setIsNewPassHidden(!isNewPassHidden)}>
                                            <BiSolidShow
                                                className={`h-[1.2rem] w-[1.2rem] transition-all ${!isNewPassHidden ? "scale-100" : "scale-0"}`}/>
                                            <BiSolidHide
                                                className={`absolute top-0 h-[1.2rem] w-[1.2rem] transition-all ${!isNewPassHidden ? "scale-0" : "scale-100"}`}/>
                                        </button>

                                        <FormMessage/>
                                    </FormItem>)}
                                />

                                <FormField control={form.control} name="confirmnewpass" render={({field}) => (
                                    <FormItem className="relative h-[120px]">
                                        <FormLabel>Confirm New Password</FormLabel>
                                        <FormControl>
                                            <Input disabled={isDisabled} type={isConfirmPassHidden ? "password" : "text"}
                                                   className=" bg-[#f8f8f8] dark:bg-[#393D42]" {...field}/>
                                        </FormControl>


                                        <button type="button" className="absolute top-8 right-3"
                                                onClick={() => setIsConfirmPassHidden(!isConfirmPassHidden)}>
                                            <BiSolidShow
                                                className={`h-[1.2rem] w-[1.2rem] transition-all ${!isConfirmPassHidden ? "scale-100" : "scale-0"}`}/>
                                            <BiSolidHide
                                                className={`absolute top-0 h-[1.2rem] w-[1.2rem] transition-all ${!isConfirmPassHidden ? "scale-0" : "scale-100"}`}/>
                                        </button>

                                        <FormMessage/>
                                    </FormItem>)}
                                />

                                <Button type="submit" disabled={isDisabled} className="w-full">Change Password</Button>
                            </form>
                        </Form>
                    </Card>
                </div>
    );
}

export default Security;