
import React, { useEffect, useState } from 'react';

function FullScreenBlocker() {
    const [isFullScreen, setIsFullScreen] = useState(false);

    useEffect(() => {
        const checkFullScreen = () => setIsFullScreen(
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        );

        ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange']
            .forEach(event => document.addEventListener(event, checkFullScreen));

        return () => {
            ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange']
                .forEach(event => document.removeEventListener(event, checkFullScreen));
        };
    }, []);

    const enterFullScreen = () => {
        const element = document.documentElement;
        ['requestFullscreen', 'webkitRequestFullscreen', 'mozRequestFullScreen', 'msRequestFullscreen']
            .forEach(method => element[method]?.());
    };

    return !isFullScreen && (
        <div className="fullscreen-blocker">
            <p>Please enter full-screen mode to take the test.</p>
            <button onClick={enterFullScreen}>Enter Full Screen</button>
        </div>
    );
}

export default FullScreenBlocker;
