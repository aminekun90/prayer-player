export enum NotificationType {
  info="info",
  success="success",
  error="error",
  warning="warning",
}

export interface Notification {
  title: string;
  text: string;
  type: NotificationType;
  timeout:number;
}
