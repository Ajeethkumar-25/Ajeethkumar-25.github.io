import React, { useState, useEffect } from 'react';
import { Bot, Terminal as TerminalIcon, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const Terminal = () => {
  const jsonContent = JSON.stringify({
    engineer: personalInfo.name,
    title: personalInfo.role,
    location: personalInfo.location,
    experience: "5+ Years (3+ Python, 2+ Agentic AI)",
    flagship_system: "GTMer (Multi-Tenant AI Sales SaaS)",
    cognitive_innovations: [
      "Carry Agent (Dual Knowledge Graph + Vector RAG)",
      "Tree-Sitter AST Self-Healing Playwright Engine",
      "Paushtik Aahaar RAG Chatbot (LangGraph + Zero-Hallucination)"
    ],
    production_stack: ["LangGraph", "AWS Bedrock", "FastAPI", "Neo4j", "Kafka", "Docker"],
    execution_loop: personalInfo.philosophy
  }, null, 2);

  const [text, setText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(jsonContent.slice(0, index));
      index++;
      if (index > jsonContent.length) {
        clearInterval(interval);
      }
    }, 12);

    return () => clearInterval(interval);
  }, [jsonContent]);

  return (
    <div style={{
      background: 'rgba(10, 11, 30, 0.95)',
      border: '1px solid rgba(139, 92, 246, 0.25)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)',
      fontFamily: 'var(--font-mono)'
    }}>
      {/* Terminal Titlebar */}
      <div style={{
        background: 'rgba(18, 15, 46, 0.9)',
        padding: '12px 18px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#f59e0b' }} />
          <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#10b981' }} />
          <span style={{ marginLeft: '12px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            ajeeth@agentic-ai-core: ~
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-cyan)', fontSize: '0.78rem' }}>
          <Bot size={14} />
          <span>Interactive AI Session</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div style={{ padding: '20px 24px', maxHeight: '420px', overflowY: 'auto' }}>
        <div style={{ color: 'var(--accent-cyan)', marginBottom: '12px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>❯</span>
          <span style={{ color: '#ffffff' }}>cat agent_identity.json</span>
        </div>
        <pre style={{
          color: '#c4b5fd',
          fontSize: '0.86rem',
          lineHeight: '1.6',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word'
        }}>
          {text}
          <span style={{
            display: 'inline-block',
            width: '8px',
            height: '16px',
            background: 'var(--accent-cyan)',
            marginLeft: '4px',
            verticalAlign: 'middle',
            animation: 'pulseGlow 1s infinite'
          }} />
        </pre>
      </div>
    </div>
  );
};
