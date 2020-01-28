const express = require("express");
const path = require("path");

const members = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gamil.com",
    status: "active"
  },
  {
    id: 2,
    name: "Bob Williams",
    email: "bob@gamil.com",
    status: "inactive"
  },
  {
    id: 3,
    name: "Shannon Jackson",
    email: "shannon@gamil.com",
    status: "active"
  }
];

module.exports = members;
