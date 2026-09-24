"use client";
import { TypeAnimation } from "react-type-animation";

export default function Intro() {
    return (
        <section>
            <div className="container mx-auto mt-8 mb-12 lg:mt-12 lg:mb-16 px-4 lg:px-0">
                <div className="flex flex-col lg:flex-row items-center gap-8">

                    <p className="!text-2xl lg:!text-4xl font-bold text-primary whitespace-pre-line leading-normal min-h-28 text-center lg:text-left">
                        <TypeAnimation
                            sequence={[
                                "Hey, ich bin Fred.",
                                500,
                                "Hey, ich bin Fred. Anwendungs­entwickler aus Leipzig.",
                                "Hey, ich bin Fred. Anwendungs­entwickler aus Leipzig.\nWillkommen auf meinem Portfolio.",
                            ]}
                            speed={75}
                            cursor={false}
                            repeat={0}
                        />
                    </p>
                </div>
            </div>
        </section>
    )
}