interface UserInterface {
	name: string;
	age: number;
	email: string,
    address?: UserAddress;
}
type UserAddress = {
  city: string;
  country: string;
};
const mango: UserInterface = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        country: 'USA'
    }
};

const poly:UserInterface = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};




// const mango = {
//     name: 'Mango',
//     age: 30,
//     email: 'john@example.com',
//     address: {
//         city: 'New York',
//         country: 'USA'
//     }
// };

// const poly = {
//     name: 'Mango',
//     age: 30,
//     email: 'john@example.com'
// };