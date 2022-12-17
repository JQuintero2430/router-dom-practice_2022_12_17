export const items = [
    {id:'0', name: 'Marcos', telephone: '111 2233', favorite: false },
    {id:'1', name: 'Jhon', telephone: '333 4455', favorite: true },
];

export function getContact(id){
    return items.find((item) => item.id === id);
};