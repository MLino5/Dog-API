//addEventListener pega um evento para usar de gatilho para ativar uma função 
//DOMContentLoaded ele é ativado quando todo o documento html é analizado e todos os scripts adiados 
document.addEventListener('DOMContentLoaded', function() {
//Const usada para para ativar o botão e tambem para não haver uma reatribução
    const dogImage = document.getElementById('dogImage');
    const fetchButton = document.getElementById('fetchButton');

    //função com o try e catch para tentar executar o comando de demonstrar a imagem e caso nã consiga mostrar uma imagem 
    async function fetchDogImage() {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            dogImage.src = data.message;
        } catch (error) {
            console.error('Erro ao buscar imagem de cão:', error);
        }
    }
    //addEventListener pega um evento para usar de gatilho para ativar uma função 
    fetchButton.addEventListener('click', fetchDogImage);

    // fetch para executar o comandodo fetchbutton
    fetchDogImage();
});
