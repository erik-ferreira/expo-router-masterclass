import { Drawer } from "expo-router/drawer"
import { Feather } from "@expo/vector-icons"

import { CustomDrawer } from "@/components/CustomDrawer"

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveTintColor: "#FFF",
        drawerActiveBackgroundColor: "#2b2b2b",
        drawerInactiveTintColor: "#999",
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Home",
          drawerIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="posts"
        options={{
          // drawerItemStyle: { display: "none" } // Hide this screen from drawer
          drawerLabel: "Posts",
          drawerIcon: ({ size, color }) => (
            <Feather name="edit" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="schedules"
        options={{
          drawerLabel: "Agendamentos",
          drawerIcon: ({ size, color }) => (
            <Feather name="calendar" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  )
}
