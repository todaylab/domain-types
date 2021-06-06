export default {
    rpc: {},
    types: {
        "CurrencyId": {
          "_enum": {
            "Token": "TokenSymbol",
            "DEXShare": "(TokenSymbol, TokenSymbol)"
          }
        },
        "CurrencyIdOf": "CurrencyId",
        "Amount": "i128",
        "AmountOf": "Amount",
        "Order": {
          "base_currency_id": "CurrencyId",
          "base_amount": "Compact<Balance>",
          "target_currency_id": "CurrencyId",
          "target_amount": "Compact<Balance>",
          "owner": "AccountId"
        },
        "OrderOf": "Order",
        "OrderId": "u32",
        "AuctionId": "u32",
        "CID": "Vec<u8>",
        "ClassIdOf": "ClassId",
        "TokenId": "u64",
        "TokenIdOf": "TokenId",
        "ClassInfoOf": {
          "metadata": "CID",
          "totalIssuance": "TokenId",
          "owner": "AccountId",
          "data": "ClassData"
        },
        "TokenInfoOf": {
          "metadata": "CID",
          "owner": "AccountId",
          "data": "TokenData"
        },
        "ClassData": {
          "deposit": "Balance",
          "properties": "Properties"
        },
        "TokenData": {
          "deposit": "Balance"
        },
        "Properties": {
          "_set": {
            "_bitLength": 8,
            "Transferable": 1,
            "Burnable": 2
          }
        },
        "DomainInfo": {
          "native": "AccountId",
          "relay": "Option<AccountId>",
          "ethereum": "Vec<u8>",
          "deposit": "Balance"
        },
        "TokenSymbol": {
          "_enum": {
            "NAME": 0,
            "AUSD": 1,
            "DOT": 2,
            "LDOT": 3,
            "RENBTC": 4,
            "KAR": 128,
            "KUSD": 129,
            "KSM": 130,
            "LKSM": 131
          }
        },
        "PoolDetails": {
          "maker": "AccountId",
          "taker": "Option<AccountId>",
          "token0": "(ClassId, TokenId)",
          "token1": "CurrencyId",
          "total1": "Balance"
        },
        "AuctionDetails": {
          "creator": "AccountId",
          "winner": "Option<AccountId>",
          "token0": "(ClassId, TokenId)",
          "token1": "CurrencyId",
          "min1": "Balance",
          "duration": "BlockNumber",
          "start_at": "BlockNumber"
        }
    },
    typesAlias: {
        "order": {
            "ClassId": "u32",
        },
        "auction": {
            "ClassId": "u32",
        }
    },
}