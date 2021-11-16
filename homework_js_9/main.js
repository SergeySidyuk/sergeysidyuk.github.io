// Домашнее задание. ВНИМАТЕЛЬНО ЧИТАЙТЕ!

// Написать код, который будет выполнять 5 действия на странице index.html:
// 1. Создать 100 квадратов голубого цвета размером 70*70 пикселей, и распологает их вертикально.
// 2. Изменить цвет каждого квадрата на фиолетовый, и изменить размер 100*100 пикселей.
// 3. Вывести на каждом квадрате его порядковый номер.
// 4. Изменить цвет каждого 3-го квадрата на красный, каждый 15 квадрат сделать треугольником цветом хаки и любые 5 сделать желтым.
// 5. Удалить все красные квадраты.
// Каждое действие должно выполниться через 2 секунды от предыдущего, первое действие также должно иметь задержку 2 секунды.

// Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
// При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
// При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.

// сделать на jQuery

$(document).ready(function() {
    setTimeout(function () {
    for (let i = 0; i < 100; i++) {
         let squaresDivs = $('<div style="width: 70px; height: 70px; margin: 5px; background-color: deepskyblue;"></div>');
          document.body.prepend(squaresDivs[0]);
         } 
        }, 2000);
        setTimeout(function () {
          $('div').css ({
            'background-color': 'purple',
            'width': '100px',
            'height': '100px',
          });
        }, 4000);
        setTimeout(function () {
            $('div').css ({
            'font-size': '24px',
            'color': 'white',
            'display': 'flex',
            'align-items': 'center',
            'justify-content': 'center',
            });
        $('div').each(function(index) {
            $(this).prepend(index + 1);
        });
        }, 6000);
        setTimeout(function () {
                $( "div" ).each(function(index) {
                for (i = 0; i < index; i++)
                  if(index  % 15 + 1 === 0 ) { 
                    $( this ).css( "background-color", "#78866b" ); 
                  } if  (i % 3 - 2 === 0 && index % 15 !== 0 ) {
                    $( this ).css( "background-color", "red" );  
                    $(this).addClass('delete');
                  } if (i % 19  === 0) {
                    $(this).css("background-color", "yellow")
                  }
                });
        }, 8000);
        setTimeout(function () {
            $('div.delete').remove();
        }, 10000);
    });


// Написать код, который создаст на странице 2 прямоугольника разного цвета и размера.
// При наведении курсора мыши на прямоугольник вывести в консоль размер этого прямоугольника.
// При клике на прямоугольник - выдать уведомление, в котором будет русское название цвета этого прямоугольника.

// сделать на jQuery

let div1 = $('<div style="width: 200px; height: 100px; margin: 20px; background-color: deepskyblue;"></div>');
          document.body.prepend(div1[0]);
          div1.addClass('first')

let div2 = $('<div style="width: 300px; height: 150px; margin: 20px; background-color: green;"></div>');
          document.body.prepend(div2[0]);
          div2.addClass('second')

$('div.first').mouseover(function() {
  console.log(`Высота : ${div1[0].clientWidth}px, Ширина : ${div1[0].clientHeight}px`)
});
$('div.first').click(function() {
    alert('Голубой');
});
$('div.second').mouseover(function() {
  console.log(`Высота : ${div2[0].clientWidth}px, Ширина : ${div2[0].clientHeight}px`)
});
$('div.second').click(function() {
  alert('Зеленый');
});
