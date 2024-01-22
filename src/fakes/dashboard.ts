import { Task, Place, Activity } from "types"

export const fakeTasks : Array<Task> = [
    {
        id: 1,
        title: "Client Proposal Ready As Soon As Possible",
        description: "Business Meeting with CodexCoder group of company of company of company...",
        priority: "high",
        start_date: new Date("2021/11/1 7:20:20"),
        due_date: new Date("2021/11/1 8:20:20")
    },
    {
        id: 2,
        title: "Client Proposal Ready As Soon As Possible",
        description: "Business Meeting with CodexCoder group of company of company of company...",
        priority: "medium",
        start_date: new Date("2021/11/1 9:15:00"),
        due_date: new Date("2021/11/1 9:30:00")
    },
    {
        id: 3,
        title: "Client Proposal Ready As Soon As Possible",
        description: "Business Meeting with CodexCoder group of company of company of company...",
        priority: "low",
        start_date: new Date("2021/11/1 17:15:00"),
        due_date: new Date("2021/11/1 18:30:00")
    },
]

export const fakeVisits : Array<Place> = [
    {
        address: '223 32nd Street Newport Beach, CA 92663',
        image: '/images/sample-property.jpg'
    },
    {
        address: '223 32nd Street Newport Beach, CA 92663',
        image: '/images/sample-property.jpg'
    },
    {
        address: '223 32nd Street Newport Beach, CA 92663',
        image: '/images/sample-property.jpg'
    },
    {
        address: '223 32nd Street Newport Beach, CA 92663',
        image: '/images/sample-property.jpg'
    }
]

export const fakeLinks : Array<Place> = [
    {
        address: '223 32nd Street Newport Beach, CA 92663',
        image: '/images/sample-property.jpg'
    },
    {
        address: '223 32nd Street Newport Beach, CA 92663',
        image: '/images/sample-property.jpg'
    },
    {
        address: '223 32nd Street Newport Beach, CA 92663',
        image: '/images/sample-property.jpg'
    },
    {
        address: '223 32nd Street Newport Beach, CA 92663',
        image: '/images/sample-property.jpg'
    },
    {
        address: '223 32nd Street Newport Beach, CA 92663',
        image: '/images/sample-property.jpg'
    },
    {
        address: '223 32nd Street Newport Beach, CA 92663',
        image: '/images/sample-property.jpg'
    },
    {
        address: '223 32nd Street Newport Beach, CA 92663',
        image: '/images/sample-property.jpg'
    }
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