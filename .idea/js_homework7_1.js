var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    },
];

var trustedEmails = [];
const emailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

for (var i = 0; i < arr.length; i++) {
    if (emailPattern.test(arr[i].email)) {
        trustedEmails.push(arr[i].email);
    }
}

console.log(trustedEmails);
