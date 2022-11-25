import React from "react";
import { Link } from "react-router-dom";
import { users } from "../../data/db";

function Home() {
  // const [readSearchParms, setSearchParms] = useSearchParams();

  // setTimeout(() => {
  //   setSearchParms({
  //     day: "today",
  //   });
  // }, 3000);

  return (
    <div>
      <ul>
        {users.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link to={`/users/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
