import Layout from "../components/ui/Layout.jsx";
import Cards from "../components/ui/Cards.jsx";
import {Area, Bar, BarChart, CartesianGrid, XAxis, AreaChart, YAxis, Label, Pie, PieChart,} from "recharts"
import { ChartContainer,ChartTooltip,ChartTooltipContent,ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import {CardFooter} from "@/components/ui/card.jsx";
import {TrendingUp, ArrowUpDown} from "lucide-react"
import {useMemo} from "react";
import DataTable from "@/components/ui/DataTable.jsx";
import {Button} from "@/components/ui/button.jsx";



function Dashboard() {

    const chartData = [
        { month: "January", desktop: 186, mobile: 80 },
        { month: "February", desktop: 305, mobile: 200 },
        { month: "March", desktop: 237, mobile: 120 },
        { month: "April", desktop: 73, mobile: 190 },
        { month: "May", desktop: 209, mobile: 130 },
        { month: "June", desktop: 214, mobile: 140 },
    ]
    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "#304674",
        },
        mobile: {
            label: "Mobile",
            color: "#c6d3e3",
        },
    }

    const donutData = [
        { browser: "chrome", visitors: 275, fill: "#b8e6d3" },
        { browser: "safari", visitors: 200, fill: "#f4a8a8" },
        { browser: "firefox", visitors: 287, fill: "#d6e9ff" },
        { browser: "edge", visitors: 173, fill: "#fffd8d" },
        { browser: "other", visitors: 190, fill: "#f3ccff" },
    ]
    const donutConfig = {
        visitors: {
            label: "Visitors",
        },
        chrome: {
            label: "Chrome",
            color: "hsl(var(--chart-1))",
        },
        safari: {
            label: "Safari",
            color: "hsl(var(--chart-2))",
        },
        firefox: {
            label: "Firefox",
            color: "hsl(var(--chart-3))",
        },
        edge: {
            label: "Edge",
            color: "hsl(var(--chart-4))",
        },
        other: {
            label: "Other",
            color: "hsl(var(--chart-5))",
        },
    }

    const totalVisitors = useMemo(() => {
        return donutData.reduce((acc, curr) => acc + curr.visitors, 0)
    },[])

    const users = [
        {
            name:"userName1",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"active"
        },
        {
            name:"userName",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"active"
        },
        {
            name:"userName",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"active"
        },
        {
            name:"userName",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"active"
        },
        {
            name:"userName",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"active"
        },
        {
            name:"userName",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"active"
        },
        {
            name:"userName",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"active"
        },
        {
            name:"userName",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"active"
        },
        {
            name:"userName",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"active"
        },
        {
            name:"userName10",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"passive"
        },
        {
            name:"userName11",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"active"
        },
        {
            name:"userName",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"active"
        },
        {
            name:"userName",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"active"
        },
        {
            name:"userName",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"active"
        },
        {
            name:"userName",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"active"
        },
        {
            name:"userName",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"active"
        },
        {
            name:"userName",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"active"
        },
        {
            name:"userName",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"active"
        },
        {
            name:"userName",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"active"
        },
        {
            name:"userName20",
            company:"companyName",
            email:"emailexample@dom.com",
            phone:"555 555 5555",
            paymentMethod:"cash",
            status:"passive"
        },
    ]
    const columns = [
        {
            accessorKey: "name",
            header: (({column}) =>
                <Button
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className=" m-1 px-1 bg-white shadow-none hover:text-white hover:bg-[#304674]  font-[700] text-[#555]"
                >
                    Name <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>),
        },
        {
            accessorKey: "company",
            header: (({column}) =>
                <Button
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className=" m-1 px-1 bg-white shadow-none hover:text-white hover:bg-[#304674]  font-[700] text-[#555]"
                >
                    Company <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>),
        },
        {
            accessorKey: "email",
            header: (({column}) =>
                <Button
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="m-1 px-1 bg-white shadow-none hover:text-white hover:bg-[#304674]  font-[700] text-[#555]"
                >
                    Email <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>),
        },
        {
            accessorKey: "phone",
            header: (({column}) =>
                <Button
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className=" m-1 px-1 bg-white shadow-none hover:text-white hover:bg-[#304674]  font-[700] text-[#555]"
                >
                    Phone <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>),
        },{
            accessorKey: "paymentMethod",
            header: (({column}) =>
                <Button
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className=" m-1 px-1 bg-white shadow-none hover:text-white hover:bg-[#304674]  font-[700] text-[#555]"
                >
                    Payment Method <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>),
        },
        {
            accessorKey: "status",
            header: (({column}) =>
                <Button
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className=" m-1 px-1 bg-white shadow-none hover:text-white hover:bg-[#304674] font-[700] text-[#555]"
                >
                    Status <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>),
            cell:( ({row}) => {
                    const status = row.getValue("status")
                if(status === "active"){
                    return(
                        <span className="text-[#4fcb9e] font-[700] text-[15px] px-2 py-1 rounded-2xl text-center">
                            &#x2022; {status}
                        </span>
                    )
                }else{
                    return(
                        <span className="text-[#FF4A4A] font-[700] text-[15px] px-2 py-1 rounded-2xl text-center">
                            &#x2022; {status}
                        </span>
                    )
                }
            })
        },


    ]


    return (
        <Layout>
            <main className="grid grid-cols-4 grid-rows-7 gap-5 h-[1050px]">
                <div className="col-start-1 col-span-2 row-start-2 row-span-2 bg-white rounded-2xl shadow-md p-3">
                    <ChartContainer config={chartConfig} className="h-full w-full">
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid/>
                            <ChartTooltip content={<ChartTooltipContent className=""/>}/>
                            <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false}
                                   tickFormatter={(value) => value.slice(0, 3)}/>
                            <ChartLegend content={<ChartLegendContent/>}/>
                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}/>
                            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4}/>
                        </BarChart>
                    </ChartContainer>
                </div>
                <div className="col-start-3 col-span-2 row-start-2 row-span-2 bg-white rounded-2xl shadow-md p-3">
                    <ChartContainer config={chartConfig} className="h-full w-full">
                        <AreaChart accessibilityLayer data={chartData} margin={{left: 12, right: 12,}}>
                            <CartesianGrid vertical={false}/>
                            <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8}
                                   tickFormatter={(value) => value.slice(0, 3)}/>
                            <YAxis tickLine={false} axisLine={false} tickMargin={8} tickCount={3}/>
                            <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dot"/>}/>
                            <Area dataKey="desktop" type="natural" fill="#98ddca" fillOpacity={0.4} stroke="#1A8D80"/>
                            <Area dataKey="mobile" type="natural" fill="#df9191" fillOpacity={0.4} stroke="#D75E40"/>

                            <ChartLegend content={<ChartLegendContent/>}/>
                        </AreaChart>
                    </ChartContainer>
                </div>
                <div className="col-start-1  col-span-4 flex gap-5">
                    <Cards title="başlık 1" variant="secondary">Deneme A</Cards>
                    <Cards title="başlık 2" variant="primary">Deneme B</Cards>
                    <Cards title="başlık 3" variant="quaternary">Deneme C</Cards>
                    <Cards title="başlık 4" variant="tertiary">Deneme D</Cards>
                    <Cards title="başlık 5" variant="default">Deneme E</Cards>
                </div>
                <div className="col-start-1 col-span-1 row-start-4 row-span-2 pt-1 shadow-md bg-white rounded-2xl ">
                    <ChartContainer config={donutConfig} className="mx-auto aspect-square w-full flex-1">
                        <PieChart>
                            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel/>}/>
                            <Pie data={donutData} dataKey="visitors" nameKey="browser" innerRadius={80} strokeWidth={3}>
                                <Label content={({viewBox}) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle"
                                                  dominantBaseline="middle">
                                                <tspan x={viewBox.cx} y={viewBox.cy}
                                                       className="fill-foreground text-3xl font-bold">
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                                <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24}
                                                       className="fill-muted-foreground">
                                                    Visitors
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                                />
                            </Pie>
                        </PieChart>
                    </ChartContainer>
                </div>
                <div className="col-start-1 col-span-1 row-start-6 row-span-2 pt-1 shadow-md bg-white rounded-2xl ">
                    <ChartContainer config={donutConfig} className="mx-auto mt-10 aspect-square w-4/5 h-24">
                        <AreaChart accessibilityLayer data={chartData}>
                            <defs>
                                <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                                    <stop
                                        offset="5%"
                                        stopColor="#21cc7a"
                                        stopOpacity={0.8}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="#21cc7a"
                                        stopOpacity={0}
                                    />
                                </linearGradient>

                            </defs>
                            <Area dataKey="desktop" fill="url(#fillDesktop)" type="linear" fillOpacity={.3} stroke="#1A8D80"/>
                        </AreaChart>
                    </ChartContainer>
                    <CardFooter>
                        <div className="flex w-full mt-14 items-start gap-2 text-sm">
                            <div className="grid gap-2">
                                <div className="flex items-center gap-2 font-medium leading-none">
                                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                                </div>
                                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                                    January - June 2024
                                </div>
                            </div>
                        </div>
                    </CardFooter>
                </div>
                <div className="col-start-2 col-span-3 row-start-4 text-center row-span-4 overflow-hidden shadow-md bg-white rounded-2xl relative">
                    <DataTable columns={columns} data={users} className="h-full ]"/>
                </div>
            </main>
        </Layout>
    );
}

export default Dashboard;