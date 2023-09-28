import { StyleSheet, Text, View } from "react-native"

export default function Schedules() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedules</Text>
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
