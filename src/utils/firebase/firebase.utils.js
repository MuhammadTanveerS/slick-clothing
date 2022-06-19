import {initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
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

const redirectProvider = new GoogleAuthProvider();

provider.setCustomParameters({
prompt:"select_account"
});

export const auth =getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider)

export const signInWithGoogleRedirect = () => signInWithRedirect(auth,redirectProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async(userAuth,additionalInfo = {}) => {
    if(!userAuth) return;

    const userDocRef = doc(db,'users',userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
        }catch(err){
            console.log('error creating the user' + err.message);
        }
    }
    return userDocRef;
}

export const createAuthUserFromEmailAndPass = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);
}
