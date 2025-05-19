"use client"

import React from "react"

export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border/20">
      <div className="container">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Vidyasagar Chamle. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 