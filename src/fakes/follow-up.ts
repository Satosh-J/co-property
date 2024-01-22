import { FollowUp } from "types"

export const fakeFollowUps : Array<FollowUp> = [
    {
        id: 1,
        title: "New Farm House",
        description: "Business Meeting with CodexCoder group of company of company of company...",
        due_date: new Date("2021/11/1 8:20:20"),
        followType: 'phone',
        property: {
            city: 'New York',
            buildingSize: 5268,
            units: 6,
            landSize: 28
        },
        contactInfo: {
            id: 1,
            firstName: "John",
            lastName: "Smith",
            avatar: "/images/avatar01.jpg",
            description: "Real Estate Agency",
            phone: "+850123124212",
            officePhone: "+850123124212"
        }
    },
    {
        id: 2,
        title: "New Farm House",
        description: "Business Meeting with CodexCoder group of company of company of company...",
        due_date: new Date("2021/11/1 8:20:20"),
        followType: 'email',
        property: {
            city: 'New York',
            buildingSize: 5268,
            units: 6,
            landSize: 28
        },
        contactInfo: {
            id: 2,
            firstName: "John",
            lastName: "Smith",
            avatar: "/images/avatar02.jpg"
        }
    },
    {
        id: 3,
        title: "New Farm House",
        description: "Business Meeting with CodexCoder group of company of company of company...",
        due_date: new Date("2021/11/1 8:20:20"),
        followType: 'phone',
        property: {
            city: 'New York',
            buildingSize: 5268,
            units: 6,
            landSize: 28
        },
        contactInfo: {
            id: 3,
            firstName: "John",
            lastName: "Smith",
            avatar: "/images/avatar03.jpg"
        }
    },
    {
        id: 4,
        title: "New Farm House",
        description: "Business Meeting with CodexCoder group of company of company of company...",
        due_date: new Date("2021/11/1 8:20:20"),
        followType: 'email',
        property: {
            city: 'New York',
            buildingSize: 5268,
            units: 6,
            landSize: 28
        },
        contactInfo: {
            id: 4,
            firstName: "John",
            lastName: "Smith",
            avatar: "/images/avatar04.jpg"
        }
    },
    {
        id: 5,
        title: "New Farm House",
        description: "Business Meeting with CodexCoder group of company of company of company...",
        due_date: new Date("2021/11/1 8:20:20"),
        followType: 'followup',
        property: {
            city: 'New York',
            buildingSize: 5268,
            units: 6,
            landSize: 28
        },
        contactInfo: {
            id: 5,
            firstName: "John",
            lastName: "Smith",
            avatar: "/images/avatar05.jpg"
        }
    },
    {
        id: 6,
        title: "New Farm House",
        description: "Business Meeting with CodexCoder group of company of company of company...",
        due_date: new Date("2021/11/1 8:20:20"),
        followType: 'sms',
        property: {
            city: 'New York',
            buildingSize: 5268,
            units: 6,
            landSize: 28
        },
        contactInfo: {
            id: 6,
            firstName: "John",
            lastName: "Smith",
            avatar: "/images/avatar05.jpg"
        }
    },
]