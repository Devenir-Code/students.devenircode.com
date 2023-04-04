document.addEventListener('DOMContentLoaded', () => {

    // Get references to the output element and the clear button
    const output = document.getElementById('output');
    const clearButton = document.getElementById('clear-button');

    // Create an array to store the buttons pushed
    let buttonsPushed = [];

    // Attach an event listener to the document that listens for the "keydown" event
    document.addEventListener('keydown', (event) => {
        // When a key is pressed, push the key into the buttonsPushed array
        if (event.key !== 'Meta' && event.key !== 'Alt' && event.key !== 'Control' && event.key !== 'Shift') {
            buttonsPushed.push(event.key);
        }

        // Use DOM manipulation to display the buttonsPushed array on the screen
        output.textContent = `Buttons pushed: ${buttonsPushed.join(', ')}`;

        // Check if the buttonsPushed array contains the Konami code
        const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
        if (buttonsPushed.length >= konamiCode.length && buttonsPushed.slice(-konamiCode.length).every((value, index) => value === konamiCode[index])) {
            // If the Konami code is entered, do something

            for (let i = 0; i < 50; i++) {
                cornify()
            }

        }
    });


    // Attach an event listener to the clear button that clears the buttonsPushed array and the displayed output
    clearButton.addEventListener('click', () => {
        buttonsPushed = [];
        output.textContent = '';
    });

});


















function cornify() {
    var cornify_url = 'http://www.cornify.com/';
    var file = 'unicorn_';
    var count = 4;
    if (Math.random() > .7) {
        file = 'rainbow_';
        count = 7;
    } file += Math.ceil(Math.random() * count) + '.gif'; var div = document.createElement('div');
    div.style.position = 'fixed';
    var height = Math.random() * .9;
    if (typeof (window.innerHeight) == 'number') {
        height = height * window.innerHeight + 'px';
    } else if (document.documentElement && document.documentElement.clientHeight) {
        height = height * document.documentElement.clientHeight + 'px';
    } else {
        height = height * 100 + '%';
    } div.style.top = height;
    div.style.left = Math.random() * 90 + '%';
    var img = document.createElement('img');
    img.setAttribute('src', cornify_url + 'corns/' + file);
    var body = document.getElementsByTagName('body')[0];

    body.appendChild(div);
    div.appendChild(img);

}