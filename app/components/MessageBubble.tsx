import { MessageModel } from "@/app/model/messageModel";
import { StyleSheet, Text, View } from "react-native";

type Props = { message: MessageModel; isMine: boolean };

export const MessageBubble = ({ message, isMine }: Props) => {
  return (
    <View style={[styles.container, isMine ? styles.myMessage : styles.otherMessage]}>
      <Text style={styles.text}>{message.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    maxWidth: "65%",
    shadowColor: "#000",
  },
  myMessage: {
    backgroundColor: "#1e6091",
    alignSelf: "flex-end",
  },
  otherMessage: {
    backgroundColor: "#168aad",
    alignSelf: "flex-start",
  },
  text: {
    color: "#fff",
    fontFamily: "Poppins-Regular",
    fontSize: 12,
  },
});
