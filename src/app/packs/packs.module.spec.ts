import { PacksModule } from './packs.module'

describe('PacksModule', () => {
  let packsModule: PacksModule

  beforeEach(() => {
    packsModule = new PacksModule()
  })

  it('should create an instance of packs module', () => {
    expect(packsModule).toBeTruthy()
  })
})
