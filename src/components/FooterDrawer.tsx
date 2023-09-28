import { Feather } from "@expo/vector-icons"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"

interface FooterDrawerProps {}

export function FooterDrawer({ ...rest }: FooterDrawerProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://github.com/erik-ferreira.png" }}
        style={styles.avatar}
      />

      <View style={styles.userInfo}>
        <Text style={styles.userName}>Erik Ferreira</Text>
        <Text style={styles.userEmail}>erik@gmail.com</Text>
      </View>

      <TouchableOpacity activeOpacity={0.7}>
        <Feather name="log-out" size={22} color="#999" />
      </TouchableOpacity>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    padding: 16,

    gap: 8,
    alignItems: "center",
    flexDirection: "row",
  },

  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },

  userInfo: {
    flex: 1,
  },

  userName: {
    color: "#FFF",
    fontSize: 16,
  },

  userEmail: {
    color: "#999",
    fontSize: 14,
  },
})
