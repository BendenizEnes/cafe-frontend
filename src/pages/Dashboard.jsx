import Layout from "../components/ui/Layout.jsx";
import InfoCards from "../components/ui/InfoCards.jsx";
import UserTable from "../components/ui/UserTable.jsx";
import {Button} from "../components/ui/button.jsx";
import {Card, CardFooter} from "../components/ui/card.jsx";
import { ChartContainer,ChartTooltip,ChartTooltipContent,ChartLegend, ChartLegendContent } from "../components/ui/chart"
import {Area, Bar, BarChart, CartesianGrid, XAxis, AreaChart, YAxis, Label, Pie, PieChart,} from "recharts"
import {TbArrowsUpDown, TbTrendingUp} from "react-icons/tb";
import {useMemo} from "react";

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
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="w-full"
                >
                    Name <TbArrowsUpDown className="ml-2 h-4 w-4" />
                </Button>),
        },
        {
            accessorKey: "company",
            header: (({column}) =>
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="w-full"
                >
                    Company <TbArrowsUpDown className="ml-2 h-4 w-4" />
                </Button>),
        },
        {
            accessorKey: "email",
            header: (({column}) =>
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="w-full"
                >
                    Email <TbArrowsUpDown className="ml-2 h-4 w-4" />
                </Button>),
        },
        {
            accessorKey: "phone",
            header: (({column}) =>
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="w-full"
                >
                    Phone <TbArrowsUpDown className="ml-2 h-4 w-4" />
                </Button>),
        },{
            accessorKey: "paymentMethod",
            header: (({column}) =>
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="w-full"
                >
                    Payment Method <TbArrowsUpDown className="ml-2 h-4 w-4" />
                </Button>),
        },
        {
            accessorKey: "status",
            header: (({column}) =>
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    className="w-full"
                >
                    Status <TbArrowsUpDown className="ml-2 h-4 w-4" />
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
                <Card className="col-start-1 col-span-4 row-start-1 row-span-1 border-none bg-transparent shadow-none flex gap-5">
                    <InfoCards title="başlık 1" variant="secondary" className="">Deneme A</InfoCards>
                    <InfoCards title="başlık 2" variant="primary" className="bg-ring">Deneme B</InfoCards>
                    <InfoCards title="başlık 3" variant="quaternary" className="bg-ring">Deneme C</InfoCards>
                    <InfoCards title="başlık 4" variant="tertiary" className="bg-ring">Deneme D</InfoCards>
                    <InfoCards title="başlık 5" variant="default" className="bg-ring">Deneme E</InfoCards>
                </Card>
                <Card className="col-start-1 col-span-2 row-start-2 row-span-2 border-none p-3 pl-0">
                    <ChartContainer config={chartConfig} className="h-full w-full">
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} stroke="var(--secondary)"/>
                            <ChartTooltip content={<ChartTooltipContent className="bg-card"/>}/>
                            <XAxis dataKey="month" tickLine={true} tickMargin={10} axisLine={true}
                                   tickFormatter={(value) => value.slice(0, 3)}/>
                            <YAxis tickLine={false} tickMargin={5} axisLine={false}/>
                            <ChartLegend content={<ChartLegendContent/>}/>
                            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4}/>
                            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4}/>
                        </BarChart>
                    </ChartContainer>
                </Card>
                <Card className="col-start-3 col-span-2 row-start-2 row-span-2 border-none p-5 pl-0">
                    <ChartContainer config={chartConfig} className="h-full w-full">
                        <AreaChart accessibilityLayer data={chartData} margin={{left: 12, right: 12,}}>
                            <CartesianGrid vertical={false} stroke="var(--secondary)"/>
                            <XAxis dataKey="month" tickLine={true} axisLine={true} tickMargin={10}
                                   tickFormatter={(value) => value.slice(0, 3)}/>
                            <YAxis tickLine={false} tickMargin={5} axisLine={false}/>
                            <ChartTooltip content={<ChartTooltipContent className="bg-card"/>}/>
                            <Area dataKey="desktop" type="natural" fill="var(--chart-7)" fillOpacity={0.93} stroke="var(--chart-7)"/>
                            <Area dataKey="mobile"  type="natural" fill="var(--chart-6)" fillOpacity={0.93} stroke="var(--chart-6)"/>

                            <ChartLegend content={<ChartLegendContent/>}/>
                        </AreaChart>
                    </ChartContainer>
                </Card>
                <Card className="col-start-1 col-span-1 row-start-4 row-span-2 border-none ">
                    <ChartContainer config={donutConfig} className="h-full w-full flex-1">
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
                </Card>
                <Card className="col-start-1 col-span-1 row-start-6 row-span-2 border-none ">
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
                                    Trending up by 5.2% this month <TbTrendingUp className="h-4 w-4" />
                                </div>
                                <div className="flex items-center gap-2 leading-none text-muted-foreground">
                                    January - June 2024
                                </div>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
                <Card className="col-start-2 col-span-3 row-start-4 row-span-4 border-none text-center relative">
                    <UserTable columns={columns} data={users} className="h-full"/>
                </Card>
            </main>
        </Layout>
    );
}

export default Dashboard;