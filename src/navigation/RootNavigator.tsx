import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme, Button } from "@rneui/themed";
import { ScrollView } from "react-native";
import DrawerNavigator from "./DrawerNavigator";
import Avatars from "../views/avatars";
import Cards from "../views/cards";
import Tiles from "../views/tiles";
import Buttons from "../views/buttons";
import Chips from "../views/chips";
import Lists from "../views/lists";
import Lists2 from "../views/lists2";
import Inputs from "../views/inputs";
import Image from "../views/image";
import LinearProgress from "../views/linearProgress";
import Login from "../views/login";
import Pricing from "../views/pricing";
import Ratings from "../views/ratings";
import Settings from "../views/settings";
import SpeedDial from "../views/speedDial";
import Sliders from "../views/sliders";
import Skeleton from "../views/skeleton";
import SocialIcons from "../views/social_icons";
import Fonts from "../views/fonts";
import BottomSheet from "../views/bottomsheet";
import Tooltip from "../views/tooltip";
import Dialogs from "../views/dialogs";
import Overlay from "../views/overlay";
import CheckBox from "../views/checkbox";
import FAB from "../views/fab";
import Theme from "../views/theme";
import Text from "../views/text";
import Tabs from "../views/tabs";
import Badge from "../views/badge";
import WhatsappClone from "../views/whatsappClone";
import Divider from "../views/Divider";

import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function RootNavigator({ navigation }) {
  const { theme } = useTheme();

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: theme?.colors.background,
          primary: "",
          card: "",
          text: "",
          border: "",
          notification: "",
        },
        dark: theme.mode === "dark",
      }}
    >
      <Stack.Navigator
        initialRouteName="BottomSheet"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Avatars" component={Avatars} />
        <Stack.Screen name="Badge" component={Badge} />
        <Stack.Screen name="BottomSheet" component={BottomSheet} />
        <Stack.Screen name="Buttons" component={Buttons} />
        <Stack.Screen name="Cards" component={Cards} />
        <Stack.Screen name="Checkbox" component={CheckBox} />
        <Stack.Screen name="Chips" component={Chips} />
        <Stack.Screen name="Dialogs" component={Dialogs} />
        <Stack.Screen name="Divider" component={Divider} />
        <Stack.Screen name="FAB" component={FAB} />
        <Stack.Screen name="Fonts" component={Fonts} />
        <Stack.Screen name="Image" component={Image} />
        <Stack.Screen name="Inputs" component={Inputs} />
        <Stack.Screen name="LinearProgress" component={LinearProgress} />
        <Stack.Screen name="Lists" component={Lists} />
        <Stack.Screen name="Lists2" component={Lists2} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Overlay" component={Overlay} />
        <Stack.Screen name="Pricing" component={Pricing} />
        <Stack.Screen name="Ratings" component={Ratings} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Slider" component={Sliders} />
        <Stack.Screen name="Skeleton" component={Skeleton} />
        <Stack.Screen name="Social Icons" component={SocialIcons} />
        <Stack.Screen name="Speed Dial" component={SpeedDial} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Text" component={Text} />
        <Stack.Screen name="Theme" component={Theme} />
        <Stack.Screen name="Tiles" component={Tiles} />
        <Stack.Screen name="Tooltip" component={Tooltip} />
        <Stack.Screen name="Whatsapp Clone" component={WhatsappClone} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
