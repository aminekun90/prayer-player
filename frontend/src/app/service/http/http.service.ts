import { Injectable } from '@angular/core';
import axios, { AxiosRequestConfig } from 'axios';
import { CONFIG } from '../types/types';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  async get(url:string,axiosOption:AxiosRequestConfig):Promise<any| void>{
    try {
      const { protocol, hostname } = window.location;
      CONFIG.apiURL = `${protocol}//${hostname}`+':8000/';
      console.log(CONFIG.apiURL)
      const response = await axios.get(CONFIG.apiURL+url,axiosOption);
      if([200,201].includes(response.status)){
         return response.data;
      }
     throw new Error("Api Error "+JSON.stringify(response.data));

    } catch (error) {
      console.error(error);
    }
  }
}
