import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";
import { moon, sunny } from "ionicons/icons";
import useSwitchDarkMode from "../hooks/useSwitchDarkMode";

const Tab2 : React.FC<{ darkMode: boolean; toggleDarkMode: () => void }> = ({
  darkMode,
  toggleDarkMode,
}) =>{
  return (
    <IonPage className={darkMode ? "dark" : "light"}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem lines="none">
            <IonIcon
              slot="start"
              icon={darkMode ? sunny : moon}
              onClick={toggleDarkMode}
            />
            <IonLabel>
              {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
