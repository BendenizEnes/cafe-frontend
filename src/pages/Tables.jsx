import Layout from "@/components/ui/Layout.jsx";
import TableReservation from "@/components/ui/TableReservation.jsx";
import ReactDOM from 'react-dom';
import {Card} from "@/components/ui/card.jsx";

function Tables() {
    function showTable(name,person,status){
          const tableContainer =  document.querySelector(".table-section")
        const root = ReactDOM.createRoot(tableContainer);
        root.render(<TableReservation name={name} person={person} status={status} />);
    }

    const tables = [
        {id:1,name:"T-01",status:"available",person:2},
        {id:2,name:"T-02",status:"available",person:4},
        {id:3,name:"T-03",status:"available",person:6},
        {id:4,name:"T-04",status:"available",person:10},
        {id:5,name:"T-05",status:"reserved",person:8}]
    return (
        <Layout>
            <main className="h-[622px] w-full flex gap-5">
                <Card className="table-section border-none flex-[4] flex items-center justify-center rounded-xl p-5">

                </Card>
                <div className="bg-white flex-[1] rounded-xl grid grid-cols-3 grid-rows-8 gap-5 p-5">
                    {
                        tables.map((table) => {
                            return(
                                <div key={table.id} className={`${table.status === "available" ? "bg-purple-400" : "bg-yellow-400" } font-bold overflow-hidden relative text-white rounded-lg flex items-center justify-center cursor-pointer`}
                                     onClick={() => showTable(table.name,table.person,table.status)}>
                                    <div>{table.name}</div>
                                    <div className={`absolute w-5 h-5 text-center leading-5 bottom-0 right-0 text-[10px] ${table.status === "available" ? "bg-purple-500" : "bg-yellow-500" }`}>{table.person}</div>
                                </div>
                            )
                        })
                    }
                </div>

            </main>
        </Layout>
    );
}

export default Tables;