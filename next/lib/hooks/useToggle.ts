import { useCallback, useState } from 'react';

const useToggle = (init = false) => {
	const [state, setState] = useState(init);

	const handleToggle = useCallback((newState?: boolean) => {
		setState((prev) => newState ?? !prev);
	}, []);

	return [state, handleToggle] as const;
};

export default useToggle;
