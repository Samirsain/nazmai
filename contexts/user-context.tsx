"use client"

import React, { createContext, useContext, useState } from "react"

type UserContextType = {
  generationCount: number
  incrementGenerations: () => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [generationCount, setGenerationCount] = useState(0)

  const incrementGenerations = () => {
    setGenerationCount((prev) => prev + 1)
  }

  return (
    <UserContext.Provider
      value={{
        generationCount,
        incrementGenerations,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUser() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error("useUser must be used within UserProvider")
  }
  return context
}
