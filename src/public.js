import React from "react";
import { Switch, Link, Route, Redirect, NavLink } from "react-router-dom";

export default function Public() {
  return (
    <div>
      <Link to="/public">Public page</Link>
    </div>
  );
}
