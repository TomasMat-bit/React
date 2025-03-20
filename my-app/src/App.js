import React, { useState, useEffect } from "react";

const API_URL = "http://127.0.0.1:5000/tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();

      setTasks(data);
    } catch (error) {
      console.log("klaida gaunant duomenis", error);
    }
  };

  const addTask = async () => {
    if (newTask.trim()) {
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: newTask }),
        });

        if (response.ok) {
          const newTaskData = await response.json();
          setTasks([...tasks, newTaskData]);
          setNewTask("");
        }
      } catch (error) {
        console.log("Klaida pridedant uzduoti", error);
      }
    }
  };

  const toggleTask = async (id, completed) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed: !completed }),
      });

      if (response.ok) {
        fetchTasks();
      }
    } catch (error) {
      console.log("Klaida atnaujinant uzduoti", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setTasks(tasks.filter((task) => task.id !== id));
      }
    } catch (error) {
      console.log("Klaida trinant uzduoti", error);
    }
  };

  return (
    <div>
      <h1>Uzduociu sarasas</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Iveskite nauja uzduoti..."
        />
        <button onClick={addTask}>Prideti</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span
              onClick={() => toggleTask(task.id, task.completed)}
              style={{
                textDecoration: task.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {task.title}
            </span>
            <button onClick={() => deleteTask(task.id)}>Istrinti</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
