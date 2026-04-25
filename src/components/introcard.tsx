"use client";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useIntro } from "@/context/IntroContext";

export default function Intro() {
    const [done, setDone] = useState(false);
    const [shouldSkip, setShouldSkip] = useState(false);
    const { setIntroDone } = useIntro();

    useEffect(() => {
        // Prüfen ob intro bereits abgespielt wurde
        const introSeen = sessionStorage.getItem("introSeen");
        if (introSeen) {
            setShouldSkip(true);
            setDone(true);
            setIntroDone(true);
            return;
        }

        window.scrollTo(0, 0);
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = ""; };
    }, [setIntroDone]);

    useEffect(() => {
        if (done) {
            document.body.style.overflow = "";
            if (!shouldSkip) {
                sessionStorage.setItem("introSeen", "true");
            }
        }
    }, [done, shouldSkip]);

    return (
        <section>
            <div className="container mx-auto mt-16 mb-26">
                <h2 className={`!text-4xl font-bold text-primary transition-opacity duration-[1500ms] delay-500 whitespace-pre-line ${done ? "opacity-40" : "opacity-100"}`}>
                    {shouldSkip ? (
                        "Hey, ich bin Fred. Anwendungsentwickler aus Leipzig.\nWillkommen auf meinem Portfolio."
                    ) : (
                        <TypeAnimation
                            sequence={[
                                "Hey, ich bin Fred.",
                                500,
                                "Hey, ich bin Fred. Anwendungsentwickler aus Leipzig.",
                                "Hey, ich bin Fred. Anwendungsentwickler aus Leipzig.\nWillkommen auf meinem Portfolio.",
                                () => {
                                    setDone(true);
                                    setTimeout(() => setIntroDone(true), 300);
                                },
                            ]}
                            speed={75}
                            cursor={false}
                            repeat={0}
                        />
                    )}
                </h2>
            </div>
        </section>
    )
}