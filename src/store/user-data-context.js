import React, { useEffect, useState } from 'react';

const UsersDataContext = React.createContext({
	isLoading: false,
	users: [
		{
			id: '',
			name: '',
			username: '',
			phone: '',
			address: '',
			posts: [
				{
					id: '',
					title: '',
					text: ''
				}
			]
		}
	],
});

export const UsersDataContextProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getDataFromApi = async url => {
		try {
			setIsLoading(true);
			const result = await fetch(url);

			if (!result.ok) {
				throw new Error('Something went wrong!');
			};

			const data = await result.json();
			return data;
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		const getPosts = async (userId) => {
			const data = await getDataFromApi(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);

			const posts = data.map(post => (
				{
					id: post.id,
					userId: post.userId,
					title: post.title,
					text: post.body,
				}
			));

			return posts;
		};

		const getUsers = async () => {
			const data = await getDataFromApi('https://jsonplaceholder.typicode.com/users/');

			const transformData = await Promise.all(data.map(async user => (
				{
					id: user.id,
					name: user.name,
					username: user.username,
					phone: user.phone,
					address: user.address,
					posts: await getPosts(user.id)
				}
			)));

			setUsers(transformData);
			setIsLoading(false);
		};
		getUsers();
	}, []);

	return (
		<UsersDataContext.Provider value={
			{
				isLoading,
				users,
			}
		}>
			{children}
		</UsersDataContext.Provider>
	);
};


export default UsersDataContext;