'use client';  // Add this line at the top of the file

import { useEffect } from 'react';
import Typed from 'typed.js';

const TypoAnimation = () => {
    useEffect(() => {
        const el = document.querySelector('.js-typo-animation');
        if (!el) return;

        const options = {
            strings: ['glänsa!', 'sticka ut!'],
            typeSpeed: 100,
            backSpeed: 100,
            startDelay: 150,
            backDelay: 3500,
            loop: true,
            showCursor: true,
            cursorChar: '|',
        };

        new Typed(el, options);

        // Clean up when component unmounts
        return () => {
            el && el._typed.destroy();
        };
    }, []);

    return <span className="js-typo-animation"></span>;
};

export default TypoAnimation;