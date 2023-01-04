import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const URLUpdate = "http://localhost:4000/update";
const URLRead = "http://localhost:4000/read";
export default function Update({}) {
  const Navigate = useNavigate();
  const { _id } = useParams();
  // console.log(Data.id)
  // console.log(Data)
  // const {Fname, Lname, _id} = Data;
  
  const [Dataa, setData] = useState({
    Fname: '',
    Lname: '',
});
  useEffect(() => {
    getData();
  }, []);
  //using get method to fetch data from json server
  async function getData() {
    try {
      const Dataa = await axios.get(`http://localhost:4000/read/${Dataa._id}`);
      setData(Dataa.data);
      // console.log(Dataa.Fname)
    } catch (error) {
      console.log("someThing is going wrong", error.message);
    }
  }
  function onChangeFunc(e) {
    setData({ ...Dataa, [e.target.name]: e.target.value });
  }
  async function postData(e) {
    e.preventDefault();
    await axios
      .put(`${URLUpdate}/${_id}`, Dataa)
      .then((res) => {
        console.log(res);
        Navigate("/read");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  console.log(Dataa)
  return (
    <div>
      <div className="formm">
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              ID
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              disabled
              value={Dataa?._id}
              name="_id"
              // onChange={((e)=>{setFname(e.target.value)})}
            />

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Update First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter First Name"
                aria-describedby="emailHelp"
                name="Fname"
                value={Dataa?.Fname}
                // onChange={((e)=>{setFname(e.target.value)})}
                onChange={
                  onChangeFunc}
              />
            </div>
            <div id="emailHelp" className="form-text">
              We'll never share your confidential data with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Update Last Name
            </label>
            <input
              placeholder=" Enter your Last Name"
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              name="Lname"
              value={Dataa?.Lname}
              // onChange={((e)=>{setLname(e.target.value)})}
              onChange={
                onChangeFunc}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={postData}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
