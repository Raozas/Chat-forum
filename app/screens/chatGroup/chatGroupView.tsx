import HeaderExtended from "@/app/components/headerExtended";
import { MessageBubble } from "@/app/components/MessageBubble";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ScrollView, View } from "react-native";
import { useChatGroupViewModel } from "./chatGrouptViewModel";

export default function ChatGroupView() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const groupIdParam = Array.isArray(params.groupId) ? params.groupId[0] : params.groupId;
  const groupId = groupIdParam ? Number(groupIdParam) : 0;

  const { title, messages, userId } = useChatGroupViewModel(groupId);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderExtended
        title={title}
        type="back"
        onPressBack={() => router.back()}
      />
      <ScrollView contentContainerStyle={{ padding: 10 }}>
        {messages.map((msg) => (
          <MessageBubble
            key={msg.id}
            message={msg}
            isMine={msg.userId === userId}
          />
        ))}
      </ScrollView>
    </View>
  );
}
