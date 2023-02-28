import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Layout } from './shared/ui/Layout/Layout';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Layout>
			<div>content</div>
		</Layout>
	</React.StrictMode>
);
