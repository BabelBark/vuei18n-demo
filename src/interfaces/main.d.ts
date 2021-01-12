export interface Map {
    [key: string]: any;
}

export interface Translation {
    content: TranslationContent;
    messages: TranslationMessages;
    labels: TranslationLabels;
}

export interface TranslationContent {
    title: string;
    content: string;
}

export interface TranslationMessage {
    success: string;
}

export interface TranslationLabel {
    submit: string;
    enterCurrency: string;
    localizedCurrency: string;
    enterLargeNumber: string;
    localizedNumber: string;
    enterDate: string;
    localizedDate: string;
}

export interface TranslationNumbers {
    currency: TranslationCurrency;
}

export interface TranslationCurrency {
    style: string;
    currency: string;
    currencyDisplay?: string;
}