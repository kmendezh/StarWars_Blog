// State definition
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			planetsArray: [],

			peopleArray: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getPeopleFetch: async () => {
				// Define initial amount of items to retrieve and page
				let page = "1";
				let limit = "6";
				let limitLength = 6;
				// URLs of the SWAPI
				let urlStringPeople = "https://www.swapi.tech/api/people/";

				// GET Request Header
				let requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				// Get Store
				const store = getStore();
				let tmpArray = store.peopleArray;
				let tmpUrl = "";
				for (let i = 0; i < limitLength; i++) {
					tmpUrl = urlStringPeople + (i + 1).toString();
					console.log(tmpUrl);
					await fetch(tmpUrl, requestOptions)
						.then(response => response.json())
						.then(result => {
							tmpArray.push(result);
						})
						.catch(error => console.log("error", error));
				}

				//reset the global store
				console.log(tmpArray);
				setStore({ tmpArray: tmpArray });
			},

			getPlanetFetch: async () => {
				// Define initial amount of items to retrieve and page
				let page = "1";
				let limit = "6";
				let limitLength = 6;
				// URLs of the SWAPI
				let urlStringPlanet = "https://www.swapi.tech/api/planets/";

				// GET Request Header
				let requestOptions = {
					method: "GET",
					redirect: "follow"
				};

				// Get Store
				const store = getStore();
				let tmpArray = store.planetsArray;
				let tmpUrl = "";
				for (let i = 0; i < limitLength; i++) {
					tmpUrl = urlStringPlanet + (i + 1).toString();
					console.log(tmpUrl);
					await fetch(tmpUrl, requestOptions)
						.then(response => response.json())
						.then(result => {
							tmpArray.push(result);
						})
						.catch(error => console.log("error", error));
				}

				//reset the global store
				console.log(tmpArray);
				setStore({ tmpArray: tmpArray });
			}
		}
	};
};

export default getState;
