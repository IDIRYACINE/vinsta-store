
import { getFirestore, connectFirestoreEmulator, } from '@firebase/firestore';
import { FirebaseApp, getApps, initializeApp } from 'firebase/app';




export function buildFirebaseApp(): FirebaseApp {
    const apps = getApps()

    if (apps.length > 0) {
        return apps[0]
    }

    const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG!)


    const isTestMode = process.env.IS_TEST_MODE === 'true'
    const emulatorHost = "http://127.0.0.1"


    if (isTestMode) {
        firebaseConfig.databaseURL = `${emulatorHost}:9000/?ns=online-order-client-default-rtdb`

    }


    const app = initializeApp(firebaseConfig);

    const firestore = getFirestore(app)

    if (isTestMode) {
        connectFirestoreEmulator(firestore, "localhost", 8080)
    }

    return app

}
