const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://olive-fashionable-mule-815.mypinata.cloud/ipfs/bafkreidzbh5ffgw5btdhfchx5qy3gkjxl3vexjpaww2yxgf2lvjvnhrn6m',
});

const connectWallet = async () => {
    try {
        await tonConnectUI.openModal();
        if (window.unityInstance) {
            window.unityInstance.SendMessage('WalletManager', 'OnWalletConnected', 'success');
            getAccountData();
        }
    } catch (error) {
        if (window.unityInstance) {
            window.unityInstance.SendMessage('WalletManager', 'OnWalletConnected', 'error');
        }
    }
}

const disconnectWallet = async () => {
    try {
        await tonConnectUI.disconnect();
        if (window.unityInstance) {
            window.unityInstance.SendMessage('WalletManager', 'OnWalletDisconnected', 'success');
        }
    } catch (error) {
        if (window.unityInstance) {
            window.unityInstance.SendMessage('WalletManager', 'OnWalletDisconnected', 'error');
        }
    }
}
const getAccountData = async () => {
    try {
        const tg = window.Telegram?.WebApp;
        const username = tg?.initDataUnsafe?.user?.username || 'unknown';
        const address = await tonConnectUI.account?.address;

        const data = {
            address: address,
            username: username,
        };
        const jsonData = JSON.stringify(data);

        if (window.unityInstance) {
            window.unityInstance.SendMessage('WalletManager', 'OnWalletAddressReceived', jsonData);
        }
    } catch (error) {
        if (window.unityInstance) {
            window.unityInstance.SendMessage('WalletManager', 'OnWalletAddressReceived', 'error');
        }
    }
}