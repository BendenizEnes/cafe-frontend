import Layout from "../components/ui/Layout.jsx"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import {Card} from "@/components/ui/card.jsx";
import {useEffect, useState} from "react";
import {Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader,DialogTitle,} from "@/components/ui/dialog.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Label} from "@/components/ui/label.jsx";

function Schedule() {
    const [events,setEvents]=useState([])
    const [allEvents,setAllEvents] = useState([
        {id:1, title:"Event 1",start:"2024-07-25",end:"2024-08-01"},
        {id:2, title:"Event 2",start:"2024-07-28",end:"2024-07-30",allDay:false},
        {id:3, title:"Event 3",start:"2024-07-24"},
        {id:4, title:"Event 4",start:"2024-08-02"},
        {id:5, title:"Event 5",start:"2024-08-05"}])
    const [showModal, setShowModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [idToDelete, setIdToDelete] = useState(null)
    const [newEvent, setNewEvent] = useState({
        title:"",
        start:"",
        allDay:false,
        id:0
    })

    /*useEffect(() => {
        let containerEl = document.getElementById("draggable-el")
        if(containerEl) {
            // new Draggable(containerEl,{
            //     itemSelector:".fc-event",
            //     eventData: function (eventEl){
            //         let title = eventEl.getAttribute("title")
            //         let id = eventEl.getAttribute("data")
            //         let start = eventEl.getAttribute("start")
            //         return {title, id, start}
            //     }
            // })
        }
    },[])*/

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
           <main className="w-full h-[622px] grid grid-cols-4 gap-5">
               <Card className="col-span-3">
                   <FullCalendar
                       plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                       initialView="dayGridMonth"
                       dateClick={handleDateClick}
                       headerToolbar={{
                           left: 'prev next today',
                           center: 'title',
                           right: "dayGridMonth,dayGridWeek,timeGridDay"
                       }}
                       height="100%"
                       events={allEvents}
                       nowIndicator={true}
                       editable={true}
                       droppable={true}

                       drop={(data) => addEvent(data)}
                       eventClick={(data) => handleDeleteModal(data)}
                   />
               </Card>
               <Card id="draggable-el" className="col-span-1 row-span-1">
                   {allEvents.map((event) => (
                       <div key={event.id} title={event.title} className="fc-event w-full my-2 rounded-md p-2 bg-purple-400 text-white">
                           {event.title}
                       </div>
                   ) )}
               </Card>
               <Dialog open={showDeleteModal} onOpenChange={setShowDeleteModal}>
                   <DialogContent className="sm:max-w-[425px] bg-white">
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
                   <DialogContent className="sm:max-w-[425px] bg-white">
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
