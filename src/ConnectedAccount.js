let account;
async function onInit() {
        await window.ethereum.enable();
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        account = accounts[0];
        console.log(account)
         window.ethereum.on('accountsChanged', function (accounts) {
            // Time to reload your interface with accounts[0]!
            console.log(accounts[0])
           });
    }

    onInit();

const ConnectedAccount = () => {
    return ( <p>

    </p> );
}
 
export default ConnectedAccount;