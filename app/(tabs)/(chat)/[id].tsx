import HeaderExtended from "../../components/headerExtended";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import messages from "./messages.json";

const MyMessage = ({ message }: { message: (typeof messages)[0] }) => (
  /* @ts-ignore */
  <View style={styles.myMessageContainer}>
    {/* @ts-ignore */}
    <Text style={styles.messageText}>{message.text}</Text>
  </View>
);

const Message = ({ message }: { message: (typeof messages)[0] }) => (
  /* @ts-ignore */
  <View style={styles.messageContainer}>
    {/* @ts-ignore */}
    <Text style={styles.messageText}>{message.text}</Text>
  </View>
);

export default function ChatPage() {
  const params = useLocalSearchParams();
  const router = useRouter();
  let title = params.title;
  if (Array.isArray(title)) title = title[0];
  const chat = params.chat;
  const userID = "12345";
  console.log("messages", messages, userID);

  return (
    <View>
      <HeaderExtended
        title={title}
        type="back"
        onPressBack={() => router.back()}
        onPress2={() => console.log("ghjk")}
        type2="function"
      />
      {messages
        .filter((msg) => msg.groupId === params.groupId)
        .map((msg) =>
          msg.userId === userID ? (
            <MyMessage key={msg.id} message={msg} />
          ) : (
            <Message key={msg.id} message={msg} />
          )
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  myMessageContainer: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#1e6091",
    borderRadius: 10,
    maxWidth: "65%",
    /* @ts-ignore */
    width: "fit-content",
    alignSelf: "flex-end",
    // Shadow for iOS
    shadowColor: "#000",
  },
  messageContainer: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#168aad",
    borderRadius: 10,
    maxWidth: "65%",
    /* @ts-ignore */
    width: "fit-content",
    alignSelf: "flex-start",
    // Shadow for iOS
    shadowColor: "#000",
  },
  messageText: {
    color: "#fff",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
});
