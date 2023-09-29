import { StyleSheet, Text, View } from "react-native"
import { Link } from "expo-router"

import { HeaderDrawer } from "@/components/HeaderDrawer"

export default function Posts() {
  return (
    <View style={styles.container}>
      <HeaderDrawer />

      <Text style={styles.title}>Posts</Text>

      <Link href="/posts/new" style={styles.button}>
        Novo Post
      </Link>

      <Link href="/posts/11/chocolate" style={styles.button}>
        Editar Post
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
    gap: 24,
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
