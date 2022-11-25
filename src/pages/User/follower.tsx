import React from "react";
import { useOutletContext } from "react-router-dom";

interface FollowersContext {
  nameOfMyUser: string;
}

function Follower() {
  const { nameOfMyUser } = useOutletContext<FollowersContext>();
  console.log("{nameOfMyUser}>>>>>", nameOfMyUser);

  return <div>Here are {nameOfMyUser}의 follwers</div>;
}

export default Follower;
