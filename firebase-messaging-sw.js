importScripts('https://www.gstatic.com/firebasejs/10.x.x/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.x.x/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA9JAq0MQ66MiHCstUExjthVyEyqCvTd98",
  authDomain: "pyapay-a7b10.firebaseapp.com",
  projectId: "pyapay-a7b10",
  storageBucket: "pyapay-a7b10.firebasestorage.app",
  messagingSenderId: "968243507066",
  appId: "1:968243507066:web:102e7eb153c1c82394b0c3"
});

const messaging = firebase.messaging();
