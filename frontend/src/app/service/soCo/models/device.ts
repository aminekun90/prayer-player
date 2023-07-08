export class Device {
  private name: string;
  private ip?: string;
  private currentlyPlayingTitle: {
    title?:string,
  };
  private isPlaying: boolean;
  private volume: number;
  private rawAttributes:any;
  constructor(name: string = "", ip?: string) {
    this.name = name;
    this.ip = ip;
    this.currentlyPlayingTitle = {};
    this.isPlaying = false;
    this.volume = 0;
    this.rawAttributes= {};
  }

  setVolume(volume: number): void {
    this.volume = volume;
  }
  getVolume(): number {
    return this.volume;
  }
  getName(): string {
    return this.name;
  }

  getIp(): string | undefined {
    return this.ip;
  }

  getPlayingTitle():{title:string} {
    return {title:this.currentlyPlayingTitle.title??""}??{title:""};
  }

  setPlayingTitle(playingTitle: object):void {
    this.currentlyPlayingTitle = playingTitle;
  }

  isCurrentlyPlaying():boolean {
    return this.isPlaying;
  }
  getRawAttributes(){
    return this.rawAttributes;
  }
  static fromJson(jsonObj:any): Device {

    let device = new Device(jsonObj.name, jsonObj.ip_adress);
    device.setPlayingTitle(jsonObj.track_info);
    device.setVolume(jsonObj.volume);
    device.rawAttributes = jsonObj;
    return device;
  }
}
