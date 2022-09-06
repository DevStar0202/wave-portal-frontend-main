(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{33:function(f){f.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"WavePortal","sourceName":"contracts/WavePortal.sol","abi":[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"NewWave","type":"event"},{"inputs":[],"name":"getAllWaves","outputs":[{"components":[{"internalType":"address","name":"waver","type":"address"},{"internalType":"string","name":"message","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct WavePortal.Wave[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalWaves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastWavedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"wave","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040526200004f6040518060400160405280601981526020017f57652068617665206265656e20636f6e737472756374656421000000000000008152506200007760201b620006451760201c565b606444426200005f9190620001c4565b6200006b919062000261565b60018190555062000308565b62000117816040516024016200008e919062000184565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200011a60201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006200015082620001a8565b6200015c8185620001b3565b93506200016e8185602086016200022b565b6200017981620002f7565b840191505092915050565b60006020820190508181036000830152620001a0818462000143565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000620001d18262000221565b9150620001de8362000221565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000216576200021562000299565b5b828201905092915050565b6000819050919050565b60005b838110156200024b5780820151818401526020810190506200022e565b838111156200025b576000848401525b50505050565b60006200026e8262000221565b91506200027b8362000221565b9250826200028e576200028d620002c8565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b61112380620003186000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063449d46c0146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b60048036038101906100669190610988565b6100d9565b005b6100756104d3565b6040516100829190610db5565b60405180910390f35b6100a560048036038101906100a0919061095f565b6104dc565b6040516100b29190610db5565b60405180910390f35b6100c36104f4565b6040516100d09190610cb1565b60405180910390f35b42601e600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101269190610ed2565b10610166576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015d90610d95565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546101bc9190610ed2565b925050819055506102026040518060400160405280600d81526020017f2573206861732077617665642100000000000000000000000000000000000000815250336106de565b600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906102c192919061083f565b50604082015181600201555050606460015442446102df9190610ed2565b6102e99190610ed2565b6102f39190610fd8565b60018190555061033a6040518060400160405280601681526020017f52616e646f6d20232067656e6572617465643a2025640000000000000000000081525060015461077a565b603260015411610480576103836040518060400160405280600781526020017f257320776f6e2100000000000000000000000000000000000000000000000000815250336106de565b6000655af3107a40009050478111156103d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c890610d55565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff16826040516103f790610c9c565b60006040518083038185875af1925050503d8060008114610434576040519150601f19603f3d011682016040523d82523d6000602084013e610439565b606091505b505090508061047d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047490610d75565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea71642836040516104c8929190610dd0565b60405180910390a250565b60008054905090565b60036020528060005260406000206000915090505481565b60606002805480602002602001604051908101604052809291908181526020016000905b8282101561063c57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546105a190610fa6565b80601f01602080910402602001604051908101604052809291908181526020018280546105cd90610fa6565b801561061a5780601f106105ef5761010080835404028352916020019161061a565b820191906000526020600020905b8154815290600101906020018083116105fd57829003601f168201915b5050505050815260200160028201548152505081526020019060010190610518565b50505050905090565b6106db816040516024016106599190610cd3565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610816565b50565b61077682826040516024016106f4929190610cf5565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610816565b5050565b6108128282604051602401610790929190610d25565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610816565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461084b90610fa6565b90600052602060002090601f01602090048101928261086d57600085556108b4565b82601f1061088657805160ff19168380011785556108b4565b828001600101855582156108b4579182015b828111156108b3578251825591602001919060010190610898565b5b5090506108c191906108c5565b5090565b5b808211156108de5760008160009055506001016108c6565b5090565b60006108f56108f084610e31565b610e00565b90508281526020810184848401111561090d57600080fd5b610918848285610f64565b509392505050565b60008135905061092f816110d6565b92915050565b600082601f83011261094657600080fd5b81356109568482602086016108e2565b91505092915050565b60006020828403121561097157600080fd5b600061097f84828501610920565b91505092915050565b60006020828403121561099a57600080fd5b600082013567ffffffffffffffff8111156109b457600080fd5b6109c084828501610935565b91505092915050565b60006109d58383610c2e565b905092915050565b6109e681610f28565b82525050565b6109f581610f28565b82525050565b6000610a0682610e71565b610a108185610e94565b935083602082028501610a2285610e61565b8060005b85811015610a5e5784840389528151610a3f85826109c9565b9450610a4a83610e87565b925060208a01995050600181019050610a26565b50829750879550505050505092915050565b6000610a7b82610e7c565b610a858185610eb0565b9350610a95818560208601610f73565b610a9e816110c5565b840191505092915050565b6000610ab482610e7c565b610abe8185610ec1565b9350610ace818560208601610f73565b610ad7816110c5565b840191505092915050565b6000610aef603483610ec1565b91507f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008301527f616e2074686520636f6e7472616374206861732e0000000000000000000000006020830152604082019050919050565b6000610b55602783610ec1565b91507f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008301527f6e74726163742e000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610bbb602983610ec1565b91507f4d7573742077616974203330207365636f6e6473206265666f7265207761766960008301527f6e6720616761696e2e00000000000000000000000000000000000000000000006020830152604082019050919050565b6000610c21600083610ea5565b9150600082019050919050565b6000606083016000830151610c4660008601826109dd565b5060208301518482036020860152610c5e8282610a70565b9150506040830151610c736040860182610c7e565b508091505092915050565b610c8781610f5a565b82525050565b610c9681610f5a565b82525050565b6000610ca782610c14565b9150819050919050565b60006020820190508181036000830152610ccb81846109fb565b905092915050565b60006020820190508181036000830152610ced8184610aa9565b905092915050565b60006040820190508181036000830152610d0f8185610aa9565b9050610d1e60208301846109ec565b9392505050565b60006040820190508181036000830152610d3f8185610aa9565b9050610d4e6020830184610c8d565b9392505050565b60006020820190508181036000830152610d6e81610ae2565b9050919050565b60006020820190508181036000830152610d8e81610b48565b9050919050565b60006020820190508181036000830152610dae81610bae565b9050919050565b6000602082019050610dca6000830184610c8d565b92915050565b6000604082019050610de56000830185610c8d565b8181036020830152610df78184610aa9565b90509392505050565b6000604051905081810181811067ffffffffffffffff82111715610e2757610e26611096565b5b8060405250919050565b600067ffffffffffffffff821115610e4c57610e4b611096565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610edd82610f5a565b9150610ee883610f5a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610f1d57610f1c611009565b5b828201905092915050565b6000610f3382610f3a565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610f91578082015181840152602081019050610f76565b83811115610fa0576000848401525b50505050565b60006002820490506001821680610fbe57607f821691505b60208210811415610fd257610fd1611067565b5b50919050565b6000610fe382610f5a565b9150610fee83610f5a565b925082610ffe57610ffd611038565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6110df81610f28565b81146110ea57600080fd5b5056fea2646970667358221220a54704c262ac44cb3b7af80aeea4cd74921361f242326c3a172738da3b81774e64736f6c63430008000033","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061004c5760003560e01c8063449d46c0146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b60048036038101906100669190610988565b6100d9565b005b6100756104d3565b6040516100829190610db5565b60405180910390f35b6100a560048036038101906100a0919061095f565b6104dc565b6040516100b29190610db5565b60405180910390f35b6100c36104f4565b6040516100d09190610cb1565b60405180910390f35b42601e600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101269190610ed2565b10610166576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015d90610d95565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546101bc9190610ed2565b925050819055506102026040518060400160405280600d81526020017f2573206861732077617665642100000000000000000000000000000000000000815250336106de565b600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906102c192919061083f565b50604082015181600201555050606460015442446102df9190610ed2565b6102e99190610ed2565b6102f39190610fd8565b60018190555061033a6040518060400160405280601681526020017f52616e646f6d20232067656e6572617465643a2025640000000000000000000081525060015461077a565b603260015411610480576103836040518060400160405280600781526020017f257320776f6e2100000000000000000000000000000000000000000000000000815250336106de565b6000655af3107a40009050478111156103d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103c890610d55565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff16826040516103f790610c9c565b60006040518083038185875af1925050503d8060008114610434576040519150601f19603f3d011682016040523d82523d6000602084013e610439565b606091505b505090508061047d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047490610d75565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea71642836040516104c8929190610dd0565b60405180910390a250565b60008054905090565b60036020528060005260406000206000915090505481565b60606002805480602002602001604051908101604052809291908181526020016000905b8282101561063c57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546105a190610fa6565b80601f01602080910402602001604051908101604052809291908181526020018280546105cd90610fa6565b801561061a5780601f106105ef5761010080835404028352916020019161061a565b820191906000526020600020905b8154815290600101906020018083116105fd57829003601f168201915b5050505050815260200160028201548152505081526020019060010190610518565b50505050905090565b6106db816040516024016106599190610cd3565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610816565b50565b61077682826040516024016106f4929190610cf5565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610816565b5050565b6108128282604051602401610790929190610d25565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610816565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461084b90610fa6565b90600052602060002090601f01602090048101928261086d57600085556108b4565b82601f1061088657805160ff19168380011785556108b4565b828001600101855582156108b4579182015b828111156108b3578251825591602001919060010190610898565b5b5090506108c191906108c5565b5090565b5b808211156108de5760008160009055506001016108c6565b5090565b60006108f56108f084610e31565b610e00565b90508281526020810184848401111561090d57600080fd5b610918848285610f64565b509392505050565b60008135905061092f816110d6565b92915050565b600082601f83011261094657600080fd5b81356109568482602086016108e2565b91505092915050565b60006020828403121561097157600080fd5b600061097f84828501610920565b91505092915050565b60006020828403121561099a57600080fd5b600082013567ffffffffffffffff8111156109b457600080fd5b6109c084828501610935565b91505092915050565b60006109d58383610c2e565b905092915050565b6109e681610f28565b82525050565b6109f581610f28565b82525050565b6000610a0682610e71565b610a108185610e94565b935083602082028501610a2285610e61565b8060005b85811015610a5e5784840389528151610a3f85826109c9565b9450610a4a83610e87565b925060208a01995050600181019050610a26565b50829750879550505050505092915050565b6000610a7b82610e7c565b610a858185610eb0565b9350610a95818560208601610f73565b610a9e816110c5565b840191505092915050565b6000610ab482610e7c565b610abe8185610ec1565b9350610ace818560208601610f73565b610ad7816110c5565b840191505092915050565b6000610aef603483610ec1565b91507f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008301527f616e2074686520636f6e7472616374206861732e0000000000000000000000006020830152604082019050919050565b6000610b55602783610ec1565b91507f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008301527f6e74726163742e000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610bbb602983610ec1565b91507f4d7573742077616974203330207365636f6e6473206265666f7265207761766960008301527f6e6720616761696e2e00000000000000000000000000000000000000000000006020830152604082019050919050565b6000610c21600083610ea5565b9150600082019050919050565b6000606083016000830151610c4660008601826109dd565b5060208301518482036020860152610c5e8282610a70565b9150506040830151610c736040860182610c7e565b508091505092915050565b610c8781610f5a565b82525050565b610c9681610f5a565b82525050565b6000610ca782610c14565b9150819050919050565b60006020820190508181036000830152610ccb81846109fb565b905092915050565b60006020820190508181036000830152610ced8184610aa9565b905092915050565b60006040820190508181036000830152610d0f8185610aa9565b9050610d1e60208301846109ec565b9392505050565b60006040820190508181036000830152610d3f8185610aa9565b9050610d4e6020830184610c8d565b9392505050565b60006020820190508181036000830152610d6e81610ae2565b9050919050565b60006020820190508181036000830152610d8e81610b48565b9050919050565b60006020820190508181036000830152610dae81610bae565b9050919050565b6000602082019050610dca6000830184610c8d565b92915050565b6000604082019050610de56000830185610c8d565b8181036020830152610df78184610aa9565b90509392505050565b6000604051905081810181811067ffffffffffffffff82111715610e2757610e26611096565b5b8060405250919050565b600067ffffffffffffffff821115610e4c57610e4b611096565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610edd82610f5a565b9150610ee883610f5a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610f1d57610f1c611009565b5b828201905092915050565b6000610f3382610f3a565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610f91578082015181840152602081019050610f76565b83811115610fa0576000848401525b50505050565b60006002820490506001821680610fbe57607f821691505b60208210811415610fd257610fd1611067565b5b50919050565b6000610fe382610f5a565b9150610fee83610f5a565b925082610ffe57610ffd611038565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6110df81610f28565b81146110ea57600080fd5b5056fea2646970667358221220a54704c262ac44cb3b7af80aeea4cd74921361f242326c3a172738da3b81774e64736f6c63430008000033","linkReferences":{},"deployedLinkReferences":{}}')},39:function(f,e,b){f.exports=b(58)},44:function(f,e,b){},46:function(f,e,b){},48:function(f,e){},58:function(f,e,b){"use strict";b.r(e);var a=b(7),t=b.n(a),c=b(32),n=b.n(c),d=(b(44),b(19)),r=b(2),s=b.n(r),o=b(20),i=b(25),u=b(12),l=(b(46),b(33)),p=function(){var f=Object(a.useState)(""),e=Object(i.a)(f,2),b=e[0],c=e[1],n=Object(a.useState)([]),r=Object(i.a)(n,2),p=r[0],m=r[1],v="0xfec3155141E9C2D4a2194D87ebea5D6379B99c19",y=l.abi,g=function(){var f=Object(o.a)(s.a.mark((function f(){var e,b,a,t;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,b=e.ethereum){f.next=7;break}return console.log("Make sure you have metamask!"),f.abrupt("return");case 7:console.log("We have the ethereum object",b);case 8:return f.next=10,b.request({method:"eth_accounts"});case 10:0!==(a=f.sent).length?(t=a[0],console.log("Found an authorized account:",t),c(t),x()):console.log("No authorized account found"),f.next=17;break;case 14:f.prev=14,f.t0=f.catch(0),console.log(f.t0);case 17:case"end":return f.stop()}}),f,null,[[0,14]])})));return function(){return f.apply(this,arguments)}}(),w=function(){var f=Object(o.a)(s.a.mark((function f(){var e,b,a;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,b=e.ethereum){f.next=5;break}return alert("Get MetaMask!"),f.abrupt("return");case 5:return f.next=7,b.request({method:"eth_requestAccounts"});case 7:a=f.sent,console.log("Connected",a[0]),c(a[0]),f.next=15;break;case 12:f.prev=12,f.t0=f.catch(0),console.log(f.t0);case 15:case"end":return f.stop()}}),f,null,[[0,12]])})));return function(){return f.apply(this,arguments)}}(),h=function(){var f=Object(o.a)(s.a.mark((function f(){var e,b,a,t,c,n,d;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,!(b=e.ethereum)){f.next=23;break}return a=new u.a.providers.Web3Provider(b),t=a.getSigner(),c=new u.a.Contract(v,y,t),f.next=8,c.getTotalWaves();case 8:return n=f.sent,console.log("Retrieved total wave count...",n.toNumber()),f.next=12,c.wave("I love you!",{gasLimit:3e5});case 12:return d=f.sent,console.log("Mining...",d.hash),f.next=16,d.wait();case 16:return console.log("Mined -- ",d.hash),f.next=19,c.getTotalWaves();case 19:n=f.sent,console.log("Retrieved total wave count...",n.toNumber()),f.next=24;break;case 23:console.log("Ethereum object doesn't exist!");case 24:f.next=29;break;case 26:f.prev=26,f.t0=f.catch(0),console.log(f.t0);case 29:case"end":return f.stop()}}),f,null,[[0,26]])})));return function(){return f.apply(this,arguments)}}(),x=function(){var f=Object(o.a)(s.a.mark((function f(){var e,b,a,t,c,n,d;return s.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(e=window,b=e.ethereum,f.prev=1,!b){f.next=13;break}return a=new u.a.providers.Web3Provider(b),t=a.getSigner(),c=new u.a.Contract(v,y,t),f.next=8,c.getAllWaves();case 8:n=f.sent,d=n.map((function(f){return{address:f.waver,timestamp:new Date(1e3*f.timestamp),message:f.message}})),m(d),f.next=14;break;case 13:console.log("Ethereum object doesn't exist!");case 14:f.next=19;break;case 16:f.prev=16,f.t0=f.catch(1),console.log(f.t0);case 19:case"end":return f.stop()}}),f,null,[[1,16]])})));return function(){return f.apply(this,arguments)}}();return Object(a.useEffect)((function(){var f,e=function(f,e,b){console.log("NewWave",f,e,b),m((function(a){return[].concat(Object(d.a)(a),[{address:f,timestamp:new Date(1e3*e),message:b}])}))};if(window.ethereum){var b=new u.a.providers.Web3Provider(window.ethereum).getSigner();(f=new u.a.Contract(v,y,b)).on("NewWave",e)}return function(){f&&f.off("NewWave",e)}}),[]),Object(a.useEffect)((function(){g()}),[]),t.a.createElement("div",{className:"mainContainer"},t.a.createElement("div",{className:"dataContainer"},t.a.createElement("div",{className:"header"},"\ud83d\udc4b Hey there!"),t.a.createElement("div",{className:"bio"},"I am farza and I worked on self-driving cars so that's pretty cool right? Connect your Ethereum wallet and wave at me!"),t.a.createElement("button",{className:"waveButton",onClick:h},"Wave at Me"),!b&&t.a.createElement("button",{className:"waveButton",onClick:w},"Connect Wallet"),p.map((function(f,e){return t.a.createElement("div",{key:e,style:{backgroundColor:"OldLace",marginTop:"16px",padding:"8px"}},t.a.createElement("div",null,"Address: ",f.address),t.a.createElement("div",null,"Time: ",f.timestamp.toString()),t.a.createElement("div",null,"Message: ",f.message))}))))};n.a.render(t.a.createElement(p,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.2de26d34.chunk.js.map