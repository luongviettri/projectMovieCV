import React from 'react';
import Lottie from 'react-lottie';
import adminAnimation from "../../Assets/lotties/admin.json"
export default function AdminAnimation() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: adminAnimation,
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
