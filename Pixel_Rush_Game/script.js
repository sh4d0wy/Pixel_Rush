const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://olive-fashionable-mule-815.mypinata.cloud/ipfs/bafkreien4roprzwd3ov6wss2jjbnwkolglzt6ao3in52jmrjyvw4isfzva',
});
/*
const connect = async()=>{
    await tonConnectUI.openModal();
*/

const connectWallet = async () => {
    try {
        await tonConnectUI.openModal();
        if (window.unityInstance) {
            window.unityInstance.SendMessage('WalletManager', 'OnWalletConnected', 'success');
        }
    } catch (error) {
        if (window.unityInstance) {
            window.unityInstance.SendMessage('WalletManager', 'OnWalletConnected', 'error');
        }
    }
}