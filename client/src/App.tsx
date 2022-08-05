import SocketProvider from "./context/SocketContext";
function App() {
  return (
    <SocketProvider>
      <div className="App">app test</div>
    </SocketProvider>
  );
}

export default App;
