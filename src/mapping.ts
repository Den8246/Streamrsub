import { BigInt } from "@graphprotocol/graph-ts"
import {
  Contract,
  UpdatedTokenInformation,
  Upgrade,
  UpgradeAgentSet,
  MintingAgentChanged,
  Minted,
  Transfer,
  Approval
} from "../generated/Contract/Contract"
import { _UpdatedTokenInformation, _Transfer, _Upgrade, _UpgradeAgentSet, _MintingAgentChanged, _Minted, _Approval } from "../generated/schema"

export function handleUpdatedTokenInformation(
  event: UpdatedTokenInformation
): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = _UpdatedTokenInformation.load(event.params.newName.toString())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (entity == null) {
    entity = new _UpdatedTokenInformation(event.params.newName.toString())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.newName = event.params.newName
  entity.newSymbol = event.params.newSymbol

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.mintingFinished(...)
  // - contract.name(...)
  // - contract.approve(...)
  // - contract.totalSupply(...)
  // - contract.transferFrom(...)
  // - contract.decimals(...)
  // - contract.mintAgents(...)
  // - contract.upgradeAgent(...)
  // - contract.upgradeMaster(...)
  // - contract.balanceOf(...)
  // - contract.getUpgradeState(...)
  // - contract.transferAgents(...)
  // - contract.owner(...)
  // - contract.symbol(...)
  // - contract.released(...)
  // - contract.canUpgrade(...)
  // - contract.transfer(...)
  // - contract.totalUpgraded(...)
  // - contract.releaseAgent(...)
  // - contract.allowance(...)
  // - contract.isToken(...)
}

export function handleUpgrade(event: Upgrade): void {let entity = _Upgrade.load(event.params._from.toHex())

 
  if (entity == null) {
    entity = new _Upgrade(event.params._from.toHex())


    entity.count = BigInt.fromI32(0)
  }


  entity.count = entity.count + BigInt.fromI32(1)

 
  entity._from = event.params._from
  entity._to = event.params._to
  entity._value = event.params._value
 
  entity.save()}

export function handleUpgradeAgentSet(event: UpgradeAgentSet): void {let entity = _UpgradeAgentSet.load(event.params.agent.toHex())

 
  if (entity == null) {
    entity = new _UpgradeAgentSet(event.params.agent.toHex())


    entity.count = BigInt.fromI32(0)
  }


  entity.count = entity.count + BigInt.fromI32(1)

 
  entity.agent = event.params.agent

 
  entity.save()}

export function handleMintingAgentChanged(event: MintingAgentChanged): void {let entity = _MintingAgentChanged.load(event.params.addr.toHex())

 
  if (entity == null) {
    entity = new _MintingAgentChanged(event.params.addr.toHex())


    entity.count = BigInt.fromI32(0)
  }


  entity.count = entity.count + BigInt.fromI32(1)

 
  entity.addr = event.params.addr
  entity.state = event.params.state

 
  entity.save()}

export function handleMinted(event: Minted): void {let entity = _Minted.load(event.params.receiver.toHex())

 
  if (entity == null) {
    entity = new _Minted(event.params.receiver.toHex())


    entity.count = BigInt.fromI32(0)
  }


  entity.count = entity.count + BigInt.fromI32(1)

 
  entity.receiver = event.params.receiver
  entity.amount = event.params.amount

 
  entity.save()}

export function handleTransfer(event: Transfer): void {
  let entity = _Transfer.load(event.params.from.toHex())

 
  if (entity == null) {
    entity = new _Transfer(event.params.from.toHex())


    entity.count = BigInt.fromI32(0)
  }


  entity.count = entity.count + BigInt.fromI32(1)

 
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
 
  entity.save()}

export function handleApproval(event: Approval): void {let entity = _Approval.load(event.params.owner.toHex())

 
  if (entity == null) {
    entity = new _Approval(event.params.owner.toHex())


    entity.count = BigInt.fromI32(0)
  }


  entity.count = entity.count + BigInt.fromI32(1)

 
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
 
  entity.save()}
