import React from "react";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { useRoutes } from "react-router-dom";
import routes from "./routes.jsx";

setupIonicReact();

export default function App() {
  const element = useRoutes(routes);

  return (
    <IonApp>
        <IonRouterOutlet>
          {element}
        </IonRouterOutlet>
    </IonApp>
  );
}
