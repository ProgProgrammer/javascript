
class SwapiService
{
    _apiBase = 'https://swapi.dev/api';

    async getResource(url)
    {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok)
        {
            throw new Error(`could not fetch ${url}, received ${res.status}`);
        }
        const body = await res.json();
        return body;
    }
    
    async getAllPeople()
    {
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    getPerson(id)
    {
        return this.getResource(`/people/${id}`);
    }

    async getAllPlanets()
    {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    getPlanet(id)
    {
        return this.getResource(`/planets/${id}`);
    }

    async getAllStarShips()
    {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    getStarShip(id)
    {
        return this.getResource(`/starships/${id}`);
    }
}

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
    });