var picture = [];
var current_numPicture = 0;
var timer = null;
var delay = 3000; // Интервал для перелистывания

// Функция для уменьшения размеров картинки относительно исходного изображения
function Small_img(el){ // 25% от исходного размера
	var W = el.width * 0.25;
	var H = el.height * 0.25;
	el.width = W;
	el.height = H;
}

// Открываем полноэкранный просмотр
function openSlideshow(event){
	var numberImg = event.target.slideNum;
	document.getElementById('popupWindow').classList.remove('hidden'); // Открываем окно для просмотра изображения
	document.getElementById('fullImg').src = picture[numberImg];
	document.getElementById('originalWindow').style.position = 'fixed';
	document.getElementById('header').classList.add('hidden');
	document.getElementById('Menu').classList.add('hidden');
	document.getElementById('play').classList.add('hidden');
	current_numPicture = numberImg;
	timer = setInterval(nextImage, delay); // Автоматическое перелистывание с интервалом 3 секунд
}

// Закрываем полноэкранный просмотр
function closeSliseshow(){
	document.getElementById('popupWindow').classList.add('hidden'); // Убираем всплывающее окно
	document.getElementById('originalWindow').style.position = 'absolute';
	document.getElementById('header').classList.remove('hidden');
	document.getElementById('Menu').classList.remove('hidden');
	current_numPicture = 0;
	clearInterval(timer); // Останавливем автоматическое перелистывание
}

//Поставить слайдшоу на паузу
function pause(){
	clearInterval(timer); // Останавливем автоматическое перелистывание
	document.getElementById('pause').classList.add('hidden');
	document.getElementById('play').classList.remove('hidden');
}

//Продолжить показ слайдшоу с текущей картинки
function play(){
	var numberImg = current_numPicture;
	document.getElementById('pause').classList.remove('hidden');
	document.getElementById('play').classList.add('hidden');
	document.getElementById('fullImg').src = picture[numberImg];
	current_numPicture = numberImg;
	timer = setInterval(nextImage, delay);
}

// Открытие следующей картинки(движение вправо)
function nextImage(){
	if(current_numPicture < picture.length-1)
	{
		current_numPicture++;
	}
	else
		current_numPicture = 0;
	document.getElementById('fullImg').src = picture[current_numPicture];

}

// Открытие предыдущей картинки(движение влево)
function previousImage(){
	if(current_numPicture>0)
		current_numPicture--;
	else
		current_numPicture = picture.length - 1;
	document.getElementById('fullImg').src = picture[current_numPicture];
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('close').onclick = closeSliseshow; // Устанавливаем обработчик на кнопку "закрыть"
  document.getElementById('next').onclick = nextImage;
  document.getElementById('prev').onclick = previousImage;
  document.getElementById('pause').onclick = pause;
  document.getElementById('play').onclick = play;

  let arrayImg = document.getElementById('originalWindow').getElementsByClassName('Picture');// Ищем все изображения
    for(i = 0; i < arrayImg.length; i++){
	  let image = arrayImg[i];
	  image.slideNum = i;
	  image.onclick = openSlideshow; // Устанавливаем обработчик на клик по изображению
	  picture.push(image.src);
  }
});
