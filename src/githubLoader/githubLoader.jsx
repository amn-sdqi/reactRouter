export const getGithubData = async () => {
	const response = await fetch("https://api.github.com/users/amn-sdqi");
	const data = await response.json();

	return data;
};
