const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://olive-fashionable-mule-815.mypinata.cloud/ipfs/bafkreidzbh5ffgw5btdhfchx5qy3gkjxl3vexjpaww2yxgf2lvjvnhrn6m',
});
/*
const connect = async()=>{
    await tonConnectUI.openModal();
*/

const connectWallet = async () => {
    try {
        alert('Connecting to wallet...');
        await tonConnectUI.openModal();
        if (window.unityInstance) {
            window.unityInstance.SendMessage('WalletManager', 'OnWalletConnected', 'success');
        }
    } catch (error) {
        alert('Error connecting to wallet: ' + error.message);
        if (window.unityInstance) {
            window.unityInstance.SendMessage('WalletManager', 'OnWalletConnected', 'error');
        }
    }
}