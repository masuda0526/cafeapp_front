import { CafeProps } from "@/interface/CafeProps";

export const testData: CafeProps[] = [
  {
    _id:'aaa1',
    isGone: false,
    cafeName: "カフェあおぞら",
    cafeCity: "徳島市",
    foodMenu: ["パスタ", "チーズケーキ"],
    time: "10:00〜18:00",
    atmo: "明るくて開放的",
    goodPoints: [
      "スタッフが親切",
      "窓際の席が心地よい",
      "BGMが落ち着いている",
      "照明が自然光っぽくてやさしい"
    ],
    badPoints: [
      "駐車場が狭い",
      "混雑時は席が取りにくい",
      "子供連れには少し静かすぎるかも"
    ],
    comment: null,
    icon: null,
    travelTime: {
      way: "walk",
      minute: 5
    }
  },
  {
    _id:'aaa2',
    isGone: false,
    cafeName: "森のこみち珈琲店",
    cafeCity: "神山町",
    foodMenu: ["カレー", "ガトーショコラ"],
    time: "11:00〜17:00",
    atmo: "森の中の静かな空間",
    goodPoints: [
      "自然に囲まれて落ち着ける",
      "読書にぴったり",
      "テラス席が気持ちいい",
      "店員さんが山のことに詳しい"
    ],
    badPoints: [
      "電波が入りづらい",
      "虫が多い季節がある",
      "山道が細くて運転が大変"
    ],
    comment: null,
    icon: null,
    travelTime: {
      way: "car",
      minute: 20
    }
  },
  {
    _id:'aaa3',
    isGone: false,
    cafeName: "海辺のキッチン しおかぜ",
    cafeCity: "鳴門市",
    foodMenu: ["シーフードパスタ", "レモンタルト"],
    time: "9:30〜16:00",
    atmo: "海が見える爽やかな空間",
    goodPoints: [
      "景色が最高",
      "海風が心地よい",
      "料理の盛り付けがきれい",
      "写真映えする",
      "BGMが波の音"
    ],
    badPoints: [
      "風が強い日はテラス利用不可",
      "やや値段が高め",
      "最寄駅から少し遠い"
    ],
    comment: null,
    icon: null,
    travelTime: {
      way: "car",
      minute: 15
    }
  },
  {
    _id:'aaa4',
    isGone: true,
    cafeName: "珈琲舎みやび",
    cafeCity: "阿南市",
    foodMenu: ["ナポリタン", "ミックスサンド"],
    time: "9:00〜15:00",
    atmo: "レトロで落ち着く",
    goodPoints: [
      "昭和風の雰囲気が良い",
      "長居できた",
      "常連さんが多くて安心感があった"
    ],
    badPoints: [
      "メニューが少ない",
      "建物が老朽化していた",
      "少し暗い印象だった"
    ],
    comment: "2022年に閉店しました。",
    icon: "cat",
    travelTime: {
      way: "walk",
      minute: 10
    }
  },
  {
    _id: 'aaa5',
    isGone: true,
    cafeName: "山の上コーヒー",
    cafeCity: "美馬市",
    foodMenu: ["ホットサンド", "チョコレートケーキ"],
    time: "8:00〜14:00",
    atmo: "静かでのんびりできる山の上の隠れ家",
    goodPoints: [
      "空気がきれい",
      "リラックスできる",
      "景色が一望できた",
      "他のお客さんと距離を取れる"
    ],
    badPoints: [
      "アクセスが悪い",
      "冬は寒すぎることがある",
      "営業時間が短かった",
      "急な坂道が多い"
    ],
    comment: "2024年春に営業終了。",
    icon: "cat",
    travelTime: {
      way: "car",
      minute: 40
    }
  }
];

