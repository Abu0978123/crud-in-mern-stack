import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate,useParams } from "react-router-dom";
const URL = "http://localhost:4000/read";
export default function Read({Data}) {
  let { userId } = useParams();
  const navigate = useNavigate();
  const [Dataa, setData] = useState();
  useEffect(() => {
    getData();
  }, []);

  //using get method to fetch data from json server
  async function getData() {
    try {
      const Dataa = await axios.get(URL);
      setData(Dataa.data);
    } catch (error) {
      console.log("someThing is going wrong");
    }
  }
  //the following function for delete data through APIs
  async function handleDelete(_id) {
    await axios
      .delete(`http://localhost:4000/delete/${_id}`)
      .then(()=>{
        getData();
      })
      
  }
  // the following function is for update the target data by id
  async function updatefun(_id) {
    await axios
      .get(`http://localhost:4000/read/${_id}`)
      .then(()=>{
        getData();
      })
      
  }
  // console.log(Dataa._id)
  return (
    <div className="container customTable">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Dataa && Dataa.length > 0 ? (
            Dataa.map((items, i) => (
              <tr key={i}>
                <th scope="row">{items._id}</th>
                <td>{items.Fname}</td>
                <td>{items.Lname}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleDelete(items._id)}
                  >
                    Delete
                  </button>
                  <Link to={`/read/${items._id}`}>
                    <button className="btn btn-primary"   onClick={() => updatefun(items._id)}>Edit</button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Data founded</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
