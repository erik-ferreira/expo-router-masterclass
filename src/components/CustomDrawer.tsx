import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerContentComponentProps,
} from "@react-navigation/drawer"
import { View, StyleSheet } from "react-native"

import { FooterDrawer } from "./FooterDrawer"

interface CustomDrawerProps extends DrawerContentComponentProps {}

export function CustomDrawer({ ...rest }: CustomDrawerProps) {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView>
        <DrawerItemList {...rest} />
      </DrawerContentScrollView>

      <FooterDrawer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
  },
})
