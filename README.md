# Node Hotel Application

The Node Hotel application is a Node.js-based system designed to manage information related to staff (persons) and menu items for a hotel. Built using the Express.js framework and MongoDB for the database, this application provides endpoints to handle CRUD (Create, Read, Update, Delete) operations for both persons and menu items.

## Table of Contents

1. [Features](#features)
2. [Endpoints](#endpoints)
   - [Persons](#persons)
   - [Menu Items](#menu-items)
3. [Data Models](#data-models)
   - [Person](#person)
   - [Menu Item](#menu-item)
4. [Installation](#installation)
5. [Usage](#usage)
6. [License](#license)

## Features

- **Person Management:** Add, retrieve, update, and delete staff members.
- **Menu Item Management:** Add, retrieve, update, and delete menu items.
- **Filtering:** Retrieve persons by work type and menu items by taste.

## Endpoints

### Persons

- **Add a Person**
  - `POST /person`
  - Description: Adds a person to the system with details such as name, role, etc.

- **Get All Persons**
  - `GET /person`
  - Description: Retrieves a list of all persons in the system.

- **Get Persons by Work Type**
  - `GET /person/:workType`
  - Description: Retrieves a list of persons based on their work type (e.g., chef, waiter, manager).

- **Update a Person**
  - `PUT /person/:id`
  - Description: Updates the details of a specific person identified by their ID.

- **Delete a Person**
  - `DELETE /person/:id`
  - Description: Deletes a person from the system based on their ID.

### Menu Items

- **Add a Menu Item**
  - `POST /menu`
  - Description: Adds a menu item to the system with details such as name, price, taste, etc.

- **Get All Menu Items**
  - `GET /menu`
  - Description: Retrieves a list of all menu items in the system.

- **Get Menu Items by Taste**
  - `GET /menu/:taste`
  - Description: Retrieves a list of menu items based on their taste (e.g., sweet, spicy, sour).

- **Update a Menu Item**
  - `PUT /menu/:id`
  - Description: Updates the details of a specific menu item identified by its ID.

- **Delete a Menu Item**
  - `DELETE /menu/:id`
  - Description: Deletes a menu item from the system based on its ID.

## Data Models

### Person

The Person data model represents information about staff members in the hotel.

- **Fields:**
  - `name`: String (Person's name)
  - `age`: Number (Person's age)
  - `work`: Enum (Role in the hotel, such as chef, waiter, manager)
  - `mobile`: String (Person's mobile number)
  - `email`: String (Person's email address, unique)
  - `address`: String (Person's address)
  - `salary`: Number (Person's salary)

- **Example:**
  ```json
  {
    "name": "John Doe",
    "age": 30,
    "work": "waiter",
    "mobile": "123-456-7890",
    "email": "john@example.com",
    "address": "123 Main Street",
    "salary": 30000
  }
  ```

### Menu Item

The MenuItem data model represents information about menu items available in the hotel.

- **Fields:**
  - `name`: String (Item's name)
  - `price`: Number (Item's price)
  - `taste`: Enum (Item's taste, such as sweet, spicy, sour)
  - `is_drink`: Boolean (Indicates if the item is a drink, default is false)
  - `ingredients`: Array of Strings (List of ingredients, default is an empty array)
  - `num_sales`: Number (Number of sales for the item, default is 0)

- **Example:**
  ```json
  {
    "name": "Spicy Chicken Curry",
    "price": 12.99,
    "taste": "spicy",
    "is_drink": false,
    "ingredients": ["chicken", "spices", "vegetables"],
    "num_sales": 50
  }
  ```

## Installation

To set up the Node Hotel application, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/node-hotel-application.git
   ```
2. Navigate to the project directory:
   ```bash
   cd node-hotel-application
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```
   The server will start on `http://localhost:3000` by default.

2. Use tools like Postman or cURL to interact with the endpoints.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
