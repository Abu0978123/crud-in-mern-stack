import React from "react";
import { Link } from "react-router-dom";
import mypic from '../products/mypic.jpg'

export default function Home() {
  return (
    <div className="container rowStyle">
      <div className="row ">
        <div className="col-lg-4 ">
          <div className="card" style={{ width: "21rem" }}>
            <img
              className="card-img-top"
              src={mypic}
            />
            <div className="card-body">
              <h5 className="card-title">Abu Bakar</h5>
              <p className="card-text">
                Hye! this is my 5th mini project on CRUD APIs in React
                using the following technologies
              </p>
            
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">React </li>
              <li className="list-group-item">Bootstrap</li>
              <li className="list-group-item">HTML & SCSS or SASS</li>
            </ul>
            
            <div className="card-body">
              <a className="card-link" href="https://github.com/abu0978123">
                Go to my Github
              </a>
              <a className="card-link" href="https://instagram.com/khapery_">
                Insta
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-8 textAlign " style={{padding: "30px"}} >
         <h5 style={{textAlign:"center", paddingBottom: "5px"}}><i>About my Self</i> </h5>
         <p style={{paddingLeft: "10px"}} >I am recently graduated from Institute of Computer Science and Information Technology, 
which is part of the faculty of the University of Agriculture in Peshawar, Pakistan, with a 
Bachelor's degree in information technology. I've always been a quick learner, and I'm 
mostly known for being motivated to learn new things from smart people and teams. I've 
always had a strong desire to improve my general abilities and achieve excellence in my 
field. I matriculated with honors in 2016, and then completed my intermediate studies in 
2018. I took admission for Bachelor in information Technology in 2018 and will graduate in 
2022. In my final year of college, I worked on domain environments in internet of things. My 
final year project was based on website base (Online Learning System) and its main goal was 
to provide facility to students that how to study through internet online. 

</p>
<h5>Now let's move to my this project</h5>
<p>Add some data to use CRUD operations in my this project</p>
<Link to={'/create'}><button className="btn btn-primary ">Go to</button></Link>

        </div>
        <div></div>
      </div>
    </div>
  );
}
