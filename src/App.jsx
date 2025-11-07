import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import CardCollection from "./pages/CardCollection";
import Contact from "./pages/Contact";

function App() {
  const obj1 = [
    {
      id: 1,
      name: "Aqkhan",
      Age: 25,
      gender: "male",
    },
    {
      id: 2,
      name: "Kumail",
      Age: 22,
      gender: "male",
    },
    {
      id: 3,
      name: "Amir",
      Age: 24,
      gender: "male",
    },
  ];

  function HandleMyFunction(user) {
    alert(`Hello ${user}`);
  }
  return (
    <BrowserRouter>
      <Navbar />
      {/* <CardCollection /> */}
      <Routes>
        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <h1 className="text-5xl font-bold underline">Hello world!</h1>
      <CardCollection />

      <button onClick={() => HandleMyFunction("Abdul Qayyum Waseem Khan")}>
        Click
      </button>
      {/* <table border={1}>
        <thead>
          <tr>
            <td>name</td>
            <td>Age</td>
            <td>Gender</td>
          </tr>
        </thead>
        <tbody>
          {
              obj1.map((user)=>{
                return(
                  <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.Age}</td>
                  <td>{user.gender}</td>
                </tr>
                )
              })
            }
        </tbody>
      </table> */}
    </BrowserRouter>
  );
}

export default App;
