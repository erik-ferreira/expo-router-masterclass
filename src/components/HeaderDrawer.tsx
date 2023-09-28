import { useNavigation } from "expo-router"
import { Feather } from "@expo/vector-icons"
import { DrawerActions } from "@react-navigation/routers"
import { useDrawerStatus } from "@react-navigation/drawer"
import { TouchableOpacity, StyleSheet } from "react-native"

export function HeaderDrawer() {
  const navigation = useNavigation()
  const isDrawerOpen = useDrawerStatus() === "open"

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
    >
      <Feather name={isDrawerOpen ? "x" : "menu"} size={24} color="#fff" />
    </TouchableOpacity>
  )
}

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 42,
    right: 42,
    zIndex: 1,
    alignItems: "flex-end",
  },
})
