import { SVGProps } from 'react';

export const ResutsIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			d='m3 14 .5.07L8.07 9.5a1.95 1.95 0 0 1 .52-1.91c.78-.79 2.04-.79 2.82 0 .53.52.7 1.26.52 1.91l2.57 2.57.5-.07c.18 0 .35 0 .5.07l3.57-3.57C19 8.35 19 8.18 19 8a2 2 0 1 1 2 2c-.18 0-.35 0-.5-.07l-3.57 3.57c.07.15.07.32.07.5a2 2 0 0 1-4 0l.07-.5-2.57-2.57c-.32.07-.68.07-1 0L4.93 15.5 5 16a2 2 0 1 1-2-2Z'
			fill='#fff'
			fillOpacity={0.6}
		/>
	</svg>
);