
import { getFirestore, connectFirestoreEmulator, } from '@firebase/firestore';
import { FirebaseApp, getApps, initializeApp } from 'firebase/app';




export function buildFirebaseApp(): FirebaseApp {
    const apps = getApps()

    if (apps.length > 0) {
        return apps[0]
    }

    const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG!)


    const isTestMode = Boolean(process.env.IS_TEST_MODE)
    const emulatorHost = "http://localhost"

    if (isTestMode) {
        firebaseConfig.databaseURL = `${emulatorHost}:9000`

    }


    const app = initializeApp(firebaseConfig);

    const firestore = getFirestore(app)

    if (isTestMode) {
        connectFirestoreEmulator(firestore, "localhost", 8080)
    }

    return app

}
