"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Chat-AI",
    name: "Chat",
    description: "Chat with your AI",
    content: "Chat with your AI and get instant responses to your questions.",
  },
  {
    title: "Image-AI",
    name: "Image",
    description: "AI for images",
    content:
      "Create images with AI based on your prompt. Just type in your prompt and get the image you want.",
  },
  {
    title: "Video-AI",
    name: "Video",
    description: "AI for videos",
    content: "Create short videos just with one prompt",
  },
  {
    title: "Audio-AI",
    name: "Audio",
    description: "AI for audio",
    content: "Create audio with AI by simply typing in your prompt.",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {features.map((item) => (
          <Card
            key={item.title}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">{item.content}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
