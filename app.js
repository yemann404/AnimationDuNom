const textAnim=document.querySelector('h1');

new Typewriter(textAnim, {
    loop: true,
    deleteSpeed:20
})

.changeDelay(20)
.typeString('Moi c\'est Yemann')
.pauseFor(300)
.typeString('<strong>, Dev web</strong> !')
.pause(1000)
.deleteChars(10)
.typeString('<span style="color: #27ae60;"> CSS</span> !')
.pause(1000)
.deleteChars(5)
.typeString('<span style="color: midnightblue;"> React</span> !')
.pauseFor(1000)
.deleteChars(7)
.typeString('<span style="color: #ea39ff;"> PHP</span> !')
.pauseFor(1000)
.deleteChars(5)
.typeString('<span style="color: #ff6910;"> javaScript</span> !')
.start()