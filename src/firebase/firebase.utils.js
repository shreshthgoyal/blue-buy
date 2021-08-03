import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyD3VYxQ3Us309yonkN1pN2-lVL6N5sqhro",
    authDomain: "blue-way.firebaseapp.com",
    projectId: "blue-way",
    storageBucket: "blue-way.appspot.com",
    messagingSenderId: "924016864284",
    appId: "1:924016864284:web:f68f9b501cd4feae8b03d9",
    measurementId: "G-T64FHHY3KG"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth)
    return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('Error occured', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;