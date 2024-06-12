let balance = 0;

function deposit(amount) {
    if (amount <= 0) {
        return "Deposit amount must be positive.";
    }
    balance += amount;
    return `Successfully deposited your monies :D $${amount}. Current balance: $${balance}`;
}

function withdraw(amount) {
    if (amount <= 0) {
        return "Withdrawal amount must be positive.";
    }
    if (amount > balance) {
        return "Lol you broke buddy.";
    }
    balance -= amount;
    return `Successfully withdrew your life savings:( $${amount}. Current balance: $${balance}`;
}

function checkBalance() {
    return `Current balance... Rip;c : $${balance}`;
}

document.getElementById('deposit-button').onclick = () => {
    const amount = parseFloat(document.getElementById('deposit-amount').value);
    const result = deposit(amount);
    document.getElementById('output').innerText = result;
}

document.getElementById('withdraw-button').onclick = () => {
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    const result = withdraw(amount);
    document.getElementById('output').innerText = result;
}

document.getElementById('check-balance-button').onclick = () => {
    const result = checkBalance();
    document.getElementById('output').innerText = result;
}
