export const formDefaultValues = {
    firstname: '',
    lastname: '',
    email: '',
    password: ''
};

export const inputs = [
    {
        id: 1,
        name: 'firstname',
        type: 'text',
        placeholder: 'Firstname',
        label: 'Firstname',
        errorMessage: 'Firstname is too short or invalid!',
        pattern: '^[A-Za-z]{2,30}$',
        required: true
    },
    {
        id: 2,
        name: 'lastname',
        type: 'text',
        placeholder: 'Lastname',
        label: 'Lastname',
        errorMessage: 'Lastname is too short or invalid!',
        pattern: '^[A-Za-z]{2,30}$',
        required: true
    },
    {
        id: 3,
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        label: 'Email',
        errorMessage: 'It should be a valid email address!',
        pattern: '^[A-Za-z0-9_!#$%&\'*+\\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$',
        required: true
    },
    {
        id: 4,
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        label: 'Password',
        errorMessage: 'Password should be 6-10 characters and include 1 capital letter and 1 number!',
        pattern: '^(?=.*[a-zA-Z])(?=.*\\d)[A-Za-z\\d][A-Za-z\\d!@#$%^&*()_+]{6,10}$',
        required: true
    },
];