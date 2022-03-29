type User = {
  nameUser: string;
  emailUser: string;
  rule: RULE;
};

enum RULE {
  ADMIN = "Admin",
  USER = "user",
}

const users: User[] = [
  {
      nameUser: "Rogério",
      emailUser: "roger@email.com",
      rule: RULE.USER
    },
  {
      nameUser: "Ademir",
      emailUser: "ademir@email.com",
      rule: RULE.ADMIN
    },
  {
      nameUser: "Aline",
      emailUser: "aline@email.com",
      rule: RULE.USER
    },
  {
      nameUser: "Jéssica",
      emailUser: "jessica@email.com",
      rule: RULE.USER
    },
  {
      nameUser: "Adilson",
      emailUser: "adilson@email.com",
      rule: RULE.USER
    },
  {
      nameUser: "Carina",
      emailUser: "carina@email.com",
      rule: RULE.ADMIN
    },
];

function userFilterEmail (list: User[]): string[] {

    const filteredUserEmail: User[] = list.filter((User)=>{
        if(User.rule === "Admin"){return User.emailUser}
    })

    let emails : string[] = []

    for(let i=0; i <= filteredUserEmail.length-1; i++) {
        emails.push(filteredUserEmail[i].emailUser) 
    } 

    return emails
}

console.table(userFilterEmail(users))