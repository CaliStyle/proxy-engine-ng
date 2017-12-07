import { NgPack} from '../../root/ng-pack'

import { ROUTES } from './500.router'
import { ACTIONS } from './500.actions'
import { EFFECTS } from './500.effects'
import { REDUCERS } from './500.reducers'

export class FiveZeroZero extends NgPack {
  constructor(app) {
    super(app, {
      config: {
        name: 'FiveZeroZeroModule',
        root: '500/500.module'
      },
      actions: ACTIONS,
      effects: EFFECTS,
      reducers: REDUCERS,
      routes: ROUTES
    })
  }
}
