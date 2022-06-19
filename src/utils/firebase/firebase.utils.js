import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDPRO8M9dzuEM0Lt8n658oytML4Jt5_pyI",
    authDomain: "slick-clothing-f0bbc.firebaseapp.com",
    projectId: "slick-clothing-f0bbc",
    storageBucket: "slick-clothing-f0bbc.appspot.com",
    messagingSenderId: "493272625218",
    appId: "1:493272625218:web:b929bd816eca5c4e41bddb"
  };
  
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
prompt:"select_account"
});

export const auth =getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db,'users',userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);
}
