export const html = ({body}: {body: string}) => `
    <!DOCTYPE tml>
    <html>
        <head>
        </head>
        <body style="margin:0">
            <div id="app">${body}</div>
        </body>
        <script src="js/client.js" defer></script>
    </html>
`;

