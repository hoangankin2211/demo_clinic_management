'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "4bb9a23aa82692bc76dc86223a96a679",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/icons/apple.svg": "955ab9b764c2a72e377b86ed5c7c1d00",
"assets/assets/icons/app_icon.png": "413429e74cee49dc9ed9d76d99b35b95",
"assets/assets/icons/audio.svg": "2a84953ee5ece68761070f4dc76ce896",
"assets/assets/icons/barbel_1.svg": "6f15e01262474fde22ae6d4603cc5425",
"assets/assets/icons/bediatric.svg": "15dd22fb95c394921240609caf0ca3f0",
"assets/assets/icons/Calendar.svg": "846830ce4bb266a7b0ad089f08474b33",
"assets/assets/icons/call.svg": "a8f7f8cd72121312c67e15b103e71da3",
"assets/assets/icons/calories1.svg": "5102bc062d0102a23683860b7da79d62",
"assets/assets/icons/Camera.svg": "13bd92bc1e0cbe562b0cff750c2eae5c",
"assets/assets/icons/cancle.svg": "1ca1c618581e65ab8fe0415fef26310f",
"assets/assets/icons/card.svg": "77d021ca161e30520bdf2f9c61981ec1",
"assets/assets/icons/Chart.svg": "7d4acc32272110f79cb2dd35106f1917",
"assets/assets/icons/chat.svg": "9c24f0a5895cbcba24d444a64003903f",
"assets/assets/icons/dentist.svg": "899fab48a7584e37af64621c5ead983f",
"assets/assets/icons/Document.svg": "ef739bc66e1667200c93106366129889",
"assets/assets/icons/experiences.svg": "7b76807549d28307b0665cc16e5b20ef",
"assets/assets/icons/eye.svg": "055d03de72bf976f2e8f309807376101",
"assets/assets/icons/Filter.svg": "087b7e1ba32d604081b2ae4325306abf",
"assets/assets/icons/gallery.svg": "24c52428e0d13541d44e6cda8a307611",
"assets/assets/icons/google_pay.svg": "b8999695f089cc0942a743e8696ac339",
"assets/assets/icons/Graph.svg": "43427877b98a01a620e15104d5d2738c",
"assets/assets/icons/Home.svg": "41125f2ef08f832eb952844f634701ef",
"assets/assets/icons/Icon-Alaarm.svg": "58c54a1f86c0bcb1564e70f056763f37",
"assets/assets/icons/Icon-Bed.svg": "54668c6666001f54113eb2f7b2603c8d",
"assets/assets/icons/Icon-Bed_alarm.svg": "ccdf6a63c9001e1279f9e8947f3029fa",
"assets/assets/icons/Icon-Repeat.svg": "ffdb2b12fb1362cdd25b0fafdea1ca7f",
"assets/assets/icons/Icon-Repetitions.svg": "f743048d6f1e3788e175f5a04bd5c559",
"assets/assets/icons/Icon-Swap.svg": "294bd4aeee415b255da0a5fb405d697b",
"assets/assets/icons/Icon-Time.svg": "d224c0cbc3f5449e57e8963375dfb667",
"assets/assets/icons/Icon-Vibrate.svg": "de9872aeaab5991ac7028522bf433798",
"assets/assets/icons/Icon-Weight.svg": "f743048d6f1e3788e175f5a04bd5c559",
"assets/assets/icons/Image.svg": "1978c6fc65d8eb85b00022672bb76e25",
"assets/assets/icons/india.png": "fd9f0a7979f354c5fdfac2234e13e330",
"assets/assets/icons/Logout.svg": "ee4475a74e6fcb39756611235f488729",
"assets/assets/icons/Message.svg": "85a8e93c6da0e7b4b1d9dcb77af86b27",
"assets/assets/icons/more.svg": "c7165f59f6fead7d7eebbc53efcc7251",
"assets/assets/icons/neurole.svg": "8c26ca305df2dc6ebd4d9b0cca420e67",
"assets/assets/icons/Notification-Icon.svg": "d832f5263e85ea8c3834c072bfc3e817",
"assets/assets/icons/Notification-Icon_RedDot.svg": "15ab4b3761d565a9a29831859dbf97f0",
"assets/assets/icons/Notification.svg": "013a33cf626f93858923862fbfa22a5b",
"assets/assets/icons/nutritionist.svg": "12d5a4267e9508d86db10443526e5d83",
"assets/assets/icons/pay_pal.svg": "f908056c3c17d3392ffe4f4c55350523",
"assets/assets/icons/people.svg": "5adaf9ed04f1e8fc9bc756b38e45466d",
"assets/assets/icons/Profile.svg": "c172b75a7402b422a1c3e4f336727521",
"assets/assets/icons/question.png": "da8360f3b3de4c386581b150d5f324f3",
"assets/assets/icons/radiology.svg": "5bb287586dd79a6d41753783aadd78a5",
"assets/assets/icons/schedule1.svg": "c4942be29635dad13697b3bf592eab07",
"assets/assets/icons/Search.svg": "4072cc5ac82f301c9cf6b629fb323699",
"assets/assets/icons/send.svg": "90abdeeab341bb997b8544d83986aecc",
"assets/assets/icons/Setting.svg": "08209df46f7929b4c64aaf6dd7799213",
"assets/assets/icons/Shield%2520Done.svg": "39789162a63579a3825e50f4e8ff30d2",
"assets/assets/icons/star.svg": "1ef6ad3bbe15947a5b4d9bf153101fd3",
"assets/assets/icons/Swap.svg": "8c523fca119989c814d4814ee20cbfa6",
"assets/assets/icons/united_kingdom.png": "7ff5dacab96414cb75fff06a6be3064e",
"assets/assets/icons/united_states.png": "c7ef7aeea67ae3612237fefcaa3b8db3",
"assets/assets/icons/vietnam.png": "1c6c27ad9a6c0ce36f52d01559912cef",
"assets/assets/icons/zalopay.svg": "077d2366dbb06f5f4650b36360e09cab",
"assets/assets/images/background_login.jpg": "107a565950c76657f18c0983012ea19d",
"assets/assets/images/blood_pressure.png": "820148ea9340f80414b4cc27905b83ac",
"assets/assets/images/body_scale.png": "a8163122e82f6d69b9a6ab389c8aba34",
"assets/assets/images/checked.png": "da188ccb78f1017e9645542bb5e52d6b",
"assets/assets/images/chichthuoc.png": "3586474f229bb014e99502b6faf1023a",
"assets/assets/images/doctor1.png": "4d3b7439cea54d54f35ef4cdb23c0029",
"assets/assets/images/doctor2.png": "25b0462fd6f00e4c737b929f5f5db2f0",
"assets/assets/images/doctor3.png": "e0cb0dc3861b10699c2354da3661cfbe",
"assets/assets/images/doctor4.png": "2a6b76671a2c9e65fd34831e8ab9122d",
"assets/assets/images/edit.png": "e5746e6163957c3a900efbb64e1d1e5f",
"assets/assets/images/error.png": "ff5b1b3b5e8a116ab26a949c8c994eb2",
"assets/assets/images/fake_avatar.jpg": "926f5128de1de0038ecddd997103a3a4",
"assets/assets/images/gluten_free.png": "f2cb98106c79c71dbcd7664178aa881d",
"assets/assets/images/google.png": "f564fc3bc613d9922753b6c17f447415",
"assets/assets/images/heart_attack.png": "b103b5d5a2f169a14005d5bf9fecf3ba",
"assets/assets/images/height.png": "ab7928d391ed0abe6600b30b5c5210ce",
"assets/assets/images/login_background.jpg": "6ed916bd29ea4f8becbc9e735385132a",
"assets/assets/images/pdf.png": "9a85752042ae270b88114895b82da2c1",
"assets/assets/images/signature.png": "52c2e1503766fd7ff8728b9b45418d4a",
"assets/assets/images/thermometer.png": "7637ea1322b7cefe4eac307c47037080",
"assets/assets/images/user.png": "02723a8b181c646ad15095dd4786dac1",
"assets/assets/pdf/flutter-succinctly.pdf": "689dd396962fa32bc7915dc37b3dfc86",
"assets/FontManifest.json": "01d71b390620af7b9f76af89b25748c2",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "9595398bb2a2ef273cd478daa8835fd2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_vector_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_vector_icons/fonts/Entypo.ttf": "31b5ffea3daddc69dd01a1f3d6cf63c5",
"assets/packages/flutter_vector_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_vector_icons/fonts/Feather.ttf": "a76d309774d33d9856f650bed4292a23",
"assets/packages/flutter_vector_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Brands.ttf": "3b89dd103490708d19a95adcae52210e",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Regular.ttf": "1f77739ca9ff2188b539c36f30ffa2be",
"assets/packages/flutter_vector_icons/fonts/FontAwesome5_Solid.ttf": "605ed7926cf39a2ad5ec2d1f9d391d3d",
"assets/packages/flutter_vector_icons/fonts/Fontisto.ttf": "b49ae8ab2dbccb02c4d11caaacf09eab",
"assets/packages/flutter_vector_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_vector_icons/fonts/Ionicons.ttf": "b3263095df30cb7db78c613e73f9499a",
"assets/packages/flutter_vector_icons/fonts/MaterialCommunityIcons.ttf": "b62641afc9ab487008e996a5c5865e56",
"assets/packages/flutter_vector_icons/fonts/MaterialIcons.ttf": "8ef52a15e44481b41e7db3c7eaf9bb83",
"assets/packages/flutter_vector_icons/fonts/Octicons.ttf": "f7c53c47a66934504fcbc7cc164895a7",
"assets/packages/flutter_vector_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_vector_icons/fonts/Zocial.ttf": "1681f34aaca71b8dfb70756bca331eb2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/shaders/ink_sparkle.frag": "e430f2f229b1a9126b9b96896408ca3d",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a0881933b90e5f1e8fa7f351fb8fc49f",
"/": "a0881933b90e5f1e8fa7f351fb8fc49f",
"main.dart.js": "1bded4619170b7f56034a2cc51b79e72",
"manifest.json": "7aa6e3ef3bd649010bc87e00e991ca0c",
"version.json": "ead1b9b439fe8b243b124c5987a8c791"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
