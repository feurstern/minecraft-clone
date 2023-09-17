import { TextureLoader } from 'three'
import { dirt, log, grass, glass, wood } from './index'

const dirtTexture = new TextureLoader().load(dirt);
const logTexture = new TextureLoader().load(log);
const grassTexture = new TextureLoader().load(grass);
const glassTexture = new TextureLoader().load(glass);
const woodTexture = new TextureLoader().load(wood);
const groundTexture = new TextureLoader().load(grass);

export {
    dirtTexture, 
    logTexture, 
    grassTexture, 
    glassTexture, 
    woodTexture, 
    groundTexture
}

