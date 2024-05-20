export interface ActivityInfo {
    id: string,
    activitys: string,
}

export interface activityRandomizerSliceState {
  data: ActivityInfo[],
  status: "default" | "loading" | "succes" | "error"
  error: any
}
