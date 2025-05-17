"use client";
import React, { useState } from "react";
import { Button, Input, Badge, Avatar } from "antd";
import {
  SendOutlined,
  PhoneOutlined,
  VideoCameraOutlined,
  InfoCircleOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import Navbar from "@/components/homePage/Navbar";
import Footer from "@/components/Footer";

// Mock data...
const mockConversations = [
  {
    id: 1,
    name: "Padmini Rathore",
    avatar:
      "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    lastMessage: "Looking forward to talking more about our common interests!",
    timestamp: "10:23 AM",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Kanishka Chauhan",
    avatar:
      "https://images.unsplash.com/photo-1539701938214-0d9d2e5c6b44?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    lastMessage: "What time works for you for the call tomorrow?",
    timestamp: "Yesterday",
    unread: 0,
    online: false,
  },
];

const mockMessages = [
  {
    id: 1,
    senderId: 1,
    text: "Hello Rajveer, I noticed we share an interest in traveling.",
    timestamp: "10:00 AM",
  },
  {
    id: 2,
    senderId: 0,
    text: "Hi Padmini! Jaipur and Udaipur are beautiful!",
    timestamp: "10:05 AM",
  },
  {
    id: 3,
    senderId: 1,
    text: "I've also been to Jodhpur and Jaisalmer!",
    timestamp: "10:10 AM",
  },
  {
    id: 4,
    senderId: 0,
    text: "Hi Padmini! Jaipur and Udaipur are beautiful!",
    timestamp: "10:05 AM",
  },
  {
    id: 5,
    senderId: 1,
    text: "I've also been to Jodhpur and Jaisalmer!",
    timestamp: "10:10 AM",
  },
  {
    id: 6,
    senderId: 0,
    text: "Hi Padmini! Jaipur and Udaipur are beautiful!",
    timestamp: "10:05 AM",
  },
  {
    id: 7,
    senderId: 1,
    text: "I've also been to Jodhpur and Jaisalmer!",
    timestamp: "10:10 AM",
  },
];

const MessagesPage = () => {
  const [activeConversation, setActiveConversation] = useState(
    mockConversations[0]
  );
  const [message, setMessage] = useState("");
  const [mobileView, setMobileView] = useState<"list" | "chat">("list");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      console.log("Sent message:", message);
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow ">
        <div className="container mx-auto px-4 h-[calc(100vh-200px)] max-h-[800px]">
          <div className="bg-white rounded shadow border h-full flex overflow-hidden">
            {/* Sidebar */}
            <div
              className={`w-full md:w-1/3 lg:w-1/4 border-r ${mobileView === "chat" ? "hidden md:block" : ""}`}
            >
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold text-rajput-maroon">
                  Messages
                </h2>
                <p className="text-sm text-gray-500">Your conversations</p>
              </div>
              <div className="overflow-y-auto h-full">
                {mockConversations.map((conv) => (
                  <div
                    key={conv.id}
                    onClick={() => {
                      setActiveConversation(conv);
                      setMobileView("chat");
                    }}
                    className={`flex items-start gap-3 p-4 cursor-pointer hover:bg-gray-100 ${
                      activeConversation.id === conv.id ? "bg-gray-100" : ""
                    }`}
                  >
                    <div className="relative">
                      <Avatar size="large" src={conv.avatar} />
                      {conv.online && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white" />
                      )}
                    </div>
                    <div className="flex-grow overflow-hidden">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium truncate">{conv.name}</h4>
                        <span className="text-xs text-gray-400">
                          {conv.timestamp}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 truncate">
                        {conv.lastMessage}
                      </p>
                    </div>
                    {conv.unread > 0 && (
                      <Badge
                        count={conv.unread}
                        style={{ backgroundColor: "#800020" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Chat view */}
            <div
              className={`w-full md:w-2/3 lg:w-3/4 flex flex-col ${mobileView === "list" ? "hidden md:flex" : ""}`}
            >
              {activeConversation ? (
                <>
                  {/* Chat Header */}
                  <div className="p-4 border-b flex items-center justify-between bg-white">
                    <div className="flex items-center gap-3">
                      <Button
                        icon={<ArrowLeftOutlined />}
                        onClick={() => setMobileView("list")}
                        className="md:hidden"
                      />
                      <Avatar src={activeConversation.avatar} />
                      <div>
                        <div className="font-medium">
                          {activeConversation.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {activeConversation.online ? "Online" : "Offline"}
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-gray-600">
                      {/* <PhoneOutlined />
                      <VideoCameraOutlined /> */}
                      <InfoCircleOutlined />
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-grow overflow-y-auto p-4 bg-gray-50 space-y-4">
                    {mockMessages.map((msg) => (
                      <div
                        key={msg.id}
                        className={`flex ${msg.senderId === 0 ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`px-4 py-2 rounded-lg max-w-[80%] text-sm ${
                            msg.senderId === 0
                              ? "bg-rajput-maroon text-white ml-auto"
                              : "bg-white border text-gray-800"
                          }`}
                        >
                          {msg.text}
                          <div
                            className={`text-xs mt-1 ${
                              msg.senderId === 0
                                ? "text-white/70"
                                : "text-gray-500"
                            }`}
                          >
                            {msg.timestamp}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Message Input */}
                  <form
                    onSubmit={handleSendMessage}
                    className="p-4 border-t bg-white"
                  >
                    <div className="flex gap-2 items-center">
                      <Input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type a message..."
                      />
                      <Button
                        htmlType="submit"
                        type="primary"
                        icon={<SendOutlined />}
                        disabled={!message.trim()}
                        className="bg-rajput-maroon hover:bg-rajput-maroon/90"
                      />
                    </div>
                  </form>
                </>
              ) : (
                <div className="flex-grow flex items-center justify-center bg-gray-50 text-center p-6">
                  <div>
                    <div className="mb-4">
                      <MessageIcon />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">
                      No Conversation Selected
                    </h3>
                    <p className="text-gray-600">
                      Select a conversation to start chatting.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MessagesPage;

const MessageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto w-16 h-16 text-rajput-maroon"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
