import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from "@react-navigation/drawer"
import { View, Text, StyleSheet } from "react-native"

interface CustomDrawerProps extends DrawerContentComponentProps {}

export function CustomDrawer({ ...rest }: CustomDrawerProps) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <DrawerItemList {...rest} />
      </DrawerContentScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
})
