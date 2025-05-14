import { z } from 'zod';
const SystemMessage = z.object({
    role: z.literal("system"),
    content: z.string(),
});
const UserMessage = z.object({
    role: z.literal("user"),
    content: z.string(),
});
const AssistantMessage = z.object({
    role: z.literal("assistant"),
    content: z.string().optional(),
    tool_calls: z.array(z.object({
        id: z.string(),
        type: z.literal("function"),
        function: z.object({
            name: z.string(),
            arguments: z.string(),
        }),
    })).optional(),
});
const ToolMessage = z.object({
    role: z.literal("tool"),
    content: z.string(),
    tool_call_id: z.string(),
    tool_name: z.string(),
});
export const ChatCloseReason = z.union([
    z.literal('user-closed-chat'),
    z.literal('assistant-closed-chat'),
    z.literal('timeout'),
    z.literal('error'),
]);
export const Chat = z.object({
    version: z.literal('v1'),
    projectId: z.string(),
    userId: z.string(),
    createdAt: z.string().datetime(),
    closed: z.boolean().optional(),
    closedAt: z.string().datetime().optional(),
    closeReason: ChatCloseReason.optional(),
    lastAgentId: z.string().optional(),
});
const BaseChatMessage = z.object({
    version: z.literal('v1'),
    chatId: z.string(),
    createdAt: z.string().datetime(),
});
export const ChatMessage = BaseChatMessage
    .and(z.discriminatedUnion("role", [
    SystemMessage,
    UserMessage,
    AssistantMessage,
    ToolMessage,
]));
export const ApiCreateChatRequest = z.object({
    user_id: z.string().optional(), // if not provided, we will generate a random user_id
});
export const ApiCreateChatResponse = Chat
    .and(z.object({
    id: z.string(),
}));
export const ApiGetChatResponse = ApiCreateChatResponse;
export const ApiGetChatsResponse = z.object({
    chats: z.array(Chat.and(z.object({
        id: z.string(),
    }))),
    next: z.string().optional(),
    previous: z.string().optional(),
});
export const ApiChatTurnRequest = z.object({
    message: z.string(), // user message
});
export const ApiChatTurnResponse = ChatMessage
    .and(BaseChatMessage)
    .and(AssistantMessage)
    .and(z.object({
    id: z.string(),
}));
export const ApiGetChatMessagesResponse = z.object({
    messages: z.array(ChatMessage.and(z.object({
        id: z.string(),
    }))),
    next: z.string().optional(),
    previous: z.string().optional(),
});
