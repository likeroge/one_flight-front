import { useContext } from "react";
import { StoreContext } from "../../store/Store";
import { FlightListWrapper } from "./Flight.styles";
import { Flight } from "./Flight/Flight";

export const FlightList = () => {
  //Data
  const store = useContext(StoreContext);
  const flights = store.flights;

  return (
    <FlightListWrapper>
      {flights.data.map((f) => (
        <Flight flight={f} key={f.id} />
      ))}
    </FlightListWrapper>
  );
};
