/* FILEPATH: /Users/adityasugandhi/Documents/GitHub/Portfolio/Styles/Navbar.css */
import React from "react";
import { StyleSheet } from "react-native";

const Navbar = () => {
. {
    background-color: #f8f8f8;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.navbar-brand {
    font-size: 20px;
    font-weight: bold;
    color: #333;
}

.navbar-nav {
    list-style: none;
    display: flex;
}

.navbar-nav li {
    margin-right: 10px;
}

.navbar-nav li a {
    text-decoration: none;
    color: #333;
    font-size: 16px;
}

.navbar-nav li a:hover {
    color: #666;
}
};
