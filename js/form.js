// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDqDTS_9PI9c8pGG853YrAVUThCCPUb3GE",
    authDomain: "a-y-a-7f511.firebaseapp.com",
    databaseURL: "https://a-y-a-7f511.firebaseio.com",
    projectId: "a-y-a-7f511",
    storageBucket: "a-y-a-7f511.appspot.com",
    messagingSenderId: "462510178995"
  };
  firebase.initializeApp(config);

//Reference messages collection

var messagesRef =firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


//Submit Form
function submitForm(e){
    e.preventDefault();
    //Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    
    saveMessage(name, email, phone, message);
    //Show alert
    document.querySelector('.alert').style.display = 'block';
    //Hide alert after 
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000)
    
    document.getElementById('contactForm').reset();
}

//Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name,email,phone,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        phone: phone,
        message: message
    });
}