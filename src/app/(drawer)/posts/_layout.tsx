import { Stack } from "expo-router/stack"
import { Feather } from "@expo/vector-icons"

export default function DrawerLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="new" />
      <Stack.Screen name="[...rest]" />
    </Stack>
  )
}
