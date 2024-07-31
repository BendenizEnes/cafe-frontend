import Layout from "../components/ui/Layout.jsx"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {Card} from "@/components/ui/card.jsx";
import {useState} from "react";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader,DialogTitle,} from "@/components/ui/dialog.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Label} from "@/components/ui/label.jsx";

function Schedule() {
    const [allEvents,setAllEvents] = useState([
        {id:1, title:"Event 1",start:"2024-08-04",allDay:true},
        {id:2, title:"Event 2",start:"2024-08-06",allDay:true},
        {id:3, title:"Event 3",start:"2024-08-07",allDay:false},
        {id:4, title:"Event 4",start:"2024-08-08",allDay:false},
        {id:5, title:"Event 5",start:"2024-08-05",allDay:false}])
    const [showModal, setShowModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [idToDelete, setIdToDelete] = useState(null)
    const [newEvent, setNewEvent] = useState({
        title:"",
        start:"",
        allDay:false,
        id:0
    })

    function handleDateClick(arg){
        setNewEvent({
            ...newEvent,
            start: arg.date,
            allDay: arg.allDay,
            id:new Date().getTime()
        })
        setShowModal(true)
    }
    function addEvent(data){
        const event = {
                ...newEvent,
                start:data.date.toISOString(),
                title:data.draggedEl.innerText,
                allDay: data.allDay,
                id: new Date().getTime()
            }
            setAllEvents([...allEvents,event])
    }
    function handleDeleteModal(data){
            setShowDeleteModal(true)
            setIdToDelete(Number(data.event.id))
    }
    function handleDelete(){
            setAllEvents(allEvents.filter(event => Number(event.id) !== Number(idToDelete)))
            setShowDeleteModal(false)
            setIdToDelete(null)
    }
    const handleChange = (e)=> {
        setNewEvent({
            ...newEvent,
            title: e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault();
        setAllEvents([...allEvents, newEvent])
        setShowModal(false)
        setNewEvent({
            title: "",
            start: "",
            allDay: false,
            id:0
        })
    }


    return (
        <Layout>
           <main className="w-full">
               <Card className="w-full h-full calendarCon">
                   <FullCalendar
                       plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                       initialView="timeGridWeek"
                       dateClick={handleDateClick}
                       headerToolbar={{
                           left: 'prev next today',
                           center: 'title',
                           right: "timeGridDay,timeGridWeek,dayGridMonth"
                       }}
                       height="100%"
                       events={allEvents}
                       nowIndicator={true}
                       editable={true}
                       eventClassNames={["rounded-xl py-1 pl-2 font-[700] bg-[var(--chart-1)] border-none text-white"]}
                       droppable={true}
                       drop={(data) => addEvent(data)}
                       eventClick={(data) => handleDeleteModal(data)}
                   />
               </Card>
               <Dialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
                   <DialogContent className="sm:max-w-[425px]">
                       <DialogHeader>
                           <DialogTitle>Delete Event</DialogTitle>
                       </DialogHeader>
                       <DialogDescription>
                           Are You Sure You Want to Delete This Event?
                       </DialogDescription>
                       <DialogFooter>
                           <Button type="button" onClick={handleDelete}>Delete</Button>
                           <Button type="button" variant="ghost" onClick={() => {
                               setShowDeleteModal(false)
                               setIdToDelete(null)
                           }}>Cancel</Button>
                       </DialogFooter>
                   </DialogContent>
               </Dialog>
               <Dialog open={showModal} onOpenChange={setShowModal}>
                   <DialogContent className="sm:max-w-[425px]">
                       <DialogHeader>
                           <DialogTitle>Add Event</DialogTitle>
                       </DialogHeader>
                       <DialogDescription></DialogDescription>
                       <form onSubmit={handleSubmit}>
                           <div className="py-4">
                               <div className="grid grid-cols-4 items-center gap-4">
                                   <Label htmlFor="name" className="text-right">
                                       Name
                                   </Label>
                                   <Input id="name" value={newEvent.title} onChange={(e) => handleChange(e)} placeholder="Title"  className="col-span-3"/>
                               </div>

                           </div>
                           <DialogFooter>
                               <Button type="submit" disabled={newEvent.title === ''}>Create</Button>
                               <Button type="button" onClick={() => setShowModal(false)}>Cancel</Button>
                           </DialogFooter>
                       </form>
                   </DialogContent>
               </Dialog>

           </main>

        </Layout>
    );
}

export default Schedule;
