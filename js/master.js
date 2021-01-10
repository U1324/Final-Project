document.addEventListener('DOMContentLoaded', (e) => {

    document.getElementById('loginBtn').addEventListener('click', (e) => {
        document.getElementById('popup').style.display = 'flex';
    });
    document.getElementById('closePopupBtn').addEventListener('click', (e) => {
        document.getElementById('popup').style.display = 'none';
    });

    document.getElementById('authorize').addEventListener('click', (e) => {
        alert("authorized!");
        document.getElementById('popup').style.display = 'none';
    });
});