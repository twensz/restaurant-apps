import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    return;
  }
  const wb = new WorkboxWindow.Workbox('./sw.bundle.js');

  await wb.register();
};

export default swRegister;
