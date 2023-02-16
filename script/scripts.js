let arr = [];
let arr1 = [];
let n = 0;
let m = 0;
let k = 0;

alert(enter())
alert(conclusion())



//ввод массива объектов
function enter(){
    n = prompt("Введите количество учеников", 2)
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
    return alert('Заполнение ученика прошло успешно');
}

//вывод массива объектов
function conclusion(){
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
    return arr1.join('');
}

//функция дополнения
function addition(){
    m = prompt('Введите кол-во учеников, которых хотите добавить', 1);
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
        n++;
    }
    arr.push.apply(arr, arr2);
    return arr;
    // return 'Данные успешно записаны';
}


/*вывод массива объектов
function conclusion(){
    alert(n);
    alert(m);   
    for (let i = 0; i < (n + m); i++){
        arr1[i] = (i+1+'. ') + Object.values(arr[i]) + '\n';
    };
    return arr1;
};*/



/*let arr = [];

arr[0] = {
    name: 'dima',
    id: 1,
    surname: 'khudobin',
};

arr[1] = {
    name: 'Sonia',
    id: 2,
    surname: 'Robertus',
}

alert ( arr[0].id );
*/