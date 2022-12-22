'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f7be56ef5f669abccebd96b36c715011",
".git/config": "7844d57f8de2c004e52bf5d83a2756c4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "cdfbeb2674fef2353210490882aa6511",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5ff0b18b093f473899776152c4f7c205",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "af638091dae6fe7e727a03fbc17477a9",
".git/logs/refs/heads/master": "1b31fdac15a807292839833560269309",
".git/logs/refs/remotes/origin/master": "b62fcce6e76d9ec85a2621fcca88d8de",
".git/objects/00/1bb4c865c2cda77a2ab7a4b1f6483b7fe1dac6": "043f177329a2d99f4124ad206ecf5786",
".git/objects/06/659ff491a4cf9ebd9b0dbfa830b2c94638e706": "b81e8015db51e70383cc414e68a3f629",
".git/objects/0a/63e6dff7b08730e7431701b0d795fed494b961": "17286b510593e4930099dcd7c8f07889",
".git/objects/0b/04624dd79abd44c5104be0d27b93764a709d5c": "d2c52f41767406cab4f1fd730c7f5fb2",
".git/objects/10/586a0947e719e3d8ce5a3c63538ab136e6ccbf": "a0d1ff45efe8cb6f329af51ab35c9767",
".git/objects/11/5b40d634c18056047163b8a108d8efed9d0c5a": "340e83159bd9526609c46ed0498fb9ff",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/14/4a8049f02514c474d83816d1e28a42ece1525c": "9875f7c9a23c7310dd09c13ca2d83345",
".git/objects/15/fa209d414f4a9fb1f0b92dc3b435da86ca2066": "ec7e86694f8456c731a05c6c297b8f32",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/7bb97b352942141410638aa04028c1b6d8a75e": "0c092328c7501c0589eec5cb5cb33ed8",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1e/d1727b194b924442d38111644466f5b7d6c0e0": "452a24825564e6750fcfc6d6c0d814e5",
".git/objects/21/0ef4759e21d00187069187dd03ccaf742cff17": "9b6fe1ba650313cc3046f66444804668",
".git/objects/21/c638cc45ab96383e6da6efef937e95e1de224a": "a839ce1b85b62a9cf5776bb53834c01a",
".git/objects/23/872e632903a8867b1fdeb837ad65b8e51b710f": "45ad7ec36c46180e4e7439ad4fd7d60c",
".git/objects/24/95ca0e7fc5b30e87ec89456c718b8485ced7f8": "a85b959fd290ff0e9078dbf038f85690",
".git/objects/25/9b3114342976741294de0491e4c8da7175c9b6": "a0f26a8a7f00b0684eb0a3b102178219",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/c39cb9b883bbdb5641977e63cb6a566a5ff653": "750b23512d7dd26c6d730bdd1a86a3f9",
".git/objects/31/cc22a0236697feaadef6e74742bf181fcf0998": "d7bdd22fa1cc5cdd71c138354908d79d",
".git/objects/34/2b023bf6159a299945eb7e74bdab6df0e3005f": "3cea98081d568465d84c6c892d52858f",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/3a/225cc207f21544ce209be67c70c76bad30d7a7": "045059d93119f6162923e8c63017014e",
".git/objects/3a/c0afad137d7c7439e50de15c2d45ba784932ec": "bc235b904abd0b81c6e7124bfdcf3376",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/3e/e5ca9c96e0894499fc6d67c1ce5eb55dd0ab6e": "d2a3f0626929b43bba8829fa0c6ca648",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/2bd5c4f809da26a1f5fc827bb5814eb7fe0b90": "08c68f9a02eeaf33d7f9b2cac2e78a0e",
".git/objects/41/a679638ed173223589607e5635c409bb4a4dac": "06a70d59580d46a27915dcf057449a89",
".git/objects/42/09aa8f9f4fe4475b3a01950a42755777cac9f0": "c4a7599bfa71b8fd18996aefaa16aa7e",
".git/objects/44/bd76ca66d1da97f1226c87d5062337a52db9e2": "e5413aab9a55526da0dc1d19d914d273",
".git/objects/45/88dab1accfd58ee2f854c3c3c4d1efc667fea1": "7fc65771dcafa220aaaaed834663d363",
".git/objects/46/e9a80e89045430fee20c534d833fb2e56ba318": "e45258d44214b59f860a68f7f724628b",
".git/objects/47/810c6c2de2ee5c656718da1009c6a6f2abc5ed": "ad96c8a1a57c78d1401b1db00909cfa8",
".git/objects/48/fd5ae1034750629ae9448cea30b54054777c58": "5fdf5bdd99673f808c3b2c9a9f140bde",
".git/objects/49/38325c7c74f51dfbade30713d4b298d26f65e3": "d883ac87beff6d182eefcf2bd6011561",
".git/objects/49/698e74205843ebf63e7af48dda68e5b6fde879": "c35a3360410ae549c879baf34348f2e8",
".git/objects/4a/36e0e06236b49650b951973415751f199447f4": "7688bbec144029b321c6609162c51372",
".git/objects/4c/30feb5590368c50e2c25bf620eb0710e081e6f": "691e74ade76e0366165e59a0fbf0a35b",
".git/objects/50/30edd1bb4f393c150def2160ad7f359d621dbd": "f1afa0903c65735d4a2ddc22d940d953",
".git/objects/51/96ca4687953f37eacf7ccc2ab0aed13ed1ce13": "ba697a9d0b8752b7cdf4f50ec62b39d6",
".git/objects/52/d82f09ef9e50d8320d1dad7840ce0cb273ca92": "46a7a6dd56d3a0f374f60eca47da4e83",
".git/objects/53/c3cf69a18348cd5a5fdb2bb360625d210b3e81": "e923b5ccde100a62112f4ab44235bae2",
".git/objects/53/d56c7723457ff32c80cda38bf6abcc2561015d": "7d45d14aba79dd4594f919a79ebd7314",
".git/objects/54/09809c9f2f9cab5372508a19a7f1d89b8f3e50": "93e4859a62e87436ef5f054b8626592b",
".git/objects/55/c553c19fd3d0f755cdad5318674b067e263af2": "52763a9e9cbc492262b2bbf511452faf",
".git/objects/57/cc88d79171fac405e29f7228e9d4a5f97208ed": "ede39f18ab2422480e023256d1ce3a59",
".git/objects/5b/ea5d8b0260905b6c1a734d9f651eb485abc266": "baa7275114bc4f506398b9a224fce8e9",
".git/objects/5f/85cc3a631dc9c26311b9599e6c02a457b6627d": "a9b40bc93a3b6b925808b7113f026cca",
".git/objects/60/e39abe4d6108fb6ae24025e572f2b801b09e28": "e15c76b4274dc5f923e4aac7d36ee334",
".git/objects/61/dde3973b88a5eae001d826e92945ce28601e74": "585bb0485a5f470fddfc82f91479945b",
".git/objects/63/3f6f31eb916ca5b2ad021fb478af464705c505": "40ee68dc9b6d235401379d60a9156647",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/71/9442d420a9c3d8df77d85b6f6ea1bc55bd39cc": "f0f785e8e884c8c1befbda9dcd273a1d",
".git/objects/72/06bdefb9a9b08e04b90cb0afb44df2ccdcdb12": "83523d8c5cecae1436eb5bad4fee584b",
".git/objects/76/5de5da651dedabd858e95f61acda5f20546184": "410e81154f53932f37a2b78b6f73fa39",
".git/objects/76/d91cb9895982d66c398f9da3daa61470488fb6": "eb9c926b9504ff85b80091feb21a6b60",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/e600d869042186322d1966c39765e1cc3dba0d": "a9ccbe3b0f452ce5bcb7b70905afd07d",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7e/0381760759bbe77460f14dab1f6fa5cfe969d4": "62846e439f664439ce9a93181ae148b6",
".git/objects/7f/daaaff00038736f60dfbb86cf3ab1ba83087ad": "7a55c04e0a0377b7abdca96806cb4c79",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/82/b720f541d365cd81a9138d99949cf4222b4fcf": "02d69370f219abb3b8309d4f2061c6e9",
".git/objects/83/1d1eb3959d7d9488e09abb15ef5d765cf90c5f": "c1687481c327751fcf7801904b1c3fdc",
".git/objects/88/7005adcc131ed527a79b377668fce05f0753c1": "cf8ee4b082fbbd741e9bd7e5b8ae2b61",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0532d2431c9d878a5196671696e15c459094f2": "090aa27f3fa2d0a44db4f26b9ba8e8ab",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/bfec9c9d9ccf0d950276966b493cfdd2c4e639": "16538816fdaa58110b7052f2cb4cfbc6",
".git/objects/8b/55b486dd128c375a51aa04997151314d7dc6eb": "0441c7605d7c0a6e4bd718ae2bb8707e",
".git/objects/8b/9dbb176832d81b439fcf0b27c6db980e0cea5b": "8e85e443a47e024dcd3ce45cc4abc25b",
".git/objects/8e/03a52bd4e489d6c80a712ca0bd9144ebc81b0b": "4530c1fafb36249842c99c0804acdd56",
".git/objects/8f/d303c043c001235fb47d66a5610273ec40130d": "9f3e7e19c146787f588bf967f2625b58",
".git/objects/92/6be29dc491dac7deaf487a729900d914208b72": "af1d827c2e4696880956c7da087d7c2c",
".git/objects/92/a6561b188e837184fd29f12922b7e921cb96d7": "cf482269ae47c78888c3432cb3daa096",
".git/objects/94/27c2deca0c0878e1d7ef6bab43741ec745fce1": "af245351281b29a281327e2f5295623b",
".git/objects/95/1ed8f33f2f24f68c64ea8988698fd03b398d3b": "3d855624f54092975581e803b4bf6e4f",
".git/objects/95/5f072ec900eabbc1bbca6c67850f7cba7d6eeb": "a2a8f692840cf6259aa884e619fff569",
".git/objects/96/c81a842bacf9b77d0d0d7b597aae45d9c368f3": "3fd623ee3ef2be701a4093c0da183ba2",
".git/objects/96/e2e81a3d1e00f2638000e2110075d3af23cfbe": "fa5d75dadf587cc64c82eaf9de652f15",
".git/objects/97/584b8d7c145ee5201ca384cbcdec3537a9c0d9": "d1e8b21f0c0564a9ea15c0f184434e51",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/54a5f1ccb914079efcde69f09619168cb3c6b3": "5ecbb9cc15d375f47b504164d2cbd81c",
".git/objects/9a/579f4420bade992bbc7ec293884d3d26c4c635": "73ae06882b9cdbdb4563289a844cba5f",
".git/objects/9b/eee42e10b2170fb5fa321e3b046d3f4938b776": "befd8c7c8bc3cd4833f441ca6f80965d",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/48b90a713135e4b5078138652bf2311c6bda53": "7e3831630d2d9c4d60acc8789808a7ae",
".git/objects/a0/a1440097c9592b4f8f9e74fd3df983c29770a9": "eaeece647ee7bdcecb6fee0697b461fe",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/888a8a089def003998eceaad6ecca842713949": "e9109e51010b779249f393ed3bd95bef",
".git/objects/a3/381283f7a44800c01b1579063be43efd3696b4": "8f273e30d4cc627459d688da44ecb487",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/a6/e9aefd64c7726d2aaf530410adeed84952f725": "5f21b20dec3225aa827821395eb8148e",
".git/objects/a7/0c8c17670f6b91b180b9e555351f7253d8bd74": "1d360b38f77e6407d9e83e47ceff66af",
".git/objects/a7/15c257fe5e2d6069f5101ef9522167e82492aa": "b2387f5eaa7742be2bd24749b163774b",
".git/objects/ac/f787cf202e5a9a283144640000ab90fbf37ff4": "5f4c7a27ce1644d095c183b2bdce859e",
".git/objects/b5/098c6def858e5f0dbd586217b0782d3cfd7460": "1d489061105248072263d954e104f985",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/873595714be0aed5b3f40c3f409125d58b741e": "090eab633a2fc6144387ae5913e6fe15",
".git/objects/bc/361cff0dd2af95fa33f4893d5c7e43cec70e2f": "fe051b2a3ff9f0f2ceb88facc8ab49ea",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/c0/8b3710e6d6474d6608ec0eb643780fda8cc9cd": "3ab09ca273054223744fb163eda7fe7f",
".git/objects/c1/2d609632b8988806e6d6657501401460493dac": "82f81eb3975d91482b44ead9dc7dc7a2",
".git/objects/c4/f122109f0892bfc78f8f87827df2ccd90cc647": "9d08f0ef2563c867f82ca6128a025920",
".git/objects/c5/b977435eaaf986b98fa967533f9abfb93eef09": "915731f00dc9e1be8baeecba571b7ca2",
".git/objects/ca/4e343a1ac8fe3bef2114b77be17e66c9bc448b": "80da56f0976dbcc2af916d85f30752c0",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cc/975689c3a428764624ec2bfd4f66927c1d4c7c": "d6a66da4693be2032d214468c1435878",
".git/objects/cc/bfe00de73ad15d9fb90848fb714a1dae1ceb6a": "389447fd6727eb1bfc1746122d18b02b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/eba73f88f11bd50f7bbd3a5aee7c01cbba921f": "fc59a4c89124ac4697b26a1858351e37",
".git/objects/ce/c7063ee200b74a50ce5a5f9e80ee1936238265": "75134cd2c05731e2325ead10ea098523",
".git/objects/d1/ac9ba1169e4076832034c5585e1c5bf9d6f83c": "876bc5615b97dd6984ed3a864ba27059",
".git/objects/d3/b92cf98bfcf014a71d1e51b467182e78e7fa5b": "1e178f519109a6658a5196849e4b1759",
".git/objects/d4/adf0eecde64b8c47e8ce4a41df84e26559ff2c": "961a3b438993c911b13a032dc5b56cf1",
".git/objects/d5/8e829a83f32206cf746be6e5accdf7ba3622e6": "df133ae736bc844d42e7aaef3e4185d5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/e208d03f350dda394d98d0ff7476cb111f5da9": "842abddfc913da349d04ac2a3e3ec5e6",
".git/objects/dd/f61e2b0b89515994b72555013b3f585770f565": "9141cf76ba5faca2de4d3438d143618d",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e2/b5fbb02fd0ce400780207ac39d203a319af7bb": "4bb073efbd374cfa8e7e0d1b0377cd4c",
".git/objects/e5/0801b3b620af91f824c7655df7d064db05b764": "3a034b2609afa6f9a14cf62c9fb57254",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ea/97ce09c832213ea864358616e6434064f0af8d": "cb8dbc1cd11560c52f30ceb898b52540",
".git/objects/eb/943ee7ca0743f116086703f3bfabb500f509a6": "01bfd2094400bdefd39a43dc1a3c1e62",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/a1ab9d35053e2fc24f734128b5b6338457ab9f": "02920bf366c8a0c9a501fadc559811d6",
".git/objects/ee/434c558cc2678e0086f4b826edfa3a41bcab1c": "6d2157bd204db36c6e21dc3a7a1ec21c",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f1/96ff0f2d16c55a44d836055d4d8c06032c37ad": "40d9476cc28ad014b9779b14b199b1a3",
".git/objects/f3/3e8162997aaa9da582aa81428ee87aa48953a6": "fc158db0779aaef1b463487bc31157f0",
".git/objects/f4/5db23e9caeec17d7c0e3b16e24d53909aa8075": "51b5847c8bd058b46feb1f06c06ab478",
".git/objects/f4/b6e076ebdb135dd7a3ced8faa372f40107d0bd": "a07cff25cae0ec314fed572883467f6d",
".git/objects/f7/8bc1c6f41d8c18c11b9a4e6924fb27f1817d8a": "08ebee30b30f7031d2a59c251ea09197",
".git/objects/f8/daedca4515bb70b84038c6c447022f868f57ab": "6a10cef0b99704e835bd0f233ca880ac",
".git/objects/fc/020f7984712e356a9c0b25e987768d71b23b64": "824d1f291e34a7117d2524b04ffd217a",
".git/objects/fc/567cd2f11d83683d9eb4ca1a5fdc912f7d417c": "a043e3e370f27b8721ecd4c53e4c975e",
".git/objects/fd/a3a9fad0dca8d258777012b86558a33201f772": "33d7b5c9854a4686f43b58548c06f5cd",
".git/objects/fe/02a09435a690b24a27c316b27db1498f62d727": "6d7977693e3fb26ac6b813fe24517cf4",
".git/ORIG_HEAD": "1d9bc0f23526f53aa137ddd6ee3c8675",
".git/refs/heads/master": "1d9bc0f23526f53aa137ddd6ee3c8675",
".git/refs/remotes/origin/master": "1d9bc0f23526f53aa137ddd6ee3c8675",
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
"index.html": "31366cd670607abbba29c5cd84f902b4",
"/": "31366cd670607abbba29c5cd84f902b4",
"main.dart.js": "27d3ed4c0cb503e7cd933a4e4500d5d1",
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
