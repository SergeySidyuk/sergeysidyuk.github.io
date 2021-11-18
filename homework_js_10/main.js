fetch('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    response.json()
        .then(function (json) {
            json.forEach(function (element, index) {
                console.log(element)
                let newDiv = document.createElement('div')

                function getRandomInt(max) {
                    return Math.floor(Math.random() * max);
                  }
                  
                const randomGender = getRandomInt (2)
                let gender =''
                if (randomGender === 1 ) {
                    gender = 'women'
                } else {
                    gender = 'men'
                }

                newDiv.innerHTML = `
                    <img  src='https://randomuser.me/api/portraits/${gender}/${index}.jpg' id='img-${index}'>
                    <p>${element.name}</p>
                    <button style = "margin-bottom : 20px " id='buttonAlert${index}'>Вывести информацию</button>
                    <button id='buttonDelete${index}'>Удалить</button>
                `;
                document.body.append(newDiv)
                
                const buttonShowInfo = document.getElementById(`buttonAlert${index}`)
                buttonShowInfo.onclick = function (event) {
                    alert(`Имя : ${element.username} ${element.name}\nПочта : ${element.email}\nТелефон : ${element.phone}`)
                }

                const buttonDelete = document.getElementById(`buttonDelete${index}`)
                const buttonDeleteFunc = function () {
                    document.getElementById(`buttonAlert${index}`).parentNode.remove()
                }
                buttonDelete.onclick = buttonDeleteFunc
            })
        })
    })
