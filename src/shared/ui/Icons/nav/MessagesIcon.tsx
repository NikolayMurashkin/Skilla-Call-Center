import { SVGProps } from 'react';

export const MessagesIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<g clipPath='url(#a)'>
			<path
				d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 14H4V8l8 5 8-5v10Zm-8-7L4 6h16l-8 5Z'
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
