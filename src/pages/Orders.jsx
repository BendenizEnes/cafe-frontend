import Layout from "@/components/ui/Layout.jsx";
import {useState} from "react";
import {Card} from "@/components/ui/card.jsx";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.jsx";
import {TbTrash, TbX} from "react-icons/tb";
import {Button} from "@/components/ui/button.jsx";
import {Form, FormControl, FormField, FormItem, FormMessage} from "@/components/ui/form.jsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select.jsx";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod"

function Orders() {

    const [orders,setOrders] = useState([
        {id:1, table:"T-01", products:[
            {
                id:1,
                name:"Pizza",
                price:"120",
                quantity:1
            },
            {
                id:2,
                name:"Coca-Cola",
                price:"25",
                quantity:1
            },
        ],status:"Pending"},
        {id:2, table:"T-02", products:[
            {
                id:1,
                name:"Pizza",
                price:"120",
                quantity:1
            },
            {
                id:2,
                name:"Coca-Cola",
                price:"25",
                quantity:1
            },
        ],status:"Paid"}])
    const [menu,setMenu] = useState([
        {id:1, name:"Turkish Coffee", price:"60", category:"Hot Drinks", photo:"https://www.ozguvenmangalbasi.com/wp-content/uploads/2022/06/5068_dd986048-292e-4716-a490-f891b3c56882_1062775_1920x1080.jpg",},
        {id:2, name:"Black Tea", price:"20", category:"Hot Drinks", photo:"",},
        {id:3, name:"Hamburger", price:"110", category:"Main Course", photo:"https://www.macfit.com/wp-content/uploads/2024/04/hamburger-kac-kalori.jpg",},
        {id:4, name:"Turkish Pizza", price:"60", category:"Main Course", photo:"https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg",},
        {id:5, name:"Cappuccino", price:"85", category:"Hot Drinks", photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Cappuccino_at_Sightglass_Coffee.jpg/1200px-Cappuccino_at_Sightglass_Coffee.jpg",},
        {id:6, name:"tres leches", price:"65", category:"Dessert", photo:"https://cdn.shopify.com/s/files/1/1259/6441/files/trilece-tatlisi-tarifi.jpg?v=1598011389",},
        {id:7, name:"Ice Cream", price:"45", category:"Dessert", photo:"https://www.allrecipes.com/thmb/SI6dn__pfJb9G5eBpYAqkyGCLxQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/50050-five-minute-ice-cream-DDMFS-4x3-076-fbf49ca6248e4dceb3f43a4f02823dd9.jpg",},
        {id:8, name:"Coca-Cola", price:"25", category:"Cold Drinks", photo:"https://images.unsplash.com/photo-1520568444554-4698653b539c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",},
        {id:9, name:"Fanta Orange", price:"25", category:"Cold Drinks", photo:"https://p.turbosquid.com/ts-thumb/pt/Ivqhbb/tCFkpO21/fanta/jpg/1602088535/1920x1080/turn_fit_q99/a4cd362b7f0508e36a19b88d1e84d0e2de26594c/fanta-1.jpg",},
        {id:10, name:"Lentil Soup", price:"50", category:"Soup", photo:"https://cdn.yemek.com/mncrop/940/625/uploads/2014/06/mercimek-corbasi-yemekcom.jpg",},
        {id:11, name:"Tripe Soup", price:"60", category:"Soup", photo:"https://cdn.yemek.com/mncrop/940/625/uploads/2014/07/iskembe-corbasi-yemekcom.jpg",},
        {id:12, name:"Linden Tea", price:"30", category:"Hot Drinks", photo:"https://sakiproducts.com/cdn/shop/articles/benefits-of-linden-tea-378636_1200x1200.jpg?v=1628383036",},
        {id:13, name:"Ice Tea", price:"40", category:"Cold Drinks", photo:"https://w0.peakpx.com/wallpaper/79/247/HD-wallpaper-iced-tea-with-mint-and-lemon-drink-mint-tea-lemon.jpg",},
        {id:14, name:"Lemon Cheesecake", price:"150", category:"Dessert", photo:"https://d17wu0fn6x6rgz.cloudfront.net/img/w/tarif/mgt/limonlu-cheesecake.webp",},
        {id:15, name:"Pizza", price:"120", category:"Main Course", photo:"https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/ev-usulu-pizza-yemekcom.jpg",},
    ])
    const tables = [
        {id:1,name:"T-01",status:"available",person:2},
        {id:2,name:"T-02",status:"reserved",person:4},
        {id:3,name:"T-03",status:"available",person:6},
        {id:4,name:"T-04",status:"available",person:10},
        {id:5,name:"T-05",status:"reserved",person:8},
        {id:6,name:"T-06",status:"reserved",person:6},
        {id:7,name:"T-07",status:"reserved",person:8},
        {id:8,name:"T-08",status:"available",person:2},
        {id:9,name:"T-09",status:"reserved",person:4},
        {id:10,name:"T-10",status:"available",person:10},
        {id:11,name:"T-11",status:"reserved",person:2},
        {id:12,name:"T-12",status:"reserved",person:4},
        {id:13,name:"T-13",status:"reserved",person:6},
        {id:14,name:"T-14",status:"available",person:10},
        {id:15,name:"T-15",status:"reserved",person:8},
        {id:16,name:"T-16",status:"available",person:6},
        {id:17,name:"T-17",status:"available",person:8},
        {id:18,name:"T-18",status:"available",person:2},]
    const [selected, setSelected] = useState('All');
    const [categories,setCategories] = useState(Array.from(new Set(menu.map(item => item.category))));
    const filteredMenu = selected === "All" ? menu : menu.filter((product) => product.category === selected)
    const [newOrder, setNewOrder] = useState([])
    const [amount,setAmount] = useState(0)
    const orderSchema = z.object({
        table:z.string({
            required_error: "Please select a table to display.",
        }),
    })
    const orderForm = useForm({resolver: zodResolver(orderSchema),})
    const [idToDelete, setIdToDelete] = useState(null)

    function createOrder(value){
        if(amount !== 0){
            setOrders([
                ...orders,{
                    id: orders.length + 1,
                    table: value.table,
                    products:newOrder,
                    status: "Pending"
                }
            ])
            setAmount(0)
            setNewOrder([])
            setSelected("All")
            document.querySelector(".dialogClose").click()
        }else{
            alert("Please select at least one product")
        }

    }
    function deleteOrder(){
        setOrders(orders.filter(order => order.id !== idToDelete))
    }

    const ProductCard = ({key,photo,name,price}) => {

        const src = photo === "" ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHXX6GrLiyiN5oDkH8Badn80xAnC5oAumGmchxXoF-b4H9ZDDOJ_iexVov_mSiLU9UCI0&usqp=CAU" : photo
        const [quantity,setQuantity] = useState(1)
            return(
                <Card className="p-1 aspect-square" key={key}>
                    <div className="w-full h-44 rounded-[10px] overflow-hidden">
                        <img src={src} alt="" className="w-full h-full"/>
                    </div>
                    <div className="flex justify-between p-3 font-[500]">
                        <div>
                            {name}
                        </div>
                        <div className="text-[#1DBAFF]">
                            {price}₺
                        </div>
                    </div>
                    <div className="flex justify-between items-center px-5">
                        <div className="quantityCon flex gap-0 bg-accent p-1 rounded-full items-center">
                            <Button type="button" className="p-0 size-7 bg-primary rounded-full"
                                    onClick={() => setQuantity((prevQuantity) => prevQuantity - 1)}>-</Button>
                            <div className="h-7 w-9 bg-transparent text-center">{quantity}</div>
                            <Button type="button" className="p-0 size-7 bg-primary rounded-full"
                                    onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}>+</Button>
                        </div>
                        <div>
                            <Button type="button" className="rounded-full px-8" onClick={() => {
                                setNewOrder(prevOrder =>
                                    [...prevOrder,
                                        {
                                            id: newOrder.length + 1,
                                            name: name,
                                            price: price * quantity,
                                            quantity: quantity
                                        }])
                                setAmount((prevAmount) => prevAmount + Number(price)*quantity)
                            }}
                            >Add</Button>
                        </div>
                    </div>
                </Card>
            )
    }


    return (
        <Layout>
            <main className="main w-full min-h-[622px] flex flex-col gap-5">
                <div className="buttons flex gap-5 ">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button className="px-8 py-5">
                                Create Order
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="min-w-[90vw] bg-background h-[95vh] flex flex-row sm:max-w-[425px]">
                            <div className="flex-[4] border-r border-border">
                                <Form {...orderForm}>
                                    <form onSubmit={orderForm.handleSubmit(createOrder)}
                                          className=" w-full h-full flex-[12]">
                                        <FormField
                                            control={orderForm.control}
                                            name="table"
                                            render={({field}) => (
                                                <FormItem className="flex items-center flex-col gap-3 h-[8vh]">
                                                    <Select onValueChange={field.onChange} defaultValue="">
                                                        <FormControl>
                                                            <SelectTrigger className="space-y-0 w-2/3 bg-card border-none shadow-md">
                                                                <SelectValue placeholder="Select Table"/>
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent >
                                                            {
                                                                (tables.map((table, index) => {
                                                                    return <SelectItem value={table.name} key={index} >{table.name}</SelectItem>
                                                                }))

                                                            }
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage className="text-[16px]"/>
                                                </FormItem>
                                            )}
                                        />

                                        <div className="p-5 flex flex-col gap-3">
                                            <Card
                                                className="buttonsCon z-0 p-2 pl-3 w-full overflow-x-scroll flex gap-3 rounded-full">
                                                <Button variant={selected === "All" ? "default" : "ghost"} type="button"
                                                        className="px-8 rounded-full" onClick={() => setSelected("All")}
                                                >All</Button>
                                                {
                                                    categories.map((category, index) => {
                                                        return <Button key={index}
                                                                       variant={category === selected ? "default" : "ghost"}
                                                                       className="px-8 rounded-full"
                                                                       type="button"
                                                                       onClick={() => setSelected(category)}
                                                        >{category}</Button>
                                                    })
                                                }
                                            </Card>

                                            <div className="menu w-full grid grid-cols-3 p-5 gap-5 h-[60vh] overflow-y-scroll">
                                                {filteredMenu.map((product) =>
                                                    (<ProductCard key={product.id} price={product.price} name={product.name} photo={product.photo}/>
                                                    )
                                                )}
                                            </div>

                                        </div>
                                        <DialogFooter className="pr-5 flex gap-5">
                                            <Button type="button" variant="ghost" onClick={()=> {
                                                setAmount(0)
                                                setNewOrder([])
                                                setSelected("All")
                                                document.querySelector(".dialogClose").click()
                                            }
                                            }>Cancel</Button>
                                            <Button type="submit">Confirm</Button>
                                        </DialogFooter>
                                    </form>
                                </Form>
                            </div>
                            <div className="flex-1 py-5 relative">
                                <div className="max-h-[68vh] overflow-y-scroll">
                                    {
                                        newOrder.map((product,index) => {
                                            return (
                                                <div key={index} className="flex border-b py-3 items-center">
                                                    <div className="flex-[5]">{product.name} <span className="ml-3 text-blue-600 font-[500]">x{product.quantity}</span></div>
                                                    <div className="flex-1 text-blue-600 font-[600]">{product.price}₺</div>
                                                    <div className="pl-3 cursor-pointer" onClick={()=> {
                                                        setNewOrder(newOrder.filter(item => item.name !== product.name))
                                                        setAmount((prevAmount) => prevAmount - product.price)
                                                    }}><TbX className="text-xl text-destructive" strokeWidth="3px"/></div>
                                                </div>)})
                                    }
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 h-32 flex border-t border-border">
                                    <div className="flex-[5] text-3xl font-bold pt-10">Price:</div>
                                    <div className="flex-1 text-blue-600 text-3xl font-[600] pt-10"> {amount}₺</div>
                                </div>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
                <Card className="h-full">
                    <Table>
                        <TableCaption>A List of Orders.</TableCaption>
                        <TableHeader className="text-[20px]">
                            <TableRow >
                                <TableHead className="text-center">Table</TableHead>
                                <TableHead className="text-center">Price</TableHead>
                                <TableHead className="text-center">Order</TableHead>
                                <TableHead className="text-center">Status</TableHead>
                                <TableHead className="text-center"></TableHead>
                                <TableHead></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody className="text-[14px]">
                            {
                                orders.map((order) => {
                                    let amount = 0
                                    order.products.map((product) => amount = amount + Number(product.price) )
                                    return(
                                        <TableRow key={order.id}>
                                        <TableCell className="text-center">{order.table}</TableCell>
                                            <TableCell className="text-center">{amount}</TableCell>
                                            <TableCell className="text-center">
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <Button variant="link" className="font-[600]">SHOW</Button>
                                                    </DialogTrigger>
                                                    <DialogContent className="max-w-[40vw]">
                                                        <Table className="text-start">
                                                            <TableHeader>
                                                                <TableRow className="flex">
                                                                    <TableHead className="text-start pl-8 flex-1">Name</TableHead>
                                                                    <TableHead className="text-start flex-1">Quantity</TableHead>
                                                                    <TableHead className="text-start flex-1">Unit Price</TableHead>
                                                                    <TableHead className="text-start flex-1">Total Price</TableHead>
                                                                </TableRow>
                                                            </TableHeader>
                                                            <TableBody>
                                                                {
                                                                    order.products.map((product)=> (
                                                                        <TableRow key={product.id} className="flex">
                                                                            <TableCell className="pl-8 flex-1 text-start" >{product.name}</TableCell>
                                                                            <TableCell className="flex-1  text-start">{product.quantity}</TableCell>
                                                                            <TableCell className="flex-1  text-start">{product.price / product.quantity}</TableCell>
                                                                            <TableCell className="flex-1  text-start">{product.price}</TableCell>
                                                                        </TableRow>
                                                                    ))
                                                                }
                                                            </TableBody>
                                                        </Table>

                                                    </DialogContent>
                                                </Dialog>
                                            </TableCell>
                                            <TableCell className="text-center">{order.status}</TableCell>
                                            <TableCell className="text-end"><Button disabled={order.status === "Paid"}>Payment</Button></TableCell>
                                            <TableCell className="flex gap-5 justify-end items-center h-[53px]">
                                                <Dialog>
                                                        <DialogTrigger asChild>
                                                            <TbTrash className="text-2xl cursor-pointer" onClick={() => setIdToDelete(order.id)}/>
                                                        </DialogTrigger>
                                                        <DialogContent className="sm:max-w-[425px]">
                                                            <DialogHeader>
                                                                <DialogTitle>Delete Order</DialogTitle>
                                                            </DialogHeader>
                                                            <DialogDescription>
                                                                Are You Sure You Want to Delete This Order?
                                                            </DialogDescription>
                                                            <DialogFooter>
                                                                <Button variant="destructive" onClick={deleteOrder}>Delete</Button>
                                                                <Button variant="ghost"
                                                                        onClick={() => document.querySelector(".dialogClose").click()}>Cancel</Button>
                                                            </DialogFooter>
                                                        </DialogContent>
                                                    </Dialog>
                                            </TableCell>
                                        </TableRow>)
                                })
                            }
                        </TableBody>
                    </Table>

                </Card>

            </main>

        </Layout>
    );
}

export default Orders;