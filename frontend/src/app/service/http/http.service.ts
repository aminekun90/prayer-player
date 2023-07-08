import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  async get(url:string,axiosOption:AxiosRequestConfig):Promise<any| void>{
    try {
      console.log(url,axiosOption)
      const response = await axios.get(url,axiosOption);
      if([200,201].includes(response.status)){
         return response.data;
      }
     throw new Error("Api Error "+JSON.stringify(response.data));

    } catch (error) {
      console.error(error);
    }
  }
}
