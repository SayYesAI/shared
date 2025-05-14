import { z } from 'zod';
export declare const SystemMessage: z.ZodObject<{
    role: z.ZodLiteral<"system">;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
    role: "system";
}, {
    content: string;
    role: "system";
}>;
export declare const UserMessage: z.ZodObject<{
    role: z.ZodLiteral<"user">;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
    role: "user";
}, {
    content: string;
    role: "user";
}>;
export declare const AssistantMessage: z.ZodObject<{
    role: z.ZodLiteral<"assistant">;
    content: z.ZodString;
    agenticSender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    agenticResponseType: z.ZodUnion<[z.ZodLiteral<"internal">, z.ZodLiteral<"external">]>;
}, "strip", z.ZodTypeAny, {
    content: string;
    role: "assistant";
    agenticResponseType: "internal" | "external";
    agenticSender?: string | null | undefined;
}, {
    content: string;
    role: "assistant";
    agenticResponseType: "internal" | "external";
    agenticSender?: string | null | undefined;
}>;
export declare const AssistantMessageWithToolCalls: z.ZodObject<{
    role: z.ZodLiteral<"assistant">;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    tool_calls: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    agenticSender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    agenticResponseType: z.ZodUnion<[z.ZodLiteral<"internal">, z.ZodLiteral<"external">]>;
}, "strip", z.ZodTypeAny, {
    role: "assistant";
    agenticResponseType: "internal" | "external";
    tool_calls: {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }[];
    content?: string | null | undefined;
    agenticSender?: string | null | undefined;
}, {
    role: "assistant";
    agenticResponseType: "internal" | "external";
    tool_calls: {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }[];
    content?: string | null | undefined;
    agenticSender?: string | null | undefined;
}>;
export declare const ToolMessage: z.ZodObject<{
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
}>;
export declare const ChatMessage: z.ZodIntersection<z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    chatId: z.ZodString;
    createdAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    version: "v1";
    chatId: string;
    createdAt: string;
}, {
    version: "v1";
    chatId: string;
    createdAt: string;
}>, z.ZodUnion<[z.ZodObject<{
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
    content: z.ZodString;
    agenticSender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    agenticResponseType: z.ZodUnion<[z.ZodLiteral<"internal">, z.ZodLiteral<"external">]>;
}, "strip", z.ZodTypeAny, {
    content: string;
    role: "assistant";
    agenticResponseType: "internal" | "external";
    agenticSender?: string | null | undefined;
}, {
    content: string;
    role: "assistant";
    agenticResponseType: "internal" | "external";
    agenticSender?: string | null | undefined;
}>, z.ZodObject<{
    role: z.ZodLiteral<"assistant">;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    tool_calls: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    agenticSender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    agenticResponseType: z.ZodUnion<[z.ZodLiteral<"internal">, z.ZodLiteral<"external">]>;
}, "strip", z.ZodTypeAny, {
    role: "assistant";
    agenticResponseType: "internal" | "external";
    tool_calls: {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }[];
    content?: string | null | undefined;
    agenticSender?: string | null | undefined;
}, {
    role: "assistant";
    agenticResponseType: "internal" | "external";
    tool_calls: {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }[];
    content?: string | null | undefined;
    agenticSender?: string | null | undefined;
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
export declare const ChatCloseReason: z.ZodUnion<[z.ZodLiteral<"user-closed-chat">, z.ZodLiteral<"assistant-closed-chat">, z.ZodLiteral<"timeout">, z.ZodLiteral<"error">]>;
export declare const ChatUserData: z.ZodObject<{
    userId: z.ZodString;
    userName: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    userId: string;
    userName?: string | undefined;
}, {
    userId: string;
    userName?: string | undefined;
}>;
export declare const Chat: z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    projectId: z.ZodString;
    userId: z.ZodString;
    createdAt: z.ZodString;
    closed: z.ZodOptional<z.ZodBoolean>;
    closedAt: z.ZodOptional<z.ZodString>;
    closeReason: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"user-closed-chat">, z.ZodLiteral<"assistant-closed-chat">, z.ZodLiteral<"timeout">, z.ZodLiteral<"error">]>>;
    agenticState: z.ZodOptional<z.ZodUnknown>;
    userData: z.ZodObject<{
        userId: z.ZodString;
        userName: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userId: string;
        userName?: string | undefined;
    }, {
        userId: string;
        userName?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    version: "v1";
    createdAt: string;
    userId: string;
    projectId: string;
    userData: {
        userId: string;
        userName?: string | undefined;
    };
    closed?: boolean | undefined;
    closedAt?: string | undefined;
    closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
    agenticState?: unknown;
}, {
    version: "v1";
    createdAt: string;
    userId: string;
    projectId: string;
    userData: {
        userId: string;
        userName?: string | undefined;
    };
    closed?: boolean | undefined;
    closedAt?: string | undefined;
    closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
    agenticState?: unknown;
}>;
export declare const ApiCreateChatRequest: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare const ApiCreateChatResponse: z.ZodIntersection<z.ZodObject<{
    version: z.ZodLiteral<"v1">;
    projectId: z.ZodString;
    userId: z.ZodString;
    createdAt: z.ZodString;
    closed: z.ZodOptional<z.ZodBoolean>;
    closedAt: z.ZodOptional<z.ZodString>;
    closeReason: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"user-closed-chat">, z.ZodLiteral<"assistant-closed-chat">, z.ZodLiteral<"timeout">, z.ZodLiteral<"error">]>>;
    agenticState: z.ZodOptional<z.ZodUnknown>;
    userData: z.ZodObject<{
        userId: z.ZodString;
        userName: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userId: string;
        userName?: string | undefined;
    }, {
        userId: string;
        userName?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    version: "v1";
    createdAt: string;
    userId: string;
    projectId: string;
    userData: {
        userId: string;
        userName?: string | undefined;
    };
    closed?: boolean | undefined;
    closedAt?: string | undefined;
    closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
    agenticState?: unknown;
}, {
    version: "v1";
    createdAt: string;
    userId: string;
    projectId: string;
    userData: {
        userId: string;
        userName?: string | undefined;
    };
    closed?: boolean | undefined;
    closedAt?: string | undefined;
    closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
    agenticState?: unknown;
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
    agenticState: z.ZodOptional<z.ZodUnknown>;
    userData: z.ZodObject<{
        userId: z.ZodString;
        userName: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        userId: string;
        userName?: string | undefined;
    }, {
        userId: string;
        userName?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    version: "v1";
    createdAt: string;
    userId: string;
    projectId: string;
    userData: {
        userId: string;
        userName?: string | undefined;
    };
    closed?: boolean | undefined;
    closedAt?: string | undefined;
    closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
    agenticState?: unknown;
}, {
    version: "v1";
    createdAt: string;
    userId: string;
    projectId: string;
    userData: {
        userId: string;
        userName?: string | undefined;
    };
    closed?: boolean | undefined;
    closedAt?: string | undefined;
    closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
    agenticState?: unknown;
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
        agenticState: z.ZodOptional<z.ZodUnknown>;
        userData: z.ZodObject<{
            userId: z.ZodString;
            userName: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            userId: string;
            userName?: string | undefined;
        }, {
            userId: string;
            userName?: string | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        version: "v1";
        createdAt: string;
        userId: string;
        projectId: string;
        userData: {
            userId: string;
            userName?: string | undefined;
        };
        closed?: boolean | undefined;
        closedAt?: string | undefined;
        closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
        agenticState?: unknown;
    }, {
        version: "v1";
        createdAt: string;
        userId: string;
        projectId: string;
        userData: {
            userId: string;
            userName?: string | undefined;
        };
        closed?: boolean | undefined;
        closedAt?: string | undefined;
        closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
        agenticState?: unknown;
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
        createdAt: string;
        userId: string;
        projectId: string;
        userData: {
            userId: string;
            userName?: string | undefined;
        };
        closed?: boolean | undefined;
        closedAt?: string | undefined;
        closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
        agenticState?: unknown;
    } & {
        id: string;
    })[];
    next?: string | undefined;
    previous?: string | undefined;
}, {
    chats: ({
        version: "v1";
        createdAt: string;
        userId: string;
        projectId: string;
        userData: {
            userId: string;
            userName?: string | undefined;
        };
        closed?: boolean | undefined;
        closedAt?: string | undefined;
        closeReason?: "error" | "timeout" | "user-closed-chat" | "assistant-closed-chat" | undefined;
        agenticState?: unknown;
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
    chatId: string;
    createdAt: string;
}, {
    version: "v1";
    chatId: string;
    createdAt: string;
}>, z.ZodUnion<[z.ZodObject<{
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
    content: z.ZodString;
    agenticSender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    agenticResponseType: z.ZodUnion<[z.ZodLiteral<"internal">, z.ZodLiteral<"external">]>;
}, "strip", z.ZodTypeAny, {
    content: string;
    role: "assistant";
    agenticResponseType: "internal" | "external";
    agenticSender?: string | null | undefined;
}, {
    content: string;
    role: "assistant";
    agenticResponseType: "internal" | "external";
    agenticSender?: string | null | undefined;
}>, z.ZodObject<{
    role: z.ZodLiteral<"assistant">;
    content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    tool_calls: z.ZodArray<z.ZodObject<{
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
    }>, "many">;
    agenticSender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    agenticResponseType: z.ZodUnion<[z.ZodLiteral<"internal">, z.ZodLiteral<"external">]>;
}, "strip", z.ZodTypeAny, {
    role: "assistant";
    agenticResponseType: "internal" | "external";
    tool_calls: {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }[];
    content?: string | null | undefined;
    agenticSender?: string | null | undefined;
}, {
    role: "assistant";
    agenticResponseType: "internal" | "external";
    tool_calls: {
        function: {
            name: string;
            arguments: string;
        };
        type: "function";
        id: string;
    }[];
    content?: string | null | undefined;
    agenticSender?: string | null | undefined;
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
    chatId: string;
    createdAt: string;
}, {
    version: "v1";
    chatId: string;
    createdAt: string;
}>>, z.ZodObject<{
    role: z.ZodLiteral<"assistant">;
    content: z.ZodString;
    agenticSender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    agenticResponseType: z.ZodUnion<[z.ZodLiteral<"internal">, z.ZodLiteral<"external">]>;
}, "strip", z.ZodTypeAny, {
    content: string;
    role: "assistant";
    agenticResponseType: "internal" | "external";
    agenticSender?: string | null | undefined;
}, {
    content: string;
    role: "assistant";
    agenticResponseType: "internal" | "external";
    agenticSender?: string | null | undefined;
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
        chatId: string;
        createdAt: string;
    }, {
        version: "v1";
        chatId: string;
        createdAt: string;
    }>, z.ZodUnion<[z.ZodObject<{
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
        content: z.ZodString;
        agenticSender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        agenticResponseType: z.ZodUnion<[z.ZodLiteral<"internal">, z.ZodLiteral<"external">]>;
    }, "strip", z.ZodTypeAny, {
        content: string;
        role: "assistant";
        agenticResponseType: "internal" | "external";
        agenticSender?: string | null | undefined;
    }, {
        content: string;
        role: "assistant";
        agenticResponseType: "internal" | "external";
        agenticSender?: string | null | undefined;
    }>, z.ZodObject<{
        role: z.ZodLiteral<"assistant">;
        content: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        tool_calls: z.ZodArray<z.ZodObject<{
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
        }>, "many">;
        agenticSender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        agenticResponseType: z.ZodUnion<[z.ZodLiteral<"internal">, z.ZodLiteral<"external">]>;
    }, "strip", z.ZodTypeAny, {
        role: "assistant";
        agenticResponseType: "internal" | "external";
        tool_calls: {
            function: {
                name: string;
                arguments: string;
            };
            type: "function";
            id: string;
        }[];
        content?: string | null | undefined;
        agenticSender?: string | null | undefined;
    }, {
        role: "assistant";
        agenticResponseType: "internal" | "external";
        tool_calls: {
            function: {
                name: string;
                arguments: string;
            };
            type: "function";
            id: string;
        }[];
        content?: string | null | undefined;
        agenticSender?: string | null | undefined;
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
        chatId: string;
        createdAt: string;
    } & ({
        content: string;
        role: "system";
    } | {
        content: string;
        role: "user";
    } | {
        content: string;
        role: "assistant";
        agenticResponseType: "internal" | "external";
        agenticSender?: string | null | undefined;
    } | {
        role: "assistant";
        agenticResponseType: "internal" | "external";
        tool_calls: {
            function: {
                name: string;
                arguments: string;
            };
            type: "function";
            id: string;
        }[];
        content?: string | null | undefined;
        agenticSender?: string | null | undefined;
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
        chatId: string;
        createdAt: string;
    } & ({
        content: string;
        role: "system";
    } | {
        content: string;
        role: "user";
    } | {
        content: string;
        role: "assistant";
        agenticResponseType: "internal" | "external";
        agenticSender?: string | null | undefined;
    } | {
        role: "assistant";
        agenticResponseType: "internal" | "external";
        tool_calls: {
            function: {
                name: string;
                arguments: string;
            };
            type: "function";
            id: string;
        }[];
        content?: string | null | undefined;
        agenticSender?: string | null | undefined;
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
export declare const ApiCreateGuestSessionRequest: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare const ApiCreateGuestSessionResponse: z.ZodObject<{
    sessionId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    sessionId: string;
}, {
    sessionId: string;
}>;
export declare const ApiCreateUserSessionRequest: z.ZodObject<{
    userDataJwt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    userDataJwt: string;
}, {
    userDataJwt: string;
}>;
export declare const ApiCreateUserSessionResponse: z.ZodObject<{
    sessionId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    sessionId: string;
}, {
    sessionId: string;
}>;
