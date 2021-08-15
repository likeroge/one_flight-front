import { FlightList } from "./components/FlightList/FlightList";
import { Header } from "./components/Header/Header";
import { AppWrapper } from "./components/UI";

function App() {
  return (
    <AppWrapper>
      <Header />
      <FlightList />
    </AppWrapper>
  );
}

export default App;
