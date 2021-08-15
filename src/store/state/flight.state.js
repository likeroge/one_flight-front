import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../Store";

const flightDataObject = [
  {
    id: 1,
    ready: false,
    flight: "ABW777",
    tail: "VQBBL",
    depICAO: "UUEE",
    depIATA: "SVO",
    arrICAO: "ZSPD",
    arrIATA: "PVG",
    arrTime: "071830Z",
    depTime: "071030Z",
    crew: 2,
    mins: "CAT I",
    payload: 0,
    tank: 0,
    mel: "",
  },
  {
    id: 2,
    ready: false,
    flight: "ABW333",
    tail: "VQBRH",
    depICAO: "UUEE",
    depIATA: "SVO",
    arrICAO: "EDDF",
    arrIATA: "FRA",
    arrTime: "071030Z",
    depTime: "071330Z",
    crew: 2,
    mins: "CAT I",
    payload: 0,
    tank: 0,
    mel: "",
  },
  {
    id: 3,
    ready: false,
    flight: "ABW1234",
    tail: "VPBIG",
    depICAO: "UWLW",
    depIATA: "ULY",
    arrICAO: "KLAX",
    arrIATA: "LAX",
    arrTime: "070630Z",
    depTime: "071730Z",
    crew: 2,
    mins: "CAT I",
    payload: 0,
    tank: 0,
    mel: "",
  },
];

flightDataObject.forEach(
  (el) =>
    (el.checkList = [
      {
        id: 1,
        title: "RUNWAYS CHECK",
        checked: false,
      },
      {
        id: 2,
        title: "AD NOTAM CHECK / ENR NOTAM CHECK",
        checked: false,
      },
      {
        id: 3,
        title: "AD WX CHECK / ENR WX CHECK",
        checked: false,
      },
      {
        id: 4,
        title: "ALTN CHECK",
        checked: false,
      },
      {
        id: 5,
        title: "CURFEW CHECK",
        checked: false,
      },
      {
        id: 6,
        title: "TPOB CHECK",
        checked: false,
      },
      {
        id: 7,
        title: "MEL/CDL CHECK",
        checked: false,
      },
      {
        id: 8,
        title: "EDTO CHECK",
        checked: false,
      },
      {
        id: 9,
        title: "3% + ERA / UNPROTECTED FUEL CHECK",
        checked: false,
      },
      {
        id: 10,
        title: "PERFOMANCE CHECK/NEXT LEG CHECK",
        checked: false,
      },
      {
        id: 11,
        title: "FLIGHT LEVEL CHECK",
        checked: false,
      },
      {
        id: 12,
        title: "TANKERING CHECK",
        checked: false,
      },
    ])
);

export const useFlightData = () => {
  // const checkList = useContext(StoreContext).checklist;
  const [data, setData] = useState(flightDataObject);
  useEffect(() => {
    data.map(
      // (el) => (el.ready = Object.entries(el).every((item) => item[1] !== ""))
      (el) => {
        const flightDataReady = Object.entries(el).every(
          (item) => item[1] !== ""
        );
        const checkListReady = el.checkList.every((i) => i.checked === true);
        if (checkListReady === true && flightDataReady === true) {
          return (el.ready = true);
        } else {
          return (el.ready = false);
        }
      }
    );
  }, [data]);

  const setCrew = (id, value) => {
    const flight = data.filter((f) => f.id === id)[0];
    flight.crew = value;
    setData([...data]);
  };
  const setMins = (id, value) => {
    const flight = data.filter((f) => f.id === id)[0];
    flight.mins = value;
    setData([...data]);
  };
  const setMel = (id, value) => {
    const flight = data.filter((f) => f.id === id)[0];
    flight.mel = value;
    setData([...data]);
  };
  const setPayload = (id, value) => {
    const flight = data.filter((f) => f.id === id)[0];
    flight.payload = value;
    setData([...data]);
  };
  const setTank = (id, value) => {
    const flight = data.filter((f) => f.id === id)[0];
    flight.tank = value;
    setData([...data]);
  };
  const setChecked = (flight, id) => {
    const checkBox = flight.checkList.filter((el) => el.id === id)[0];
    checkBox.checked = !checkBox.checked;
    setData([...data]);
  };

  return { data, setCrew, setMins, setMel, setPayload, setTank, setChecked };
};
