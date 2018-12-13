// This does the thing!

// Setup highlight.js
hljs.initHighlightingOnLoad();

// This is all the code you need!
fetch('./README.md')
    .then((response) => response.text())
    .then(function (text) {
        // md -> html.
        document.getElementById('content').innerHTML = marked(text);

        // Highlight ALL the things. If you don't like this way, you can
        // change it. Or remove it. I don't care.
        const codes = document.querySelectorAll('pre code');
        for (let i = 0; i < codes.length; i++) {
            hljs.highlightBlock(codes[i]);
        }
    });