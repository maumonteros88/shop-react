import Routes from "./routes/Routes";
import { CarritoContexto } from "./provider/CardProvider";

function App() {
  return (
    <CarritoContexto>
      <Routes />
    </CarritoContexto>
  );
}

export default App;
