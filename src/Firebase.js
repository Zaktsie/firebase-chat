import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAenf3E0kl3hyw1BinIQoazud1rX6z0-wE",
    authDomain: "vue-chat-app-21ad2.firebaseapp.com",
    databaseURL: "https://vue-chat-app-21ad2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "vue-chat-app-21ad2",
    storageBucket: "vue-chat-app-21ad2.appspot.com",
};

firebase.initializeApp(config);

export default firebase;