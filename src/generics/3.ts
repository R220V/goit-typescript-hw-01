//// function merge<T, P>(objA: T, objB: P): T & P {
//// 	return Object.assign({}, objA, objB);
////   }

function merge<T extends object, P extends object>(objA: T, objB: P): T & P {
	return Object.assign({}, objA, objB);
}

	const objA ={ name: 'Max'}
	const objB ={age: 20 }

	const mergedObject(objA, objB);

	console.log(mergedObject); //*{name: 'Max', age: 20}

	
//   У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.



// function merge (objA, objB) {
//   return Object.assign(objA, objB);
// }