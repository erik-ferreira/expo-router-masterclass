import { Link } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

import { HeaderDrawer } from "@/components/HeaderDrawer"

export default function NewPost() {
  return (
    <View style={styles.container}>
      <HeaderDrawer />

      <Text style={styles.title}>Novo Post</Text>

      <Link href="/posts/" style={styles.button}>
        Voltar
      </Link>
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

  button: {
    backgroundColor: "#7159c1",
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: "#FFF",
    fontSize: 16,
  },
})
