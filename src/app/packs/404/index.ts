import { NgPack } from '../../ngEngine'
import * as CONFIG from './config'
import * as PKG from './package.json'
import { ACTIONS, EFFECTS, REDUCERS } from './store'

export class FourZeroFour extends NgPack {
  constructor(app) {
    super(app, {
      config: CONFIG,
      pkg: PKG,
      actions: ACTIONS,
      effects: EFFECTS,
      reducers: REDUCERS
    })
  }
}
