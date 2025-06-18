// pages/Home.jsx
import React from 'react'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Bienvenido a mi app con Ionic + React + Vite</h2>
        <IonButton onClick={() => navigate('/about')}>Ir a About</IonButton>
      </IonContent>
    </IonPage>
  )
}
