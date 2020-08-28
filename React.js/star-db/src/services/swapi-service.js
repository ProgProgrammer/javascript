
export default class SwapiService
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

    _extractId(item)
    {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet(planet)
    {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    }

    _transformPerson(person)
    {
        return {
            id: this._extractId(person),
            name: person.name,
            population: person.population,
            rotationPeriod: person.rotation_period,
            diameter: person.diameter
        };
    }

    _transformStarShip(starship)
    {
        return {
            id: this._extractId(starship),
            name: starship.name,
            population: starship.population,
            rotationPeriod: starship.rotation_period,
            diameter: starship.diameter
        };
    }

    async getAllPeople()
    {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    }

    async getPerson(id)
    {
        const people = await this.getResource(`/people/${id}`);
        return this._transformPerson(people);
    }

    async getAllPlanets()
    {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    async getPlanet(id)
    {
        const planet = await this.getResource(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    async getAllStarShips()
    {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarShip);
    }

    async getStarShip(id)
    {
        const starship = await this.getResource(`/starships/${id}`);
        return this._transformStarShip(starship);
    }
}
