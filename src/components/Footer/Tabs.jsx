import React from 'react';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/react';
import { playCircle, radio, library, search } from 'ionicons/icons';
import { Routes, Route, Navigate } from 'react-router-dom';

function ListenNow() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Listen now</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="example-content">Listen now content</div>
      </IonContent>
    </IonPage>
  );
}

function Radio() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Radio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="example-content">Radio content</div>
      </IonContent>
    </IonPage>
  );
}

function Library() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Library</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="example-content">Library content</div>
      </IonContent>
    </IonPage>
  );
}

function Search() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="example-content">Search content</div>
      </IonContent>
    </IonPage>
  );
}

const Footer = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Routes>
          <Route path="/home" element={<ListenNow />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/library" element={<Library />} />
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={playCircle} />
          <IonLabel>Listen Now</IonLabel>
        </IonTabButton>

        <IonTabButton tab="radio" href="/radio">
          <IonIcon icon={radio} />
          <IonLabel>Radio</IonLabel>
        </IonTabButton>

        <IonTabButton tab="library" href="/library">
          <IonIcon icon={library} />
          <IonLabel>Library</IonLabel>
        </IonTabButton>

        <IonTabButton tab="search" href="/search">
          <IonIcon icon={search} />
          <IonLabel>Search</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default Footer;
