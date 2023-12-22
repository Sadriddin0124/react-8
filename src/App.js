import React from "react";
import { useState } from "react";
export default function App() {
  const [radio, changeRadio] = useState("Ushbu amalga rozimisiz?");
  const [candidates, setCandidate] = useState([
    {
      id: 1,
      firstname: "John",
      lastname: "Smith",
      age: 45,
      number: 100,
      city: "Chicago",
      state: "IL",
      salary: 1000,
    },
    {
      id: 2,
      firstname: "Jane",
      lastname: "Doe",
      age: 25,
      number: 100,
      city: "Phoenix",
      state: "AZ",
      salary: 5000,
    },
    {
      id: 3,
      firstname: "Mary",
      lastname: "Smith",
      age: 40,
      number: 200,
      city: "Chicago",
      state: "IL",
      salary: 2500,
    },
    {
      id: 4,
      firstname: "George",
      lastname: "Edwards",
      age: 50,
      number: 300,
      city: "Phoenix",
      state: "AZ",
      salary: 3000,
    },
  ]);
  const [users, setUsers] = useState([
    {
      id: 1,
      firstname: "George",
      lastname: "Washington",
      age: 34,
      mail: "gwashington@gmail.com",
    },
    {
      id: 2,
      firstname: "Benjamin",
      lastname: "Franklin",
      age: 44,
      mail: "bfranklin@gmail.com",
    },
    {
      id: 3,
      firstname: "Volodya",
      lastname: "Adidas",
      age: 24,
      mail: "vadidas@gmail.com",
    },
  ]);
  const [username, setUsername] = useState('')
  const [addUser, setUser] = useState([
    {id: '', firstname: '', lastname: '', age: "", mail: ""}
  ])
  const yes = () => {
    changeRadio("Ushbu amalga rozisiz");
  };
  const no = () => {
    changeRadio("Siz bunga qarshisiz");
  };
  const getArmy = () => {
    let filter_candidates = candidates.filter((item) => item.age > 25);
    setCandidate(filter_candidates);
  };
  const handleInput =(event)=> {
    let result = event.target.value
    setUsername(result)
  }
  const filter = () => {
    let filter_users = users.filter((item) => item.firstname === username || item.lastname === username);
    console.log(filter_users);
    setUsers(filter_users);
  };
  const handleId =(event)=> {
    let result = event.target.value
    let filtered_user = addUser.filter((item)=> item.id = result)
    setUser(filtered_user)
  }
  const handleFirstname =(event)=> {
    let result = event.target.value
    let filtered_user = addUser.filter((item)=> item.firstname = result)
    setUser(filtered_user)
  }
  const handleLastname =(event)=> {
    let result = event.target.value
    let filtered_user = addUser.filter((item)=> item.lastname = result)
    setUser(filtered_user)
  }
  const handleAge =(event)=> {
    let result = event.target.value
    let filtered_user = addUser.filter((item)=> item.age = result)
    setUser(filtered_user)
  }
  const handleMail =(event)=> {
    let result = event.target.value
    let filtered_user = addUser.filter((item)=> item.mail = result)
    setUser(filtered_user)
  }
  const add_user =()=> {
    let result = [...users, ...addUser]
    setUsers([...result])
  }
  const removeSearch =()=> {
    window.location.reload(false);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3">
          <h1 className="text-success">Homework 1</h1>
          <h1>{radio}</h1>
          <label onClick={yes}>
            Yes
            <input type="radio" name="radio" className="radio m-2 " />
          </label>
          <label onClick={no}>
            No
            <input type="radio" name="radio" className="radio m-2" />
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-3">
          <h1 className="text-success">Homework 2</h1>
          <button className="btn btn-warning m-3" onClick={getArmy}>
            Armiyaga qabul qilish
          </button>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>FirstName</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Dept_Number</th>
                <th>City</th>
                <th>State</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              {candidates.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.age}</td>
                    <td>{item.number}</td>
                    <td>{item.city}</td>
                    <td>{item.state}</td>
                    <td>{item.salary}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-6 offset-3">
          <h1 className="text-success">Homework 3</h1>
          <div className="d-flex ">
            <input
              type="text"
              placeholder="Search..."
              className="form-control"
              onChange={handleInput}
            />
            <button className="btn btn-dark" onClick={filter}>
              Search
            </button>
          </div>
          <button className="btn btn-outline-warning m-3" onClick={add_user}>Add user</button>
          <button className="btn btn-danger m-3" onClick={removeSearch}>Clear</button>
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Mail</th>
              </tr>
            </thead>
              
            <tbody>
              {users.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.firstname}</td>
                    <td>{item.lastname}</td>
                    <td>{item.age}</td>
                    <td>{item.mail}</td>
                  </tr>
                );
              })}
              <tr>
                <td>
                  <input type="number" className="form-control" onChange={handleId} placeholder="ID"/>
                </td>
                <td>
                  <input type="text" className="form-control" onChange={handleFirstname} placeholder="Firstname"/>
                </td>
                <td>
                  <input type="text" className="form-control" onChange={handleLastname} placeholder="Lastname"/>
                </td>
                <td>
                  <input type="number" className="form-control" onChange={handleAge} placeholder="Age"/>
                </td>
                <td>
                  <input type="text" className="form-control" onChange={handleMail} placeholder="Mail"/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
