export function weatherCode(code) {
    console.log(code);
    
  switch (code) {
    case 0:
      return "Ясное небо";
    case 1:
      return "В основном ясно";
    case 2:
      return "Переменная облачность";
    case 3:
      return "Пасмурно";
    case 45:
      return "Туман";
    case 48:
      return "Туман с изморозью";
    case 51:
      return "Лёгкая морось";
    case 53:
      return "Умеренная морось";
    case 55:
      return "Сильная морось";
    case 56:
      return "Замерзающая морось (лёгкая)";
    case 57:
      return "Замерзающая морось (сильная)";
    case 61:
      return "Лёгкий дождь";
    case 63:
      return "Умеренный дождь";
    case 65:
      return "Сильный дождь";
    case 66:
      return "Замерзающий дождь (лёгкий)";
    case 67:
      return "Замерзающий дождь (сильный)";
    case 71:
      return "Лёгкий снегопад";
    case 73:
      return "Умеренный снегопад";
    case 75:
      return "Сильный снегопад";
    case 77:
      return "Снежные крупинки";
    case 80:
      return "Слабые ливни";
    case 81:
      return "Умеренные ливни";
    case 82:
      return "Интенсивные ливни";
    case 85:
      return "Слабые снеговые ливни";
    case 86:
      return "Сильные снеговые ливни";
    case 95:
      return "Гроза";
    case 96:
      return "Гроза с небольшим градом";
    case 99:
      return "Гроза с сильным градом";
    default:
      return "Неизвестный код погоды";
  }
}
