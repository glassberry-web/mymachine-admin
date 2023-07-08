import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes/AllRoutes";


function App() {
  console.log("here.................")
  return (
    <Router>
      <AllRoutes />
    </Router>
  );
}

export default App;
