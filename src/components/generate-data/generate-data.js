const getRandomNumber = (arr) => {
    let random = Math.floor(Math.random() * ((arr.length - 1)  + 1));
    return random;
};
const renderName = () => {
    const arrOfNames = ['Морской круиз в Анапу','Обзорная морская прогулка с экскурсией',
'Морская прогулка в Геленджик','Морской круиз в Новороссийск','Морская прогулка в Абрау-Дюрсо',
'Обзорная прогулка в Ласточкино Гнездо','Обзорная экскурсия по местам съемок фильмов',
'Обзорная экскурсия для детей','Морской круиз для влюбленных'];
    let randomName = arrOfNames[getRandomNumber(arrOfNames)];
    return randomName;
};
const renderTrackShedule = () => {
    const arrOfTrack = ['Сочи-Лазаревское-Геленджик-Анапа','Сочи-Адлер-Сочи (без высадки)',
'Сочи-Туапсе-Геленджик','Сочи-Геленджик-Новороссйиск-Геленджик-Сочи','Сочи-Абрау-Дюрсо',
'Сочи-Туапсе','Сочи-Геленджик','Сочи-Лазаревское-Анапа'];
    let randomTrack = arrOfTrack[getRandomNumber(arrOfTrack)];
    return randomTrack;
};
const renderRandomMinute = () => {
    let minutes = Math.floor(Math.random() * 59 + 1);
    return minutes;
};
const renderRandomHour = () => {
    let hour = Math.floor(Math.random() * 23 + 1);
    return hour;
};
const pathToPick = () => {
    let arrOfPick = ['anapa.jpg','bitch.png','gelendgik-planch.png','kraj.jpeg','krasnor.jpg','lake.png','mayak.png'];
    let randomPick = arrOfPick[getRandomNumber(arrOfPick)];
    return randomPick;
};
const idRender = (perem) => {
    let idArr = ['anapa','gelendgik','krasnodar','sochi','eisk','krim','odessa','krasnyapolyna'];
    return idArr[perem];
};
const priceRender = (perem) => {
    let pricesArr = ['15 000', '25 000', '11 000','12 000', '32 000', '16 000', '19 500', '23 000'];
    return pricesArr[perem];
}
const popularRender = (perem) => {
    let popularArr = [5,0,12,43,5,8,5,2,14]
    return popularArr[perem];
}
const textInPopup = 'Отправление из Сочи: ежедневно в 10:00, 11:40, 13:20, 15:00, 16:40 Отправление из Абрау-Дюрсо: ежедневно в 12:25, 14:05, 15:45, 17:25, 19:05  Продолжительность: 11 часов 0 мин., из которых 10 часов - морская прогулка (туда и обратно), от 1 часа 30 мин. - свободное время в Ласточкином гнездо. Причал отправления/прибытия: набережная Ленина, причал №8, теплоход "Азов"';
const amoutOfCards = 8;
const ArrDataOfCards = [];
for (let i = 0; i < amoutOfCards; i++) {
    ArrDataOfCards.push({
        name:renderName(),
        tracking:renderTrackShedule(),
        minutes:renderRandomMinute(),
        hour:renderRandomHour(),
        pic:pathToPick(),
        id:idRender(i),
        price:priceRender(i),
        popular:popularRender(i),
        description:textInPopup,
    });
};
export default ArrDataOfCards;