import { StyleSheet, Text, View } from "react-native"
import { Link, useLocalSearchParams } from "expo-router"

import { HeaderDrawer } from "@/components/HeaderDrawer"

export default function EditPost() {
  const params = useLocalSearchParams()
  const [id, category] = params.rest

  return (
    <View style={styles.container}>
      <HeaderDrawer />

      <Text style={styles.title}>Editar Post: {id}</Text>
      <Text style={styles.title}>Categoria: {category}</Text>

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
