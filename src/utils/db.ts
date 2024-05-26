import { Drivers, Storage } from '@ionic/storage';

const store = new Storage({
  name: '__CodeCupidDB',
  driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
});
await store.create();

export default store