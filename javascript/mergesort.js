function mergeSort(list) {
	if(list.length === 1) {
		return list;
	}

	const middle = Math.floor(list.length / 2)
	const arrayLeft = list.slice(0, middle);
	const arrayRight = list.slice(middle);

	console.log(arrayLeft, arrayRight);

	return merge(
		mergeSort(arrayLeft),
		mergeSort(arrayRight)
	);
};

function merge(left, right) {
	let result = [];
	let indexLeft = 0;
	let indexRight = 0;

	while(indexLeft < left.length && indexRight < right.length) {
		if(left[indexLeft] < right[indexRight]) {
			result.push(left[indexLeft]);
			indexLeft++;
		} else {
			result.push(right[indexRight]);
			indexRight++;
		}
	}

	return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
};

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log('unsorted list: ', list);
console.log('sorted list: ', mergeSort(list));
