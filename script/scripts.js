let arr = [];
let arr1 = [];
let choose = 0

do{
    choose = Number(prompt('Что вы хотите сделать?\n\t1 - Добавить учеников\n\t' +
        '2 - Вывести учеников\n\t3 - Дополнить уже имеющихся учеников\n\t' +
        '4 - Найти ученика по определенному критерию\nЧтобы закончить, введите 0'))
    switch (choose){
        case 1:
            enter()
            break
        case 2:
            conclusion()
            break
        case 3:
            addition()
            break
        case 4:
            search()
            break
    }
}while(choose !== 0)

//
// alert(conclusion())
//
// alert(conclusion())
// alert(search())

//ввод массива объектов
function enter(){
    let n = prompt("Введите количество учеников", 2)
    for (let i = 0; i < n; i++){
        arr[i] = {
            surname: prompt('Введите фамилию ученика','Худобин'),
            name: prompt('Введите имя ученика','Дмитрий'),
            paternity: prompt('Введите отчество ученика','Александрович'),
            sex: prompt('Введите пол ученика','Мужской'),
            nationality: prompt('Введите национальность ученика','Русский'),
            growth: prompt('Введите рост ученика в см','174'),
            weight: prompt('Введите вес ученика в кг','59'),
            /*year: prompt('Введите год рождения ученика','2004'),
            mount: prompt('Введите месяц рождения ученика','март'),
            number: prompt('Введите число рождения ученика','1'),
            phone_number: prompt('Введите номер телефона ученика','89618900104'),
            postcode: prompt('Введите почтовый индекс ученика','716036'),
            country: prompt('Введите страну проживания ученика','Россия'),
            region: prompt('Введите область проживания ученика','Томская область'),
            district: prompt('Введите район проживания ученика','Томский район'),
            town: prompt('Введите город проживания ученика','Томск'),
            street: prompt('Введите улицу ученика','Иркутский тракт'),
            house: prompt('Введите номер дома ученика','185/2'),
            flat: prompt('Введите номер квартиры ученика','57'),
            school: prompt('Введите номер школы','53'),
            class: prompt('Введите номер класса','9'),*/
        };
    }
    return 'Заполнение учеников прошло успешно'
}

//вывод массива объектов
function conclusion(){
    arr1 = []
    for (let i in arr){
        if (i === '0'){
            arr1.push(`Ученик №${i}:\n`)
        }else{arr1.push(`\nУченик №${i}:\n`)}
        console.log(i)
        for (let key in arr[i]){
            arr1.push(key + ': ' + arr[i][key] + ', ')
        }
    }
    console.log(arr1)
    return alert(arr1.join(''));
}

//функция дополнения
function addition(){
    let m = prompt('Введите кол-во учеников, которых хотите добавить', 1);
    let arr2 = [];
    for (let i = 0; i < m; i++){
        arr2 [i] = {
            surname: prompt('Введите фамилию ученика','Худобин'),
            name: prompt('Введите имя ученика','Дмитрий'),
            paternity: prompt('Введите отчество ученика','Александрович'),
            sex: prompt('Введите пол ученика','Мужской'),
            nationality: prompt('Введите национальность ученика','Русский'),
            growth: prompt('Введите рост ученика в см','174'),
            weight: prompt('Введите вес ученика в кг','59'),
            /*year: prompt('Введите год рождения ученика','2004'),
            mount: prompt('Введите месяц рождения ученика','март'),
            number: prompt('Введите число рождения ученика','1'),
            phone_number: prompt('Введите номер телефона ученика','89618900104'),
            postcode: prompt('Введите почтовый индекс ученика','716036'),
            country: prompt('Введите страну проживания ученика','Россия'),
            region: prompt('Введите область проживания ученика','Томская область'),
            district: prompt('Введите район проживания ученика','Томский район'),
            town: prompt('Введите город проживания ученика','Томск'),
            street: prompt('Введите улицу ученика','Иркутский тракт'),
            house: prompt('Введите номер дома ученика','185/2'),
            flat: prompt('Введите номер квартиры ученика','57'),
            school: prompt('Введите номер школы','53'),
            class: prompt('Введите номер класса','9'),*/
        };
    }
    arr.push.apply(arr, arr2);
    return 'Данные успешно записаны';
}

//поиск и вывод объекта по значению
function search(){
    let arr2 = []
    let k = prompt('Введите значение, по которому хотите найти ученика:', 'Дмитрий')
    for (let i in arr){
        for (let key in arr[i]){
            if (arr[i][key] === k){
                if (i === '0'){
                    arr2.push(`Ученик №${i}:\n`)
                }else{arr2.push(`\nУченик №${i}:\n`)}
                for (let key in arr[i]){
                    arr2.push(key + ': ' + arr[i][key] + ', ')
                }
            }
        }
    }
    return alert(arr2.join(''))
}