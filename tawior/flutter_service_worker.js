'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5d705501581f871ffe687439ec485533",
"version.json": "d9808b0a450b50514bc7593aafc4be26",
"index.html": "c720bc4b458157127006e98256b724fd",
"/": "c720bc4b458157127006e98256b724fd",
"main.dart.js": "afdbdf9d644142dbd4caf2a417e80b1d",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "b400bcd0b084d0b24ae3b8135280553b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192-ric-dtf.png": "b400bcd0b084d0b24ae3b8135280553b",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192-ric.png": "b400bcd0b084d0b24ae3b8135280553b",
"manifest.json": "3f85e2d096468ad1e9c84ae62a11028c",
"assets/NOTICES": "b3f9d2f8188b3f72ae20ef3211b2118c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "1c1eb288d6a2a0d85b1605aff4b0d6de",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "d93618d0503740dc2fa7e3be25b34f8f",
"assets/fonts/MaterialIcons-Regular.otf": "50ce2cd7d1d1af9857d68060c8aa884c",
"assets/assets/images/tawior.png": "a16365f0f1247b5db926ca2149c6539e",
"assets/assets/images/ethicist.png": "e4d57e2cf81a2715127c2eb8d8fa9285",
"assets/assets/images/researcher.png": "ffe4650ea8414e065b8d35fd79f0db32",
"assets/assets/images/fruit-basket-caH-ZLrisZA-unsplash.jpg": "9f1302d3015e312ba51ce35124934cdf",
"assets/assets/images/research-integrity-club-cover.png": "0d7c55b3542a82b9632fb5e0a1881df4",
"assets/assets/images/scholar.jpg": "e70a91ae560cb556dcdbe37a4e8f39ce",
"assets/assets/images/accountant.jpg": "766fd9c4a3cd646b4946c30be3b99393",
"assets/assets/images/clock.png": "27e90107336d8dc63c2c1b75da94a71f",
"assets/assets/schema/bucket.json": "b4ae0b41317751d35015897b620f5790",
"assets/assets/schema/story_schema.json": "9d0074151bf670f43d4bc91878d433dd",
"assets/assets/schema/multipoll_component.json": "8790d05920636c64f948e6e287cd9404",
"assets/assets/schema/poll_option.json": "e92e88897159dddbf81df209a11b0914",
"assets/assets/schema/discussion_message.json": "10ac868cca2a3b1b4f8d4dc8446d431e",
"assets/assets/schema/audio_component.json": "1ca20d0f24efee3e76d69aee80d1e81d",
"assets/assets/schema/branch_component.json": "b7f76001d38d80546a0d35bb555c325f",
"assets/assets/schema/bucket_component.json": "fa82025c2f1ee9696dd0c4651717afda",
"assets/assets/schema/mcq_option.json": "44258eb84024920b86feaef29ff17693",
"assets/assets/schema/multimcq_component.json": "f483c86041de1109bb0c04b1d6bf39cb",
"assets/assets/schema/exam_component.json": "2c88a13b07f58164c9ad05a25f082fc4",
"assets/assets/schema/bucket_item.json": "d85a2a652553ce5a808ccbe4d9338208",
"assets/assets/schema/metadata_schema.json": "d5e5b2a190eea96b08bd6e37e8066542",
"assets/assets/schema/badge_component.json": "50c9da2646e24cd20a912ad325a3bb58",
"assets/assets/schema/exam_question.json": "d0c1b88fe645f662ede1ece0144eb8ac",
"assets/assets/schema/exam_answer.json": "166210b28c2750dcb36bbb3ec56fa03f",
"assets/assets/schema/chat_component.json": "bd2a55b9309b1d4646b80c04a7da4a44",
"assets/assets/schema/discussion_component.json": "39b8d4ac8cb68be34057424eeb0650a5",
"assets/assets/schema/chat_message.json": "e17f6a9e7a467048fc1b8dc5e51ac540",
"assets/assets/schema/mcq_component.json": "9276dd5322738e36b79c7edeedd78ba7",
"assets/assets/schema/video_component.json": "dded0d0118de9bb22e05b1f1adc1da8e",
"assets/assets/schema/html_component.json": "00b8a3fcf7d933f5208037e2b84e6137",
"assets/assets/schema/component_choice.json": "c94ca9862363de0cd169ab92882672bb",
"assets/assets/schema/poll_component.json": "7a2820852dcafd5c98cc8383e5905fb9",
"assets/assets/schema/participant.json": "cba09affd47e724906406af74718db88",
"assets/assets/story/stories_ric_tawior_case.json": "4411048b6809805a60efec4b8d0c1e64",
"assets/assets/story/stories_ric_dtf_case.json": "bb8b4fe3faff28adcbc9fff228e98949",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
