"use client";
import { createContext, useContext, useState } from "react";

const IntroContext = createContext<{
    introDone: boolean;
    setIntroDone: (v: boolean) => void;
}>({ introDone: false, setIntroDone: () => {} });

export function IntroProvider({ children }: { children: React.ReactNode }) {
    const [introDone, setIntroDone] = useState(false);
    return (
        <IntroContext.Provider value={{ introDone, setIntroDone }}>
            {children}
        </IntroContext.Provider>
    );
}

export function useIntro() {
    return useContext(IntroContext);
}
