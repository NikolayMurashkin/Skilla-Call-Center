import { SVGProps } from 'react';

export const DocumentsIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<g clipPath='url(#a)'>
			<path
				d='M8 16h8v2H8v-2Zm0-4h8v2H8v-2Zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6Zm4 18H6V4h7v5h5v11Z'
				fill='#fff'
				fillOpacity={0.56}
			/>
		</g>
		<defs>
			<clipPath id='a'>
				<path fill='#fff' d='M0 0h24v24H0z' />
			</clipPath>
		</defs>
	</svg>
);
