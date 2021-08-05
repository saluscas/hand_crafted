function openbar(){
    document.body.style.backgroundColor = "black";

    document.getElementById('li-none-open').style.display = 'none';
    document.getElementById('li-none-close').style.display = 'inline';

    //sidenav
    document.getElementById('sidenav').style.width = '300px';
    document.getElementById('sidenav').style.backgroundColor = 'black';
    document.getElementById('sidenav').style.transition = '0.3s linear';

    //container
    document.getElementById('rest-header').style.transform = 'translate(0px)';
    document.getElementById('rest-header').style.maxWidth = '980px';
    document.getElementById('rest-header').style.transition = '0.3s linear';

    // rest-bg-menu
    document.getElementById('bg-menu').style.transform = 'translate(150px)';
    document.getElementById('bg-menu').style.transition = '0.3s linear';
}

function closebar(){
    document.body.style.backgroundColor = "black";
    document.getElementById('li-none-open').style.display = 'inline';
    document.getElementById('li-none-close').style.display = 'none';
    document.getElementById('sidenav').style.width = '0%';
    document.getElementById('rest-header').style.maxWidth = '1400px';
    document.getElementById('rest-header').style.transform = 'translate(0%)';   
    document.getElementById('bg-menu').style.transform = 'translate(0%)';
    document.getElementById('rest-header').style.transition = '0.3s linear';     
    document.getElementById('sidenav').style.backgroundColor = 'black';    
}

//slider
  function arrowleft(){
    document.getElementById('body').style.backgroundImage =  'url(../img/03.jpg)';
    document.getElementById('body').style.backgroundRepeat =   'no-repeat';
    document.getElementById('body').style.backgroundSize =     'cover';
    document.getElementById('body').style.backgroundPosition = 'center';
}
  function arrowright(){
    document.getElementById('body').style.backgroundImage =  'url(../img/01.jpg)';
    document.getElementById('body').style.backgroundRepeat =   'no-repeat';
    document.getElementById('body').style.backgroundSize =     'cover';
    document.getElementById('body').style.backgroundPosition = 'center';
  }


