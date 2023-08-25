import { atom } from "recoil";

const SelectedCategory = atom({
	key: "selectedCategory",
	default: [],
});

export { SelectedCategory };
