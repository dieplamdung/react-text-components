import { CustomThemeType } from '~/theme';
export interface OptionTypes<T> {
    xs?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
}
declare const useBreakpointSwitch: (muiTheme: CustomThemeType) => <T>(option: OptionTypes<T>, defaultValue?: T | undefined) => void;
export default useBreakpointSwitch;
