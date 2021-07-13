// si le service et dans le nav de lutilisateur alors crée le registre a partir du fichier serviceWorker
if ("serviceWorker" in navigator) {

    navigator.serviceWorker
        .register('/serviceWorker.js')
        .then(() => console.log('sw registered'))
        .catch((err) => console.log(err));

};