import React from 'react';
// import clsx from 'clsx';
import {default as lottie, RendererType} from 'lottie-web';

import styles from './styles.module.css';

interface Props {
    autoplay?: boolean;
    loop?: boolean;
    path: string;
    renderer?: RendererType;
}

export default function Lottie({autoplay = true, loop = true, path, renderer = 'svg'}: Props) {
    const lottieElement = React.useRef<HTMLDivElement>();
    React.useEffect(() => {
        lottie.loadAnimation({
            container: lottieElement.current, // the dom element that will contain the animation
            renderer,
            loop,
            autoplay,
            path // the path to the animation json
        });
    }, [lottieElement]);

    return (
        <div ref={lottieElement} className={styles.lottieElement} />
    );
}
