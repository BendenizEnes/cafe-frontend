import Layout from "../components/ui/Layout.jsx";
import {Button} from "../components/ui/button.jsx";
import {Card, CardFooter} from "../components/ui/card.jsx";
import { ChartContainer,ChartTooltip,ChartTooltipContent,ChartLegend, ChartLegendContent } from "../components/ui/chart"
import {Area, Bar, BarChart, CartesianGrid, XAxis, AreaChart, YAxis, Label, Pie, PieChart,} from "recharts"
import {TbArrowsUpDown, TbTrendingUp} from "react-icons/tb";
import {MdRoomService} from "react-icons/md";
import {useMemo} from "react";
import {DataTable} from "@/components/ui/DataTable.jsx";

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
        },
        mobile: {
            label: "Mobile",
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

    const products = [
        {name:"Cola",purchase:"1000",sell:"2500",stock:"100",status:"In Stock"},
        {name:"Fanta",purchase:"1000",sell:"2500",stock:"10",status:"Low Stock"},
        {name:"Ayran",purchase:"1200",sell:"2400",stock:"120",status:"In Stock"},
        {name:"Ice Tea",purchase:"1500",sell:"4000",stock:"0",status:"Out of Stock"},
        {name:"Juice",purchase:"800",sell:"1500",stock:"100",status:"In Stock"},
        {name:"Cola",purchase:"1000",sell:"2500",stock:"100",status:"In Stock"},
        {name:"Fanta",purchase:"1000",sell:"2500",stock:"10",status:"Low Stock"},
        {name:"Ayran",purchase:"1200",sell:"2400",stock:"120",status:"In Stock"},
        {name:"Ice Tea",purchase:"1500",sell:"4000",stock:"0",status:"Out of Stock"},
        {name:"Juice",purchase:"800",sell:"1500",stock:"100",status:"In Stock"},
    ]
    const columns = [
        {
            accessorKey: "name",
            header: (({column}) =>
                <div className="w-full flex justify-start">
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="hover:bg-black hover:bg-opacity-5 font-[600] text-start pl-2"
                    >
                        Name <TbArrowsUpDown className="ml-2 h-4 w-4" />
                    </Button>
                </div>),
            size:"20%"
        },
        {
            accessorKey: "purchase",
            header: (({column}) =>
                <div className="w-full flex justify-start">
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="hover:bg-black hover:bg-opacity-5 font-[600] text-start pl-2"
                    >
                        Purchase <TbArrowsUpDown className="ml-2 h-4 w-4"/>
                    </Button>
                </div>),
            size:"20%"
        },
        {
            accessorKey: "sell",
            header: (({column}) =>
                <div className="w-full flex justify-start">
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="hover:bg-black hover:bg-opacity-5 font-[600] text-start pl-2"
                    >
                        Sell <TbArrowsUpDown className="ml-2 h-4 w-4"/>
                    </Button>
                </div>),
            size:"20%"
        },
        {
            accessorKey: "stock",
            header: (({column}) =>
                <div className="w-full flex justify-start">
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="hover:bg-black hover:bg-opacity-5 font-[600] text-start pl-2"
                    >
                        Stock <TbArrowsUpDown className="ml-2 h-4 w-4"/>
                    </Button>
                </div>),
            size:"20%",
            cell:(({row}) => {
                const stock = Number(row.getValue("stock"))
                if (stock > 0 && stock <= 20) {
                    return (
                        <span className="text-[#efef22] font-[700] text-[15px] px-2 py-1 rounded-2xl text-center">
                                {stock}
                        </span>
                    )
                } else if (stock === 0) {
                    return (
                        <span className="text-[#FF5511] font-[700] text-[15px] px-2 py-1 rounded-2xl text-center">
                                 {stock}
                        </span>
                    )
                } else {
                    return (
                        <span className="text-[#44FF11] font-[700] text-[15px] px-2 py-1 rounded-2xl text-center">
                                 {stock}
                        </span>
                    )

                }
            })

        }, {
            accessorKey: "status",
            header: (({column}) =>
                <div className="w-full flex justify-start">
                <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                        className="hover:bg-black hover:bg-opacity-5 font-[600] text-start pl-2"
                    >
                        Status <TbArrowsUpDown className="ml-2 h-4 w-4"/>
                    </Button>
                </div>),
            size:"20%",
            cell:(({row}) => {
                const status = row.getValue("status")
                if (status === "Low Stock") {
                    return (
                        <span className="text-[#efef22] font-[700] text-[15px] px-2 py-1 rounded-2xl text-center">
                                {status}
                        </span>
                    )
                } else if (status === "Out of Stock") {
                    return (
                        <span className="text-[#FF5511] font-[700] text-[15px] px-2 py-1 rounded-2xl text-center">
                                 {status}
                        </span>
                    )
                } else {
                    return (
                        <span className="text-[#44FF11] font-[700] text-[15px] px-2 py-1 rounded-2xl text-center">
                                 {status}
                        </span>
                    )

                }
            })
        },
    ]

    function InfoCards({icon = (<MdRoomService/>), title, variant, children}) {
        const CardVariant = {
            primary: {
                textCol: "text-[#54CCA1]",
                bgColor: "bg-[#DCF4EC]",
            },
            secondary: {
                textCol: "text-[#FF8E8E]",
                bgColor: "bg-[#FFEBEB]",
            },
            tertiary: {
                textCol: "text-[#00BBFF]",
                bgColor: "bg-[#DCF6FF]",
            },
            quaternary: {
                textCol: "text-[#FFA826]",
                bgColor: "bg-[#FFF2DE]",
            },
            default: {
                textCol: "text-[#566A7F]",
                bgColor: "bg-[#F5F5F9]",
            },
        };
        return (
            <Card className="p-5 flex-1 flex items-center bg-card rounded-2xl gap-5 shadow-md">
                <div className={`${CardVariant[variant].textCol} ${CardVariant[variant].bgColor} text-4xl p-3 rounded-lg`}>
                    {icon}
                </div>
                <div className="flex flex-col">
                    <div className="font-[600] text-xl">{children}</div>
                    <div className="text-sm font-[500] text-gray-400">{title}</div>
                </div>
            </Card>
        );
    }

    return (
        <Layout>
            <main className="grid grid-cols-4 grid-rows-7 w-full gap-5 h-[1050px]">
                <div className="col-start-1 col-span-4 row-start-1 row-span-1 border-none flex gap-5">
                    <InfoCards title="başlık 1" variant="secondary" className="">Deneme A</InfoCards>
                    <InfoCards title="başlık 2" variant="primary" className="bg-ring">Deneme B</InfoCards>
                    <InfoCards title="başlık 3" variant="quaternary" className="bg-ring">Deneme C</InfoCards>
                    <InfoCards title="başlık 4" variant="tertiary" className="bg-ring">Deneme D</InfoCards>
                    <InfoCards title="başlık 5" variant="default" className="bg-ring">Deneme E</InfoCards>
                </div>
                <Card className="col-start-1 col-span-2 row-start-2 row-span-2 pl-0">
                    <ChartContainer config={chartConfig} className="h-full w-full">
                        <BarChart accessibilityLayer data={chartData}>
                            <CartesianGrid vertical={false} stroke="var(--secondary)"/>
                            <ChartTooltip content={<ChartTooltipContent className="bg-card"/>}/>
                            <XAxis dataKey="month" tickLine={true} tickMargin={10} axisLine={true}
                                   tickFormatter={(value) => value.slice(0, 3)}/>
                            <YAxis tickLine={false} tickMargin={5} axisLine={false}/>
                            <ChartLegend content={<ChartLegendContent/>}/>
                            <Bar dataKey="desktop" radius={4} fill="var(--chart-1)" />
                            <Bar dataKey="mobile" radius={4} fill="var(--chart-2)"/>
                        </BarChart>
                    </ChartContainer>
                </Card>
                <Card className="col-start-3 col-span-2 row-start-2 row-span-2 pl-0">
                    <ChartContainer config={chartConfig} className="h-full w-full">
                        <AreaChart accessibilityLayer data={chartData} margin={{left: 12, right: 12,}}>
                            <CartesianGrid vertical={false} stroke="var(--secondary)"/>
                            <XAxis dataKey="month" tickLine={true} axisLine={true} tickMargin={10}
                                   tickFormatter={(value) => value.slice(0, 3)}/>
                            <YAxis tickLine={false} tickMargin={5} axisLine={false}/>
                            <ChartTooltip content={<ChartTooltipContent className="bg-card"/>}/>
                            <Area dataKey="desktop" type="natural" fill="var(--chart-1)" fillOpacity={0.95} stroke="var(--chart-1)"/>
                            <Area dataKey="mobile"  type="natural" fill="var(--chart-2)" fillOpacity={0.95} stroke="var(--chart-2)"/>

                            <ChartLegend content={<ChartLegendContent/>}/>
                        </AreaChart>
                    </ChartContainer>
                </Card>
                <Card className="col-start-1 col-span-1 row-start-4 row-span-2">
                    <ChartContainer config={donutConfig} className="h-full w-full flex-1">
                        <PieChart>
                            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel/>}/>
                            <Pie data={donutData} dataKey="visitors" nameKey="browser" innerRadius={70} strokeWidth={3}>
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
                <Card className="col-start-1 col-span-1 row-start-6 row-span-2">
                    <ChartContainer config={donutConfig} className="mx-auto mt-5 aspect-square w-4/5 h-20">
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
                        <div className="flex w-full mt-14 items-start gap-2 text-sm pt-2">
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
                <Card className="col-start-2 col-span-3 row-start-4 row-span-4 text-center relative p-0">
                    <DataTable columns={columns} data={products} filters={["name"]} className="text-start"/>
                </Card>
            </main>
        </Layout>
    );
}

export default Dashboard;