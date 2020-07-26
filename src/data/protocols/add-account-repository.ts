import { AddAccountModel } from '../../domain/useCases/addAcounts'
import { AccountModel } from '../../domain/models/account'

export interface AddAccountRepository {
  add (accountData: AddAccountModel): Promise<AccountModel>
}
