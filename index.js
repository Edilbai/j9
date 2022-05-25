// setTimeout(()=>{

// },1000);

// event loop                  //менеджер событий раставляющий приоритеты
// console.log(1);
// console.log(3);
// setTimeout(()=>{
// 	console.log (0);
// },0);
// console.log(4)
// setTimeout(()=>{
// 	console.log (5);
// },1000);

//localStorage
// let btn = document.createElement('button')
// btn.classList.add('button')
// btn.innerHTML='Dark theme'
// document.body.append(btn)
// let btn2 = document.createElement('button')
// btn2.classList.add('button')
// btn2.innerHTML='light theme'
// document.body.append(btn2)

// if(localStorage.getItem('color')==='dark'){   //получение
// 	document.body.style.backgroundColor='black'
// }else{
// 		document.body.style.backgroundColor='grey'
// }

// btn.addEventListener('click',()=>{
// 	if(localStorage.getItem('color')==='light'){
// 		localStorage.removeItem('color')
// 		setTimeout(()=>{
// 		localStorage.setItem('color','dark')
// 	document.body.style.backgroundColor='black'
// 			},2000	)
		
	
// 	     //локальное хранилище key и значение
// 	}
// })
// btn2.addEventListener('click',()=>{
// 	if(localStorage.getItem('color')==='dark'){
// 	localStorage.removeItem('color')            //удаляет ключи значения
// 	setTimeout(()=>{
// 			localStorage.setItem('color','light')    //отправляет данные в локальное хранилище
// 	document.body.style.backgroundColor='grey'
// 	},2000)
// }
// })
//localStorage.setItem('token','thisissparta')
// setTimeout(()=>{
// 	localStorage.clear()                 //очищает локальное хранилище полностью
// },10000)
const load=document.createElement('h1')
load.innerHTML='LOADING...'
load.style.cssText=`
display:none;`
const input =document.createElement('input')
const btn =document.createElement('button')
btn.innerHTML='<img src=https://img1.freepng.ru/20180205/rhe/kisspng-video-sound-play-button-transparent-background-5a78ae776a8261.2982911315178584234363.jpg width=30px height=30px>'
const btn2 =document.createElement('button')
btn2.innerHTML='<img src=https://w7.pngwing.com/pngs/248/344/png-transparent-red-play-button-illustration-google-play-button-android-red-simple-play-button-design-material-blue-text-simple.png width=30px height=30px>'
let btnbig=document.createElement('div')
btnbig.classList.add('btnbig')
let btnsmall=document.createElement('div')
btnsmall.classList.add('btnsmalldivka')
let divka=document.createElement('div')
divka.classList.add('divka')
let btn999 = document.createElement('button')
btn999.classList.add('button')
btn999.innerHTML='<img src=https://pngimg.com/uploads/moon/small/moon_PNG50.png width=50px height=50px>'
let btn2999 = document.createElement('button')
btn2999.classList.add('button')
btn2999.innerHTML='<img src=https://photoshop-kopona.com/uploads/posts/2019-04/1555402191_sun-1.jpg width=50px height=50px>'


const output =document.createElement('div')
btnbig.append(btn999,btn2999)
btnsmall.append(input, btn,btn2, output, load)
divka.append(btnsmall, btnbig)
document.body.append(divka)





btn999.addEventListener('click',()=>{
	
		localStorage.removeItem('color')
		setTimeout(()=>{
		localStorage.setItem('color','grey')
	document.body.style.backgroundColor='grey'
			},1000	)
		
	
	     //локальное хранилище key и значение
	
})
btn2999.addEventListener('click',()=>{
	
	localStorage.removeItem('color')            //удаляет ключи значения
	setTimeout(()=>{
			localStorage.setItem('color','yellow')    //отправляет данные в локальное хранилище
	document.body.style.backgroundColor='yellow'
	},1000)

})
if(localStorage.getItem('color')==='grey'){   //получение
	document.body.style.backgroundColor='grey'
}else if(localStorage.getItem('color')==='yellow') {
		document.body.style.backgroundColor='yellow'
}else{
	document.body.style.backgroundColor='white'
}


const API = "https://randomuser.me/api/?results=";

const getRandomUsers =async()=>{
	const request= await fetch(API+input.value)
	const response = await request.json()
	console.log(response);
	renderUser(response.results)
	input.value=''

}



const renderUser=(Array)=>{
	
	Array.forEach(el => {
		const card =document.createElement('div')
		card.classList.add('card')
		const profile =document.createElement('div')
		let picture = document.createElement('img')
		picture.classList.add('picture')
		picture.src = el.picture.large
		const name= document.createElement('div')
		name.classList.add('name')
		let name0 =document.createElement('h3')
		name0.classList.add('name0')
		name0.innerHTML=el.name.title
			let name1 = document.createElement('h3')
    name1.classList.add('name1')
			name1.innerHTML=el.name.first
		let name2 = document.createElement('h3')
		name2.classList.add('name2')
		name2.innerHTML=el.name.last
		let email = document.createElement('h3')
		email.classList.add('email')
		// email.textContent='email'
		email.innerHTML=el.email
		let nat =document.createElement('h5')
		nat.classList.add('nat')
		nat.innerHTML=el.nat
		let gender = document.createElement('h4')
		gender.classList.add('gender')
		gender.innerHTML=el.gender
		let phone = document.createElement('span')
		phone.classList.add('phone')
		phone.innerHTML=el.phone
		const mainCard =document.createElement('div')
		name.append(name0, name1, name2)
    profile.append(picture, name)
		card.append(  email, gender,phone, nat)              //picture, name, email, gender, phone
		mainCard.append( profile,card)
	  output.append(mainCard)
	card.style.cssText=`
	display:none;`
	})
}

btn.addEventListener('click',()=>{
	
	setTimeout(()=>{
		
				load.style.cssText=`
        display:none;`
		getRandomUsers()
	      input.value=''
					
	   
		   
			
		},4000)
		  load.style.cssText=`
       display:block;`
			 output.innerHTML=''

			 
})





