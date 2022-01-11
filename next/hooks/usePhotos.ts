import { useQuery } from 'react-query';
import { request, gql } from 'graphql-request';
import { endpoint } from '../constants';

export const usePhotos = (tags?: string[]) => {
	return useQuery('photos', async () => {
		const data = await request(
			endpoint,
			gql`
				query {
					allPhoto {
						photo
						title
						slug
						tag
					}
				}
			`
		);
		return data;
	});
};
