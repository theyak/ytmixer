const tracks = [
	{id: "a"},
	{id: "b"},
	{id: "c"}
];
console.log(...tracks);

hmm(...tracks);

function hmm(...tracks) {
	console.log(tracks);
}

