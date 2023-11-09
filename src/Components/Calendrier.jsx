import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ContainerBase from "./ConteneurBase";
import Evenements from "./Evenements";
import axios from "axios";

function Calendrier() {
  const sampleEvents = [
    {
      event_name: "Event 1",
      event_description: "Description of Event 1",
    },
    {
      event_name: "Event 2",
      event_description: "Description of Event 2",
    },
    {
      event_name: "Event 3",
      event_description: "Description of Event 3",
    },
    {
      event_name: "Event 4",
      event_description: "Description of Event 4",
    },
    {
      event_name: "Event 5",
      event_description: "Description of Event 5",
    },
    {
      event_name: "Event 6",
      event_description: "Description of Event 6",
    },
    {
      event_name: "Event 7",
      event_description: "Description of Event 7",
    },
    {
      event_name: "Event 8",
      event_description: "Description of Event 8",
    },
    {
      event_name: "Event 9",
      event_description: "Description of Event 9",
    },
    {
      event_name: "Event 10",
      event_description: "Description of Event 10",
    },
  ];
  const serviceURL = "https://tp2weblawrence.azurewebsites.net";

  // axios.get(serviceURL + "/evenements").then((res) => {
  //   console.log(res);
  // });

  const [events, setEvents] = useState(sampleEvents);

  // useEffect(() => {
  //   axios.get("http://localhost:8081/evenements").then((res) => {

  //     //setEvents(res.data);
  //     console.log(res.data);
  //   });
  // }, []);

  return (
    <ContainerBase>
      <h1>Calendrier</h1>
      <Evenements evenements={events} />
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        locale='fr'
        events={[
          { title: "100% tp app web", date: "2023-09-26" },
          { title: "Fêter la note app web", date: "2023-10-05" },
        ]}
      ></FullCalendar>
    </ContainerBase>
  );
}

export default Calendrier;
