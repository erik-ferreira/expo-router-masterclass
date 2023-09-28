import { StyleSheet, Text, View } from "react-native"

import { HeaderDrawer } from "@/components/HeaderDrawer"

export default function Home() {
  return (
    <View style={styles.container}>
      <HeaderDrawer />

      <Text style={styles.title}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121214",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    fontSize: 32,
    color: "#FFF",
  },
})
