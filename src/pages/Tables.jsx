import Layout from "@/components/ui/Layout.jsx";
import {Card} from "@/components/ui/card.jsx";
import styled from "styled-components";

function Tables() {

    const Table = styled.div`
        background: ${({ status }) => (status === "available" ? "var(--chart-7)" : "var(--chart-6)")};
        color: ${({ status }) => (status === "available" ? "var(--chart-6)" : "var(--chart-7)")};
        border-radius: 10px;
        font-size: 25px;
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        border: none;
    `
    const TableChild = styled.div`
        position: absolute;
        bottom: 0;
        right: 0;
        background: ${({ status }) => (status === "available" ? "var(--chart-6)" : "var(--chart-7)")};
        color: ${({ status }) => (status === "available" ? "var(--chart-7)" : "var(--chart-6)")};
        border-top-left-radius: 10px;
    `

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
        {id:10,name:"T-10",status:"available",person:10}]
    return (
        <Layout>
            <main className="w-full h-[622px]">
                <Card className="w-full h-full border-none p-5 grid grid-cols-5 grid-rows-4 gap-5">
                    {tables.map((table) => <Table key={table.id} status={table.status}>
                        {table.name}
                        <TableChild status={table.status}><div className="size-12 flex justify-center items-center">{table.person}</div> </TableChild>
                    </Table>)}
                </Card>
            </main>

        </Layout>
    );
}

export default Tables;