export var html = `
    <h1> hello loading</h1>
    <ul></ul>
    <script src="/socket.io/socket.io.js"></script>
    <script>
        const sock = io();
        
        sock.on('hello', res => {
            const h1 = document.querySelector('h1');

            h1.innerText = h1.innerText.replace('loading', res);
        });
        
        
        const ul = document.querySelector('ul');
        const li = document.createElement('li');
        
        sock.on('examples', examples => {
            examples.forEach(example => {
                const $example = li.cloneNode();
                
                $example.textContent = example.text;
                ul.appendChild($example);                
            });
        });
    </script>`;
