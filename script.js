//Para que pida por teclado el nombre
    
    document.addEventListener('DOMContentLoaded', function() {
        const inputWord = prompt('Introduce una palabra:');
        document.getElementById('displayWord').innerText = inputWord;
    });
