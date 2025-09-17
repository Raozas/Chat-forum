import { MessageModel } from "@/app/model/messageModel";
import { useMemo } from "react";

const mockMessages: MessageModel[] = [
  { id: 1, text: "Hello!", userId: 12345, groupId: 1 },
  { id: 2, text: "Hi there!", userId: 67890, groupId: 2 },
  { id: 3, text: "How are you?", userId: 12345, groupId: 3 },
  { id: 4, text: "I'm good, thanks! And you?", userId: 67890, groupId: 3 },
];

const CURRENT_USER_ID = 12345;

export function useChatGroupViewModel(groupId: number) {
  const messages = useMemo(
    () => mockMessages.filter((m) => m.groupId === groupId),
    [groupId]
  );

  return {
    title: `Chat ${groupId}`,
    messages,
    userId: CURRENT_USER_ID,
  };
}
