function activar() {
    document.getElementById('bot').disabled = true;
}

function onSignIn(googleUser) {

    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); 
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());

    document.getElementById('name').innerHTML = profile.getName();
    document.getElementById('mail').innerHTML = profile.getEmail();
    document.getElementById('minombre').value = profile.getName();
    document.getElementById('imagen').src = profile.getImageUrl();

    if (profile.getName() != "") {
        document.getElementById('bot').disabled = false;
    }
    if (profile.getName() != "") {
        document.getElementById('datosUser').style.display = 'block';
    }
	    if (profile.getName() != "") {
        document.getElementById('log').style.display = 'none';
    }
		    if (profile.getName() != "") {
        document.getElementById('formulario').style.display = 'block';
    }
	
}
            function signOut() {
              var auth2 = gapi.auth2.getAuthInstance();
              auth2.signOut().then(function () {
                console.log('User signed out.');
              });
            }
            
            document.getElementById("uploadBtn").onchange = function () {
              document.getElementById("uploadFile").value = this.value;
            };


