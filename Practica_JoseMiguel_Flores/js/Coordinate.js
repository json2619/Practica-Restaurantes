class Coordinate {
    #latitude
    #longitude

    constructor(latitude, longitude) {
        this.#latitude = latitude;
        this.#longitude = longitude;
    }

    getLatitude() {
        return this.#latitude;
    }

    setLatitude(newLatitude) {
        this.#latitude = newLatitude;
    }

    getLongitude() {
        return this.#longitude;
    }

    setLongitude(newLongitude) {
        this.#longitude = newLongitude;
    }

    toString() {
        return `Latitude: ${this.#latitude}, Longitude: ${this.#longitude}`;
    }
}