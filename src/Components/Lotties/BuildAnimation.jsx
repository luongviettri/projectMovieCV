import React from 'react';
import Lottie from 'react-lottie';
import buildAnimation from "../../Assets/lotties/build.json"
export default function BuildAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: buildAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
            />
        </div>
    )
}
