import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../data/db";

function User() {
  const { id } = useParams();

  return (
    <div>
      <h1>
        User with it {id} is named: {users[Number(id) - 1].name}
      </h1>

      <hr />
      <Link to="followers">see follwers</Link>
      
      <Outlet
        context={{
          nameOfMyUser: users[Number(id) - 1].name,
        }}
      />
    </div>
  );
}

export default User;
