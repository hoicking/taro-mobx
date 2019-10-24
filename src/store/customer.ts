import { action, observable} from 'mobx'
import HttpRequest from '../util/httpRequest'


export class CustomerStore{
    @observable customer: any[] = []

    @action 
    async queryCustomer (param: string){
        const result = await HttpRequest.post('https://www.baidu.com', {param})
        if(result){
            this.customer = [{name:'aaa'}] 
        }  
    }

}

export default new CustomerStore()