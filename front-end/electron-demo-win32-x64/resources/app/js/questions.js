// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
    {
    numb: 2,
    question: "في مجمعات سكنية نقدر نمشي ب ",
    answer: "60 كلم",
    options: [
      "100 كلم",
      "80 كلم",
      "60 كلم",
      "120 كلم",
    ]
  },
    {
    numb: 3,
    question: "أتناء السير بالليل نمشي بأضواء ",
    answer: "التقابل",
    options: [
      "الطريق",
      "الوضع",
      "التقابل",
      "الوضع و الطريق"
    ]
  },
    {
    numb: 4,
    question: "بعد علامة تحديد سرعة في 80 كلم",
    answer: "نقدر نمشي ب 70 كلم",
    options: [
      "نقدر نمشي ب 90 كلم",
      "نقدر نمشي ب 70 كلم",
      "نقدر نمشي ب 100 كلم",
      "نقدر نمشي ب 120 كلم"
     
    ]
  },
    {
    numb: 5,
    question: "بالقرب من المستشفى نبه بالمنبه الصوتي",
    answer: "لا",
    options: [
      "نعم",
      "لا",
      "في بعض الحالات",
      "عند الضرورة"
      
    ]
  },

    {
    numb: 6,
    question: "عاد قمت بإنزال راكب نقدر ننطلق ب",
    answer: "المستوى الأول ديال سرعة",
    options: [
      "المستوى التاني ديال سرعة",
      "المستوى الرابع ديال سرعة",
      "المستوى الأول ديال سرعة",
      "نقطة العطالة(point mort)"
    ]
  },
  
  {
    numb: 7,
    question: "أوراق لكتلزم تكون عندي لسيارة ديالي لفايتة 5 سنوات أو أكثر",
    answer: "بطاقة الرمادية و شهادة الفحص التقني و ضريبة و تأمين على سيارة",
    options: [
      " بطاقة الرمادية و شهادة الفحص التقني و ضريبة و تأمين على سيارة  و شهادة البيع",
      "بطاقة الرمادية و شهادة الفحص التقني و تأمين على سيارة",
      "بطاقة الرمادية و ضريبة و تأمين على سيارة",
      "بطاقة الرمادية و شهادة الفحص التقني و ضريبة و تأمين على سيارة"
    ]
  },
  {
    numb: 8,
    question: "أوراق لكتلزم تكون عندي لسيارة ديالي لفايتة 5 سنوات أو أكثر",
    answer: "بطاقة الرمادية و شهادة الفحص التقني و ضريبة و تأمين على سيارة",
    options: [
      " بطاقة الرمادية و شهادة الفحص التقني و ضريبة و تأمين على سيارة  و شهادة البيع",
      "بطاقة الرمادية و شهادة الفحص التقني و تأمين على سيارة",
      "بطاقة الرمادية و ضريبة و تأمين على سيارة",
      "بطاقة الرمادية و شهادة الفحص التقني و ضريبة و تأمين على سيارة"
    ]
  },
  {
    numb: 9,
    question: "أوراق لكتلزم تكون عندي لسيارة ديالي لفايتة 5 سنوات أو أكثر",
    answer: "بطاقة الرمادية و شهادة الفحص التقني و ضريبة و تأمين على سيارة",
    options: [
      " بطاقة الرمادية و شهادة الفحص التقني و ضريبة و تأمين على سيارة  و شهادة البيع",
      "بطاقة الرمادية و شهادة الفحص التقني و تأمين على سيارة",
      "بطاقة الرمادية و ضريبة و تأمين على سيارة",
      "بطاقة الرمادية و شهادة الفحص التقني و ضريبة و تأمين على سيارة"
    ]
  },
  {
    numb: 10,
    question: "أوراق لكتلزم تكون عندي لسيارة ديالي لفايتة 5 سنوات أو أكثر",
    answer: "بطاقة الرمادية و شهادة الفحص التقني و ضريبة و تأمين على سيارة",
    options: [
      " بطاقة الرمادية و شهادة الفحص التقني و ضريبة و تأمين على سيارة  و شهادة البيع",
      "بطاقة الرمادية و شهادة الفحص التقني و تأمين على سيارة",
      "بطاقة الرمادية و ضريبة و تأمين على سيارة",
      "بطاقة الرمادية و شهادة الفحص التقني و ضريبة و تأمين على سيارة"
    ]
  },
  {
    numb: 11,
    question: "أوراق لكتلزم تكون عندي لسيارة ديالي لفايتة 5 سنوات أو أكثر",
    answer: "بطاقة الرمادية و شهادة الفحص التقني و ضريبة و تأمين على سيارة",
    options: [
      " بطاقة الرمادية و شهادة الفحص التقني و ضريبة و تأمين على سيارة  و شهادة البيع",
      "بطاقة الرمادية و شهادة الفحص التقني و تأمين على سيارة",
      "بطاقة الرمادية و ضريبة و تأمين على سيارة",
      "بطاقة الرمادية و شهادة الفحص التقني و ضريبة و تأمين على سيارة"
    ]
  },
  {
    numb: 12,
    question: "عاد قمت بإنزال راكب نقدر ننطلق ب",
    answer: "المستوى الأول ديال سرعة",
    options: [
      "المستوى التاني ديال سرعة",
      "المستوى الرابع ديال سرعة",
      "المستوى الأول ديال سرعة",
      "نقطة العطالة(point mort)"
    ]
  },
  {
    numb: 13,
    question: "عاد قمت بإنزال راكب نقدر ننطلق ب",
    answer: "المستوى الأول ديال سرعة",
    options: [
      "المستوى التاني ديال سرعة",
      "المستوى الرابع ديال سرعة",
      "المستوى الأول ديال سرعة",
      "نقطة العطالة(point mort)"
    ]
  },
  {
    numb: 14,
    question: "عاد قمت بإنزال راكب نقدر ننطلق ب",
    answer: "المستوى الأول ديال سرعة",
    options: [
      "المستوى التاني ديال سرعة",
      "المستوى الرابع ديال سرعة",
      "المستوى الأول ديال سرعة",
      "نقطة العطالة(point mort)"
    ]
  },
  {
    numb: 15,
    question: "عاد قمت بإنزال راكب نقدر ننطلق ب",
    answer: "المستوى الأول ديال سرعة",
    options: [
      "المستوى التاني ديال سرعة",
      "المستوى الرابع ديال سرعة",
      "المستوى الأول ديال سرعة",
      "نقطة العطالة(point mort)"
    ]
  },
  {
    numb: 16,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
  {
    numb: 16,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
  {
    numb: 17,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
  {
    numb: 18,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
  {
    numb: 19,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
  {
    numb: 20,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
  {
    numb: 21,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
  {
    numb: 22,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
  {
    numb: 23,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
  {
    numb: 24,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
  {
    numb: 25,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
  {
    numb: 26,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
  {
    numb: 27,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
  {
    numb: 28,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
  {
    numb: 29,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
  {
    numb: 30,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
  {
    numb: 31,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
  {
    numb: 32,
    question: "?عند علامة قف ",
    answer: "نوقف",
    options: [
      "نصوص من سرعة",
      "نوقف",
      "نحفض على نفس سرعة او ندوز",
      "نحافض على نفس سرعة او ندوز"
    ]
  },
  
 
  
];