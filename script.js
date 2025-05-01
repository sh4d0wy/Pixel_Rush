const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://olive-fashionable-mule-815.mypinata.cloud/ipfs/bafkreidzbh5ffgw5btdhfchx5qy3gkjxl3vexjpaww2yxgf2lvjvnhrn6m',
});

const connect = async()=>{
    await tonConnectUI.openModal();
}