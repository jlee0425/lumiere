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
						title
						desc
						photo {
							asset {
								url
							}
						}
						slug {
							current
						}
						tag {
							tag
						}
					}
				}
			`
		);
		return data;
	});
};
