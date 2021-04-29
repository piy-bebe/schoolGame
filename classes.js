export const questionsList = {
  classes: [
    /* -------------- [ 9 Class ] -------------- */
    {
      classID: 9,
      subject: 
      [
        {
          name: "Устный счет",
          complexity: {
            easy: [
              {
                question: "27 - 4 = ?",
                answer: "23",
                img: ""
              },
              {
                question: "54 + 2 = ?",
                answer: "56",
                img: ""
              },
              {
                question: "38 - 6 = ?",
                answer: "32",
                img: ""
              },
              {
                question: "71 + 7 = ?",
                answer: "78",
                img: ""
              },
              {
                question: "21 : 7 = ?",
                answer: "3",
                img: ""
              },
              {
                question: "12 : 6 = ?",
                answer: "2",
                img: ""
              },
              {
                question: "0 * 3 = ?",
                answer: "0",
                img: ""
              },
              {
                question: "9 : 1 = ?",
                answer: "9",
                img: ""
              },
              {
                question: "9 : 3 = ?",
                answer: "9",
                img: ""
              },
              {
                question: "630 : 9 = ?",
                answer: "70",
                img: ""
              },
              {
                question: "120 : 2 = ?",
                answer: "60",
                img: ""
              },
              {
                question: "15 * 8 = ?",
                answer: "120",
                img: ""
              },
              {
                question: "76 : 4 = ?",
                answer: "19",
                img: ""
              },
              {
                question: "65 + 3 = ?",
                answer: "68",
                img: ""
              },
              {
                question: "27 - 4 = ?",
                answer: "23",
                img: ""
              },
              {
                question: "34 + 2 = ?",
                answer: "36",
                img: ""
              },
              {
                question: "62 + 2 = ?",
                answer: "64",
                img: ""
              },
              {
                question: "37 - 1 = ?",
                answer: "36",
                img: ""
              },
              {
                question: "78 + 2 = ?",
                answer: "80",
                img: ""
              },
              {
                question: "87 - 2 = ?",
                answer: "85",
                img: ""
              },
              {
                question: "7 * 4 = ?",
                answer: "28",
                img: ""
              },
            ],
            medium: [
              {
                question: "0,2 * 3 = ?",
                answer: "0,6",
                img: ""
              },
              {
                question: "4/5 = ?",
                answer: "0,8",
                img: ""
              },
              {
                question: "10 - 1 * 10 = ?",
                answer: "0",
                img: ""
              },
              {
                question: "6 : 5 = ?",
                answer: "1,2",
                img: ""
              },
              {
                question: "0,02 * 10 = ?",
                answer: "0,2",
                img: ""
              },
              {
                question: "0,02 * 10 = ?",
                answer: "0,2",
                img: ""
              },
              {
                question: "2/5 = ?",
                answer: "0,4",
                img: ""
              },
              {
                question: "8 : 5 = ?",
                answer: "1,6",
                img: ""
              },
              {
                question: "0,8 * 8 = ?",
                answer: "6,4",
                img: ""
              },
              {
                question: "6,4 * 2 = ?",
                answer: "12,8",
                img: ""
              },
              {
                question: "1,6 * 16 = ?",
                answer: "25,6",
                img: ""
              },
            ],
            hard: [
              {
                question: "5х = 2",
                answer: "0,4",
                img: ""
              },
              {
                question: "5х = 7",
                answer: "1,4",
                img: ""
              },
              {
                question: "0,32 : 0,2 = ?",
                answer: "1,6",
                img: ""
              },
              {
                question: "0,36 * 5 = ?",
                answer: "1,8",
                img: ""
              },
              {
                question: "0,36 * 5 = ?",
                answer: "1,8",
                img: ""
              },
              {
                question: "1/1/2 = ?",
                answer: "2",
                img: ""
              },
              {
                question: "10x = 1",
                answer: "0,1",
                img: ""
              },
              {
                question: "1/8 - 2 : 80 = ?",
                answer: "0,8",
                img: ""
              },
              {
                question: "5x = 16",
                answer: "3,2",
                img: ""
              },
            ]
          }
        },
        {
          name: "Задания на логику",
          complexity: {
            easy: [
              {
                question: "Кирпич весит полкирпича и еще 2 килограмма. Сколько весит кирпич?",
                answer: "4",
                img: ""
              },
            ],
            medium: [
              {
                question: `На вопрос, кто из трех абитуриентов A, B, C может работать на компьютере, был получен ответ: если может работать B, то может работать и C, но не верно, что если может работать A, то может работать и C. Кто из трех абитуриентов может работать на персональном компьютере?\n1) A\n2) В\n3) С\n4) A и B\n5)A и C\n6) B и C\n7) Все`,
                answer: "6",
                img: ""
              },
            ],
            hard: [
              {
                question: `Кто из друзей (Иван, Петр, Алексей, Николай или Борис) коллекционирует марки, если известно, что:
                \n- если Борис коллекционирует марки, то их коллекционируют Иван и Николай;
                \n- если их коллекционирует Иван, то Петр тоже коллекционирует марки;
                \n- из двух друзей (Петра и Алексея) коллекционирует марки только один;
                \n- Алексей лишь в том случае коллекционирует марки, если их коллекционирует Николай;
                \n- по крайней мере, Николай или Борис коллекционирует марки.
                \n1)Петр и Борис
                \n2)Петр
                \n3)Алексей, Борис, Петр и Николай
                \n4)Петр, Николай, Иван и Борис
                \n5)Борис, Иван, Алексей и Петр
                \n6)Алексей и Иван
                \n7) Все`,
                answer: "6",
                img: ""
              },
            ],
          }
        },
        {
          name: "Геометрическое видение",
          complexity: {
            easy: [
              {
                question: `Биссектрисы углов N и M треугольника MNP пересекаются в точке A. Найдите угол NAM, если yгол N = 84, а угол М = 42.`,
                answer: "117",
                img: ""
              },
              {
                question: `Диагональ BD параллелограмма ABCD образует с его сторонами углы, равные 65° и 50°. Найдите меньший угол параллелограмма.`,
                answer: "65",
                img: ""
              },
              {
                question: `Сумма трех углов выпуклого четырехугольника равна 300°. Найдите четвертый угол.`,
                answer: "60",
                img: ""
              },
              {
                question: `Сторона квадрата равна 10. Найдите его площадь.`,
                answer: "100",
                img: ""
              },
              {
                question: `Найдите площадь параллелограмма, изображённого на рисунке.`,
                answer: "40",
                img: ""
              },
            ],
            medium: [
              {
                question: `В равностороннем треугольнике ABC биссектрисы CN и AM пересекаются в точке P. Найдите угол MPN.`,
                answer: "120",
                img: ""
              },
              {
                question: `В треугольнике ABC угол C прямой, BC = 8, sin A = 0,4. Найдите AB.`,
                answer: "20",
                img: ""
              },
              {
                question: `Найдите угол АDС равнобедренной трапеции ABCD, если диагональ АС образует с основанием ВС и боковой стороной АВ углы, равные 30° и 50° соответственно.`,
                answer: "80",
                img: ""
              },
              {
                question: `Сумма двух углов равнобедренной трапеции равна 140°. Найдите больший угол трапеции.`,
                answer: "110",
                img: ""
              },
              {
                question: `В прямоугольном треугольнике один из катетов равен 10, а угол, лежащий напротив него, равен 45°. Найдите площадь треугольника.`,
                answer: "50",
                img: ""
              },
            ],
            hard: [
              {
                question: `В равностороннем треугольнике ABC биссектрисы CN и AM пересекаются в точке P. Найдите угол MPN.`,
                answer: "120",
                img: ""
              },
            ]
          }
        },
        {
          name: "Текстовые задачи",
          complexity: {
            easy: [
              {
                question: `На изготовление 231 детали ученик тратит на 11 часов больше, чем мастер на изготовление 462 таких же деталей. Известно, что ученик за час делает на 4 детали меньше, чем мастер. Сколько деталей в час делает ученик?`,
                answer: "3",
                img: ""
              },
              {
                question: `Найдите целое число a, если из двух следующих утверждений верно только одно: 1) а>-17; 2)a>-18.`,
                answer: "-17",
                img: ""
              },
              {
                question: `Расстояние между городами А и В равно 750 км. Из города А в город В со скоростью 50 км/ч выехал первый автомобиль, а через три часа после этого навстречу ему из города В выехал со скоростью 70 км/ч второй автомобиль. На каком расстоянии от города А автомобили встретятся?`,
                answer: "400",
                img: ""
              },
              {
                question: `Моторная лодка прошла 36 км по течению реки и вернулась обратно, потратив на весь путь 5 часов. Скорость течения реки равна 3 км/ч. Найдите скорость лодки в неподвижной воде.`,
                answer: "15",
                img: ""
              },
              {
                question: `Пристани А и В расположены на реке, скорость течения которой на этом участке равна 3 км/ч. Лодка проходит туда и обратно без остановок со средней скоростью 8 км/ч. Найдите собственную скорость лодки.`,
                answer: "9",
                img: ""
              },
            ],
            medium: [
              {
                question: `Из пунктов А и В, расстояние между которыми 19 км, вышли одновременно навстречу друг другу два пешехода и встретились в 9 км от А. Найдите скорость пешехода, шедшего из А, если известно, что он шёл со скоростью, на 1 км/ч большей, чем пешеход, шедший из В, и сделал в пути получасовую остановку.`,
                answer: "6",
                img: ""
              },
              {
                question: `Расстояние между городами А и В равно 375 км. Город С находится между городами А и В. Из города А в город В выехал автомобиль, а через 1 час 30 минут следом за ним со скоростью 75 км/ч выехал мотоциклист, догнал автомобиль в городе С и повернул обратно. Когда он вернулся в А, автомобиль прибыл в В. Найдите расстояние от А до С.`,
                answer: "225",
                img: ""
              },
              {
                question: `Расстояние между пристанями А и В равно 80 км. Из А в В по течению реки отправился плот, а через 2 часа вслед за ним отправилась яхта, которая, прибыв в пункт В, тотчас повернула обратно и возвратилась в А. К этому времени плот прошел 22 км. Найдите скорость яхты в неподвижной воде, если скорость течения реки равна 2 км/ч.`,
                answer: "18",
                img: ""
              },
              {
                question: `Чтобы накачать в бак 117 л воды, требуется на 5 минут больше времени, чем на то, чтобы выкачать из него 96 л воды. За одну минуту можно выкачать на 3 л воды больше, чем накачать. Сколько литров воды накачивается в бак за минуту?`,
                answer: "9",
                img: ""
              },
              {
                question: `Железнодорожный состав длиной в 1 км прошёл бы мимо столба за 1 мин., а через туннель (от входа локомотива до выхода последнего вагона) при той же скорости — за 3 мин. Какова длина туннеля?`,
                answer: "2",
                img: ""
              },
            ],
            hard: [
              {
                question: `На пост главы администрации города претендовало три кандидата: Журавлёв, Зайцев, Иванов. Во время выборов за Иванова было отдано в 2 раза больше голосов, чем за Журавлёва, а за Зайцева — в 3 раза больше, чем за Журавлёва и Иванова вместе. Сколько процентов голосов было отдано за победителя?`,
                answer: "75",
                img: ""
              },
              {
                question: `Из пункта А в пункт В, расположенный ниже по течению реки, отправился плот. Одновременно навстречу ему из пункта В вышел катер. Встретив плот, катер сразу повернул и поплыл назад. Какую часть пути от А до В пройдет плот к моменту возвращения катера в пункт В, если скорость катера в стоячей воде вчетверо больше скорости течения реки?`,
                answer: "0,4",
                img: ""
              },
              {
                question: `Смешали некоторое количество 21-процентного раствора некоторого вещества с таким же количеством 95-процентного раствора этого же вещества. Сколько процентов составляет концентрация получившегося раствора?`,
                answer: "58",
                img: ""
              },
              {
                question: `Первый сплав содержит 5% меди, второй — 13% меди. Масса второго сплава больше массы первого на 4 кг. Из этих двух сплавов получили третий сплав, содержащий 10% меди. Найдите массу третьего сплава.`,
                answer: "16",
                img: ""
              },
              {
                question: `Имеются два сосуда, содержащие 10 кг и 16 кг раствора кислоты различной концентрации. Если их слить вместе, то получится раствор, содержащий 55% кислоты. Если же слить равные массы этих растворов, то полученный раствор будет содержать 61% кислоты. Сколько килограммов кислоты содержится в первом растворе?`,
                answer: "8,7",
                img: ""
              },
            ]
          }
        }
      ]
    },
    {
      classID: 2,
      subject: 
      [
        {
          name: "Устный счет",
          complexity: {
            easy: [
              {
                question: "27 - 4 = ?",
                answer: "23",
                img: ""
              },
              {
                question: "54 + 2 = ?",
                answer: "56",
                img: ""
              },
              {
                question: "38 - 6 = ?",
                answer: "32",
                img: ""
              },
              {
                question: "71 + 7 = ?",
                answer: "78",
                img: ""
              },
              {
                question: "21 : 7 = ?",
                answer: "3",
                img: ""
              },
              {
                question: "12 : 6 = ?",
                answer: "2",
                img: ""
              },
              {
                question: "0 * 3 = ?",
                answer: "0",
                img: ""
              },
              {
                question: "9 : 1 = ?",
                answer: "9",
                img: ""
              },
              {
                question: "9 : 3 = ?",
                answer: "9",
                img: ""
              },
              {
                question: "630 : 9 = ?",
                answer: "70",
                img: ""
              },
              {
                question: "120 : 2 = ?",
                answer: "60",
                img: ""
              },
              {
                question: "15 * 8 = ?",
                answer: "120",
                img: ""
              },
              {
                question: "76 : 4 = ?",
                answer: "19",
                img: ""
              },
              {
                question: "65 + 3 = ?",
                answer: "68",
                img: ""
              },
              {
                question: "27 - 4 = ?",
                answer: "23",
                img: ""
              },
              {
                question: "34 + 2 = ?",
                answer: "36",
                img: ""
              },
              {
                question: "62 + 2 = ?",
                answer: "64",
                img: ""
              },
              {
                question: "37 - 1 = ?",
                answer: "36",
                img: ""
              },
              {
                question: "78 + 2 = ?",
                answer: "80",
                img: ""
              },
              {
                question: "87 - 2 = ?",
                answer: "85",
                img: ""
              },
              {
                question: "7 * 4 = ?",
                answer: "28",
                img: ""
              },
            ],
            medium: [
              {
                question: "0,2 * 3 = ?",
                answer: "0,6",
                img: ""
              },
              {
                question: "4/5 = ?",
                answer: "0,8",
                img: ""
              },
              {
                question: "10 - 1 * 10 = ?",
                answer: "0",
                img: ""
              },
              {
                question: "6 : 5 = ?",
                answer: "1,2",
                img: ""
              },
              {
                question: "0,02 * 10 = ?",
                answer: "0,2",
                img: ""
              },
              {
                question: "0,02 * 10 = ?",
                answer: "0,2",
                img: ""
              },
              {
                question: "2/5 = ?",
                answer: "0,4",
                img: ""
              },
              {
                question: "8 : 5 = ?",
                answer: "1,6",
                img: ""
              },
              {
                question: "0,8 * 8 = ?",
                answer: "6,4",
                img: ""
              },
              {
                question: "6,4 * 2 = ?",
                answer: "12,8",
                img: ""
              },
              {
                question: "1,6 * 16 = ?",
                answer: "25,6",
                img: ""
              },
            ],
            hard: [
              {
                question: "5х = 2",
                answer: "0,4",
                img: ""
              },
              {
                question: "5х = 7",
                answer: "1,4",
                img: ""
              },
              {
                question: "0,32 : 0,2 = ?",
                answer: "1,6",
                img: ""
              },
              {
                question: "0,36 * 5 = ?",
                answer: "1,8",
                img: ""
              },
              {
                question: "0,36 * 5 = ?",
                answer: "1,8",
                img: ""
              },
              {
                question: "1/1/2 = ?",
                answer: "2",
                img: ""
              },
              {
                question: "10x = 1",
                answer: "0,1",
                img: ""
              },
              {
                question: "1/8 - 2 : 80 = ?",
                answer: "0,8",
                img: ""
              },
              {
                question: "5x = 16",
                answer: "3,2",
                img: ""
              },
            ]
          }
        },
        {
          name: "Задания на логику",
          complexity: {
            easy: [
              {
                question: "Кирпич весит полкирпича и еще 2 килограмма. Сколько весит кирпич?",
                answer: "4",
                img: ""
              },
            ],
            medium: [
              {
                question: `На вопрос, кто из трех абитуриентов A, B, C может работать на компьютере, был получен ответ: если может работать B, то может работать и C, но не верно, что если может работать A, то может работать и C. Кто из трех абитуриентов может работать на персональном компьютере?\n1) A\n2) В\n3) С\n4) A и B\n5)A и C\n6) B и C\n7) Все`,
                answer: "6",
                img: ""
              },
            ],
            hard: [
              {
                question: `Кто из друзей (Иван, Петр, Алексей, Николай или Борис) коллекционирует марки, если известно, что:
                \n- если Борис коллекционирует марки, то их коллекционируют Иван и Николай;
                \n- если их коллекционирует Иван, то Петр тоже коллекционирует марки;
                \n- из двух друзей (Петра и Алексея) коллекционирует марки только один;
                \n- Алексей лишь в том случае коллекционирует марки, если их коллекционирует Николай;
                \n- по крайней мере, Николай или Борис коллекционирует марки.
                \n1)Петр и Борис
                \n2)Петр
                \n3)Алексей, Борис, Петр и Николай
                \n4)Петр, Николай, Иван и Борис
                \n5)Борис, Иван, Алексей и Петр
                \n6)Алексей и Иван
                \n7) Все`,
                answer: "6",
                img: ""
              },
            ],
          }
        },
        {
          name: "Геометрическое видение",
          complexity: {
            easy: [
              {
                question: `Биссектрисы углов N и M треугольника MNP пересекаются в точке A. Найдите угол NAM, если yгол N = 84, а угол М = 42.`,
                answer: "117",
                img: ""
              },
              {
                question: `Диагональ BD параллелограмма ABCD образует с его сторонами углы, равные 65° и 50°. Найдите меньший угол параллелограмма.`,
                answer: "65",
                img: ""
              },
              {
                question: `Сумма трех углов выпуклого четырехугольника равна 300°. Найдите четвертый угол.`,
                answer: "60",
                img: ""
              },
              {
                question: `Сторона квадрата равна 10. Найдите его площадь.`,
                answer: "100",
                img: ""
              },
              {
                question: `Найдите площадь параллелограмма, изображённого на рисунке.`,
                answer: "40",
                img: ""
              },
            ],
            medium: [
              {
                question: `В равностороннем треугольнике ABC биссектрисы CN и AM пересекаются в точке P. Найдите угол MPN.`,
                answer: "120",
                img: ""
              },
              {
                question: `В треугольнике ABC угол C прямой, BC = 8, sin A = 0,4. Найдите AB.`,
                answer: "20",
                img: ""
              },
              {
                question: `Найдите угол АDС равнобедренной трапеции ABCD, если диагональ АС образует с основанием ВС и боковой стороной АВ углы, равные 30° и 50° соответственно.`,
                answer: "80",
                img: ""
              },
              {
                question: `Сумма двух углов равнобедренной трапеции равна 140°. Найдите больший угол трапеции.`,
                answer: "110",
                img: ""
              },
              {
                question: `В прямоугольном треугольнике один из катетов равен 10, а угол, лежащий напротив него, равен 45°. Найдите площадь треугольника.`,
                answer: "50",
                img: ""
              },
            ],
            hard: [
              {
                question: `В равностороннем треугольнике ABC биссектрисы CN и AM пересекаются в точке P. Найдите угол MPN.`,
                answer: "120",
                img: ""
              },
            ]
          }
        },
        {
          name: "Текстовые задачи",
          complexity: {
            easy: [
              {
                question: `На изготовление 231 детали ученик тратит на 11 часов больше, чем мастер на изготовление 462 таких же деталей. Известно, что ученик за час делает на 4 детали меньше, чем мастер. Сколько деталей в час делает ученик?`,
                answer: "3",
                img: ""
              },
              {
                question: `Найдите целое число a, если из двух следующих утверждений верно только одно: 1) а>-17; 2)a>-18.`,
                answer: "-17",
                img: ""
              },
              {
                question: `Расстояние между городами А и В равно 750 км. Из города А в город В со скоростью 50 км/ч выехал первый автомобиль, а через три часа после этого навстречу ему из города В выехал со скоростью 70 км/ч второй автомобиль. На каком расстоянии от города А автомобили встретятся?`,
                answer: "400",
                img: ""
              },
              {
                question: `Моторная лодка прошла 36 км по течению реки и вернулась обратно, потратив на весь путь 5 часов. Скорость течения реки равна 3 км/ч. Найдите скорость лодки в неподвижной воде.`,
                answer: "15",
                img: ""
              },
              {
                question: `Пристани А и В расположены на реке, скорость течения которой на этом участке равна 3 км/ч. Лодка проходит туда и обратно без остановок со средней скоростью 8 км/ч. Найдите собственную скорость лодки.`,
                answer: "9",
                img: ""
              },
            ],
            medium: [
              {
                question: `Из пунктов А и В, расстояние между которыми 19 км, вышли одновременно навстречу друг другу два пешехода и встретились в 9 км от А. Найдите скорость пешехода, шедшего из А, если известно, что он шёл со скоростью, на 1 км/ч большей, чем пешеход, шедший из В, и сделал в пути получасовую остановку.`,
                answer: "6",
                img: ""
              },
              {
                question: `Расстояние между городами А и В равно 375 км. Город С находится между городами А и В. Из города А в город В выехал автомобиль, а через 1 час 30 минут следом за ним со скоростью 75 км/ч выехал мотоциклист, догнал автомобиль в городе С и повернул обратно. Когда он вернулся в А, автомобиль прибыл в В. Найдите расстояние от А до С.`,
                answer: "225",
                img: ""
              },
              {
                question: `Расстояние между пристанями А и В равно 80 км. Из А в В по течению реки отправился плот, а через 2 часа вслед за ним отправилась яхта, которая, прибыв в пункт В, тотчас повернула обратно и возвратилась в А. К этому времени плот прошел 22 км. Найдите скорость яхты в неподвижной воде, если скорость течения реки равна 2 км/ч.`,
                answer: "18",
                img: ""
              },
              {
                question: `Чтобы накачать в бак 117 л воды, требуется на 5 минут больше времени, чем на то, чтобы выкачать из него 96 л воды. За одну минуту можно выкачать на 3 л воды больше, чем накачать. Сколько литров воды накачивается в бак за минуту?`,
                answer: "9",
                img: ""
              },
              {
                question: `Железнодорожный состав длиной в 1 км прошёл бы мимо столба за 1 мин., а через туннель (от входа локомотива до выхода последнего вагона) при той же скорости — за 3 мин. Какова длина туннеля?`,
                answer: "2",
                img: ""
              },
            ],
            hard: [
              {
                question: `На пост главы администрации города претендовало три кандидата: Журавлёв, Зайцев, Иванов. Во время выборов за Иванова было отдано в 2 раза больше голосов, чем за Журавлёва, а за Зайцева — в 3 раза больше, чем за Журавлёва и Иванова вместе. Сколько процентов голосов было отдано за победителя?`,
                answer: "75",
                img: ""
              },
              {
                question: `Из пункта А в пункт В, расположенный ниже по течению реки, отправился плот. Одновременно навстречу ему из пункта В вышел катер. Встретив плот, катер сразу повернул и поплыл назад. Какую часть пути от А до В пройдет плот к моменту возвращения катера в пункт В, если скорость катера в стоячей воде вчетверо больше скорости течения реки?`,
                answer: "0,4",
                img: ""
              },
              {
                question: `Смешали некоторое количество 21-процентного раствора некоторого вещества с таким же количеством 95-процентного раствора этого же вещества. Сколько процентов составляет концентрация получившегося раствора?`,
                answer: "58",
                img: ""
              },
              {
                question: `Первый сплав содержит 5% меди, второй — 13% меди. Масса второго сплава больше массы первого на 4 кг. Из этих двух сплавов получили третий сплав, содержащий 10% меди. Найдите массу третьего сплава.`,
                answer: "16",
                img: ""
              },
              {
                question: `Имеются два сосуда, содержащие 10 кг и 16 кг раствора кислоты различной концентрации. Если их слить вместе, то получится раствор, содержащий 55% кислоты. Если же слить равные массы этих растворов, то полученный раствор будет содержать 61% кислоты. Сколько килограммов кислоты содержится в первом растворе?`,
                answer: "8,7",
                img: ""
              },
            ]
          }
        }
      ]
    }
]
};