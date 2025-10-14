'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "22bcc3cb50c01b70bdbdfb19c99d937b",
"version.json": "58fb9162dde111eda9da676fd55f9b4b",
"index.html": "1c714f2cb8adaa19b424496aab91f2ac",
"/": "1c714f2cb8adaa19b424496aab91f2ac",
"main.dart.js": "de28a455193712af9b7bf9df389fa196",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "eedf41258dde052c982843a604ec5878",
"icons/Icon-192.png": "70208e339ab34e3ec4df03b2de9f7fd6",
"icons/Icon-maskable-192.png": "70208e339ab34e3ec4df03b2de9f7fd6",
"icons/Icon-maskable-512.png": "88cae13b64636ab626604a8102075c7a",
"icons/Icon-512.png": "88cae13b64636ab626604a8102075c7a",
"manifest.json": "edf06e950b11fb752f2fc90d30e663d8",
"assets/AssetManifest.json": "14d28c85ae77435cdb3923565aa391eb",
"assets/NOTICES": "6cd9cb183bc7504801112aa1ba0150d7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "8dac64842c8d29cc6e4c1cb19212035f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "d7d83bd9ee909f8a9b348f56ca7b68c6",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "91a469e5c6075032dc15fb5e73e7f3aa",
"assets/fonts/MaterialIcons-Regular.otf": "50ce2cd7d1d1af9857d68060c8aa884c",
"assets/assets/images/fruit-basket-caH-ZLrisZA-unsplash.jpg": "9f1302d3015e312ba51ce35124934cdf",
"assets/assets/images/research-integrity-club-cover.png": "f56bb499eb06c4940076185dc6f715c2",
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
"assets/assets/story/stories_ric_case.json": "bb8b4fe3faff28adcbc9fff228e98949",
"assets/assets/story/trust_code.json": "bf0704313423625aa984b748e9949594",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
