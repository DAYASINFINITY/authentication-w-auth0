import React from "react";
import { Switch, Link, Route, Redirect, NavLink } from "react-router-dom";

export default function Private() {
  return (
    <div>
      <Link to="/private">Private page</Link>
    </div>
  );
}
