import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ContainerBase from "./ConteneurBase";

class Calendrier extends React.Component {
  render() {
    return (
      <ContainerBase>
        <h1>Calendrier</h1>
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
}

export default Calendrier;
