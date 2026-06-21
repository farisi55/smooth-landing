'use client'

import { useState, type ReactNode } from 'react'

interface CodeBlockProps {
  code: string
  language?: string
}

const commandWords = new Set(['docker', 'npm', 'git', 'npx', 'smooth', 'node'])
const actionWords = new Set(['compose', 'run', 'install', 'clone', 'attach', 'build', 'start', 'dev', 'up'])

export function CodeBlock({ code, language = 'bash' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // fallback for non-secure contexts
    }
  }

  return (
    <div className="relative group rounded-xl overflow-hidden border border-bg-border shadow-terminal">
      <div className="flex items-center justify-between px-4 py-2.5 bg-bg-elevated border-b border-bg-border">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-danger/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-gold-dim/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-success/40" />
        </div>
        <span className="text-content-muted font-mono text-xs">{language}</span>
        <button
          onClick={handleCopy}
          aria-label={copied ? 'Copied' : 'Copy code'}
          className="text-content-muted hover:text-gold transition-colors duration-150 text-xs font-mono flex items-center gap-1"
        >
          {copied ? (
            <>
              <CheckIcon />
              <span>Copied</span>
            </>
          ) : (
            <>
              <CopyIcon />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <pre className="bg-bg-elevated overflow-x-auto p-5 font-mono text-sm leading-relaxed text-content-primary">
        <code>{renderCode(code)}</code>
      </pre>
    </div>
  )
}

function renderCode(code: string): ReactNode[] {
  return code.split('\n').flatMap((line, lineIndex, lines) => {
    const renderedLine = renderLine(line, lineIndex)

    if (lineIndex === lines.length - 1) {
      return [renderedLine]
    }

    return [renderedLine, '\n']
  })
}

function renderLine(line: string, lineIndex: number): ReactNode {
  if (line.startsWith('#')) {
    return (
      <span key={lineIndex} className="text-content-muted italic">
        {line}
      </span>
    )
  }

  return (
    <span key={lineIndex}>
      {line.split(/(\s+)/).map((part, tokenIndex) => renderToken(part, tokenIndex))}
    </span>
  )
}

function renderToken(part: string, tokenIndex: number): ReactNode {
  if (part.trim() === '') return part

  const normalized = part.replace(/[;,]$/, '')

  if (commandWords.has(normalized)) {
    return <span key={tokenIndex} className="text-gold">{part}</span>
  }

  if (actionWords.has(normalized)) {
    return <span key={tokenIndex} className="text-gold-light">{part}</span>
  }

  if (normalized.startsWith('--')) {
    return <span key={tokenIndex} className="text-content-secondary">{part}</span>
  }

  if ((part.startsWith('"') && part.endsWith('"')) || (part.startsWith("'") && part.endsWith("'"))) {
    return <span key={tokenIndex} className="text-success">{part}</span>
  }

  return part
}

function CopyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
