export interface Options {
    elementId: string;
    includeHeader?: boolean;
    displayFormat?: string;
    year?: YearOptions;
    color?: ColorOptions;
    closeOptions?: CloseOptions;
}
type YearOptions = {
    max?: number;
    min?: number;
};
type ColorOptions = {
    primary?: string;
    secondary?: string;
};
type CloseOptions = {
    closeOnClickOutsideModal?: boolean;
    closeOnKeyboardKeys?: boolean;
};
declare class DailySelector {
    initialize(options: Options): void;
}
declare const dailySelector: DailySelector;
export { dailySelector };
