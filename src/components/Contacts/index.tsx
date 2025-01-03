import React from "react";

export const Contacts: React.FC = () => {
    return (
        <div>
            <h1>Contact page</h1>
            <ul>
                <li key={1}>Phone: 88005553535</li>
                <li key={2}>Email: support-center@gmail.com</li>
                <li key={3}>Address: Japan, Shibuya</li>
                <li key={4}>Time: 20:31</li>
            </ul>
        </div>
    )
}