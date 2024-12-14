import { MessageSquare, Bot, Mic, Target, Shield, Cpu } from 'lucide-react';
import React from 'react';

export const services = [
  {
    icon: <MessageSquare className="h-8 w-8 text-purple-500" />,
    title: 'Lead Reactivation',
    description: 'Reconnect with dormant leads and turn them into active opportunities using AI-powered engagement strategies.'
  },
  {
    icon: <Bot className="h-8 w-8 text-purple-500" />,
    title: 'Chatbot',
    description: 'Intelligent chatbots that provide 24/7 customer support and lead qualification.'
  },
  {
    icon: <Mic className="h-8 w-8 text-purple-500" />,
    title: 'Voice Agents',
    description: 'Advanced AI voice agents that handle calls, appointments, and customer inquiries naturally.'
  },
  {
    icon: <Target className="h-8 w-8 text-purple-500" />,
    title: 'Lead Generation',
    description: 'Data-driven lead generation strategies that identify and attract high-quality prospects.'
  },
  {
    icon: <Shield className="h-8 w-8 text-purple-500" />,
    title: 'Brand Reputation Management',
    description: "Monitor and enhance your brand's online presence and reputation."
  },
  {
    icon: <Cpu className="h-8 w-8 text-purple-500" />,
    title: 'AI Automation',
    description: 'Streamline operations with custom AI solutions that automate repetitive tasks.'
  }
];