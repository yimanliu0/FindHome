import React, { useEffect, useState, useMemo } from "react";
import "./css/table.css";
import { Container, Card } from "react-bootstrap";
import TableContainer from "./TableContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import { SelectColumnFilter } from "./filters";
import { Link } from "react-router-dom";

const Table = () => {
  const [dogs, setDogs] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const getPosts = async () => {
    console.log("getting posts");
    try {
      await fetch("/getdogs")
        .then((res) => res.json())
        .then((result) => {
          setDogs(result);
          setLoaded(true);
        });
      console.log("dogs", dogs);
    } catch (err) {
      console.log("error ", err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const renderRowSubComponent = (row) => {
    const { images } = row.original;
    if (images) {
      return images.map((image) => {
        return (
          <ul>
            <div className="card-container">
              <p></p>
              <img src={image} alt="Home Image"></img>
            </div>
          </ul>
        );
      });
    } else {
      return <ul></ul>;
    }
  };

  const renderRowSubComponent2 = (row) => {
    const { comments } = row.original;
    if (comments) {
      return comments.map((arr) => {
        return (
          <ul>
            <div className="card-container">
              <p>
                <strong>{arr}</strong>
              </p>
            </div>
          </ul>
        );
      });
    } else {
      return <ul></ul>;
    }
  };

  const columns = useMemo(() => [
    {
      Header: () => null,
      id: "expander", // 'id' is required
      Cell: ({ row }) => (
        <span {...row.getToggleRowExpandedProps()}>
          {row.isExpanded ? "Hide️️" : "More"}
        </span>
      ),
    },

    {
      Header: "Date/Time",
      accessor: "date",
    },

    {
      Header: "Price (click me to sort)",
      accessor: "price",
    },
    {
      Header: "Specs",
      accessor: "housing",
      disableSortBy: true,
      Filter: SelectColumnFilter,
      filter: "equals",
    },

    {
      Header: "Neighborhood",
      accessor: "result-hood",
      disableSortBy: true,
      Filter: SelectColumnFilter,
      filter: "equals",
    },
    {
      Header: "Info",
      accessor: "result-title",
      disableSortBy: true,
      Filter: SelectColumnFilter,
    },
  ]);

  return (
    <div>
      <body>
        <div className="navbar1" role="navigation">
          <div className="first">
            <Link to="/map">
              <button type="button2">Crime Heatmap</button>
            </Link>
          </div>
          <div className="second">
            <Link to="/commentpage">
              <button type="button2">Add a comment</button>
            </Link>
          </div>
          <Link to="/userprofile">
            <button type="button2">Update Account</button>
          </Link>
          <form className="form1" action="/auth/signout" method="post">
            <button type="button3">Sign Out</button>
          </form>
        </div>
        <main>
          <Container style={{ marginTop: 100 }}>
            <h1 id="header">
              Now is the time to find your dream home <br />
              Press on "More" to see pics and comments
            </h1>
            <div className="table" role="tab">
              <TableContainer
                columns={columns}
                data={dogs}
                renderRowSubComponent={renderRowSubComponent}
                renderRowSubComponent2={renderRowSubComponent2}
              />
            </div>
          </Container>
        </main>
      </body>
    </div>
  );
};
export default Table;
