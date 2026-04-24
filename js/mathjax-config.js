// MathJax 3 Configuration and Initialization
if (typeof window !== 'undefined') {
    // Configure MathJax
    window.MathJax = {
        tex: {
            inlineMath: [['$', '$'], ['\\(', '\\)']],
            displayMath: [['$$', '$$'], ['\\[', '\\]']],
            processEscapes: true,
            processEnvironments: true
        },
        svg: {
            fontCache: 'global',
            displayAlign: 'center'
        },
        startup: {
            pageReady: () => {
                return new Promise((resolve) => {
                    // Wait a bit to ensure MathJax is fully loaded
                    setTimeout(resolve, 100);
                });
            }
        }
    };

    // Load MathJax from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
    script.async = true;
    script.onload = () => {
        // Typeset the page when MathJax is loaded
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise().catch(() => {});
        }
    };
    
    // Add the script to the document
    if (document.head) {
        document.head.appendChild(script);
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            document.head.appendChild(script);
        });
    }
}
