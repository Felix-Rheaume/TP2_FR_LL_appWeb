import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ContainerBase from "./ConteneurBase";
import Evenements from "./Evenements";
import axios from "axios";

function Calendrier() {
  axios.defaults.withCredentials = true;
  const serviceURL = "https://tp2weblawrence.azurewebsites.net";
  // const serviceURL = "http://localhost:8081";

  const [events, setEvents] = useState(null);

  useEffect(() => {
    axios
      .get(serviceURL + "/evenements")
      .then((res) => {
        setEvents(res.data);
      })
      .catch((err) => setEvents(null));
  }, []);

  return (
    <ContainerBase>
      <h1>Calendrier</h1>
      <Evenements evenements={events} />
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridMonth'
        locale='fr'
        events={
          events
            ? events.map((evenement) => ({
                title: evenement.event_name,
                date: evenement.event_debut,
              }))
            : null
        }
      ></FullCalendar>
    </ContainerBase>
  );
}

export default Calendrier;
