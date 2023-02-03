import {initializeApp} from 'firebase/app'
import {firestore, getFirestore} from 'firebase/firestore'
import {GoogleAuthProvider,getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyDSFyqEaN4lckh_jCXh40T0K096X96whjk",
    authDomain: "disneyplus-clone-686fa.firebaseapp.com",
    projectId: "disneyplus-clone-686fa",
    storageBucket: "disneyplus-clone-686fa.appspot.com",
    messagingSenderId: "278150210200",
    appId: "1:278150210200:web:6167572a152ce98dc7e6ed",
    measurementId: "G-60J78N8RER"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;