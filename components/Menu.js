import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import NovaMoto from '../pages/NovaMoto';
import Perfil from '../pages/Perfil';
import PatioZonas from '../pages/PatioZonas';

import TabIcon from '../components/TabIcon';

import dashboard from '../assets/icons/dashboard.png';
import dashboardWhite from '../assets/icons/dashboard-white.png';
import vehicle from '../assets/icons/vehicle.png';
import vehicleWhite from '../assets/icons/vehicle-white.png';
import profile from '../assets/icons/profile.png';
import profileWhite from '../assets/icons/profile-white.png';
import colors from '../theme/colors';

const Tab = createBottomTabNavigator();

const icons = {
  Home: { icon: dashboard, iconFocused: dashboardWhite },
  NovaMoto: { icon: vehicle, iconFocused: vehicleWhite },
  Perfil: { icon: profile, iconFocused: profileWhite },
  PatioZonas: { icon: vehicle, iconFocused: vehicleWhite },
};

export default function Menu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { icon, iconFocused } = icons[route.name];
          return <TabIcon icon={icon} iconFocused={iconFocused} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.inative,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.borderTop,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="NovaMoto" component={NovaMoto} />
      <Tab.Screen name="PatioZonas" component={PatioZonas} />
      <Tab.Screen name="Perfil" component={Perfil} />
    </Tab.Navigator>
  );
}
