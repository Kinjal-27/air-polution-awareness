import { IAuthState } from 'features/auth/interface/auth';

export interface IState {
	loading: ILoadingState;
	auth: IAuthState;
}

export interface ILoadingState {
	api: {
		[key: string]: boolean;
	};
}

export interface IAction {
	type: string;
	payload: any;
}

export interface IAirPollutionData {
	id: number;
	location: string;
	latitude: number;
	longitude: number;
	pm25: number;
	co: number;
	severity: string;
	sensor_name: string;
	sensor_type: string;
	installation_date: string;
	temperature: number;
	description: string;
}
