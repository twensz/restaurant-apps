import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', () => {
  registerRoute(/https:\/\/restaurant-api\.dicoding\.dev\/detail/, new NetworkFirst());
});
