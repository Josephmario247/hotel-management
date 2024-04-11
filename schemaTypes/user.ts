
import { defineField } from "sanity";

const user = {
    name: "user",
    title: "user",
    type: "document",
    fields: [
        defineField({
            name: "isAdmin",
            title: "Is admin?",
            type: "boolean",
            description: "Check if the user is admin",
            initialValue: false,
            validation: (Rule) => Rule.required(),
            // readOnly: true,
            // hidden: true,
        }),
        defineField({
            name: "name",
            title: "name",
            type: "string",
            description: "The users full name",
            readOnly: true,
            validation: (Rule) => Rule.required(),

        }),
        defineField({
            name: "image",
            title: "image",
            type: "url",

        }),
        defineField({
            name: "password",
            type: "string",
            hidden: true,
        }),
        defineField({
            name: "email",
            title: "Email",
            type: "string",
        
        }),
        defineField({
            name: "emailVerified",
            type: "datetime",
            hidden: true,
        
        }),
        defineField({
            name: "about",
            title: "about",
            type: "text",
            description: "A short bio about the user"
        })

    ]
}
export default user;