import {action, observable,} from 'mobx'

import API from '../utils/API'
import QuoteModel from "../models/QuoteModel";

export class RootStore {
    @observable currentQuote

    constructor() {
        this.currentQuote = new QuoteModel()
    }

    static async translateToYoda(text) {
        try {
            return await API.getYodaSaid(text)
        } catch (error) {
            console.log(error);
        }
    }

    @action
    setQuote(q) {
        this.currentQuote.quote = q.quote
        this.currentQuote.author = q.author
        this.currentQuote.category = q.category
        this.currentQuote.yodaQuote = q.yodaQuote
    }

    @action.bound
    async fetchQuote(withYoda) {
        this.setQuote(new QuoteModel())

        try {
            const {data} = await API.getQuote()

            if (data.quote.length > 80) {
                data.quote = data.quote.substr(0, 80) + '...'
            }

            try {
                if (withYoda) {
                    const res = await RootStore.translateToYoda(data.quote)
                    data.yodaQuote = res.data
                    console.log(res.data);
                }
            } catch (e) {
                console.log(e);
                data.yodaQuote = 'Unfortunately  Yoda is out 👀'
            }

            this.setQuote(data)
        } catch (error) {
            console.log(error);
        }
    }
}

export default new RootStore()

