console.log('starting password manager');

var storage = require('node-persist');
//initialize storage
storage.initSync();


//lets get an accounts array
var accounts = storage.getItemSync('accounts')

//this is used to make a new account
//name string github
//username  user123
//password pwd232
//in account
function createAccount(account) {
  if(account.name != undefined && account.username != undefined && account.password != undefined) {
    //save the account
    accounts.push(account)
    console.log(`${account.name} account saved!`)
  } else {
    //alert the user of an error
    console.log('please ensure to provide an account name, username and password');
  }
}

function getAccount(accountName) {
  //lets fimd the account with the names
  return accounts.find((acc) => {
    return accountName == acc.name
  });
}


createAccount({
  name: 'whatsapp',
  username: 'superbike_z',
  password: 'hahahehe343'
});


console.log('WhatsApp Account', getAccount('whatsapp'));
