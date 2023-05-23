import {
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToggle,
  IonToolbar,
} from "@ionic/react";
import "./Tab2.css";
import { moon, sunny } from "ionicons/icons";
import useSwitchDarkMode from "../components/useSwitchDarkMode";

const Tab2: React.FC = () => {
  //const toggleDarkModeHandler = () => document.body.classList.toggle("dark");
  const [darkMode, toggleDarkMode] = useSwitchDarkMode();

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
