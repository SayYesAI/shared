import { z } from 'zod';
export declare const ChatCloseReason: z.ZodUnion<[z.ZodLiteral<"user-closed-chat">, z.ZodLiteral<"assistant-closed-chat">, z.ZodLiteral<"timeout">, z.ZodLiteral<"error">]>;
export declare const Chat: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    projectId: z.ZodString;
    userId: z.ZodString;
    createdAt: z.ZodString;
    closed: z.ZodOptional<z.ZodBoolean>;
    closedAt: z.ZodOptional<z.ZodString>;
    closeReason: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"user-closed-chat">, z.ZodLiteral<"assistant-closed-chat">, z.ZodLiteral<"timeout">, z.ZodLiteral<"error">]>>;
    lastAgentId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    version: "v1";
    projectId: string;
    userId: string;
    createdAt: string;
    closed?: boolean | undefined;
    closedAt?: string | undefined;
    closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
    lastAgentId?: string | undefined;
}, {
    version: "v1";
    projectId: string;
    userId: string;
    createdAt: string;
    closed?: boolean | undefined;
    closedAt?: string | undefined;
    closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
    lastAgentId?: string | undefined;
}>;
export declare const ChatMessage: z.ZodIntersection<z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    chatId: z.ZodString;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    version: "v1";
    createdAt: string;
    chatId: string;
}, {
    version: "v1";
    createdAt: string;
    chatId: string;
}>, z.ZodDiscriminatedUnion<"role", [z.ZodObject<{
    role: z.ZodLiteral<"system">;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
    role: "system";
}, {
    content: string;
    role: "system";
}>, z.ZodObject<{
    role: z.ZodLiteral<"user">;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
    role: "user";
}, {
    content: string;
    role: "user";
}>, z.ZodObject<{
    role: z.ZodLiteral<"assistant">;
    content: z.ZodOptional<z.ZodString>;
    tool_calls: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodLiteral<"function">;
        function: z.ZodObject<{
            name: z.ZodString;
            arguments: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            arguments: string;
        }, {
            name: string;
            arguments: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }, {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    role: "assistant";
    content?: string | undefined;
    tool_calls?: {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }[] | undefined;
}, {
    role: "assistant";
    content?: string | undefined;
    tool_calls?: {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }[] | undefined;
}>, z.ZodObject<{
    role: z.ZodLiteral<"tool">;
    content: z.ZodString;
    tool_call_id: z.ZodString;
    tool_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
    role: "tool";
    tool_call_id: string;
    tool_name: string;
}, {
    content: string;
    role: "tool";
    tool_call_id: string;
    tool_name: string;
}>]>>;
export declare const ApiCreateChatRequest: z.ZodObject<{
    user_id: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    user_id?: string | undefined;
}, {
    user_id?: string | undefined;
}>;
export declare const ApiCreateChatResponse: z.ZodIntersection<z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    projectId: z.ZodString;
    userId: z.ZodString;
    createdAt: z.ZodString;
    closed: z.ZodOptional<z.ZodBoolean>;
    closedAt: z.ZodOptional<z.ZodString>;
    closeReason: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"user-closed-chat">, z.ZodLiteral<"assistant-closed-chat">, z.ZodLiteral<"timeout">, z.ZodLiteral<"error">]>>;
    lastAgentId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    version: "v1";
    projectId: string;
    userId: string;
    createdAt: string;
    closed?: boolean | undefined;
    closedAt?: string | undefined;
    closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
    lastAgentId?: string | undefined;
}, {
    version: "v1";
    projectId: string;
    userId: string;
    createdAt: string;
    closed?: boolean | undefined;
    closedAt?: string | undefined;
    closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
    lastAgentId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>>;
export declare const ApiGetChatResponse: z.ZodIntersection<z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    projectId: z.ZodString;
    userId: z.ZodString;
    createdAt: z.ZodString;
    closed: z.ZodOptional<z.ZodBoolean>;
    closedAt: z.ZodOptional<z.ZodString>;
    closeReason: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"user-closed-chat">, z.ZodLiteral<"assistant-closed-chat">, z.ZodLiteral<"timeout">, z.ZodLiteral<"error">]>>;
    lastAgentId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    version: "v1";
    projectId: string;
    userId: string;
    createdAt: string;
    closed?: boolean | undefined;
    closedAt?: string | undefined;
    closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
    lastAgentId?: string | undefined;
}, {
    version: "v1";
    projectId: string;
    userId: string;
    createdAt: string;
    closed?: boolean | undefined;
    closedAt?: string | undefined;
    closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
    lastAgentId?: string | undefined;
}>, z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>>;
export declare const ApiGetChatsResponse: z.ZodObject<{
    chats: z.ZodArray<z.ZodIntersection<z.ZodObject<{
        version: z.ZodLiteral<"v1">;
        projectId: z.ZodString;
        userId: z.ZodString;
        createdAt: z.ZodString;
        closed: z.ZodOptional<z.ZodBoolean>;
        closedAt: z.ZodOptional<z.ZodString>;
        closeReason: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"user-closed-chat">, z.ZodLiteral<"assistant-closed-chat">, z.ZodLiteral<"timeout">, z.ZodLiteral<"error">]>>;
        lastAgentId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        version: "v1";
        projectId: string;
        userId: string;
        createdAt: string;
        closed?: boolean | undefined;
        closedAt?: string | undefined;
        closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
        lastAgentId?: string | undefined;
    }, {
        version: "v1";
        projectId: string;
        userId: string;
        createdAt: string;
        closed?: boolean | undefined;
        closedAt?: string | undefined;
        closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
        lastAgentId?: string | undefined;
    }>, z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>>, "many">;
    next: z.ZodOptional<z.ZodString>;
    previous: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    chats: ({
        version: "v1";
        projectId: string;
        userId: string;
        createdAt: string;
        closed?: boolean | undefined;
        closedAt?: string | undefined;
        closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
        lastAgentId?: string | undefined;
    } & {
        id: string;
    })[];
    next?: string | undefined;
    previous?: string | undefined;
}, {
    chats: ({
        version: "v1";
        projectId: string;
        userId: string;
        createdAt: string;
        closed?: boolean | undefined;
        closedAt?: string | undefined;
        closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
        lastAgentId?: string | undefined;
    } & {
        id: string;
    })[];
    next?: string | undefined;
    previous?: string | undefined;
}>;
export declare const ApiChatTurnRequest: z.ZodObject<{
    message: z.ZodString;
}, "strip", z.ZodTypeAny, {
    message: string;
}, {
    message: string;
}>;
export declare const ApiChatTurnResponse: z.ZodIntersection<z.ZodIntersection<z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    chatId: z.ZodString;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    version: "v1";
    createdAt: string;
    chatId: string;
}, {
    version: "v1";
    createdAt: string;
    chatId: string;
}>, z.ZodDiscriminatedUnion<"role", [z.ZodObject<{
    role: z.ZodLiteral<"system">;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
    role: "system";
}, {
    content: string;
    role: "system";
}>, z.ZodObject<{
    role: z.ZodLiteral<"user">;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
    role: "user";
}, {
    content: string;
    role: "user";
}>, z.ZodObject<{
    role: z.ZodLiteral<"assistant">;
    content: z.ZodOptional<z.ZodString>;
    tool_calls: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodLiteral<"function">;
        function: z.ZodObject<{
            name: z.ZodString;
            arguments: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            arguments: string;
        }, {
            name: string;
            arguments: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }, {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    role: "assistant";
    content?: string | undefined;
    tool_calls?: {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }[] | undefined;
}, {
    role: "assistant";
    content?: string | undefined;
    tool_calls?: {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }[] | undefined;
}>, z.ZodObject<{
    role: z.ZodLiteral<"tool">;
    content: z.ZodString;
    tool_call_id: z.ZodString;
    tool_name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
    role: "tool";
    tool_call_id: string;
    tool_name: string;
}, {
    content: string;
    role: "tool";
    tool_call_id: string;
    tool_name: string;
}>]>>, z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    chatId: z.ZodString;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    version: "v1";
    createdAt: string;
    chatId: string;
}, {
    version: "v1";
    createdAt: string;
    chatId: string;
}>>, z.ZodObject<{
    role: z.ZodLiteral<"assistant">;
    content: z.ZodOptional<z.ZodString>;
    tool_calls: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodLiteral<"function">;
        function: z.ZodObject<{
            name: z.ZodString;
            arguments: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            arguments: string;
        }, {
            name: string;
            arguments: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }, {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    role: "assistant";
    content?: string | undefined;
    tool_calls?: {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }[] | undefined;
}, {
    role: "assistant";
    content?: string | undefined;
    tool_calls?: {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }[] | undefined;
}>>, z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>>;
export declare const ApiGetChatMessagesResponse: z.ZodObject<{
    messages: z.ZodArray<z.ZodIntersection<z.ZodIntersection<z.ZodObject<{
        version: z.ZodLiteral<"v1">;
        chatId: z.ZodString;
        createdAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        version: "v1";
        createdAt: string;
        chatId: string;
    }, {
        version: "v1";
        createdAt: string;
        chatId: string;
    }>, z.ZodDiscriminatedUnion<"role", [z.ZodObject<{
        role: z.ZodLiteral<"system">;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        content: string;
        role: "system";
    }, {
        content: string;
        role: "system";
    }>, z.ZodObject<{
        role: z.ZodLiteral<"user">;
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        content: string;
        role: "user";
    }, {
        content: string;
        role: "user";
    }>, z.ZodObject<{
        role: z.ZodLiteral<"assistant">;
        content: z.ZodOptional<z.ZodString>;
        tool_calls: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            type: z.ZodLiteral<"function">;
            function: z.ZodObject<{
                name: z.ZodString;
                arguments: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
                arguments: string;
            }, {
                name: string;
                arguments: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            function: {
                name: string;
                arguments: string;
            };
            type: "function";
            id: string;
        }, {
            function: {
                name: string;
                arguments: string;
            };
            type: "function";
            id: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        role: "assistant";
        content?: string | undefined;
        tool_calls?: {
            function: {
                name: string;
                arguments: string;
            };
            type: "function";
            id: string;
        }[] | undefined;
    }, {
        role: "assistant";
        content?: string | undefined;
        tool_calls?: {
            function: {
                name: string;
                arguments: string;
            };
            type: "function";
            id: string;
        }[] | undefined;
    }>, z.ZodObject<{
        role: z.ZodLiteral<"tool">;
        content: z.ZodString;
        tool_call_id: z.ZodString;
        tool_name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        content: string;
        role: "tool";
        tool_call_id: string;
        tool_name: string;
    }, {
        content: string;
        role: "tool";
        tool_call_id: string;
        tool_name: string;
    }>]>>, z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>>, "many">;
    next: z.ZodOptional<z.ZodString>;
    previous: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    messages: (({
        version: "v1";
        createdAt: string;
        chatId: string;
    } & ({
        content: string;
        role: "system";
    } | {
        content: string;
        role: "user";
    } | {
        role: "assistant";
        content?: string | undefined;
        tool_calls?: {
            function: {
                name: string;
                arguments: string;
            };
            type: "function";
            id: string;
        }[] | undefined;
    } | {
        content: string;
        role: "tool";
        tool_call_id: string;
        tool_name: string;
    })) & {
        id: string;
    })[];
    next?: string | undefined;
    previous?: string | undefined;
}, {
    messages: (({
        version: "v1";
        createdAt: string;
        chatId: string;
    } & ({
        content: string;
        role: "system";
    } | {
        content: string;
        role: "user";
    } | {
        role: "assistant";
        content?: string | undefined;
        tool_calls?: {
            function: {
                name: string;
                arguments: string;
            };
            type: "function";
            id: string;
        }[] | undefined;
    } | {
        content: string;
        role: "tool";
        tool_call_id: string;
        tool_name: string;
    })) & {
        id: string;
    })[];
    next?: string | undefined;
    previous?: string | undefined;
}>;
