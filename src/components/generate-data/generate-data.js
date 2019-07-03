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
}
const amoutOfCards = 8;
const ArrDataOfCards = [];
for (let i = 0; i < amoutOfCards; i++) {
    ArrDataOfCards.push({
        name:renderName(),
        tracking:renderTrackShedule(),
        minutes:renderRandomMinute(),
        hour:renderRandomHour(),
        pic:pathToPick(),
    });
};
//console.log(arrDataOfCards);

export default ArrDataOfCards;