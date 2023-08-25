import { atom } from "recoil";

const SelectedCategory = atom({
	key: "selectedCategory",
	default: {
		'location' : [],
		'theme' : [],
		'duration' : [],
		'all': [],
	},
});

export { SelectedCategory };
