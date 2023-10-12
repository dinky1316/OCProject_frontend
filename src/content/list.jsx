import axios from "axios";
import React, { useEffect, useState } from "react";

function List() {
  const [list, setList] = useState([]);
  axios
    .get("http://127.0.0.1:8000/list/")
    .then((Response) => {
      setList([...Response.data]);
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <div>
      hello
      {list.map((e) => (
        <div key={e}> {e.title} </div>
      ))}
    </div>
  );
}

export default List;
