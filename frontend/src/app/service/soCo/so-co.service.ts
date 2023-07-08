import { Injectable } from '@angular/core';
import { HttpService } from '@piPlayer/service/http/http.service';
import { Device } from '@piPlayer/service/soCo/models/device';
import { CONFIG } from '@piPlayer/service/types/types';



@Injectable({
  providedIn: 'root'
})
export class SoCoService {

  constructor(private httpService:HttpService) {
    console.log("Soco service initialized");
  }
  async getSoCoDevices(){
    const devices = await this.httpService.get(`${CONFIG.getSoCoDevice}`,{
      headers:{
        'Content-Type': 'application/json'
      }
    });
    if(devices){
      return (JSON.parse(devices ) as Array<any>).map(device=>Device.fromJson(device));
    }
    return [];
  }
}
