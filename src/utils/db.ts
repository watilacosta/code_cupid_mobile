import { Drivers, Storage } from '@ionic/storage';

const storage = new Storage({
  name: '__CodeCupidDB',
  driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
});

async function initializeStore() {
  await storage.create()
}

initializeStore()

export default storage