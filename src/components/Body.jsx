import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Body = () => {
  const [data, setData] = useState([]);
  const[type , setType] = useState('')

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://bayut.p.rapidapi.com/properties/list",
      params: {
        locationExternalIDs: "5002,6020",
        purpose: "for-rent",
        hitsPerPage: "39",
        page: "0",
        lang: "en",
        sort: "city-level-score",
        rentFrequency: "monthly",
        categoryExternalID: "4",
      },
      headers: {
        'X-RapidAPI-Key': '98979a68a7mshad95331fbf60ed5p1ba4e6jsn8260fe8b5988',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
      },
    };
    const getData = () => {
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
          setData(response.data.hits);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    getData();
  }, []);

  const onChangeHandler =(e)=>{
    setType(e.target.value)
  }
  
  const submitHandler = (e)=>{
      e.preventDefault()
    
  }

  console.log(data);

  return (
    <>
      <nav className="navbar navbar-light  mt-2">
  <div className="container-fluid justify-content-center">
    <form className="d-flex " onSubmit={submitHandler}>
      <input className="form-control me-2" type="search" placeholder="UNDER PROCESS" aria-label="Search"
        value={type} onChange={onChangeHandler}
      />
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
      {data.map((item, index) => {
        return (
          <div className="cards">
            <div
              className="card"
              style={{ width: "18rem", border: "4px solid #6a5acd" }}
              key={index}
            >
              <img
                src={item.coverPhoto.url}
                className="card-img-top"
                alt="..."
                style={{ backgroundColor: "#fff", height: 250 }}
              />
              <div className="card-body" style={{ backgroundColor: "#fff" }}>
                <h5 className="card-title" style={{ backgroundColor: "#fff" }}>
                  {item.title}
                </h5>
              </div>
              <ul
                className=" list-group-flush"
                style={{ backgroundColor: "#fff" }}
              >
                <li className="list-group-item" style={{ marginBottom: "2px" }}>
                  Rent:- Rs.{item.price}/month
                </li>
                <li className="list-group-item" style={{ marginBottom: "2px" }}>
                  <i
                    className="fa fa-bed"
                    style={{ backgroundColor: "#fff" }}
                  ></i>{" "}
                  {item.rooms} Rooms ||
                  <i class="fa fa-bath" style={{ backgroundColor: "#fff" }}></i>{" "}
                  {item.baths} Baths
                </li>
                <li className="list-group-item" style={{ marginBottom: "2px" }}>
                  Area:{item.area}cm2
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Body;
