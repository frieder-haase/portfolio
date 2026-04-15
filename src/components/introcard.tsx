"use client";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useIntro } from "@/context/IntroContext";

export default function Intro() {
    const [done, setDone] = useState(false);
    const { setIntroDone } = useIntro();

    return (
        <section>
            <div className="container mx-auto my-16">
                <p className="text-4xl font-bold text-primary">
                    <TypeAnimation
                        sequence={[
                            "Hey, ich bin Fred. Anwendungsentwickler aus Leipzig.",
                            () => {
                                setDone(true);
                                setTimeout(() => setIntroDone(true), 1000);
                            },
                        ]}
                        speed={75}
                        cursor={false}
                        repeat={0}
                    />
                </p>
                <div
                    className={`mt-4 transition-opacity duration-[2500ms] ${done ? "opacity-100" : "opacity-0"}`}
                >
                    <p className="text-4xl font-bold text-primary">Willkommen auf meinem Portfolio.</p>
                </div>
            </div>
        </section>
    )
}