import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

ReactDOM.render(<App />,
    document.getElementById("root"));

/*import { SwapiService } from "services/swapi-service.js";

const swapi = new SwapiService();

swapi.getAllPeople()
    .then((people) =>
    {
        console.log("");
        console.log(`All people:`);
        people.forEach((item) =>
        {
            console.log(item.name);
        });
    });

swapi.getPerson(3)
    .then((person) =>
    {
        console.log(`${person.name} - person.`);
    });

swapi.getAllPlanets()
    .then((people) =>
    {
        console.log("");
        console.log(`All planets:`);
        people.forEach((item) =>
        {
            console.log(item.name);
        });
    });

swapi.getPlanet(3)
    .then((person) =>
    {
        console.log(`${person.name} - planet.`);
    });

swapi.getAllStarShips()
    .then((people) =>
    {
        console.log("");
        console.log(`All StarShips:`);
        people.forEach((item) =>
        {
            console.log(item.name);
        });
    });

swapi.getStarShip(3)
    .then((person) =>
    {
        console.log(`${person.name} - StarShip.`);
    });*/