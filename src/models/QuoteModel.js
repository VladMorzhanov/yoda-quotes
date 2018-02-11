import {observable} from 'mobx';

export default class QuoteModel {
    @observable quote;
    @observable yodaQuote;
    @observable author;
    @observable source;

    constructor(quote, yodaQuote, author, source) {
        this.quote = quote || '';
        this.yodaQuote = yodaQuote || '';
        this.author = author || '';
        this.source = source || '';
    }
}
