import { StyleSheet, Text, View } from "react-native"

export default function Home() {
  return (
    <View style={styles.container}>
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
