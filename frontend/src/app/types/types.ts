export type Settings = {
  calculationMethods:Array<{
    id:number,
    description:string
  }>,
  api: {
    city: string,
    country: string,
    selectedMethod: number,
    forceDate: Date, // or initialize it with a default date if needed
  },
  device: {
    volume: number // or initialize with a default volume
  },
  playlist: {
    fileName: string
  },
  enableScheduler: boolean
}
