'use strict';
const { Contract } = require('fabric-contract-api');

class Basic extends Contract {
  constructor() {
    super('Basic');
  }

  async instantiate() {
    // function that will be invoked on chaincode instantiation
  }

  async put(ctx, key, value) {
    await ctx.stub.putState(key, Buffer.from(value));
    return { success: 'OK' };
  }

  async get(ctx, key) {
    const buffer = await ctx.stub.getState(key);
    if (!buffer || !buffer.length) {return { error: 'NOT_FOUND' };}
    return { success: buffer.toString() };
  }
}

module.exports = Basic;
