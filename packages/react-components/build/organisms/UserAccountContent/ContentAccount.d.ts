import { IAddressesAccount } from '~/molecules/AddressAccount';
import { IDetailAccount } from '~/molecules/DetailAccount';
declare type IContentAccount = {
    contentAccount: IDetailAccount;
    contentAddresses: IAddressesAccount;
};
declare function ContentAccount(props: IContentAccount): JSX.Element;
export default ContentAccount;
