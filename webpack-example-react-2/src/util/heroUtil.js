// models
import Hero from './../model/Hero.model'
import PowerStats from "../model/PowerStats.model";

// image utilities
import imageUtil from './imageUtil'

const filteredHeroesByPublisher = (publisher, heroDataArray) =>
    heroDataArray.filter(hero => publisher === hero.publisher);

const parseHeroData =(dataArray = []) =>  dataArray.map( (dataItem) =>
    new Hero(
        dataItem.id,
        dataItem.name,
        new PowerStats(dataItem.powerstats.intelligence, dataItem.powerstats.strength, dataItem.powerstats.speed),
        imageUtil.imageByImageName(dataItem.image),
        dataItem.publisher
    )
);

export default {
    filteredHeroesByPublisher,
    parseHeroData
};
