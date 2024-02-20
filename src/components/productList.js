// const products = await fetch(process.env.REACT_APP_API_URL + '/Products')
//     .then((response) => {
//         return response.json();
//     });

const products = {
    hookahItem: [
      {
        imgSrc: "./img/menuItems/kalE.jpg",
        title: "Кальян Easy",
        subr: "Jibiar, 4:20(lite), Zodiac",
        price: 230,
        id: 1
      },
      {
        imgSrc: "./img/menuItems/kalM.jpg",
        title: "Кальян Medium",
        subr: "4:20(strong), Unity, Creepy",
        price: 250,
        id: 2
      },
      {
        imgSrc: "./img/menuItems/kalH.jpg",
        title: "Кальян Hard",
        subr: "Tangies",
        price: 280,
        id: 3
      }
    ],
    kuhnyaItem: [
      {
        imgSrc: "./img/menuItems/burger.jpg",
        title: "Бургер стандартний",
        subr: "Булочка, помідор, котлета, листя салату, сир, соус",
        price: 120,
        id: 4
      },
      {
        imgSrc: "./img/menuItems/burger.jpg",
        title: "Бургер великий",
        subr: "Булочка, помідор, котлета, листя салату, сир, соус",
        price: 140,
        id: 5
      },
      {
        imgSrc: "./img/menuItems/nagets.jpg",
        title: "Нагетси",
        subr: "8шт.",
        price: 100,
        id: 6
      },
      {
        imgSrc: "./img/menuItems/krilishky.jpg",
        title: "Курині крильця",
        subr: "4шт.",
        price: 100,
        id: 7
      },
      {
        imgSrc: "./img/menuItems/free.jpg",
        title: "Картопля фрі",
        subr: "200гр.",
        price: 75,
        id: 8
      }
    ],
    hotDrinkItem: [
      {
        imgSrc: "./img/menuItems/tea.jpg",
        title: "Чай чорний/зелений",
        subr: "",
        price: 35,
        id: 9
      },
      {
        imgSrc: "./img/menuItems/coffe.jpg",
        title: "Кава амерiкано/еспрессо",
        subr: "",
        price: 30,
        id: 10
      },
      {
        imgSrc: "./img/menuItems/latte.jpg",
        title: "Лате",
        subr: "",
        price: 45,
        id: 11
      }
    ],
    zakuskiItem: [
      {
        imgSrc: "./img/menuItems/bagetS.jpg",
        title: "Cухарики Brushette",
        subr: "140г",
        price: 75,
        id: 12
      },
      {
        imgSrc: "./img/menuItems/bagetB.jpg",
        title: "Cухарики Brushette",
        subr: "70г",
        price: 60,
        id: 13
      },
      {
        imgSrc: "./img/menuItems/grenki.jpg",
        title: "Грінки",
        subr: "110г",
        price: 40,
        id: 14
      },
      {
        imgSrc: "./img/menuItems/chips.jpg",
        title: "Чіпси",
        subr: "133г",
        price: 70,
        id: 15
      },
      {
        imgSrc: "./img/menuItems/chips.jpg",
        title: "Чіпси",
        subr: "60г",
        price: 60,
        id: 16
      },
      {
        imgSrc: "./img/menuItems/oreshky.jpg",
        title: "Арахiс Big Bob",
        subr: "60г",
        price: 40,
        id: 17
      },
      {
        imgSrc: "./img/menuItems/svoyaLin.jpg",
        title: "Арахiс",
        subr: "70г",
        price: 30,
        id: 18
      },
      {
        imgSrc: "./img/menuItems/ryba.jpg",
        title: "Риба",
        subr: "30г",
        price: 80,
        id: 19
      },
      {
        imgSrc: "./img/menuItems/snikers.jpg",
        title: "Snickers",
        subr: "50г",
        price: 35,
        id: 20
      },
      {
        imgSrc: "./img/menuItems/bounty.jpg",
        title: "Bounty",
        subr: "57г",
        price: 40,
        id: 21
      },
      {
        imgSrc: "./img/menuItems/twix.jpg",
        title: "Twix",
        subr: "50г",
        price: 35,
        id: 22
      },
      {
        imgSrc: "./img/menuItems/chokolate.jpg",
        title: "Шоколад",
        subr: "Roshen, Milelnium 80г",
        price: 60,
        id: 23
      }
    ],
    alkoKArtaItem: [
      {
        imgSrc: "./img/menuItems/morgan.jpg",
        title: "Ром Capitan Morgan",
        subr: " Gold/Dark/Tiki/Black/Apple 50г",
        price: 60,
        id: 24
      },
      {
        imgSrc: "./img/menuItems/civas.jpg",
        title: "Вiскi Chivas Regal 12",
        subr: "50г",
        price: 180,
        id: 25
      },
      {
        imgSrc: "./img/menuItems/jameson.jpg",
        title: "Вiскi Jameson",
        subr: "50г",
        price: 90,
        id: 26
      },
      {
        imgSrc: "./img/menuItems/jackDeniels.jpg",
        title: "Вiскi Jack Daniels",
        subr: "Old №7/Apple/Honey/Fire 50г",
        price: 90,
        id: 27
      },
      {
        imgSrc: "./img/menuItems/jimBeam.jpg",
        title: "Вiскi Jim Beam",
        subr: "50г",
        price: 80,
        id: 28
      },
      {
        imgSrc: "./img/menuItems/Pogues.jpg",
        title: "Вiскi Pogues",
        subr: "50г",
        price: 80,
        id: 29
      },
      {
        imgSrc: "./img/menuItems/ballantines.jpg",
        title: "Вiскi Ballantines",
        subr: "50г",
        price: 80,
        id: 30
      },
      {
        imgSrc: "./img/menuItems/redLabel.jpg",
        title: "Вiскi Red Label",
        subr: "50г",
        price: 65,
        id: 31
      },
      {
        imgSrc: "./img/menuItems/bells.jpg",
        title: "Вiскi Bells",
        subr: "50г",
        price: 60,
        id: 32
      },
      {
        imgSrc: "./img/menuItems/hankey.jpg",
        title: "Вiскi Hankey Bannister",
        subr: "50г",
        price: 60,
        id: 33
      },
      {
        imgSrc: "./img/menuItems/Oakheart.jpg",
        title: "Вiскi Oakheart",
        subr: "50г",
        price: 60,
        id: 34
      },
      {
        imgSrc: "./img/menuItems/lauders.jpg",
        title: "Вiскi Lauders",
        subr: "50г",
        price: 60,
        id: 35
      },
      {
        imgSrc: "./img/menuItems/sirEdward.jpg",
        title: "Вiскi Sir Edwards",
        subr: "50г",
        price: 60,
        id: 36
      },
      {
        imgSrc: "./img/menuItems/jagermeister.jpg",
        title: "Лікер Jagermeister",
        subr: "50г",
        price: 65,
        id: 37
      },
      {
        imgSrc: "./img/menuItems/becherovka.jpg",
        title: "Лікер Becherovka",
        subr: "50г",
        price: 45,
        id: 38
      },
      {
        imgSrc: "./img/menuItems/sambuka.jpg",
        title: "Лікер Sambuca",
        subr: "50г",
        price: 45,
        id: 39
      },
      {
        imgSrc: "./img/menuItems/hlybDar.jpg",
        title: "Водка Хлiбний Дар",
        subr: "500ml",
        price: 250,
        id: 40
      },
      {
        imgSrc: "./img/menuItems/greenDay.jpg",
        title: "Водка Green Day",
        subr: "500ml",
        price: 270,
        id: 41
      },
      {
        imgSrc: "./img/menuItems/finlandia.jpg",
        title: "Водка Finlandia",
        subr: "500ml",
        price: 500,
        id: 42
      },
      {
        imgSrc: "./img/menuItems/absolut.jpg",
        title: "Водка Absolute",
        subr: "700ml",
        price: 650,
        id: 43
      },
      {
        imgSrc: "./img/menuItems/lex.jpg",
        title: "Водка Lex",
        subr: "500ml",
        price: 400,
        id: 44
      },
      {
        imgSrc: "./img/menuItems/oldKaheti.jpg",
        title: "Коньяк Old Kakheti",
        subr: "500ml",
        price: 400,
        id: 45
      },
      {
        imgSrc: "./img/menuItems/aznauri.jpg",
        title: "Коньяк Aznauri",
        subr: "500ml",
        price: 300,
        id: 46
      },
      {
        imgSrc: "./img/menuItems/aznauri.jpg",
        title: "Коньяк Aznauri",
        subr: "375ml",
        price: 220,
        id: 47
      },
      {
        imgSrc: "./img/menuItems/georgian.jpg",
        title: "Коньяк Georgian Legend",
        subr: "500ml",
        price: 320,
        id: 48
      },
      {
        imgSrc: "./img/menuItems/champagne.jpg",
        title: "Шампанське Fragolino",
        subr: "750ml",
        price: 270,
        id: 49
      },
      {
        imgSrc: "./img/menuItems/champagne.jpg",
        title: "Шампанське Lambrusco/Asti",
        subr: "750ml",
        price: 320,
        id: 50
      },
      {
        imgSrc: "./img/menuItems/vine.jpg",
        title: "Вино Напiвсолодке/Сухе",
        subr: "750ml",
        price: 200,
        id: 51
      }
    ],
    othersItem: [
      {
        imgSrc: "./img/menuItems/heets.jpg",
        title: "Стики HEETS",
        subr: "",
        price: 170,
        id: 52
      }
    ],
    holodosItem: [
      {
        imgSrc: "./img/menuItems/divo.jpg",
        title: "Divo",
        subr: "500ml",
        price: 35,
        id: 53
      },
      {
        imgSrc: "./img/menuItems/sanBenedetto.jpg",
        title: "San Benedetto",
        subr: "500ml",
        price: 40,
        id: 54
      },
      {
        imgSrc: "./img/menuItems/borjomi.jpg",
        title: "Borjomi",
        subr: "330ml",
        price: 65,
        id: 55
      },
      {
        imgSrc: "./img/menuItems/fuzetea.jpg",
        title: "fuzetea",
        subr: "500ml",
        price: 35,
        id: 56
      },
      {
        imgSrc: "./img/menuItems/cola03.jpg",
        title: "Coca Cola",
        subr: "330ml",
        price: 35,
        id: 57
      },
      {
        imgSrc: "./img/menuItems/cola.jpg",
        title: "Coca Cola",
        subr: "500ml",
        price: 40,
        id: 58
      },
      {
        imgSrc: "./img/menuItems/cola125.jpg",
        title: "Coca Cola",
        subr: "1,25l",
        price: 70,
        id: 59
      },
      {
        imgSrc: "./img/menuItems/fanta03.jpg",
        title: "Fanta",
        subr: "330ml",
        price: 35,
        id: 60
      },
      {
        imgSrc: "./img/menuItems/fanta05.jpg",
        title: "Fanta",
        subr: "500ml",
        price: 40,
        id: 61
      },
      {
        imgSrc: "./img/menuItems/fanta125.jpg",
        title: "Fanta",
        subr: "1,25l",
        price: 70,
        id: 62
      },
      {
        imgSrc: "./img/menuItems/sprite03.jpg",
        title: "Sprite",
        subr: "330ml",
        price: 35,
        id: 63
      },
      {
        imgSrc: "./img/menuItems/sprite.jpg",
        title: "Sprite",
        subr: "500ml",
        price: 40,
        id: 64
      },
      {
        imgSrc: "./img/menuItems/shakeZ.jpg",
        title: "Shake БА",
        subr: "330ml",
        price: 40,
        id: 65
      },
      {
        imgSrc: "./img/menuItems/shweps.jpg",
        title: "Schweppes",
        subr: "330ml",
        price: 40,
        id: 66
      },
      {
        imgSrc: "./img/menuItems/redBull.jpg",
        title: "Red Bull",
        subr: "330ml",
        price: 70,
        id: 67
      },
      {
        imgSrc: "./img/menuItems/nonStop.jpg",
        title: "NON STOP",
        subr: "250ml",
        price: 40,
        id: 68
      },
      {
        imgSrc: "./img/menuItems/revo.jpg",
        title: "Revo",
        subr: "500ml",
        price: 75,
        id: 69
      },
      {
        imgSrc: "./img/menuItems/shake.jpg",
        title: "Shake",
        subr: "500ml",
        price: 60,
        id: 70
      },
      {
        imgSrc: "./img/menuItems/fragolino.jpg",
        title: "Fragolino",
        subr: "330ml",
        price: 65,
        id: 71
      },
      {
        imgSrc: "./img/menuItems/sitro.jpg",
        title: "Сітро",
        subr: "500ml",
        price: 40,
        id: 72
      },
      {
        imgSrc: "./img/menuItems/garage.jpg",
        title: "Garage",
        subr: "500ml",
        price: 65,
        id: 73
      },
      {
        imgSrc: "./img/menuItems/rich.jpg",
        title: "Сік Rich",
        subr: "1L",
        price: 75,
        id: 74
      },
      {
        imgSrc: "./img/menuItems/bud.jpg",
        title: "Пиво Bud",
        subr: "500ml",
        price: 70,
        id: 75
      },
      {
        imgSrc: "./img/menuItems/tuborg.jpg",
        title: "Пиво Tuborg",
        subr: "500ml",
        price: 70,
        id: 76
      },
      {
        imgSrc: "./img/menuItems/stella.jpg",
        title: "Пиво Stella",
        subr: "500ml",
        price: 70,
        id: 77
      },
      {
        imgSrc: "./img/menuItems/dizhka.jpg",
        title: "Пиво Повна Дiжка",
        subr: "500ml",
        price: 60,
        id: 78
      },
      {
        imgSrc: "./img/menuItems/corona.jpg",
        title: "Пиво Corona Extra",
        subr: "330ml",
        price: 100,
        id: 79
      },
      {
        imgSrc: "./img/menuItems/heinek.jpg",
        title: "Пиво Heineken",
        subr: "330ml",
        price: 60,
        id: 80
      },
      {
        imgSrc: "./img/menuItems/heiniken05.jpg",
        title: "Пиво Heineken",
        subr: "500ml",
        price: 70,
        id: 81
      },
      {
        imgSrc: "./img/menuItems/carlsberg.jpg",
        title: "Пиво Carlsberg",
        subr: "500ml",
        price: 70,
        id: 82
      },
      {
        imgSrc: "./img/menuItems/carlsbergZero.jpg",
        title: "Пиво Carlsberg Zero",
        subr: "500ml",
        price: 60,
        id: 83
      }
    ],
    barnayaKarta: [
      {
        imgSrc: "./img/menuItems/maiTai.jpg",
        title: "Май Тай",
        subr: "Ром білий, ром золотий, ром темний, трипл сек, амаретто, сік",
        price: 135,
        id: 84
      },
      {
        imgSrc: "./img/menuItems/koktail.webp",
        title: "Блакитні ночі",
        subr: "Темний ром, blue curacao, ананасовий сік",
        price: 80,
        id: 85
      },
      {
        imgSrc: "./img/menuItems/tekilaSanrayz.jpg",
        title: "Текіла Санрайз",
        subr: "Текіла, апельсиновий сік, гренадин",
        price: 95,
        id: 86
      },
      {
        imgSrc: "./img/menuItems/sexBeach.jpg",
        title: "Секс на пляжі",
        subr: "Горілка, персиковий лікер, гренадин",
        price: 95,
        id: 87
      },
      {
        imgSrc: "./img/menuItems/laguna.jpg",
        title: "Блакитна лагуна",
        subr: "Горілка, blue curacao, sprite",
        price: 65,
        id: 88
      },
      {
        imgSrc: "./img/menuItems/zelFeya.jpg",
        title: "Зелена фея",
        subr: "Текіла, абсент, горілка, зелений банан, енергетик",
        price: 105,
        id: 89
      },
      {
        imgSrc: "./img/menuItems/long.jpg",
        title: "Лонг Айленд",
        subr: "Джин, горілка, золотий ром, текіла, трипл сек, лимонний сік, кола",
        price: 130,
        id: 90
      },
      {
        imgSrc: "./img/menuItems/aperol.jpg",
        title: "Апероль",
        subr: "Шампанське, апероль, спрайт",
        price: 90,
        id: 91
      },
      {
        imgSrc: "./img/menuItems/negroni.jpg",
        title: "Негроні",
        subr: "Джин, кампарі, вермут",
        price: 95,
        id: 92
      },
      {
        imgSrc: "./img/menuItems/daikiri.jpg",
        title: "Дайкірі",
        subr: "Ром білий, лимонний сік, цукровий сироп",
        price: 70,
        id: 93
      },
      {
        imgSrc: "./img/menuItems/pinaKolada.jpg",
        title: "Піна Колада",
        subr: "Ром білий, кокосовий сироп, молоко",
        price: 80,
        id: 94
      },
      {
        imgSrc: "./img/menuItems/kubaLibre.jpg",
        title: "Куба Лібре",
        subr: "Золотий ром, сік лайма, лимонний сік, кола",
        price: 95,
        id: 95
      },
      {
        imgSrc: "./img/menuItems/jagerBomb.jpg",
        title: "Ягер Бомб",
        subr: "Jägermeister, енергетик",
        price: 100,
        id: 96
      },
      {
        imgSrc: "./img/menuItems/kosmopoliten.jpg",
        title: "Космополітен",
        subr: "Горілка, трипл сек, гренадин, сік лайма",
        price: 90,
        id: 97
      },
      {
        imgSrc: "./img/menuItems/bakardi.jpg",
        title: "Бакарді",
        subr: "Білий ром, лимонний сік, гренадин",
        price: 70,
        id: 98
      },
      {
        imgSrc: "./img/menuItems/mojito.jpg",
        title: "Мохіто",
        subr: "Горілка, спрайт, м`ятний сироп, лимонний сік, сік лайма, м`ята",
        price: 95,
        id: 99
      },
      {
        imgSrc: "./img/menuItems/orange.jpg",
        title: "Коктейль із апельсиновим соком",
        subr: "Мартіні, горілка, апельсиновий сік",
        price: 70,
        id: 100
      },
      {
        imgSrc: "./img/menuItems/laguna.jpg",
        title: "Голуба Лагуна БА",
        subr: "Ананасовий сік, blue curacao, sprite",
        price: 45,
        id: 101
      },
      {
        imgSrc: "./img/menuItems/tekilaSanrayz.jpg",
        title: "Санрайз БА",
        subr: "Апельсиновий сік, ананасовий сік, лимонний сік, гренадин",
        price: 50,
        id: 102
      },
      {
        imgSrc: "./img/menuItems/atlanta.jpg",
        title: "Атланта БА",
        subr: "Ананасовий сік, кола",
        price: 35,
        id: 103
      },
      {
        imgSrc: "./img/menuItems/mojito.jpg",
        title: "Мохіто БА",
        subr: "Цукровий сироп, спрайт, м`ятний сироп, лимонний сік, сік лайма, м`ята",
        price: 60,
        id: 104
      },
      {
        imgSrc: "./img/menuItems/cherry.jpg",
        title: "Вишневий рай БА",
        subr: "Вишневий сік, апельсиновий сік, сироп Вишня",
        price: 45,
        id: 105
      }
    ],
    shotsItem: [
      {
        imgSrc: "./img/menuItems/b52.jpg",
        title: "Б-52",
        subr: "Кавовий лікер, бейліс, трипл сек",
        price: 100,
        id: 106
      },
      {
        imgSrc: "./img/menuItems/hirosima.jpg",
        title: "Хіросіма",
        subr: "Самбука, бейліс, абсент",
        price: 100,
        id: 107
      },
      {
        imgSrc: "./img/menuItems/brain.jpg",
        title: "Мізки",
        subr: "Горілка, лимонний сік, бейліс, гренадин",
        price: 80,
        id: 108
      },
      {
        imgSrc: "./img/menuItems/meduza.jpg",
        title: "Медуза",
        subr: "Трипл сек, кавовий лікер, абсент, бейліс",
        price: 100,
        id: 109
      },
      {
        imgSrc: "./img/menuItems/greenMex.jpg",
        title: "Зелений мексиканець",
        subr: "Банановий лікер, лимонний сік, текіла",
        price: 70,
        id: 110
      }
    ]
  }
export default products 