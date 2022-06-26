import React, { ReactNode } from 'react';
import { FiCircle } from 'react-icons/fi';

interface Props {
	step: number;
	title: string;
	children: ReactNode;
}

const Step = ({ step, title, children }: Props) => {
	return (
		<div className="flex flex-col mb-10 mx-auto max-w-2xl">
			<div className="flex items-center h-fit mb-3 text-stone-700">
				<FiCircle
					style={{
						width: '20px',
						marginLeft: '-8px',
						marginRight: '12px',
						marginTop: '4px',
						color: 'rgb(100 116 139 / var(--tw-border-opacity))',
					}}
				/>
				<h4 className="text-xl ">
					{step}. {title}
				</h4>
			</div>
			<div className="text-stone-500 border-l-4 border-l-slate-500 pl-5">
				{children}
			</div>
		</div>
	);
};

export default Step;
