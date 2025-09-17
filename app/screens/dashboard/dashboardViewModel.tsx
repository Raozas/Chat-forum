import { ChatGroupModel } from "@/app/model/chatGroupModel";
import { MessageModel } from "@/app/model/messageModel";
import { darkTheme, lightTheme } from "@/app/utils/theme";
import { useMemo, useState } from "react";

export function useDashboardViewModel() {
  const mockMessages: MessageModel[] = [
    { id: 1, text: "Hello!", userId: 12345, groupId: 1 },
    { id: 2, text: "Hi there!", userId: 67890, groupId: 2 },
    { id: 3, text: "How are you?", userId: 12345, groupId: 3 },
    { id: 4, text: "I'm good, thanks! And you?", userId: 67890, groupId: 3 },
  ];

  const chats: ChatGroupModel[] = [
    { id: 1, title: "JDU", groupId: 1 },
    { id: 2, title: "WSLU", groupId: 2 },
    { id: 3, title: "UWED", groupId: 3 },
  ];

  const chatList = useMemo(() => {
    return chats.map((chat) => {
      const groupMessages = mockMessages.filter(
        (m) => m.groupId === chat.groupId
      );
      const lastMessage =
        groupMessages.length > 0
          ? groupMessages[groupMessages.length - 1].text
          : "";

      return {
        ...chat,
        lastMessage,
        lastMessageShort:
          lastMessage.length > 30 ? lastMessage.slice(0, 30) + "..." : lastMessage,
      };
    });
  }, []);

  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? darkTheme : lightTheme;

  const options = [
    { name: "Profile", icon: "user" as const },
    { name: "Settings", icon: "settings" as const },
    { name: "Help", icon: "help-circle" as const },
  ];

  return {
    chats: chatList,
    theme,
    options,
    isDark,
    toggleTheme: () => setIsDark((prev) => !prev),
  };
}
