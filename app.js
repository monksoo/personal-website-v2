const textDisplay = document.getElementById('type')
const phrases = ['UI/UX DESIGNER.', 'FRONT END DEV.','3-D MODELLER.','VISUAL ARTIST.']
let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop () {
    isEnd = false
    textDisplay.innerHTML = currentPhrase.join('')

    if (i < phrases.length) {
       
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase.push(phrases[i][j])
            j++
            textDisplay.innerHTML = currentPhrase.join('')
        }
         
   
    if(isDeleting && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }



     if (j == phrases[i].length) {
        isEnd = true
        isDeleting = true
    }
    
    if (isDeleting && j === 0) {
        currentPhrase = []
        isDeleting = false
        i++
        if (i == phrases.length) {
            i=0
        }
    }

}

const spedUp = Math.random() * (80-50) + 50
const normalSpeed = Math.random() * (300-200) + 200
const time = isEnd ? 2000 : isDeleting ? spedUp :normalSpeed
setTimeout(loop, time)


}

loop()


// CARDS
var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});
