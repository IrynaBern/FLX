function userCard(cardKey) {
	
  let object = {
    key: cardKey,
    balance: 100,
    transactionLimit: 100,
    historyLogs: []

  };
	
  function pushLogs(operationType, amount, operationTime) {
    object.historyLogs.push({
    operationType: operationType,
    credits: amount,
    operationTime: operationTime
    });
  }	
  
  function putCredits(amount) {
    object.balance += amount;
    pushLogs('Received credits', amount, new Date().toLocaleString('en-GB'));
  }
	
  function takeCredits(amount) {
    if(amount <= object.balance && amount <= object.transactionLimit) {
      object.balance -= amount;
      pushLogs('Withdrawal of credits', amount, new Date().toLocaleString('en-GB'));
    } else {
      console.error('Your transaction limit or remaining balance are less than credits you want to take.');
    }
  }
  
  function setTransactionLimit(amount) {
    object.transactionLimit = amount;
    pushLogs('Transaction limit change', amount, new Date().toLocaleString('en-GB'));
  }

  function transferCredits(amount, card) {
    const taxes = 0.005;
    const withDraw = amount + amount * taxes;
    if(withDraw <= object.balance && withDraw <= object.transactionLimit) {
      this.takeCredits(withDraw);
      card.putCredits(amount);
    } else {
      console.error('Your transaction limit or remaining balance are less than credits you want to take.');
    }
  }

  return {
    getCardOptions: () => object,
    putCredits: putCredits,
    takeCredits: takeCredits,
    setTransactionLimit: setTransactionLimit,
    transferCredits: transferCredits
  }
}

class UserAccount {
	
  constructor(userName) {
    this.userName = userName;
    this.cards = [];
    this.MAX_CARDS = 3; 
  }
  
  addCard() {
    if(this.cards.length < this.MAX_CARDS) {
      this.cards.push(userCard(this.cards.length + 1));
    } else {
      console.log('You should have <= 3 cards');
    }
  }
  
  getCardByKey(key) {
    return this.cards[key - 1];
  }
}


