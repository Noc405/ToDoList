var confirmBox = document.querySelector('.allowCookies');

var btnAccept = document.querySelector('#btnAccept');
var btnDeny = document.querySelector('#btnDeny');

function cookieConsent() {
    if (!getCookie('allowCookies')) {
        //Show allow cookies
        allowCookieShow()
    }
}

function allowCookieShow(){
    setTimeout(loadBox, 2000);

    btnAccept.addEventListener('click', () => {
        confirmBox.style.display = 'none';

        confirmBox.style.transform = 'translateY(200px)';

        window.location.href="index.php?controller=cookies&action=allowCookies&allow=true";
    });

    btnDeny.addEventListener('click', () => {
        confirmBox.style.display = 'none';

        confirmBox.style.transform = 'translateY(200px)';

        window.location.href="index.php?controller=cookies&action=allowCookies&allow=false";
    });
}

function loadBox(){
    confirmBox.style.display = 'flex';
    confirmBox.style.top = (window.innerHeight - confirmBox.clientHeight) + 'px';
    
    confirmBox.style.transform = 'translateY(0px)';
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

// load
cookieConsent()