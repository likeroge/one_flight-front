import { useContext, useState } from "react";
import { StoreContext } from "../../../store/Store";
import { CheckBox } from "../../UI";
import { FlightHeader, FlightMain } from "./Flight.styles";

export const Flight = ({ flight }) => {
  //Data
  const store = useContext(StoreContext);
  const flights = store.flights;

  //Flight-Accordeon
  const [open, setOpen] = useState(false);
  const onOpenFlightInfo = () => {
    setOpen(!open);
  };

  console.log(flights.data);
  return (
    <>
      <FlightHeader ready={flight.ready} onClick={onOpenFlightInfo}>
        <div className="first">
          <h2>{flight.flight}</h2>
          <h3>A/C {flight.tail}</h3>
        </div>
        <div className="second">
          <h3>
            {flight.depIATA}/{flight.depICAO}
          </h3>
          <h3>{flight.depTime}</h3>
        </div>
        <div className="third">
          <h3>
            {flight.arrIATA}/{flight.arrICAO}
          </h3>
          <h3>{flight.arrTime}</h3>
        </div>
      </FlightHeader>
      <FlightMain open={open}>
        <div className="left">
          {/* {checkList.data.map((el) => ( */}
          {flight.checkList.map((el) => (
            <div className="check" key={el.id}>
              <CheckBox
                type="checkbox"
                checked={el.checked}
                // onChange={() => onCheckHandler(el)}
                onChange={() => flights.setChecked(flight, el.id)}
              />
              {el.title}
            </div>
          ))}
        </div>
        <div className="right">
          <div>
            <p>CREW</p>
            <input
              list="crew"
              onChange={(e) => flights.setCrew(flight.id, e.target.value)}
            />

            <datalist id="crew">
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </datalist>
          </div>
          <div>
            <p>MINS</p>
            <input
              list="mins"
              onChange={(e) => flights.setMins(flight.id, e.target.value)}
            />
            <datalist id="mins">
              <option value="CAT I">CAT I</option>
              <option value="CAT II">CAT II</option>
              <option value="CAT IIIA">CAT IIIA</option>
              <option value="CAT IIIB">CAT IIIB</option>
              <option value="CAT IIIC">CAT IIIC</option>
            </datalist>
          </div>
          <div>
            <p>PAYLOAD</p>
            <input
              type="number"
              onChange={(e) => flights.setPayload(flight.id, e.target.value)}
            />
          </div>
          <div>
            <p>TANK</p>
            <input
              type="number"
              onChange={(e) => flights.setTank(flight.id, e.target.value)}
            />
          </div>
          <div>
            <p>MEL/CDL</p>
            <input
              type="text"
              onChange={(e) => flights.setMel(flight.id, e.target.value)}
            />
          </div>
        </div>
      </FlightMain>
    </>
  );
};
