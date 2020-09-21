import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ComponentsOverview from "./views/ComponentsOverview";
// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import Tables from "./views/Tables";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-overview" />
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/Tables",
    layout: DefaultLayout,
    component: Tables
  },
];
