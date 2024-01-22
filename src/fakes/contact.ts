import { ContactInfo, PropertyInfo, Activity, Note } from "types"

export const fakeContacts : Array<ContactInfo> = [
    {
        id: 1,
        firstName: "John",
        lastName: "Smith",
        avatar: "/images/avatar01.jpg",
        description: "Real Estate Agency",
        phone: "+850123124212",
        officePhone: "+850123124212",
        email: "test@gmail.com",
        tag: 'both',
        status: 'hot',
    },
    {
        id: 2,
        firstName: "John",
        lastName: "Smith",
        description: "Real Estate Agency",
        phone: "+850123124212",
        officePhone: "+850123124212",
        avatar: "/images/avatar02.jpg",        
        tag: 'buyer',
        status: 'cold',
    },
    {
        id: 3,
        firstName: "John",
        lastName: "Smith",
        description: "Real Estate Agency",
        phone: "+850123124212",
        officePhone: "+850123124212",
        avatar: "/images/avatar03.jpg",
        tag: 'both',
        status: 'medium',
    },
    {
        id: 4,
        firstName: "John",
        lastName: "Smith",
        avatar: "/images/avatar04.jpg",
        tag: 'seller',
        status: 'hot',
    },
    {
        id: 5,
        firstName: "John",
        lastName: "Smith",
        avatar: "/images/avatar05.jpg"
    },
    {
        id: 6,
        firstName: "John",
        lastName: "Smith",
        avatar: "/images/avatar05.jpg",
        tag: 'seller',
        status: 'cold',
    },
]


export const fakeContactProperties : Array<PropertyInfo> = [
    {
        title: "New Farm House",
        image: "/images/sample-property.jpg",
        city: "New York",
        buildingSize: 5392,
        units: 6,
        landSize: 20
    },
    {
        title: "New Farm House",
        image: "/images/sample-property2.jpg",
        city: "New York",
        buildingSize: 5392,
        units: 6,
        landSize: 20
    },
    {
        title: "New Farm House",
        image: "/images/sample-property3.jpg",
        city: "New York",
        buildingSize: 5392,
        units: 6,
        landSize: 20
    },
    {
        title: "New Farm House",
        image: "/images/sample-property.jpg",
        city: "New York",
        buildingSize: 5392,
        units: 6,
        landSize: 20
    },
    {
        title: "New Farm House",
        image: "/images/sample-property3.jpg",
        city: "New York",
        buildingSize: 5392,
        units: 6,
        landSize: 20
    },
    {
        title: "New Farm House",
        image: "/images/sample-property.jpg",
        city: "New York",
        buildingSize: 5392,
        units: 6,
        landSize: 20
    },
    {
        title: "New Farm House",
        image: "/images/sample-property2.jpg",
        city: "New York",
        buildingSize: 5392,
        units: 6,
        landSize: 20
    },
    {
        title: "New Farm House",
        image: "/images/sample-property3.jpg",
        city: "New York",
        buildingSize: 5392,
        units: 6,
        landSize: 20
    },
    {
        title: "New Farm House",
        image: "/images/sample-property.jpg",
        city: "New York",
        buildingSize: 5392,
        units: 6,
        landSize: 20
    },
]

export const fakeActivities : Array<Activity> = [
    {
        type: 'email',
        title: 'Text Here Description',
        description: 'Description for Activity Description for Activity Description for Activity',
        date: '2021/12/20 8:20:20',
    },
    {
        type: 'email',
        title: 'Text Here Description',
        description: 'Description for Activity',
        date: '2021/12/20 8:20:20',
    },
    {
        type: 'email',
        title: 'Text Here Description',
        description: 'Description for Activity Description for Activity Description for Activity',
        date: '2021/12/20 8:20:20',
    },
    {
        type: 'email',
        title: 'Text Here Description',
        description: 'Description for Activity Description for Activity Description for Activity',
        date: '2021/12/20 8:20:20',
    },
    {
        type: 'email',
        title: 'Text Here Description',
        description: 'Description for Activity Description for Activity Description for Activity',
        date: '2021/12/20 8:20:20',
    }
]

export const fakeNotes : Array<Note> = [
    {
        title: 'Send Direct Email',
        description: 'Property is situated for a new development and there is a new construciton down the block making it prime for development',
        date: '2021/12/20 8:20:20',
    },
    {
        title: 'Text Here Description',
        description: 'Description for Activity',
        date: '2021/12/20 8:20:20',
    },
    {
        title: 'Text Here Description',
        description: 'Description for Activity Description for Activity Description for Activity',
        date: '2021/12/20 8:20:20',
    },
    {
        title: 'Text Here Description',
        description: 'Description for Activity Description for Activity Description for Activity',
        date: '2021/12/20 8:20:20',
    },
    {
        title: 'Text Here Description',
        description: 'Description for Activity Description for Activity Description for Activity',
        date: '2021/12/20 8:20:20',
    }
]