/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "94cefd4df4d1dc99d34cfd4f8836b604"
  },
  {
    "url": "architecture/index.html",
    "revision": "77f3fcd5ba0c784cd6d7981b0688d057"
  },
  {
    "url": "architecture/大型系统核心技术.html",
    "revision": "22852ec0f64633424ca206bb1fe3d633"
  },
  {
    "url": "architecture/系统伸缩性架构.html",
    "revision": "d7b2e46be68d75fd3a52e3b082a29a6b"
  },
  {
    "url": "architecture/系统安全性架构.html",
    "revision": "35c2b76386a9277319a4c103789d0d38"
  },
  {
    "url": "architecture/系统扩展性架构.html",
    "revision": "642e436854ae423abf1c22447b5860ac"
  },
  {
    "url": "architecture/系统架构概述.html",
    "revision": "46987f5b1a56e10c3d53117aaeefefbc"
  },
  {
    "url": "architecture/系统架构面试.html",
    "revision": "5b55bedfbbef4286f5f8e6eb988b9c18"
  },
  {
    "url": "architecture/系统测试架构.html",
    "revision": "3e276de13113f5761aff78fdc7878bcb"
  },
  {
    "url": "architecture/系统高可用架构.html",
    "revision": "0b249b21aa06adb618357c6790929c9a"
  },
  {
    "url": "architecture/系统高性能架构.html",
    "revision": "5fd7e326574c88dffd4f288353155ef8"
  },
  {
    "url": "architecture/领域驱动设计.html",
    "revision": "3a08a001c6d08ec033618662c732f994"
  },
  {
    "url": "assets/css/0.styles.3c2ef156.css",
    "revision": "24913b2549e199ab01761f64a10471cc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fe5dcd13.js",
    "revision": "d5f67dfdf68e221f68349c90035293e1"
  },
  {
    "url": "assets/js/11.c7079e78.js",
    "revision": "ef06269054301e2ab746ab4e613a1869"
  },
  {
    "url": "assets/js/12.bbe842fd.js",
    "revision": "0db86471db49f7b2663d7ffc7fed7a47"
  },
  {
    "url": "assets/js/13.c1d2bdc5.js",
    "revision": "1b5b4886f6a2e423dc9a3e81e6d3a8b0"
  },
  {
    "url": "assets/js/14.430215f1.js",
    "revision": "054598924dbe12f57df2296f1b58691f"
  },
  {
    "url": "assets/js/15.3a15ce59.js",
    "revision": "fc96650e884efb682400891180705b08"
  },
  {
    "url": "assets/js/16.ec1308e7.js",
    "revision": "c8929de1f815754231e9671b2f7ada0f"
  },
  {
    "url": "assets/js/17.c88f6231.js",
    "revision": "bc8c081de868ca7110ac716926a17c8c"
  },
  {
    "url": "assets/js/18.cdb87e3c.js",
    "revision": "3a19236f29e1a090c52da1c1acb180f1"
  },
  {
    "url": "assets/js/19.1298a42c.js",
    "revision": "596462d12c340c1416f443409ac93954"
  },
  {
    "url": "assets/js/20.2127edc1.js",
    "revision": "53a8bca6d6fadddfe8136f5971ea6413"
  },
  {
    "url": "assets/js/21.488859a1.js",
    "revision": "5083af7aedc3e9d656f2dbe79c17d5df"
  },
  {
    "url": "assets/js/22.c977a432.js",
    "revision": "c5c3dbaab6e184ad995482b4570b33dd"
  },
  {
    "url": "assets/js/23.e290150c.js",
    "revision": "38c4bebc8f081e43013d4d4745174a9a"
  },
  {
    "url": "assets/js/24.d097464e.js",
    "revision": "5551d0a73086df83c39e993414e86726"
  },
  {
    "url": "assets/js/25.4186cc65.js",
    "revision": "f3341ed973297cf720e0daaa2e7a694f"
  },
  {
    "url": "assets/js/26.b525f01a.js",
    "revision": "8ef0cd8fc7d76a306527b3d00b14a620"
  },
  {
    "url": "assets/js/27.b660136e.js",
    "revision": "cbe9628030ac24c5731455e0a59169a0"
  },
  {
    "url": "assets/js/28.666ccd3c.js",
    "revision": "69fb2539d765e8caddec26f5190fbe83"
  },
  {
    "url": "assets/js/29.60090a0e.js",
    "revision": "25ce01d7f92bfce82f40ae2681d74289"
  },
  {
    "url": "assets/js/30.13463051.js",
    "revision": "1f29704ce94ad2c56153e07cbacaeead"
  },
  {
    "url": "assets/js/31.4c1d763e.js",
    "revision": "dd18f52f8b375b2ca3fa6f9896a3c6e8"
  },
  {
    "url": "assets/js/32.dc07f800.js",
    "revision": "f020052427472de9b383630fbbfd3a5f"
  },
  {
    "url": "assets/js/33.c64290f6.js",
    "revision": "73f661dac711c8328ea6a83275d25738"
  },
  {
    "url": "assets/js/34.2d0fda09.js",
    "revision": "f24e93468feefa274dac9696e8b90244"
  },
  {
    "url": "assets/js/35.e3145511.js",
    "revision": "79bbf7742a62fc2b0d402e85da12b75d"
  },
  {
    "url": "assets/js/36.dd035f69.js",
    "revision": "f1aeed89497dcd70f4bccf1d5be28a33"
  },
  {
    "url": "assets/js/37.a70173ec.js",
    "revision": "448988e5ef9e32a45b0bb9b746b795af"
  },
  {
    "url": "assets/js/38.684c8305.js",
    "revision": "e9e34b1dcf331fa6d3aee9c3788b9abf"
  },
  {
    "url": "assets/js/39.494efd50.js",
    "revision": "c91521ce74a3342dbb684cca8538cef2"
  },
  {
    "url": "assets/js/4.3927d5c8.js",
    "revision": "76954a78e5d6821b7f74866174b48921"
  },
  {
    "url": "assets/js/40.7402f761.js",
    "revision": "115af9ca7a4c49bdcfa0780530762af0"
  },
  {
    "url": "assets/js/41.07ee3a91.js",
    "revision": "3da9c8840a5e6d617d30f2f96fdea5d0"
  },
  {
    "url": "assets/js/42.060eeb51.js",
    "revision": "cc408920915a82c87ed703a564fb7f18"
  },
  {
    "url": "assets/js/43.bcd43a29.js",
    "revision": "24d1d33f58f7d81c04c11ae198271a9e"
  },
  {
    "url": "assets/js/44.0e90f943.js",
    "revision": "4b053756333112dd2775e4fa8ea81432"
  },
  {
    "url": "assets/js/45.b7a16bca.js",
    "revision": "01ab85eef16c00b7c4125031239dd86d"
  },
  {
    "url": "assets/js/46.103a6896.js",
    "revision": "7099f05daf15195abb1c74a59456a54e"
  },
  {
    "url": "assets/js/47.fb6ebefb.js",
    "revision": "115042dbe929f55df1722dc9d55d042b"
  },
  {
    "url": "assets/js/48.d03d76af.js",
    "revision": "e6e23ddd220a4ecfe4d882e139c6e8a7"
  },
  {
    "url": "assets/js/49.9066f22c.js",
    "revision": "87b59a101e211577730f555cf79a0f49"
  },
  {
    "url": "assets/js/5.f1c043bd.js",
    "revision": "5660892119d6fbef761f2d199ab22eb4"
  },
  {
    "url": "assets/js/50.dae8d3b0.js",
    "revision": "c70c03a629eb244e736bc8027dab5c30"
  },
  {
    "url": "assets/js/51.cf6e2822.js",
    "revision": "ac98e796e1b7492292b0fd3cd8136913"
  },
  {
    "url": "assets/js/52.04f5b7ea.js",
    "revision": "5b813726e8a3646732998a12e2ccd727"
  },
  {
    "url": "assets/js/53.bd7fd95d.js",
    "revision": "e36a5f5b178240058e064a07c4c482b2"
  },
  {
    "url": "assets/js/54.8076cb02.js",
    "revision": "3d54e8005841001e781170c3c57d59a4"
  },
  {
    "url": "assets/js/55.898ff37f.js",
    "revision": "d7dec47eedb16441d8c96c718be64357"
  },
  {
    "url": "assets/js/56.6656a5ab.js",
    "revision": "589e5d5693db9f858eb854e8c3a0d7f5"
  },
  {
    "url": "assets/js/57.77724b5d.js",
    "revision": "94d572cdcd344d191e7eaa8d4ae47789"
  },
  {
    "url": "assets/js/58.685d7acc.js",
    "revision": "6e1185fdad71522a8880f10fd6f24c78"
  },
  {
    "url": "assets/js/59.625f74fc.js",
    "revision": "1ea23f23238a3db90dfcc7bebbde2fbd"
  },
  {
    "url": "assets/js/6.8b0a9164.js",
    "revision": "1a39bfb66f452ca9614fe73e0a63dd48"
  },
  {
    "url": "assets/js/60.e6c7770e.js",
    "revision": "4481d5b06bcaa21a0f79e3c07c355a0d"
  },
  {
    "url": "assets/js/61.7364f677.js",
    "revision": "dacfa7907d09a5d85f5c28d0d66c53e1"
  },
  {
    "url": "assets/js/62.82023053.js",
    "revision": "3f841179f39570921da4e65d7e059f48"
  },
  {
    "url": "assets/js/63.c86c463c.js",
    "revision": "5066fe3200971380587a165a2f27840a"
  },
  {
    "url": "assets/js/64.a881988e.js",
    "revision": "62d3478de0cc49c30ad6b7ccaf0f10b0"
  },
  {
    "url": "assets/js/65.8c01e1b2.js",
    "revision": "f0c7ed3777c006e41ac58b89ea76e2d0"
  },
  {
    "url": "assets/js/66.a2bd1c95.js",
    "revision": "2c9cfc1d4418b7e87aed16c6f3fa928a"
  },
  {
    "url": "assets/js/67.ac1c5da3.js",
    "revision": "20c9acecb8253b0debee5dffd1665777"
  },
  {
    "url": "assets/js/68.ce680873.js",
    "revision": "4d6b9e58069a21513aa6c3a5a3dce3cf"
  },
  {
    "url": "assets/js/69.23ce7a52.js",
    "revision": "dbd4d9fdb1fddf3089e8e488de16d828"
  },
  {
    "url": "assets/js/7.d18d03ab.js",
    "revision": "976f0ecbb45b872a4dfd061d5e2d1fe8"
  },
  {
    "url": "assets/js/70.2a55238a.js",
    "revision": "893ac9c20c0b64ab9d8550904bb3ce47"
  },
  {
    "url": "assets/js/71.4d5b8512.js",
    "revision": "ea219c4cecfccd9bc2ab99e6db8e9c51"
  },
  {
    "url": "assets/js/72.ff03273c.js",
    "revision": "0edccf0452fda9518113d8276e40d98b"
  },
  {
    "url": "assets/js/73.572c2a22.js",
    "revision": "cd3c0444125fa677490ee25d6017003d"
  },
  {
    "url": "assets/js/74.914b1247.js",
    "revision": "1a91954c86e53b29ba8c487f02d98892"
  },
  {
    "url": "assets/js/75.2d1d69c0.js",
    "revision": "46958fbda257f8f6073a2f62ab90bcd0"
  },
  {
    "url": "assets/js/76.3b8b6b51.js",
    "revision": "71181b72f9828baed61cfb489710beff"
  },
  {
    "url": "assets/js/77.ba462f78.js",
    "revision": "04c7e34b421ef720485d6a94ae2bb10a"
  },
  {
    "url": "assets/js/78.579f5804.js",
    "revision": "676235a0ee0fb600bcc4c0fb372f1bf1"
  },
  {
    "url": "assets/js/79.c40e8ad4.js",
    "revision": "134b76b5f8ea03f5fdc19541513d2c65"
  },
  {
    "url": "assets/js/8.a5f38894.js",
    "revision": "a66915005b8da2f0a9d91ff522c33f3e"
  },
  {
    "url": "assets/js/80.f848a2f5.js",
    "revision": "97ed683abd18f12259d9b8582417335b"
  },
  {
    "url": "assets/js/81.4b54e86e.js",
    "revision": "a10751ef47dbad9a743b058c597c74fd"
  },
  {
    "url": "assets/js/82.8805947b.js",
    "revision": "4279bba9edc4f42bd20a8a415e5afa05"
  },
  {
    "url": "assets/js/83.4d334ee9.js",
    "revision": "c086f2d02ef9e5a1a4591dac2b00f303"
  },
  {
    "url": "assets/js/9.69b11c1a.js",
    "revision": "92d6f9e6317ea3d4f5822361135fee6f"
  },
  {
    "url": "assets/js/app.083bf937.js",
    "revision": "b1d5803adaf13d98375fc7de7cf22fe1"
  },
  {
    "url": "assets/js/vendors~flowchart.4af2219b.js",
    "revision": "79ff26e6a72976119d3ca6ae87e3dafd"
  },
  {
    "url": "assets/js/vendors~notification.720c539b.js",
    "revision": "e0cbc3a164d5b5d0732607021147b312"
  },
  {
    "url": "distributed/index.html",
    "revision": "2a1e37d69edbc7c5382fd9fe769d4d98"
  },
  {
    "url": "distributed/分布式ID.html",
    "revision": "7170236346ab37d7c62dd3b7558c93fb"
  },
  {
    "url": "distributed/分布式事务.html",
    "revision": "d95ed98632e58340d28a72c37ca45e4e"
  },
  {
    "url": "distributed/分布式会话.html",
    "revision": "3f92da5c7453bb87e364ba5b0b886eba"
  },
  {
    "url": "distributed/分布式存储.html",
    "revision": "66465c86a632292565cd2f0b8833565d"
  },
  {
    "url": "distributed/分布式理论.html",
    "revision": "a9c1a5af59876ea2309a84cd98d8cc02"
  },
  {
    "url": "distributed/分布式简介.html",
    "revision": "309e6f664c66743c85c26c88e44f4756"
  },
  {
    "url": "distributed/分布式算法Gossip.html",
    "revision": "4084efb7431052405aa701d86885b306"
  },
  {
    "url": "distributed/分布式算法Paxos.html",
    "revision": "25bc3f0075a4a0d52bd99d0a218a9b90"
  },
  {
    "url": "distributed/分布式算法Raft.html",
    "revision": "edf078097131a43972fe0108beb313fc"
  },
  {
    "url": "distributed/分布式缓存.html",
    "revision": "816c29ed279b8521959da84ffeab878d"
  },
  {
    "url": "distributed/分布式锁.html",
    "revision": "8d41f5e880ffbb3d1e526c99f6ce715c"
  },
  {
    "url": "distributed/分布式面试.html",
    "revision": "49145f247b644b05509d48cdffa2d401"
  },
  {
    "url": "distributed/流量控制.html",
    "revision": "466f9c2a2e9a79d115132d3429171135"
  },
  {
    "url": "distributed/消息队列.html",
    "revision": "14697be7f930b02adb26bac7a4db2567"
  },
  {
    "url": "distributed/负载均衡.html",
    "revision": "aa5422fb5f3e0712677d4e9b23351c15"
  },
  {
    "url": "index.html",
    "revision": "8d19d6d7661379fc45728bfebbb0639a"
  },
  {
    "url": "microservices/index.html",
    "revision": "a73b6712611d76ba04a867c4912802f6"
  },
  {
    "url": "microservices/kong.html",
    "revision": "f6adef0bfdcf026ae11892a982e07d1e"
  },
  {
    "url": "microservices/rpc.html",
    "revision": "82648619163a874792af50688da67fc5"
  },
  {
    "url": "microservices/微服务原理.html",
    "revision": "8659b6db37674e72cb3a955a4faa2a4c"
  },
  {
    "url": "paradigm/index.html",
    "revision": "c6f7bfde87aee7138f65791a58685969"
  },
  {
    "url": "paradigm/错误处理.html",
    "revision": "f8f50eeacdac8464615e5bf7aaeda947"
  },
  {
    "url": "pattern/index.html",
    "revision": "ce8bfb393387dec3434b09f5338fcd5d"
  },
  {
    "url": "pattern/中介者模式.html",
    "revision": "2acda13fd8bea52208f46b61e21c9180"
  },
  {
    "url": "pattern/享元模式.html",
    "revision": "2c13d6da251e5343951567b0a7ab5cae"
  },
  {
    "url": "pattern/代理模式.html",
    "revision": "1e9dce56cae2cfa8e96af493cf27cc4f"
  },
  {
    "url": "pattern/单例模式.html",
    "revision": "6d02a412eb17d5e13c053eae307173cb"
  },
  {
    "url": "pattern/原型模式.html",
    "revision": "086af4d00d8440d5887de106276d46b3"
  },
  {
    "url": "pattern/命令模式.html",
    "revision": "48b56705399274f6eb80964eafc8556e"
  },
  {
    "url": "pattern/备忘录模式.html",
    "revision": "883f69ca8f1c31a5bdd43ba073745146"
  },
  {
    "url": "pattern/外观模式.html",
    "revision": "162c89d6f7d7ec10e6392b121e724c09"
  },
  {
    "url": "pattern/工厂方法模式.html",
    "revision": "36a9c12446e22d60de12e79abaa6017f"
  },
  {
    "url": "pattern/建造者模式.html",
    "revision": "d956ca12457c8391f101832f87f407fd"
  },
  {
    "url": "pattern/抽象工厂模式.html",
    "revision": "fc1a3f5f5039fb28efeee8bf9a3b9946"
  },
  {
    "url": "pattern/桥接模式.html",
    "revision": "c3047787ddb2f634b4fb4b52afcf1273"
  },
  {
    "url": "pattern/模板方法模式.html",
    "revision": "5aef8c8f24b2e4f0cbd7616dfe81c768"
  },
  {
    "url": "pattern/状态模式.html",
    "revision": "646e9617a86d7db2edd5df44674c7545"
  },
  {
    "url": "pattern/策略模式.html",
    "revision": "1b0edc6632551e9a3e0b2f5cc8a5f52c"
  },
  {
    "url": "pattern/简单工厂模式.html",
    "revision": "acd83f3dddf36a6281db2d50992fc61b"
  },
  {
    "url": "pattern/组合模式.html",
    "revision": "dc83d3cd9e2eb686a6faca8e35a1dc05"
  },
  {
    "url": "pattern/职责链模式.html",
    "revision": "989db91be7a6d759a6a2b66dc1f404b8"
  },
  {
    "url": "pattern/装饰模式.html",
    "revision": "d6b1f640e4859980427f28780cd4f226"
  },
  {
    "url": "pattern/观察者模式.html",
    "revision": "5027be251a7786e0f3d99b9352b61d72"
  },
  {
    "url": "pattern/解释器模式.html",
    "revision": "4a1cccdce3b497ad2750f4b0f4f3a7e4"
  },
  {
    "url": "pattern/设计模式概述.html",
    "revision": "9ecd3eb5e1642e882eaa8860bed96e0c"
  },
  {
    "url": "pattern/访问者模式.html",
    "revision": "fd66eea3fdb3a75a3ab954f98a4d7270"
  },
  {
    "url": "pattern/迭代器模式.html",
    "revision": "e931b06e7cbc135744ea23031c996cf6"
  },
  {
    "url": "pattern/适配器模式.html",
    "revision": "0af76e678218ebc4223bab32eee46e02"
  },
  {
    "url": "pattern/面向对象原则.html",
    "revision": "64d261cb9de00650f89ae3cf6af1affe"
  },
  {
    "url": "refactor/index.html",
    "revision": "d387e9dc8f33f7418e4857c09c010aa6"
  },
  {
    "url": "refactor/代码坏味道之代码臃肿.html",
    "revision": "05e0687307f892380bdce0b458745382"
  },
  {
    "url": "refactor/代码坏味道之变革的障碍.html",
    "revision": "3eb3b86c6c0c91e2d514ad79bacb9fea"
  },
  {
    "url": "refactor/代码坏味道之滥用面向对象.html",
    "revision": "846c7f4e1fb523ddecb24b06fbd3bc75"
  },
  {
    "url": "refactor/代码坏味道之耦合.html",
    "revision": "8bf5540f3fbde3152db5a89f76d62490"
  },
  {
    "url": "refactor/代码坏味道之非必要的.html",
    "revision": "f37acd89cb2b94b38eecb1908f04973d"
  },
  {
    "url": "refactor/代码的坏味道和重构.html",
    "revision": "4bb14e71b8333a99f9083dfc71398da5"
  },
  {
    "url": "solutions/低代码平台.html",
    "revision": "d65b7738db081baa72cffc202a8e3c74"
  },
  {
    "url": "uml/index.html",
    "revision": "5a03126ff31c9bf81895739f4f2b2643"
  },
  {
    "url": "uml/uml-quickstart.html",
    "revision": "bf31b7e3f98af8a70a0e1d7aeb42f0a9"
  },
  {
    "url": "uml/UML结构建模图.html",
    "revision": "1983d24b7c86a7187a4c3d1b78606eca"
  },
  {
    "url": "uml/UML行为建模图.html",
    "revision": "9f0a415e53513955f9c234730feaa0fe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
