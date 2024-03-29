function validateFormOnSubmit(contact) {
  console.log(`contact`, contact)
  reason = ""
  reason += validateEmpty1(contact.fname)
  reason += validateEmpty2(contact.lname)
  reason += validateEmpty3(contact.uname)
  reason += validateEmpty4(contact.pwd)
  reason += validateEmail(contact.email)

  console.log(reason)
  if (reason.length == 0) {
        document.getElementById('display').style.display="block"
        document.getElementById('named').innerHTML="Name: " + contact.fname.value + " " + contact.lname.value
        document.getElementById('unamed').innerHTML="Username: " + contact.uname.value
        document.getElementById('emaild').innerHTML="E-Mail: " + contact.email.value
        return false;
  }else{
        document.getElementById('display').style.display="none"
        return false;
  }
}

function validateEmpty1(fname) {
  var error = ""

  if (fname.value.length == 0) {
    fname.style.background = "Yellow"
    document.getElementById("fname-error").innerHTML =
      "Please enter firstname"
    var error = "1"
  } else {
    fname.style.background = "White"
    document.getElementById("fname-error").innerHTML = ""
  }
  return error
}

function validateEmpty2(lname) {
    var error = ""
  
    if (lname.value.length == 0) {
      lname.style.background = "Yellow"
      document.getElementById("lname-error").innerHTML =
        "Please enter lastname"
      var error = "1"
    } else {
      lname.style.background = "White"
      document.getElementById("lname-error").innerHTML = ""
    }
    return error
  }

  function validateEmpty3(uname) {
    var error = ""
  
    if (uname.value.length == 0) {
      uname.style.background = "Yellow"
      document.getElementById("uname-error").innerHTML =
        "Please enter usename"
      var error = "1"
    } else {
      uname.style.background = "White"
      document.getElementById("uname-error").innerHTML = ""
    }
    return error
  }

  function validateEmpty4(pwd) {
    var error = ""
  
    if (pwd.value.length == 0) {
        pwd.style.background = "Yellow"
      document.getElementById("pwd-error").innerHTML =
        "Please enter password"
      var error = "1"
    } else {
        pwd.style.background = "White"
      document.getElementById("pwd-error").innerHTML = ""
    }
    return error
  }

// validate email as required field and format
function trim(s) {
  return s.replace(/^\s+|\s+$/, "")
}

function validateEmail(email) {
  var error = ""
  var temail = trim(email.value)
  var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/
  var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/

  if (email.value == "") {
    email.style.background = "Yellow"
    document.getElementById("email-error").innerHTML =
      "Please enter an email address."
    var error = "2"
  } else if (!emailFilter.test(temail)) {
    //test email for illegal characters
    email.style.background = "Yellow"
    document.getElementById("email-error").innerHTML =
      "Please enter a valid email address."
    var error = "3"
  } else if (email.value.match(illegalChars)) {
    email.style.background = "Yellow"
    var error = "4"
    document.getElementById("email-error").innerHTML =
      "Email contains invalid characters."
  } else {
    email.style.background = "White"
    document.getElementById("email-error").innerHTML = ""
  }
  return error
}

function onLoad(){
    document.getElementById('display').style.display="none"
}