## Requisitos

1. Docker.
2. Fabrica.
```
sudo curl -Lf https://github.com/softwaremill/fabrica/releases/download/0.0.1/fabrica.sh -o /usr/local/bin/fabrica && sudo chmod +x /usr/local/bin/fabrica
```

## Running
3. Starts the Hyperledge Fabric network for given Fabrica configuration file, creates channels, installs and instantiates chaincode.

```
fabrica up
```

4. Managing chaincodes
   1. chaincode upgrade
```
fabrica chaincode upgrade [chaincode-name] version
```

5. Prune
```
fabrica prune
```
## Testing
6. Register
```
docker exec -it cli.org1.com peer chaincode invoke -n chaincode1 -C my-channel1 --peerAddresses peer0.org1.com:7060 -c '{"Args":["1", "Aluno - Luis Henrique"], "Function":"put"}'
```

7. Query
```
docker exec -it cli.org1.com peer chaincode query -n chaincode1 -C my-channel1 --peerAddresses peer0.org1.com:7060 -c '{"Args":["1"], "Function":"get"}'
```