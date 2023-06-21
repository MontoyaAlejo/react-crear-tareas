import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";

function App() {
  return (
    <main className="bg bg-zinc-900 h-screen mx-auto p-10">
      <TaskForm  />
      <TaskList />
    </main>
  );
}

export default App;
