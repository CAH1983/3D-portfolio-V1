import NavBar from "./Components/NavBar";
import Scene3DHero from "./Components/Scene3DHero";

function App() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full pb-20">
     <NavBar/>
     <div className="relative w-full" id='home' > 
     <Scene3DHero/>
     </div>
    </div>
  );
}

export default App;
