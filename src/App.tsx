import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import BHWAdminDashboard from './pages/BHWAdminDashboard';
import MotherDashboard from './pages/MotherDashboard';
import MotherProfilePage from './pages/MotherProfilePage';
import Activitylogs from './pages/Activitylogs';
import Schedules from './pages/Schedules';
import ReportStats from './pages/ReportStats';
import Verifications from './pages/Verifications';
import History from './pages/History';
import Settings from './pages/Settings';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
         <Route exact path="/bhwadmindashboard">
          <BHWAdminDashboard />
        </Route>  
        <Route exact path="/motherdashboard">
          <MotherDashboard /> 
        </Route>  
        <Route exact path="/motherprofilepage">
          <MotherProfilePage />
        </Route> 
        <Route exact path="/activity-logs">
          <Activitylogs />
        </Route> 
        <Route exact path="/schedules">
          <Schedules />
        </Route>  
        <Route exact path="/reports">
          <ReportStats />
        </Route> 
        <Route exact path="/verifications">
          <Verifications />
        </Route>      
        <Route exact path="/history">
          <History />
        </Route>  
        <Route exact path="/settings">
          <Settings />
        </Route>             
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
