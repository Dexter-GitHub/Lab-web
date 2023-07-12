var Links = {
    setColor: function (color) {
        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
                alist[i].style.color = color;
                i++;
        }
    }
}
var body = {
    setColor: function (color) {
        var target = document.querySelector('body').style.color = color;                    
    },
    setBackgroundColor: function (color) {
        var target = document.querySelector('body').style.backgroundColor = color;                                   
    }

}               
function nightDayHandler(self) {   
    if (self.value === 'night') {
        body.setBackgroundColor('black');
        body.setColor('white');
        self.value = 'day';                    
        Links.setColor('powderblue');           
    }
    else {
        body.setBackgroundColor('white');
        body.setColor('black');
        self.value = 'night';
        Links.setColor('blue');
    }
}