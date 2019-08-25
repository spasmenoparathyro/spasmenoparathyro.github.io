window.onscroll = function() {myFunction()};

function myFunction() {
    
    if ( document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {

        deskMenuScroll();

    } else if ( document.body.scrollTop == 0 || document.documentElement.scrollTop == 0 ) {

        deskMenuUnScroll();

    }
    
}

function deskMenuScroll() {
	
	document.querySelector('#menubar h1').style.width = '25%';
        document.querySelector('#menubar h2').style.width = '50%';
        document.querySelector('#menubar h2').style.display = 'block';
        document.querySelector('#menubar h2').style.opacity = 1;
        
        document.querySelector('.toTop').style.display = 'block';
	document.querySelector('.toTop').style.opacity = 1;
	
};

function deskMenuUnScroll() {
	
	document.querySelector('#menubar h1').style.width = '100%';
        document.querySelector('#menubar h2').style.display = 'none';
        document.querySelector('#menubar h2').style.opacity = 0;
        
        document.querySelector('.toTop').style.opacity = 0;
        setTimeout(function(){
            document.querySelector('.toTop').style.display = 'none';
        }, 300);
	
};




document.querySelector('.toTop').addEventListener( 'click', scrollOp );

function scrollOp() {
    
    window.scrollTo({top: 0, behavior: 'smooth'});
    
};