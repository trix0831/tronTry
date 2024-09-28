// server.js
const express = require('express');
const cors = require('cors');
const TronWeb = require('tronweb');

const app = express();
app.use(cors());
app.use(express.json());

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider('https://api.shasta.trongrid.io');
const solidityNode = new HttpProvider('https://api.shasta.trongrid.io');
const eventServer = new HttpProvider('https://api.shasta.trongrid.io');

app.post('/api/transfer', async (req, res) => {
    const { privateKey, toAddress, amount } = req.body;

    if (!privateKey || !toAddress || !amount) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    try {
        const tronWeb = new TronWeb(fullNode, solidityNode, eventServer, privateKey);

        const transaction = await tronWeb.transactionBuilder.sendTrx(
            toAddress,
            amount,
            tronWeb.defaultAddress.base58
        );

        const signedTransaction = await tronWeb.trx.sign(transaction);
        const result = await tronWeb.trx.sendRawTransaction(signedTransaction);

        res.json({ success: true, txid: result.txid });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));