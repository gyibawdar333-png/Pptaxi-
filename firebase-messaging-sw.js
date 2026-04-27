importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyA9JAq0MQ66MiHCstUExjthVyEyqCvTd98",
    authDomain: "pyapay-a7b10.firebaseapp.com",
    projectId: "pyapay-a7b10",
    storageBucket: "pyapay-a7b10.firebasestorage.app",
    messagingSenderId: "968243507066",
    appId: "1:968243507066:web:102e7eb153c1c82394b0c3",
    measurementId: "G-BNVLYJL6MF"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('New Order Received while offline:', payload);

  const notificationTitle = payload.notification.title || "Order အသစ်ရရှိပါသည်";
  const notificationOptions = {
    body: payload.notification.body || "Order အသေးစိတ်ကို ကြည့်ရန် နှိပ်ပါ",
    icon: '/driver-icon.png', // Driver icon logo path
    badge: '/badge-icon.png',
    vibrate: [200, 100, 200], // ဖုန်းတုန်ခါမှု
    data: {
      url: '/orders' // Notification ကို နှိပ်လိုက်ရင် သွားရမယ့် link
    }
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Notification ကို နှိပ်လိုက်ရင် App ကို ဖွင့်ပေးဖို့
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
