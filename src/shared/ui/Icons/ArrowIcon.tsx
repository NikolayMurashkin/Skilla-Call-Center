import { SVGProps } from 'react';

export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={12}
		height={8}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			opacity={0.8}
			d='M1.41.59 6 5.17 10.59.59 12 2 6 8 0 2 1.41.59Z'
			fill='#ADBFDF'
		/>
	</svg>
);