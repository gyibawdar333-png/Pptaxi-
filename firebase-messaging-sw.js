importScripts('https://www.gstatic.com/firebasejs/10.x.x/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.x.x/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "...",
  // သင်ပြထားတဲ့ config ထဲက data တွေ ဒီမှာပြန်ထည့်ပါ
});

const messaging = firebase.messaging();

<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA9JAq0MQ66MiHCstUExjthYyEyqCVTd98",
    authDomain: "pyapay-a7b10.firebaseapp.com",
    projectId: "pyapay-a7b10",
    storageBucket: "pyapay-a7b10.firebasestorage.app",
    messagingSenderId: "968243507066",
    appId: "1:968243507066:web:102e7eb153c1c82994b0c3",
    measurementId: "G-BNVLYJ6LMF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
