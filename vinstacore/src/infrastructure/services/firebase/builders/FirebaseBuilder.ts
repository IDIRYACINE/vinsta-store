
import { getFirestore, connectFirestoreEmulator, Firestore } from '@firebase/firestore';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator, Auth } from 'firebase/auth';

import { firebaseConfig } from '../firebaseConfig'


let app: FirebaseApp
let auth: Auth
let firestore: Firestore


export function buildFirebaseApp(): FirebaseApp {

    if (app !== undefined) {
        return app
    }

    const isTestMode = false
    const emulatorHost = "http://localhost"

    if (isTestMode) {
        firebaseConfig.databaseURL = `${emulatorHost}:9000`

    }


    app = initializeApp(firebaseConfig);

    firestore = getFirestore(app)
    auth = getAuth(app)

    if (isTestMode) {
        connectAuthEmulator(auth, `${emulatorHost}:9099`)
        connectFirestoreEmulator(firestore, "localhost", 8080)
    }

    return app

}

export { app, firestore, auth }