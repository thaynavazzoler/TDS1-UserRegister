class User {
    constructor(name, email, age, birthdate, address, cpf, cellphonephone){
        this.name = name;
        this.email = email;
        this.age = age;
        this.birthdate = birthdate;
        this.address = address;
        this.cpf = cpf;
        this.cellphone= cellphone;
        this.realAlge = this.CalculedAge();
        this.getZodiacSign = this.getZodiacSign ();
        this.PotencialClient = this.PotencialClient(this.age);
    }
}

class ListUsers{
    constructor(){
        this.users = [];
    }
}


CalculedAge (age){
    const today = new Date();
    const birthdate = new Date(age);
    const realAlge = today - birthdate;
    return Math.floor(realAge / (1000 * 68 * 24 * 365.25));
}

 function getZodiacSign() {
    let birthdate = new Date(this.birthdate);
    let day = birthdate.getDate();
    let month = birthdate.getMonth() + 1;
    console.log("Passou pelo getSigno() da class User");

    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        return "Capricórnio ♑";
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        return "Aquário ♒";
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        return "Peixes ♓";
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        return "Áries ♈";
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        return "Touro ♉";
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        return "Gêmeos ♊";
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        return "Câncer ♋";
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        return "Leão ♌";
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        return "Virgem ♍";
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        return "Libra ♎";
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        return "Escorpião ♏";
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        return "Sagitário ♐";
    }
}

getPersonAge(){
    console.log("passou pela conta de idade")
    const birthdate = this.birthdayDate;
    const birthYear = new Date (birthdate).getFullYear();
    const weYear = new Date().getFullYear();
     const birthMonth = new Date(birthdate).getMonth() + 1;
     const weMonth = new Date().getMonth() + 1;

     const age = weYear - birthYear;
     if(birthMonth > weMonth){
        return age - 1;
     } else {
        return age;
     }
}
possibleClient(){
    let client = 0;
    if (this.age < 18 || this.age > 26){
        return "não é um possível cliente";
    }if(this.age >=18 && this.age <=26){
        client ++;
        return "É um possível cliente";
    }
}


function showRegister() {
    document.getElementById("sub-div").classList.add("hidden");
    document.getElementById("title-page").classList.remove("hidden");
    document.getElementById("main-div").classList.remove("hidden");
    console.log("Passou pela funcao showRegister()");

}

function formatedCPF(cpf) {
    console.log("Passou pela funcao formatedCPF()");

    let cpfArray = cpf.split("");
    let cpfFormated = cpfArray[0] + cpfArray[1] + cpfArray[2]
        + "." + cpfArray[3] + cpfArray[4] + cpfArray[5] + "."
        + cpfArray[6] + cpfArray[7] + cpfArray[8] + "-" + cpfArray[9] + cpfArray[10];
    return cpfFormated;
}

function formatedCellphone(cellphone) {
    console.log("Passou pela funcao formatedCellphone()");

    let cellphoneArray = cellphone.split("");
    let cellphoneFormated = "(" + cellphoneArray[0] + cellphoneArray[1] + ")"
        + " " + cellphoneArray[2] + cellphoneArray[3] + cellphoneArray[4]
        + cellphoneArray[5] + cellphoneArray[6] + "-"
        + cellphoneArray[7] + cellphoneArray[8]
        + cellphoneArray[9] + cellphoneArray[10];
    return cellphoneFormated;
}

function valida_cpf(cpf) {
    console.log("Passou pela funcao valida_cpf()");

    var numeros, digitos, soma, i, resultado, digitos_iguais;
    digitos_iguais = 1;
    if (cpf.length < 11)
        return false;
    for (i = 0; i < cpf.length - 1; i++)
        if (cpf.charAt(i) != cpf.charAt(i + 1)) {
            digitos_iguais = 0;
            break;
        }
    if (!digitos_iguais) {
        numeros = cpf.substring(0, 9);
        digitos = cpf.substring(9);
        soma = 0;
        for (i = 10; i > 1; i--)
            soma += numeros.charAt(10 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(0))
            return false;
        numeros = cpf.substring(0, 10);
        soma = 0;
        for (i = 11; i > 1; i--)
            soma += numeros.charAt(11 - i) * i;
        resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
        if (resultado != digitos.charAt(1))
            return false;
        return true;
    }
    else
        return false;
}

function sendErrorMsg(msg) {
    console.log("Passou pela funcao sendErrorMsg()");

    document.getElementById("error-msg").innerHTML = msg;
    document.getElementById("error-msg").classList.remove("hidden");
    setTimeout(function () {
        document.getElementById("error-msg").classList.add("hidden");
    }, 4000);
}

const formRegister = document.getElementById("user-form");
const sendButton = document.getElementById("button-register");
const sucessMessage = document.getElementById("error-msg");
const userList = document.getElementById("user-list");
const backtoForm = document.getElementById("button-register");
const usersList = [];



const ListUsers = new ListUsers();

function showUsers(){
let user2 = '';
arrayList.users.forEach((user) =>{
    console.log(user);
    user2 +=`   
    <div class = "list- eachUser">
    <p>Nome: ${user.name}</p>
    <p>idade: ${user.age}</p>
    <p>Nascimento: ${user.birthdate}</p>
    <p>Signo: ${user.getZodiacSign}</p>
    <p>Cidade: ${user.address}</p>
    <p>Phone: ${user.cellphone}</p>
    <p> CPF: ${user.cpf}</p>
    <p>CPF: ${user.client}</p>
 </div>`;
 
})
document.getElementById("user-list").innerHTML = user2;
}
// how many functions are there? 12
// how many classes are there? 2

// Boa sorte!