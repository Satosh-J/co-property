export type TYPE_SIZE = "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | undefined;
export type EVENT_REPEAT = "daily" | "weekly" | "monthly" | undefined;
export type FOLLOW_DURATION = 5 | 10 | 15 | 30 | 60 | 1440;
export type PRIORITY = "high" | "medium" | "low";
export type FOLLOW_TYPE = "phone" | "email" | "sms" | "followup";
export type CONTACT_TAG = "seller" | "buyer" | "both" | "n/a";
export type CONTACT_STATUS = "hot" | "medium" | "cold";
export type CONTACT_INDIV_STATUS = "no-connect" | "build-relation" | "connect-made" | "listing-opt" | "listing";


interface MapTitle {
    [key: string]: string
}

export const EVENT_REPEAT_TITLE : MapTitle = {
    "daily" : "Daily",
    "weekly" : "Weekly",
    "monthly" : "Monthly",
}
export const PRIORITY_TITLE : MapTitle = {
    "high" : "High",
    "medium" : "Medium",
    "low" : "Low",
}
export const ACTION_TITLE : MapTitle = {
    "phone" : "Phone Call",
    "email" : "Send Email",
    "sms" : "Text Message",
    "followup" : "Follow Ups",
}
export const CONTACT_TAG_TITLE : MapTitle = {
    "seller" : "Seller",
    "buyer" : "Buyer",
    "both" : "Both",
    "n/a" : "N/A"
}
export const CONTACT_STATUS_TITLE : MapTitle = {
    "hot" : "Hot",
    "medium" : "Medium",
    "cold" : "Cold",
}
export const CONTACT_INDIV_STATUS_TITLE : MapTitle = {
    "no-connect" : "No Connection Made",
    "build-relation" : "Building Relationship",
    "connect-made" : "Connection Made",
    "listing-opt" : "Listing Opportunity",
    "listing" : "Listing",
}

export interface Task {
    id: string | number,
    title: string,
    description?: string,
    start_date: Date | string,
    due_date: Date | string,
    priority: PRIORITY
}

export interface Place {
    address: string,
    image?: string,
}

export interface Activity {
    type: string,
    title: string,
    description: string,
    date: Date | string,
}

export interface Note {
    title: string,
    description: string,
    date: Date | string,
}

export enum CalendarViewMode {
    DAY = 0,
    WEEK,
    MONTH
}

export interface ContactInfo {
    id: string | number,
    firstName: string,
    lastName: string,
    avatar: string,
    description?: string,
    phone?: string,
    officePhone?: string,
    email?: string,
    tag?: CONTACT_TAG,
    status?: CONTACT_STATUS
}

export interface PropertyInfo {
    title?: string
    image?: string,
    city: string,
    buildingSize: number | string,
    units: number | string,
    landSize: number | string,
}

export interface FollowUp {
    id: string | number,
    title: string,
    description: string,
    property: PropertyInfo,
    followType: FOLLOW_TYPE,
    contactInfo: ContactInfo,
    due_date: Date | string,
}
