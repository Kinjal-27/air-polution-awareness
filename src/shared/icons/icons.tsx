import { FC } from 'react';

export interface IIconProps {
	width?: string;
	height?: string;
	className?: string;
}

export const Phone = ({ height, width, className }: IIconProps) => {
	return (
		<svg width={width || '24'} height={height || '24'} className={className} viewBox='0 0 122.88 122.27'>
			<g>
				<path d='M33.84,50.25c4.13,7.45,8.89,14.6,15.07,21.12c6.2,6.56,13.91,12.53,23.89,17.63c0.74,0.36,1.44,0.36,2.07,0.11 c0.95-0.36,1.92-1.15,2.87-2.1c0.74-0.74,1.66-1.92,2.62-3.21c3.84-5.05,8.59-11.32,15.3-8.18c0.15,0.07,0.26,0.15,0.41,0.21 l22.38,12.87c0.07,0.04,0.15,0.11,0.21,0.15c2.95,2.03,4.17,5.16,4.2,8.71c0,3.61-1.33,7.67-3.28,11.1 c-2.58,4.53-6.38,7.53-10.76,9.51c-4.17,1.92-8.81,2.95-13.27,3.61c-7,1.03-13.56,0.37-20.27-1.69 c-6.56-2.03-13.17-5.38-20.39-9.84l-0.53-0.34c-3.31-2.07-6.89-4.28-10.4-6.89C31.12,93.32,18.03,79.31,9.5,63.89 C2.35,50.95-1.55,36.98,0.58,23.67c1.18-7.3,4.31-13.94,9.77-18.32c4.76-3.84,11.17-5.94,19.47-5.2c0.95,0.07,1.8,0.62,2.25,1.44 l14.35,24.26c2.1,2.72,2.36,5.42,1.21,8.12c-0.95,2.21-2.87,4.25-5.49,6.15c-0.77,0.66-1.69,1.33-2.66,2.03 c-3.21,2.33-6.86,5.02-5.61,8.18L33.84,50.25L33.84,50.25L33.84,50.25z' />
			</g>
		</svg>
	);
};

export const AgencyIcon = ({ height, width, className }: IIconProps) => {
	return (
		<svg viewBox='0 0 122.88 88.281' width={width || '24'} height={height || '24'} className={className}>
			<g>
				<path d='M9.696,86.664V49.607c-1.972,0.758-3.815,0.774-5.348,0.253 c-1.196-0.405-2.207-1.129-2.948-2.063s-1.213-2.072-1.356-3.327c-0.219-1.946,0.363-4.145,2.022-6.208l0,0 c0.084-0.1,0.177-0.201,0.286-0.286L50.408,0.465c0.623-0.572,1.584-0.631,2.273-0.093l32.235,25.06 c-4.898,1.729-9.118,4.869-11.583,9.428c-9.186-7.384-19.468-15.5-21.41-17.012c-3.865,2.939-37.512,28.846-37.512,29.94v38.893 L9.696,86.664L9.696,86.664L9.696,86.664z M94.703,79.542h0.88c0.798,0,1.448-0.65,1.448-1.449v-2.354 c0-0.798-0.65-1.448-1.448-1.448h-5.245c-0.798,0-1.448,0.65-1.448,1.448v2.354c0,0.799,0.65,1.449,1.448,1.449h0.893l-1.711,8.739 h6.834L94.703,79.542L94.703,79.542L94.703,79.542z M63.041,88.281c0.678-8.813-1.053-8.431,6.332-11.2 c3.682-1.382,8.39-3.132,11.776-5.237l6.325,16.438H63.041L63.041,88.281L63.041,88.281z M85.536,66.786 c0.161-1.355-3.851-6.52-4.581-8.994c-1.569-2.501-2.126-6.465-0.416-9.107c0.684-1.047,0.39-2.918,0.39-4.359 c0-14.366,25.171-14.372,25.171,0c0,1.817-0.417,3.199,0.568,4.628c1.65,2.388,0.799,6.619-0.59,8.839 c-0.892,2.603-5.103,7.518-4.809,8.994C101.518,74.164,85.489,73.915,85.536,66.786L85.536,66.786L85.536,66.786z M105.066,71.085 c3.092,1.979,7.479,3.602,10.985,4.775c6.888,2.3,6.867,2.615,6.821,12.421H98.526L105.066,71.085L105.066,71.085L105.066,71.085z M53.348,46.904v15.15H66.94v-0.042c0-4.177-1.71-7.976-4.463-10.729C60.077,48.883,56.884,47.274,53.348,46.904L53.348,46.904 L53.348,46.904z M53.348,65.255V78.41h1.271c-0.267,0.889-0.411,1.831-0.411,2.807v0.377H33.354V62.005 c0-5.062,2.071-9.661,5.398-12.988c3.335-3.325,7.933-5.397,12.995-5.397l0,0c5.062,0,9.66,2.072,12.986,5.397 c3.336,3.336,5.399,7.935,5.399,12.988v7.206c-1.024,0.181-2.122,0.385-3.192,0.643v-4.599H53.348L53.348,65.255L53.348,65.255z M50.146,78.402V65.255H36.555V78.41h13.592V78.402L50.146,78.402z M50.146,62.055v-15.15c-3.545,0.378-6.729,1.979-9.129,4.379 c-2.754,2.754-4.463,6.553-4.463,10.729v0.042H50.146L50.146,62.055L50.146,62.055z M29.977,85.081h24.23v3.2h-24.23V85.081 L29.977,85.081L29.977,85.081z M78.968,2.991l14.46,0.59v19.531l-14.46-9.542V2.991L78.968,2.991L78.968,2.991L78.968,2.991z' />
			</g>
		</svg>
	);
};

export const Logo = ({ height, width, className }: IIconProps) => {
	return (
		<svg width={width || '100'} height={height || '100'} className={className} viewBox='-45 -25.656 390 153.936'>
			<g fill='#003f5f'>
				<path d='M0 66.575h9.138l14.54 18.676V66.575h9.69v35.335h-8.577L9.694 82.527v19.383H0zm38.223 0h24.243v8.57h-14.55v5.112H60.37v7.723H47.917v5.6h15.766v8.33h-25.46zm135.301 17.769v-.101c0-5.096-3.689-9.538-9.087-9.538-5.352 0-8.94 4.341-8.94 9.437v.1c0 5.1 3.684 9.543 9.037 9.543 5.402 0 8.99-4.342 8.99-9.441m-28.07 0v-.101c0-10.145 8.177-18.373 19.08-18.373 10.906 0 18.983 8.127 18.983 18.272v.1c0 10.15-8.174 18.382-19.08 18.382-10.907 0-18.984-8.132-18.984-18.28m58.173-.808c3.327 0 5.247-1.617 5.247-4.19v-.101c0-2.78-2.017-4.19-5.298-4.19H196.8v8.48zm-16.42-16.963h17.073c5.402 0 9.133 1.415 11.508 3.837 2.072 2.025 3.133 4.746 3.133 8.232v.097c0 5.403-2.884 8.987-7.272 10.852l8.43 12.322h-11.31l-7.117-10.705h-4.653v10.705h-9.791v-35.34zm36.812.002h9.794V80.91l12.17-14.335h11.61l-13.378 15.19 13.829 20.145h-11.757L237.4 88.79l-3.588 3.987v9.134h-9.794z' />
				<path d='M257.344 96.663l5.454-6.514c3.478 2.775 7.365 4.24 11.454 4.24 2.632 0 4.034-.91 4.034-2.421v-.101c0-1.461-1.15-2.274-5.95-3.386-7.521-1.714-13.332-3.832-13.332-11.1v-.101c0-6.565 5.204-11.311 13.686-11.311 6.009 0 10.7 1.617 14.536 4.7l-4.893 6.91c-3.234-2.274-6.767-3.483-9.9-3.483-2.371 0-3.53 1.01-3.53 2.27v.101c0 1.617 1.214 2.324 6.107 3.436 8.136 1.769 13.18 4.388 13.18 11.004v.105c0 7.218-5.706 11.504-14.288 11.504-6.257 0-12.224-1.962-16.558-5.853M88.83 66.575H66.21v8.582h8.372v26.753h9.795V75.157h7.302zm24.22 35.337l6.51-20.091 6.561 20.09h8.123l11.968-35.334h-9.845l-5.98 20.445-6.578-20.445h-8.25l-6.581 20.445-5.971-20.445H92.959l11.972 35.335zM183.6 31.65v-.172C183.6 13.838 197.176 0 215.51 0c12.37 0 20.32 5.188 25.69 12.629l-12.634 9.77c-3.457-4.325-7.432-7.092-13.226-7.092-8.482 0-14.444 7.18-14.444 15.998v.173c0 9.083 5.962 16.17 14.444 16.17 6.312 0 10.026-2.94 13.66-7.348l12.63 8.99c-5.711 7.87-13.409 13.67-26.808 13.67-17.295 0-31.221-13.232-31.221-31.31M83.61 38.136L77.238 19.43l-6.455 18.706zm-13.868-37.1H84.97l22.533 60.968H91.632l-3.483-10.81H66.765l-3.853 10.81H47.21zm97.6.001h-14.874L140.02 36.183 127.74 1.037h-14.873l-10.527 31.49 9.272 25.082 9.442-29.17L132.38 62h15.354l11.323-33.563L170.242 62h17.69zm127.899 96.118h.72l1.677 2.577 1.659-2.577H300v4.7h-.653v-3.6l-1.68 2.547h-.089l-1.663-2.548v3.6h-.674v-4.699zm-3.221.64h-1.512v-.64h3.693v.64h-1.507v4.06h-.674z' />
			</g>
		</svg>
	);
};

export const Search = ({ height, width, className }: IIconProps) => {
	return (
		<svg width={width || '20'} height={height || '20'} className={className || ''} viewBox='0 0 20 20' fill='none'>
			<path
				d='M19.0909 18.0197L14.347 13.2758C15.5792 11.7686 16.1851 9.84552 16.0393 7.90421C15.8934 5.9629 15.007 4.15192 13.5633 2.84585C12.1196 1.53978 10.2292 0.838555 8.28305 0.887215C6.33687 0.935876 4.48385 1.7307 3.10727 3.10728C1.73068 4.48387 0.93586 6.33689 0.8872 8.28306C0.838539 10.2292 1.53977 12.1197 2.84583 13.5633C4.1519 15.007 5.96289 15.8934 7.9042 16.0393C9.84551 16.1851 11.7686 15.5793 13.2757 14.347L18.0197 19.0909L19.0909 18.0197ZM8.48483 14.5455C7.28616 14.5455 6.1144 14.19 5.11774 13.5241C4.12108 12.8581 3.34428 11.9116 2.88556 10.8041C2.42685 9.69671 2.30683 8.47813 2.54068 7.30248C2.77453 6.12684 3.35175 5.04694 4.19934 4.19935C5.04693 3.35176 6.12682 2.77454 7.30247 2.54069C8.47811 2.30685 9.6967 2.42687 10.8041 2.88558C11.9116 3.34429 12.8581 4.12109 13.524 5.11776C14.19 6.11442 14.5454 7.28617 14.5454 8.48485C14.5436 10.0917 13.9045 11.6322 12.7683 12.7684C11.6321 13.9045 10.0917 14.5437 8.48483 14.5455Z'
				fill='#515151'
			/>
		</svg>
	);
};
