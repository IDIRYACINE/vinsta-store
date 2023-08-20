
import { getFirestore, connectFirestoreEmulator, Firestore } from '@firebase/firestore';
import { FirebaseApp, initializeApp } from 'firebase/app';


let app: FirebaseApp
let firestore: Firestore


export function buildFirebaseApp(): FirebaseApp {
    if (app !== undefined) {
        return app
    }

    const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG!)

    const isTestMode = Boolean(process.env.IS_TEST_MODE)
    const emulatorHost = "http://localhost"

    if (isTestMode) {
        firebaseConfig.databaseURL = `${emulatorHost}:9000`

    }


    app = initializeApp(firebaseConfig);

    firestore = getFirestore(app)

    if (isTestMode) {
        connectFirestoreEmulator(firestore, "localhost", 8080)
    }

    return app

}

export { app, firestore,  }