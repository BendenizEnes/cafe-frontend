import styled from "styled-components";
import {Button} from "@/components/ui/button.jsx";
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,} from "@/components/ui/dialog"
import {Label} from "@/components/ui/label.jsx";
import {Input} from "@/components/ui/input.jsx";

const Table = styled.div`
    border: 5px solid ${({status}) => (status === "available" ? "#adcbe3" : "#2a4d69")};
    color: #2a4d69;
    border-radius: 20px;
    font-size: 25px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    background: var(--card);
`
const TableChild = styled.div`
        position: absolute;
        bottom: 0;
        right: 0;
        border-bottom-right-radius: 17px;
    `

function Tables() {
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

    return (
        <div className="grid grid-cols-5 gap-5 min-h-[562px]">
                    {tables.map((table) => {
                        if (table.status === "available"){
                        return (
                            <Dialog key={table.id}>
                                <DialogTrigger asChild>
                                    <Table status={table.status} className="aspect-square dark:text-[#1DBAFF]">
                                        {table.name}
                                        <TableChild status={table.status}><div className="size-8 text-xl flex justify-center items-center">{table.person}</div> </TableChild>
                                    </Table>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Set Reservation</DialogTitle>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="name" className="text-right">
                                                Name
                                            </Label>
                                            <Input id="name" placeholder="Jane Doe" className="col-span-3"/>
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="person" className="text-right">
                                                Person
                                            </Label>
                                            <Input id="person" type="number" max={table.person} placeholder="5" className="col-span-3"/>
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="date" className="text-right">
                                                Date
                                            </Label>
                                            <Input id="date" type="date" placeholder="Pedro Duarte" className="col-span-3"/>
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="time" className="text-right">
                                                Time
                                            </Label>
                                            <Input id="time" type="time" className="col-span-3"/>
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type={`button {/*submit*/}`}>Save changes</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        );}else{
                            return (
                                <Dialog key={table.id}>
                                    <DialogTrigger asChild>
                                        <Table status={table.status} className="aspect-square dark:text-[#1DBAFF]">
                                            {table.name}
                                            <TableChild status={table.status}><div className="size-8 text-xl flex justify-center items-center">{table.person}</div> </TableChild>
                                        </Table>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Set Reservation</DialogTitle>
                                        </DialogHeader>
                                        <div className="text-center">This Table is already Reserved</div>
                                    </DialogContent>
                                </Dialog>
                            )
                        }
                    })}
                </div>

    );
}

export default Tables;