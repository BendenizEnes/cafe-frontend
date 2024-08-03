import Layout from "@/components/ui/Layout.jsx";
import {Card} from "@/components/ui/card.jsx";
import {Button} from "@/components/ui/button.jsx";
import {useEffect, useState} from "react";
import {
    Dialog,
    DialogContent, DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import {Input} from "@/components/ui/input.jsx";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.jsx";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.jsx";
import {TbChevronLeft, TbChevronRight} from "react-icons/tb";

function Menu() {
    const [selected, setSelected] = useState('All');
    const [menu,setMenu] = useState([
        {id:1, name:"Turkish Coffee", price:"60₺", category:"Hot Drinks", photo:"https://www.ozguvenmangalbasi.com/wp-content/uploads/2022/06/5068_dd986048-292e-4716-a490-f891b3c56882_1062775_1920x1080.jpg",},
        {id:2, name:"Black Tea", price:"20₺", category:"Hot Drinks", photo:"",},
        {id:3, name:"Hamburger", price:"110₺", category:"Main Course", photo:"https://www.macfit.com/wp-content/uploads/2024/04/hamburger-kac-kalori.jpg",},
        {id:4, name:"Turkish Pizza", price:"60₺", category:"Main Course", photo:"https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",},
        {id:5, name:"Cappuccino", price:"85₺", category:"Hot Drinks", photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/1200px-Cappuccino_at_Sightglass_Coffee.jpg",},
        {id:6, name:"tres leches", price:"65₺", category:"Dessert", photo:"https://cdn.shopify.com/s/files/1/1259/6441/files/trilece-tatlisi-tarifi.jpg?v=1598011389",},
        {id:7, name:"Ice Cream", price:"45₺", category:"Dessert", photo:"https://www.allrecipes.com/thmb/SI6dn__pfJb9G5eBpYAqkyGCLxQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50050-five-minute-ice-cream-DDMFS-4x3-076-fbf49ca6248e4dceb3f43a4f02823dd9.jpg",},
        {id:8, name:"Coca-Cola", price:"25₺", category:"Cold Drinks", photo:"https://images.unsplash.com/photo-1520568444554-4698653b539c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",},
        {id:9, name:"Fanta Orange", price:"25₺", category:"Cold Drinks", photo:"https://p.turbosquid.com/ts-thumb/pt/Ivqhbb/tCFkpO21/fanta/jpg/1602088535/1920x1080/turn_fit_q99/a4cd362b7f0508e36a19b88d1e84d0e2de26594c/fanta-1.jpg",},
        {id:10, name:"Lentil Soup", price:"50$", category:"Soup", photo:"https://cdn.yemek.com/mncrop/940/625/uploads/2014/06/mercimek-corbasi-yemekcom.jpg",},
        {id:11, name:"Tripe Soup", price:"60₺", category:"Soup", photo:"https://cdn.yemek.com/mncrop/940/625/uploads/2014/07/iskembe-corbasi-yemekcom.jpg",},
        {id:12, name:"Linden Tea", price:"30$", category:"Hot Drinks", photo:"https://sakiproducts.com/cdn/shop/articles/benefits-of-linden-tea-378636_1200x1200.jpg?v=1628383036",},
        {id:13, name:"Ice Tea", price:"40₺", category:"Cold Drinks", photo:"https://w0.peakpx.com/wallpaper/79/247/HD-wallpaper-iced-tea-with-mint-and-lemon-drink-mint-tea-lemon.jpg",},
        {id:14, name:"Lemon Cheesecake", price:"150₺", category:"Dessert", photo:"https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/limonlu-cheesecake.webp",},
        {id:15, name:"Pizza", price:"120₺", category:"Main Course", photo:"https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/ev-usulu-pizza-yemekcom.jpg",},
    ])
    const [categories,setCategories] = useState(Array.from(new Set(menu.map(item => item.category))));
    const filteredMenu = selected === "All" ? menu : menu.filter((product) => product.category === selected)
    const [scrollToR, setScrollToR] = useState(false)
    const [scrollToL, setScrollToL] = useState(false)

    const ProductSchema = z.object({
        name: z
            .string({
                required_error: "Please select an email to display.",
            }),
        price: z
            .string({
                required_error: "Please enter a price to display.",
            }),
        category: z
            .string({
                required_error: "Please select an category to display.",
            })
    })
    const CategorySchema = z.object({
        name: z
            .string({
                required_error: "Please Enter a name to display.",
            }),
    })
    const pForm = useForm({resolver: zodResolver(ProductSchema),})
    const cForm = useForm({resolver: zodResolver(CategorySchema),})


    function addProduct(data){
        setMenu([...menu,{
            name:data.name,
            price:data.price,
            category: data.category,
            photo: "",
            id:menu.length + 1
        }])
        document.querySelector(".dialogClose").click()
    }
    function addCategory(data){
        setCategories([...categories, data.name])
        document.querySelector(".dialogClose").click()
    }
    return (
        <Layout>
            <main className="main w-full flex flex-col gap-5">
                <div className="buttons flex gap-5 ">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="px-8 py-5">
                                Add Product
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] bg-card">
                            <DialogHeader>
                                <DialogTitle>Add Product</DialogTitle>
                            </DialogHeader>
                            <DialogDescription></DialogDescription>
                            <Form {...pForm}>
                                <form onSubmit={pForm.handleSubmit(addProduct)} className="space-y-8">
                                    <FormField
                                        control={pForm.control}
                                        name="name"
                                    render={({field}) => (
                                        <FormItem className="grid grid-cols-5 items-center gap-5">
                                            <FormLabel className="text-end col-span-1">Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} className="space-y-0 col-span-4"/>
                                            </FormControl>
                                        </FormItem>
                                    )}/>
                                    <FormField
                                        control={pForm.control}
                                        name="price"
                                    render={({field}) => (
                                        <FormItem className="grid grid-cols-5 items-center gap-5">
                                            <FormLabel className="text-end col-span-1">Price</FormLabel>
                                            <FormControl>
                                                <Input {...field} className="space-y-0 col-span-4"/>
                                            </FormControl>
                                        </FormItem>
                                    )}/>
                                    <FormField
                                        control={pForm.control}
                                        name="category"
                                        render={({ field }) => (
                                            <FormItem className="grid grid-cols-5 items-center gap-5">
                                                <FormLabel className="text-end col-span-1">Category</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue="">
                                                    <FormControl>
                                                        <SelectTrigger className="space-y-0 col-span-4">
                                                            <SelectValue placeholder="Select Category" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent >
                                                        {
                                                            (categories.map((category, index) => {
                                                                return <SelectItem value={category} key={index} >{category}</SelectItem>
                                                            }))

                                                        }
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage className="space-y-0 col-span-4"/>
                                            </FormItem>
                                        )}
                                    />
                                    <DialogFooter>
                                        <Button type="submit">Confirm</Button>
                                    </DialogFooter>
                                </form>
                            </Form>

                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="px-8 py-5">
                                Add Category
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px] bg-card">
                            <DialogHeader>
                                <DialogTitle>Add Product</DialogTitle>
                            </DialogHeader>
                            <DialogDescription></DialogDescription>
                            <Form {...cForm}>
                                <form onSubmit={cForm.handleSubmit(addCategory)} className="space-y-8">
                                    <FormField
                                        control={cForm.control}
                                        name="name"
                                        render={({field}) => (
                                            <FormItem className="grid grid-cols-5 items-center gap-5">
                                                <FormLabel className="text-end col-span-1">Name</FormLabel>
                                                <FormControl>
                                                    <Input {...field} className="space-y-0 col-span-4"/>
                                                </FormControl>
                                            </FormItem>
                                        )}/>
                                    <DialogFooter>
                                        <Button type="submit">Confirm</Button>
                                    </DialogFooter>
                                </form>
                            </Form>

                        </DialogContent>
                    </Dialog>
                </div>
                <Card
                    className="buttonsCon z-0 p-2 pl-3 w-full overflow-x-scroll flex gap-3 rounded-full">
                    <Button variant={selected === "All" ? "default" : "ghost"}
                            className="px-8 rounded-full" onClick={() => setSelected("All")}
                    >All</Button>
                    {
                        categories.map((category, index) => {
                            return <Button key={index} variant={category === selected ? "default" : "ghost"}
                                           className="px-8 rounded-full" onClick={() => setSelected(category)}
                            >{category}</Button>
                        })
                    }
                </Card>

                <div className="menu w-full grid grid-cols-4 gap-5">
                    {filteredMenu.map((product) => {
                        const src = product.photo === "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHXX6GrLiyiN5oDkH8Badn80xAnC5oAumGmchxXoF-b4H9ZDDOJ_iexVov_mSiLU9UCI0&usqp=CAU" : product.photo
                        return (
                            <Card className="p-[6px]" key={product.id}>
                                <div className="w-full h-44 rounded-[10px] overflow-hidden">
                                    <img src={src} alt="" className="w-full h-full"/>
                                </div>
                                <div className="flex justify-between p-3 font-[500]">
                                    <div>
                                        {product.name}
                                    </div>
                                    <div className="text-[#1DBAFF]">
                                        {product.price}
                                    </div>
                                </div>
                            </Card>
                        )
                    })}
                </div>
            </main>
        </Layout>
    );
}

export default Menu;