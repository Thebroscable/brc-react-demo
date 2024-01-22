import React from "react";
import { Route } from "react-router-dom"
import PageWrapper from "../components/layout/PageWrapper"
import appRoutes from "./appRoutes"

const generateRoute = (routes) => {
  return routes.map((route, index) => {
    return route.index ? (
      <Route 
        index 
        path={route.path} 
        element={
          <PageWrapper state={route.state}>
            {route.element}
          </PageWrapper>
        }
      />
    ) : (
      <Route 
        path={route.path} 
        element={
          <PageWrapper state={route.state ?? undefined}>
            {route.element}
          </PageWrapper>
        }
        key={index}
      >
        {route.child && (
          generateRoute(route.child)
        )}
      </Route>
    )
  })
}

export const routes = generateRoute(appRoutes);