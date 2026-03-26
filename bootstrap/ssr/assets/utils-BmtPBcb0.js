import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const currencies = [
  { label: "US Dollar", value: "USD", symbol: "$" },
  { label: "Euro", value: "EUR", symbol: "€" },
  { label: "British Pound", value: "GBP", symbol: "£" },
  { label: "Japanese Yen", value: "JPY", symbol: "¥" },
  { label: "Australian Dollar", value: "AUD", symbol: "A$" },
  { label: "Canadian Dollar", value: "CAD", symbol: "C$" },
  { label: "Swiss Franc", value: "CHF", symbol: "CHF" },
  { label: "Chinese Yuan", value: "CNY", symbol: "¥" },
  { label: "Swedish Krona", value: "SEK", symbol: "kr" },
  { label: "New Zealand Dollar", value: "NZD", symbol: "NZ$" },
  { label: "Mexican Peso", value: "MXN", symbol: "$" },
  { label: "Singapore Dollar", value: "SGD", symbol: "S$" },
  { label: "Hong Kong Dollar", value: "HKD", symbol: "HK$" },
  { label: "Norwegian Krone", value: "NOK", symbol: "kr" },
  { label: "South Korean Won", value: "KRW", symbol: "₩" },
  { label: "Turkish Lira", value: "TRY", symbol: "₺" },
  { label: "Russian Ruble", value: "RUB", symbol: "₽" },
  { label: "Indian Rupee", value: "INR", symbol: "₹" },
  { label: "Brazilian Real", value: "BRL", symbol: "R$" },
  { label: "South African Rand", value: "ZAR", symbol: "R" },
  { label: "Polish Zloty", value: "PLN", symbol: "zł" },
  { label: "Danish Krone", value: "DKK", symbol: "kr" },
  { label: "Czech Koruna", value: "CZK", symbol: "Kč" },
  { label: "Hungarian Forint", value: "HUF", symbol: "Ft" },
  { label: "Romanian Leu", value: "RON", symbol: "lei" },
  { label: "Croatian Kuna", value: "HRK", symbol: "kn" },
  { label: "Bulgarian Lev", value: "BGN", symbol: "лв" },
  { label: "Israeli Shekel", value: "ILS", symbol: "₪" },
  { label: "Chilean Peso", value: "CLP", symbol: "$" },
  { label: "Philippine Peso", value: "PHP", symbol: "₱" },
  { label: "Thai Baht", value: "THB", symbol: "฿" },
  { label: "Malaysian Ringgit", value: "MYR", symbol: "RM" },
  { label: "Indonesian Rupiah", value: "IDR", symbol: "Rp" },
  { label: "UAE Dirham", value: "AED", symbol: "د.إ" },
  { label: "Saudi Riyal", value: "SAR", symbol: "﷼" },
  { label: "Kuwaiti Dinar", value: "KWD", symbol: "د.ك" },
  { label: "Qatari Riyal", value: "QAR", symbol: "﷼" },
  { label: "Bangladeshi Taka", value: "BDT", symbol: "৳" },
  { label: "Pakistani Rupee", value: "PKR", symbol: "₨" },
  { label: "Sri Lankan Rupee", value: "LKR", symbol: "₨" },
  { label: "Egyptian Pound", value: "EGP", symbol: "£" },
  { label: "Moroccan Dirham", value: "MAD", symbol: "د.م." },
  { label: "Nigerian Naira", value: "NGN", symbol: "₦" },
  { label: "Kenyan Shilling", value: "KES", symbol: "KSh" },
  { label: "Ghanaian Cedi", value: "GHS", symbol: "₵" },
  { label: "Ugandan Shilling", value: "UGX", symbol: "USh" },
  { label: "Tanzanian Shilling", value: "TZS", symbol: "TSh" },
  { label: "Ethiopian Birr", value: "ETB", symbol: "Br" },
  { label: "Argentine Peso", value: "ARS", symbol: "$" },
  { label: "Colombian Peso", value: "COP", symbol: "$" },
  { label: "Peruvian Sol", value: "PEN", symbol: "S/" },
  { label: "Venezuelan Bolívar", value: "VES", symbol: "Bs" },
  { label: "Uruguayan Peso", value: "UYU", symbol: "$" },
  { label: "Bolivian Boliviano", value: "BOB", symbol: "Bs" },
  { label: "Paraguayan Guarani", value: "PYG", symbol: "₲" },
  { label: "Ecuadorian Sucre", value: "ECS", symbol: "S/." },
  { label: "Vietnamese Dong", value: "VND", symbol: "₫" },
  { label: "Cambodian Riel", value: "KHR", symbol: "៛" },
  { label: "Laotian Kip", value: "LAK", symbol: "₭" },
  { label: "Myanmar Kyat", value: "MMK", symbol: "K" },
  { label: "Nepalese Rupee", value: "NPR", symbol: "₨" },
  { label: "Bhutanese Ngultrum", value: "BTN", symbol: "Nu." },
  { label: "Maldivian Rufiyaa", value: "MVR", symbol: "Rf" },
  { label: "Afghan Afghani", value: "AFN", symbol: "؋" },
  { label: "Iranian Rial", value: "IRR", symbol: "﷼" },
  { label: "Iraqi Dinar", value: "IQD", symbol: "ع.د" },
  { label: "Jordanian Dinar", value: "JOD", symbol: "د.ا" },
  { label: "Lebanese Pound", value: "LBP", symbol: "ل.ل" },
  { label: "Syrian Pound", value: "SYP", symbol: "£" },
  { label: "Omani Rial", value: "OMR", symbol: "﷼" },
  { label: "Bahraini Dinar", value: "BHD", symbol: ".د.ب" },
  { label: "Yemeni Rial", value: "YER", symbol: "﷼" },
  { label: "Tunisian Dinar", value: "TND", symbol: "د.ت" },
  { label: "Algerian Dinar", value: "DZD", symbol: "د.ج" },
  { label: "Libyan Dinar", value: "LYD", symbol: "ل.د" },
  { label: "Sudanese Pound", value: "SDG", symbol: "ج.س." },
  { label: "Somali Shilling", value: "SOS", symbol: "S" },
  { label: "Djiboutian Franc", value: "DJF", symbol: "Fdj" },
  { label: "Eritrean Nakfa", value: "ERN", symbol: "Nfk" },
  { label: "Rwandan Franc", value: "RWF", symbol: "FRw" },
  { label: "Burundian Franc", value: "BIF", symbol: "FBu" },
  { label: "Congolese Franc", value: "CDF", symbol: "FC" },
  { label: "Central African CFA Franc", value: "XAF", symbol: "FCFA" },
  { label: "West African CFA Franc", value: "XOF", symbol: "CFA" },
  { label: "Botswana Pula", value: "BWP", symbol: "P" },
  { label: "Namibian Dollar", value: "NAD", symbol: "$" },
  { label: "Lesotho Loti", value: "LSL", symbol: "L" },
  { label: "Swazi Lilangeni", value: "SZL", symbol: "E" },
  { label: "Zambian Kwacha", value: "ZMW", symbol: "ZK" },
  { label: "Malawian Kwacha", value: "MWK", symbol: "MK" },
  { label: "Mozambican Metical", value: "MZN", symbol: "MT" },
  { label: "Mauritian Rupee", value: "MUR", symbol: "₨" },
  { label: "Seychellois Rupee", value: "SCR", symbol: "₨" },
  { label: "Malagasy Ariary", value: "MGA", symbol: "Ar" },
  { label: "Comorian Franc", value: "KMF", symbol: "CF" },
  { label: "Cape Verdean Escudo", value: "CVE", symbol: "Esc" },
  { label: "Gambian Dalasi", value: "GMD", symbol: "D" },
  { label: "Guinea-Bissau Peso", value: "GWP", symbol: "P" },
  { label: "Liberian Dollar", value: "LRD", symbol: "$" },
  { label: "Sierra Leonean Leone", value: "SLL", symbol: "Le" },
  { label: "Guinean Franc", value: "GNF", symbol: "FG" },
  { label: "Senegalese Franc", value: "XOF", symbol: "CFA" },
  { label: "Ukrainian Hryvnia", value: "UAH", symbol: "₴" },
  { label: "Belarusian Ruble", value: "BYN", symbol: "Br" },
  { label: "Moldovan Leu", value: "MDL", symbol: "L" },
  { label: "Georgian Lari", value: "GEL", symbol: "₾" },
  { label: "Armenian Dram", value: "AMD", symbol: "֏" },
  { label: "Azerbaijani Manat", value: "AZN", symbol: "₼" },
  { label: "Kazakhstani Tenge", value: "KZT", symbol: "₸" },
  { label: "Uzbekistani Som", value: "UZS", symbol: "so'm" },
  { label: "Turkmenistani Manat", value: "TMT", symbol: "T" },
  { label: "Kyrgyzstani Som", value: "KGS", symbol: "сом" },
  { label: "Tajikistani Somoni", value: "TJS", symbol: "ЅМ" },
  { label: "Mongolian Tugrik", value: "MNT", symbol: "₮" },
  { label: "North Korean Won", value: "KPW", symbol: "₩" },
  { label: "Brunei Dollar", value: "BND", symbol: "B$" },
  { label: "East Caribbean Dollar", value: "XCD", symbol: "$" },
  { label: "Jamaican Dollar", value: "JMD", symbol: "J$" },
  { label: "Trinidad and Tobago Dollar", value: "TTD", symbol: "TT$" },
  { label: "Barbadian Dollar", value: "BBD", symbol: "Bds$" },
  { label: "Bahamian Dollar", value: "BSD", symbol: "$" },
  { label: "Belize Dollar", value: "BZD", symbol: "BZ$" },
  { label: "Costa Rican Colón", value: "CRC", symbol: "₡" },
  { label: "Guatemalan Quetzal", value: "GTQ", symbol: "Q" },
  { label: "Honduran Lempira", value: "HNL", symbol: "L" },
  { label: "Nicaraguan Córdoba", value: "NIO", symbol: "C$" },
  { label: "Panamanian Balboa", value: "PAB", symbol: "B/." },
  { label: "Dominican Peso", value: "DOP", symbol: "RD$" },
  { label: "Haitian Gourde", value: "HTG", symbol: "G" },
  { label: "Cuban Peso", value: "CUP", symbol: "$" },
  { label: "Fijian Dollar", value: "FJD", symbol: "FJ$" },
  { label: "Papua New Guinean Kina", value: "PGK", symbol: "K" },
  { label: "Vanuatu Vatu", value: "VUV", symbol: "VT" },
  { label: "Tongan Paʻanga", value: "TOP", symbol: "T$" },
  { label: "Samoan Tala", value: "WST", symbol: "WS$" },
  { label: "Solomon Islands Dollar", value: "SBD", symbol: "SI$" }
];
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const getCourseDuration = (course, format = "hhmmss") => {
  const totalSeconds = course.sections.reduce((totalTime, section) => {
    return totalTime + section.section_lessons.reduce((sectionTime, lesson) => {
      const [hours2, minutes2, seconds2] = (lesson.duration || "00:00:00").split(":").map(Number);
      return sectionTime + (hours2 * 3600 + minutes2 * 60 + seconds2);
    }, 0);
  }, 0);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds % 3600 / 60);
  if (format === "readable") {
    if (hours > 0 && minutes > 0) {
      return `${hours}hr ${minutes}min`;
    } else if (hours > 0) {
      return `${hours}hr`;
    } else {
      return `${minutes}min`;
    }
  }
  const seconds = totalSeconds % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
const getCompletedContents = (watchHistory) => {
  const completed = typeof watchHistory.completed_watching === "string" ? JSON.parse(watchHistory.completed_watching) : watchHistory.completed_watching || [];
  return completed;
};
const getCourseCompletion = (course, completed) => {
  const totalItems = course.sections.reduce((total, section) => total + section.section_lessons.length + section.section_quizzes.length, 0);
  const completedItems = course.sections.reduce((total, section) => {
    const completedLessons = section.section_lessons.filter(
      (lesson) => completed.some((item) => String(item.id) === String(lesson.id) && item.type === "lesson")
    ).length;
    const completedQuizzes = section.section_quizzes.filter(
      (quiz) => completed.some((item) => String(item.id) === String(quiz.id) && item.type === "quiz")
    ).length;
    return total + completedLessons + completedQuizzes;
  }, 0);
  const percentage = totalItems > 0 ? (completedItems / totalItems * 100).toFixed(2) : "0.00";
  return {
    percentage,
    totalContents: totalItems,
    completedContents: completedItems
  };
};
const getColorWithOpacity = (color, opacity = 0.1) => {
  if (color.startsWith("rgba(")) {
    const match = color.match(/rgba\((\d+),(\d+),(\d+),([^)]+)\)/);
    if (match) {
      const [, r, g, b] = match;
      return `rgba(${r},${g},${b},${opacity})`;
    }
  }
  if (color.startsWith("rgb(")) {
    const match = color.match(/rgb\((\d+),(\d+),(\d+)\)/);
    if (match) {
      const [, r, g, b] = match;
      return `rgba(${r},${g},${b},${opacity})`;
    }
  }
  if (color.startsWith("#")) {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    return `rgba(${r},${g},${b},${opacity})`;
  }
  const namedColors = {
    red: "rgba(255,0,0,",
    green: "rgba(0,128,0,",
    blue: "rgba(0,0,255,",
    yellow: "rgba(255,255,0,",
    purple: "rgba(128,0,128,",
    orange: "rgba(255,165,0,",
    pink: "rgba(255,192,203,",
    black: "rgba(0,0,0,",
    white: "rgba(255,255,255,"
  };
  if (namedColors[color.toLowerCase()]) {
    return `${namedColors[color.toLowerCase()]}${opacity})`;
  }
  return color;
};
const systemCurrency = (currency) => {
  return currencies.find((item) => item.value == currency);
};
function getReadingTime(description) {
  const plainText = description.replace(/<[^>]*>/g, "");
  const wordCount = plainText.trim().split(/\s+/).length;
  const wordsPerMinute = 200;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}
const generateSlug = (title) => {
  return title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-+|-+$/g, "");
};
export {
  getCourseCompletion as a,
  getReadingTime as b,
  cn as c,
  getCourseDuration as d,
  generateSlug as e,
  currencies as f,
  getCompletedContents as g,
  getColorWithOpacity as h,
  systemCurrency as s
};
