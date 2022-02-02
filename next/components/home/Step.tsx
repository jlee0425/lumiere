import React, { ReactNode } from 'react';

interface Props {
	step: number;
	title: string;
	children: ReactNode;
}

const Step = ({ step, title, children }: Props) => {
	return (
		<div className="flex flex-col mb-10">
			<div className="divider mb-10" />
			<h4 className="text-xl text-stone-700 mb-3">
				Step {step}. {title}
			</h4>
			<div className="text-stone-500">{children}</div>
		</div>
	);
};

export default Step;
