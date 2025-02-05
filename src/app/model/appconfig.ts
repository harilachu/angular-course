import { InjectionToken } from "@angular/core";

export interface IAppConfig
{
  url: string;
  port: number;
}

export const APP_CONFIG: IAppConfig = {
  url: 'https://example.com',
  port: 443,
};

//InjectionToken is used to inject using specified unique token identifier
export const CONFIG_TOKEN = new InjectionToken<IAppConfig>('CONFIG_TOKEN',{
  providedIn: 'root', // Specifies that this token should be provided in root module
  factory: () => APP_CONFIG, // Factory function to create and return the APP_CONFIG
});
