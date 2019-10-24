import {request} from '@tarojs/taro'

export default class HttpRequest{
    public static async get (url: string, header?: any){
        const options = {
            method: 'GET' as const,
            url,
            header: {...header},
            dataType: 'json'
        }
        return await request(options)
    }

    public static async post (url: string, body: any, header?: any){
        const options = {
            method: 'POST' as const,
            url,
            header: {...header},
            data: body,
            dataType: 'json'
        }
        return await request(options)
    }


    public static async put (url: string, body: any, header?: any){
        const options = {
            method: 'PUT' as const,
            url,
            header: {...header},
            data: body,
            dataType: 'json'
        }
        return await request(options)
    }

    public static async delete (url: string, body: any, header?: any){
        const options = {
            method: 'DELETE' as const,
            url,
            header: {...header},
            data: body,
            dataType: 'json'
        }
        return await request(options)
    }
}