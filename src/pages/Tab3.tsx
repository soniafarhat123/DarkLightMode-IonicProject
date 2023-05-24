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
import "./Tab3.css";
import { moon, sunny } from "ionicons/icons";
import { useEffect } from "react";

const Tab3: React.FC<{ darkMode: boolean; toggleDarkMode: () => void }> = ({
  darkMode,
  toggleDarkMode,
}) => {
  //const toggleDarkModeHandler = () => document.body.classList.toggle("dark");
  //const [darkMode, toggleDarkMode] = useSwitchDarkMode();
  useEffect(() => {
    console.log("Tab3", darkMode, toggleDarkMode);
  }, [darkMode, toggleDarkMode]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* {darkMode ? (
            <IonTitle>Tab 1</IonTitle>
          ) : (
            <IonTitle>Tab 22222222222</IonTitle>
          )} */}
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
          <IonItem lines="none">
            <IonIcon slot="start" icon={darkMode ? sunny : moon} />
            <IonLabel>
              {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </IonLabel>
            <IonToggle
              slot="end"
              name="darkMode"
              checked={darkMode}
              onIonChange={toggleDarkMode}
            />
          </IonItem>
        </IonList>
        <IonList>
          <IonItem>
            <IonSelect aria-label="fruit" placeholder="Select fruit">
              <IonSelectOption value="apples">Apples</IonSelectOption>
              <IonSelectOption value="oranges">Oranges</IonSelectOption>
              <IonSelectOption value="bananas">Bananas</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>
        <IonList>
          <IonItem>
            <IonLabel>Followers</IonLabel>
            <IonBadge color="primary">22k</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Likes</IonLabel>
            <IonBadge color="secondary">118k</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Stars</IonLabel>
            <IonBadge color="tertiary">34k</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Completed</IonLabel>
            <IonBadge color="success">80</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Warnings</IonLabel>
            <IonBadge color="warning">70</IonBadge>
          </IonItem>
          <IonItem>
            <IonLabel>Notifications</IonLabel>
            <IonBadge color="danger">1000</IonBadge>
          </IonItem>
        </IonList>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            Here's a small text description for the card content. Nothing more,
            nothing less.
          </IonCardContent>
        </IonCard>
        <IonCard color="warning">
          <IonCardHeader>
            <IonCardTitle>Card Title</IonCardTitle>
            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>Card Content</IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
