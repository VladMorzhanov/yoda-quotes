import {action, observable,} from 'mobx'

import API from '../utils/API'

export class RootStore {
    @observable currentQuote

    @action
    setQuote(q) {
        this.currentQuote.quote = q.quote
        this.currentQuote.author = q.author
        this.currentQuote.category = q.category
        this.currentQuote.yoda = q.yoda
    }

    @action.bound
    async fetchQuote(withYoda) {
        try {
            const response = await API.getQuote()

            if (withYoda) {
                response.yoda = await RootStore.translateToYoda(response.quote)
            }

            this.setQuote(response)
        } catch (error) {
            console.log(error);
        }
    }

    static async translateToYoda(text) {
        try {
            return await API.getYodaSaid(text)
        } catch (error) {
            console.log(error);
        }
    }
}

export default RootStore

